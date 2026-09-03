"use client";

import type { Recipe } from "@/data/recipes";
import { RecipeCard } from "@/components/RecipeCard";

type ResultsProps = {
  recipes: Recipe[];
  cookingId: string | null;
  onOpen: (recipe: Recipe) => void;
  onMore: () => void;
  onChangeAnswers: () => void;
};

export function Results({
  recipes,
  cookingId,
  onOpen,
  onMore,
  onChangeAnswers
}: ResultsProps) {
  return (
    <section className="results-section" aria-live="polite">
      <div className="results-heading">
        <div>
          <span className="section-kicker">YOUR TONIGHT SHORTLIST</span>
          <h2>Three realistic options.</h2>
        </div>

        <div className="results-actions">
          <button className="text-button" onClick={onMore}>
            ↻ Give me 3 different options
          </button>
          <button className="reset-button" onClick={onChangeAnswers}>
            Change my answers
          </button>
        </div>
      </div>

      <div className="recipe-grid">
        {recipes.map((recipe, index) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            bestMatch={index === 0}
            selected={recipe.id === cookingId}
            onOpen={onOpen}
          />
        ))}
      </div>
    </section>
  );
}
