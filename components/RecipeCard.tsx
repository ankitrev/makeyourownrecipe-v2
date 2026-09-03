"use client";

import type { Recipe } from "@/data/recipes";
import { RecipeIcon } from "@/components/RecipeIcon";

type RecipeCardProps = {
  recipe: Recipe;
  bestMatch?: boolean;
  selected?: boolean;
  onOpen: (recipe: Recipe) => void;
};

export function RecipeCard({
  recipe,
  bestMatch = false,
  selected = false,
  onOpen
}: RecipeCardProps) {
  return (
    <article className={`recipe-card ${bestMatch ? "best-match" : ""}`}>
      {bestMatch && <div className="best-label">BEST MATCH</div>}

      <div className="recipe-top">
        <RecipeIcon />
        <span className="difficulty">{recipe.difficulty}</span>
      </div>

      <h3>{recipe.title}</h3>
      <p className="recipe-description">{recipe.description}</p>

      <div className="recipe-meta">
        <span>◷ {recipe.time}</span>
        <span>•</span>
        <span>{recipe.difficulty}</span>
        <span>•</span>
        <span>{recipe.mood}</span>
      </div>

      <div className="ingredient-tags">
        {recipe.staples.slice(0, 4).map((ingredient) => (
          <span key={ingredient}>{ingredient}</span>
        ))}
      </div>

      <button
        className={`cook-button ${selected ? "cooking" : ""}`}
        onClick={() => onOpen(recipe)}
      >
        {selected ? "Cooking this tonight ✓" : "I'm cooking this"}
        {!selected && <span aria-hidden="true">→</span>}
      </button>
    </article>
  );
}
