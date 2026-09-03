"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { Recipe } from "@/data/recipes";
import { ingredientMatches } from "@/lib/recommendation";

type Feedback = "loved" | "good" | "bad";

type RecipeDrawerProps = {
  recipe: Recipe;
  selected: boolean;
  kitchenIngredients: string[];
  savedFeedback: Feedback | null;
  onClose: () => void;
  onCookTonight: (recipe: Recipe) => void;
  onFeedback: (recipeId: string, feedback: Feedback) => void;
};

const optionalHint = /peanut|lemon|coriander|cream|curry leaves|chilli|pickle|chutney|optional|ghee|garnish|potato|milk|malai/;

function initialChecked(recipe: Recipe, kitchenIngredients: string[]) {
  const next: Record<number, boolean> = {};

  recipe.measuredIngredients.forEach((item, index) => {
    next[index] = kitchenIngredients.some((kitchenItem) =>
      ingredientMatches(item, kitchenItem)
    );
  });

  return next;
}

export function RecipeDrawer({
  recipe,
  selected,
  kitchenIngredients,
  savedFeedback,
  onClose,
  onCookTonight,
  onFeedback
}: RecipeDrawerProps) {
  const [mounted, setMounted] = useState(false);
  const [checked, setChecked] = useState<Record<number, boolean>>(() =>
    initialChecked(recipe, kitchenIngredients)
  );
  const [feedbackPulse, setFeedbackPulse] = useState(false);
  const feedbackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const kitchenKey = kitchenIngredients.map((item) => item.toLowerCase()).join("|");

  useEffect(() => {
    setChecked(initialChecked(recipe, kitchenIngredients));
    setFeedbackPulse(false);
  }, [recipe.id, kitchenKey]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  useEffect(() => {
    if (!selected) return;

    setFeedbackPulse(true);
    const frame = window.requestAnimationFrame(() => {
      feedbackRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    });

    const timeout = window.setTimeout(() => setFeedbackPulse(false), 900);
    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
    };
  }, [selected, recipe.id]);

  const showPantryTip = useMemo(() => {
    return recipe.measuredIngredients.some(
      (item, index) => !checked[index] && optionalHint.test(item.toLowerCase())
    );
  }, [checked, recipe.measuredIngredients]);

  function toggleIngredient(index: number) {
    setChecked((current) => ({
      ...current,
      [index]: !current[index]
    }));
  }

  if (!mounted) return null;

  return createPortal(
    <div className="drawer-root" role="presentation">
      <button
        className="drawer-backdrop"
        type="button"
        aria-label="Close recipe"
        onClick={onClose}
      />

      <aside
        className="recipe-drawer"
        role="dialog"
        aria-modal="true"
        aria-labelledby="recipe-drawer-title"
      >
        <header className="drawer-header">
          <div className="drawer-header-copy">
            <span className="section-kicker">TONIGHT&apos;S RECIPE</span>
            <h2 id="recipe-drawer-title">{recipe.title}</h2>
            <div className="drawer-meta">
              <span>◷ {recipe.time}</span>
              <span className="difficulty">{recipe.difficulty}</span>
              <span className="drawer-mood">{recipe.mood}</span>
            </div>
          </div>
          <button className="drawer-close" type="button" onClick={onClose}>
            Close
          </button>
        </header>

        <div className="drawer-body">
          <p className="drawer-description">{recipe.description}</p>

          <section className="drawer-block">
            <h3>Ingredients</h3>
            <p className="drawer-helper">
              Check off what you have or prep as you go
            </p>
            <ul className="ingredient-checklist">
              {recipe.measuredIngredients.map((item, index) => {
                const isChecked = Boolean(checked[index]);
                return (
                  <li key={item}>
                    <label className={isChecked ? "checked" : ""}>
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleIngredient(index)}
                      />
                      <span>{item}</span>
                    </label>
                  </li>
                );
              })}
            </ul>
            {showPantryTip && (
              <p className="pantry-tip">
                Missing an item? Most recipes work fine without optional garnishes
                or pantry staples.
              </p>
            )}
          </section>

          <section className="drawer-block">
            <h3>Steps</h3>
            <ol className="recipe-steps">
              {recipe.steps.map((step, index) => (
                <li key={step}>
                  <span className="step-number">{index + 1}</span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </section>

          {selected && (
            <div
              ref={feedbackRef}
              className={`feedback drawer-feedback ${feedbackPulse ? "pulse" : ""}`}
            >
              <div>
                <span>How did it go?</span>
                {savedFeedback && (
                  <small>
                    {savedFeedback === "loved"
                      ? "Thanks — we'll remember."
                      : savedFeedback === "good"
                        ? "Got it."
                        : "We'll avoid this one next time."}
                  </small>
                )}
              </div>

              <div className="feedback-actions">
                <button
                  type="button"
                  className={savedFeedback === "loved" ? "active" : ""}
                  onClick={() => onFeedback(recipe.id, "loved")}
                >
                  ❤️ Loved it
                </button>
                <button
                  type="button"
                  className={savedFeedback === "good" ? "active" : ""}
                  onClick={() => onFeedback(recipe.id, "good")}
                >
                  👍 It was good
                </button>
                <button
                  type="button"
                  className={savedFeedback === "bad" ? "active" : ""}
                  onClick={() => onFeedback(recipe.id, "bad")}
                >
                  👎 Never again
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="drawer-footer">
          <button
            className={`cook-button drawer-cook ${selected ? "cooking" : ""}`}
            type="button"
            onClick={() => onCookTonight(recipe)}
          >
            {selected ? "✓ Cooking this tonight" : "Cooking this tonight"}
          </button>
        </div>
      </aside>
    </div>,
    document.body
  );
}
