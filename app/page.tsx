"use client";

import { useState } from "react";
import { DecisionForm } from "@/components/DecisionForm";
import { RecipeDrawer } from "@/components/RecipeDrawer";
import { Results } from "@/components/Results";
import { recipes, type Recipe } from "@/data/recipes";
import { trackEvent } from "@/lib/analytics";
import {
  filterRecipes,
  pickNextThree,
  type RecommendationInput
} from "@/lib/recommendation";

type Feedback = "loved" | "good" | "bad";

export default function Home() {
  const [results, setResults] = useState<Recipe[]>([]);
  const [lastInput, setLastInput] = useState<RecommendationInput | null>(null);
  const [openRecipe, setOpenRecipe] = useState<Recipe | null>(null);
  const [cookingId, setCookingId] = useState<string | null>(null);
  const [feedbackById, setFeedbackById] = useState<Record<string, Feedback>>({});

  function getRecommendations(input: RecommendationInput, excluded: string[] = []) {
    return pickNextThree(filterRecipes(recipes, input), excluded);
  }

  function scrollToResults() {
    requestAnimationFrame(() => {
      document.getElementById("results")?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  }

  function handleSubmit(input: RecommendationInput) {
    const next = getRecommendations(input);
    setLastInput(input);
    setResults(next);
    setCookingId(null);
    setOpenRecipe(null);
    scrollToResults();
  }

  function handleMore() {
    if (!lastInput) return;

    const next = pickNextThree(
      filterRecipes(recipes, lastInput),
      results.map((recipe) => recipe.id)
    );

    setResults(next);
    setCookingId((current) =>
      next.some((recipe) => recipe.id === current) ? current : null
    );
    setOpenRecipe(null);
    scrollToResults();
  }

  function handleChangeAnswers() {
    document.getElementById("constraints")?.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }

  function handleCookTonight(recipe: Recipe) {
    setCookingId(recipe.id);
  }

  return (
    <main>
      <header className="site-header">
        <div className="brand-mark">
          <span className="brand-dot" aria-hidden="true">◌</span>
          <span>MAKEYOUR OWN RECIPE</span>
        </div>
        <span className="header-note">Less scrolling. More cooking.</span>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">DINNER DECISION, SOLVED</span>
          <h1>
            What should you{" "}
            <em>cook tonight?</em>
          </h1>
          <p>
            Stop scrolling through endless recipes. Tell us how much time you
            have, how you&apos;re feeling, and what&apos;s already in your kitchen.
          </p>

          <div className="hero-proof">
            <span>01</span>
            <div>
              <strong>Tell us your constraints.</strong>
              <small>It takes a few seconds.</small>
            </div>
          </div>
        </div>

        <DecisionForm onSubmit={handleSubmit} />
      </section>

      {results.length > 0 && (
        <div id="results">
          <Results
            recipes={results}
            cookingId={cookingId}
            onOpen={(recipe) => {
              trackEvent("recipe_selected", {
                recipeId: recipe.id,
                recipeName: recipe.title,
                time: lastInput
                  ? lastInput.time === 45
                    ? "45+"
                    : lastInput.time
                  : undefined,
                situation: lastInput?.situation
              });
              setOpenRecipe(recipe);
            }}
            onMore={handleMore}
            onChangeAnswers={handleChangeAnswers}
          />
        </div>
      )}

      {openRecipe && (
        <RecipeDrawer
          recipe={openRecipe}
          selected={openRecipe.id === cookingId}
          kitchenIngredients={lastInput?.ingredients ?? []}
          savedFeedback={feedbackById[openRecipe.id] ?? null}
          onClose={() => setOpenRecipe(null)}
          onCookTonight={handleCookTonight}
          onFeedback={(recipeId, feedback) => {
            const eventName =
              feedback === "loved"
                ? "feedback_loved"
                : feedback === "good"
                  ? "feedback_good"
                  : "feedback_never_again";

            trackEvent(eventName, {
              recipeId,
              recipeName: openRecipe.title,
              time: lastInput
                ? lastInput.time === 45
                  ? "45+"
                  : lastInput.time
                : undefined,
              situation: lastInput?.situation
            });

            setFeedbackById((current) => ({
              ...current,
              [recipeId]: feedback
            }));
          }}
        />
      )}

      <footer>
        <span>MAKEYOUR OWN RECIPE</span>
        <span>Less scrolling. More cooking.</span>
      </footer>
    </main>
  );
}
