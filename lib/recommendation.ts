import type { Recipe, Situation } from "@/data/recipes";

export type RecommendationInput = {
  time: 15 | 30 | 45;
  situation: Situation;
  ingredients: string[];
  excludedIds?: string[];
};

const moodBySituation: Record<Situation, string | null> = {
  tired: "I'm tired",
  healthy: "Something healthy",
  comfort: "Comfort food",
  anything: null
};

const normalize = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, " ");

const aliases: Record<string, string[]> = {
  potato: ["potatoes", "aloo"],
  tomato: ["tomatoes"],
  onion: ["onions"],
  paneer: ["cottage cheese"],
  eggs: ["egg"],
  egg: ["eggs"],
  rice: ["basmati rice"]
};

export function ingredientMatches(left: string, right: string) {
  const a = normalize(left);
  const b = normalize(right);

  if (!a || !b) return false;
  if (a === b || a.includes(b) || b.includes(a)) return true;

  for (const [canonical, variants] of Object.entries(aliases)) {
    const all = [canonical, ...variants].map(normalize);
    if (all.some((item) => item === a) && all.some((item) => item === b)) {
      return true;
    }
  }

  return false;
}

function selectedTags(ingredients: string[]) {
  return ingredients.map(normalize).filter(Boolean);
}

function stapleMatchesTag(staple: string, tag: string) {
  return ingredientMatches(staple, tag);
}

function recipeHasStaple(recipe: Recipe, tag: string) {
  return recipe.staples.some((staple) => stapleMatchesTag(staple, tag));
}

function stapleOverlap(recipe: Recipe, tags: string[]) {
  return tags.filter((tag) => recipeHasStaple(recipe, tag)).length;
}

function parsedMinutes(recipe: Recipe) {
  const fromLabel = Number.parseInt(recipe.time, 10);
  if (Number.isFinite(fromLabel)) return fromLabel;
  if (recipe.timeCategory === "45+") return 45;
  return recipe.estimatedTime || Number.parseInt(recipe.timeCategory, 10) || 0;
}

function matchesTime(recipe: Recipe, time: 15 | 30 | 45) {
  const minutes = parsedMinutes(recipe);

  if (time === 15) {
    return recipe.timeCategory === "15" || minutes <= 15;
  }

  if (time === 30) {
    return recipe.timeCategory === "30" || minutes <= 30;
  }

  return recipe.timeCategory === "45+" || minutes >= 40;
}

function matchesMood(recipe: Recipe, situation: Situation) {
  const mood = moodBySituation[situation];
  if (!mood) return true;
  return recipe.mood === mood;
}

function rankRecipes(recipes: Recipe[], input: RecommendationInput, tags: string[]) {
  return [...recipes].sort((a, b) => {
    const overlapDelta = stapleOverlap(b, tags) - stapleOverlap(a, tags);
    if (overlapDelta !== 0) return overlapDelta;

    const moodDelta =
      Number(matchesMood(b, input.situation)) - Number(matchesMood(a, input.situation));
    if (moodDelta !== 0) return moodDelta;

    const timeDelta =
      Number(matchesTime(b, input.time)) - Number(matchesTime(a, input.time));
    if (timeDelta !== 0) return timeDelta;

    if (input.time === 45) {
      return parsedMinutes(b) - parsedMinutes(a);
    }

    return parsedMinutes(a) - parsedMinutes(b);
  });
}

function uniqueById(list: Recipe[]) {
  const seen = new Set<string>();
  return list.filter((recipe) => {
    if (seen.has(recipe.id)) return false;
    seen.add(recipe.id);
    return true;
  });
}

export function filterRecipes(recipes: Recipe[], input: RecommendationInput) {
  const tags = selectedTags(input.ingredients);
  let pool = recipes;

  if (tags.length > 0) {
    pool = pool.filter((recipe) => stapleOverlap(recipe, tags) > 0);
  }

  const withTimeAndMood = pool.filter(
    (recipe) => matchesTime(recipe, input.time) && matchesMood(recipe, input.situation)
  );
  const withTime = pool.filter((recipe) => matchesTime(recipe, input.time));

  if (input.time === 45) {
    const longestRest = [...pool]
      .filter((recipe) => !withTime.some((item) => item.id === recipe.id))
      .sort((a, b) => parsedMinutes(b) - parsedMinutes(a));

    return uniqueById([
      ...rankRecipes(withTimeAndMood, input, tags),
      ...rankRecipes(withTime, input, tags),
      ...rankRecipes(longestRest, input, tags)
    ]);
  }

  if (withTime.length > 0) {
    return uniqueById([
      ...rankRecipes(withTimeAndMood, input, tags),
      ...rankRecipes(withTime, input, tags)
    ]);
  }

  return rankRecipes(pool, input, tags);
}

export function recommendRecipes(
  recipes: Recipe[],
  input: RecommendationInput
) {
  const excluded = new Set(input.excludedIds ?? []);
  return filterRecipes(recipes, input).filter((recipe) => !excluded.has(recipe.id));
}

export function pickNextThree(pool: Recipe[], currentIds: string[]) {
  if (pool.length <= 3) return pool.slice(0, 3);

  const current = new Set(currentIds);
  const indexes = currentIds
    .map((id) => pool.findIndex((recipe) => recipe.id === id))
    .filter((index) => index >= 0);
  const start = indexes.length > 0 ? (Math.max(...indexes) + 1) % pool.length : 0;

  const next: Recipe[] = [];
  for (let step = 0; step < pool.length && next.length < 3; step += 1) {
    const recipe = pool[(start + step) % pool.length];
    if (current.has(recipe.id)) continue;
    next.push(recipe);
  }

  return next;
}
