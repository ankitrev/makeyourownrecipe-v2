"use client";

import { useState } from "react";
import type { Situation } from "@/data/recipes";

type DecisionFormProps = {
  onSubmit: (input: {
    time: 15 | 30 | 45;
    situation: Situation;
    ingredients: string[];
  }) => void;
};

const situations: Array<{ value: Situation; label: string; icon: string }> = [
  { value: "tired", label: "I'm tired", icon: "😴" },
  { value: "healthy", label: "Something healthy", icon: "🥗" },
  { value: "comfort", label: "Comfort food", icon: "❤️" },
  { value: "anything", label: "Anything works", icon: "🤷" }
];

const quickPills = ["Paneer", "Eggs", "Tomato", "Onion", "Potato", "Rice"];

function parseIngredients(value: string) {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function uniqueIngredients(items: string[]) {
  const seen = new Set<string>();
  const next: string[] = [];

  for (const item of items) {
    const key = item.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    next.push(item);
  }

  return next;
}

export function DecisionForm({ onSubmit }: DecisionFormProps) {
  const [time, setTime] = useState<15 | 30 | 45>(15);
  const [situation, setSituation] = useState<Situation>("tired");
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [draft, setDraft] = useState("");

  function addIngredients(items: string[]) {
    setIngredients((current) => uniqueIngredients([...current, ...items]));
  }

  function togglePill(label: string) {
    setIngredients((current) => {
      const exists = current.some(
        (item) => item.toLowerCase() === label.toLowerCase()
      );
      if (exists) {
        return current.filter(
          (item) => item.toLowerCase() !== label.toLowerCase()
        );
      }
      return uniqueIngredients([...current, label]);
    });
  }

  function commitDraft() {
    const parsed = parseIngredients(draft);
    if (parsed.length === 0) return;
    addIngredients(parsed);
    setDraft("");
  }

  function submit(event: React.FormEvent) {
    event.preventDefault();
    const fromDraft = parseIngredients(draft);
    onSubmit({
      time,
      situation,
      ingredients: uniqueIngredients([...ingredients, ...fromDraft])
    });
  }

  return (
    <form id="constraints" className="decision-card" onSubmit={submit}>
      <fieldset>
        <legend>How much time do you have?</legend>
        <div className="time-grid">
          {([15, 30, 45] as const).map((value) => (
            <button
              key={value}
              type="button"
              className={`choice-button ${time === value ? "selected" : ""}`}
              onClick={() => setTime(value)}
              aria-pressed={time === value}
            >
              <strong>{value === 45 ? "45+" : value}</strong>
              <span>minutes</span>
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend>What&apos;s your situation?</legend>
        <div className="situation-grid">
          {situations.map((item) => (
            <button
              key={item.value}
              type="button"
              className={`choice-button situation-button ${
                situation === item.value ? "selected" : ""
              }`}
              onClick={() => setSituation(item.value)}
              aria-pressed={situation === item.value}
            >
              <span className="choice-icon" aria-hidden="true">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </fieldset>

      <div className="ingredient-field">
        <label htmlFor="ingredients">
          <span>What&apos;s already in your kitchen?</span>
          <small>Optional</small>
        </label>
        <p>Tell us what you&apos;d like to use, if anything.</p>

        {ingredients.length > 0 && (
          <div className="ingredient-chips" aria-label="Selected ingredients">
            {ingredients.map((item) => (
              <button
                key={item}
                type="button"
                className="ingredient-chip"
                onClick={() => togglePill(item)}
              >
                {item}
                <span aria-hidden="true">×</span>
              </button>
            ))}
          </div>
        )}

        <input
          id="ingredients"
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              commitDraft();
            }
          }}
          onBlur={commitDraft}
          placeholder="e.g. paneer, potato, tomato"
          autoComplete="off"
        />

        <div className="ingredient-pills" aria-label="Quick ingredients">
          {quickPills.map((pill) => {
            const selected = ingredients.some(
              (item) => item.toLowerCase() === pill.toLowerCase()
            );
            return (
              <button
                key={pill}
                type="button"
                className={`ingredient-pill ${selected ? "selected" : ""}`}
                onClick={() => togglePill(pill)}
                aria-pressed={selected}
              >
                {pill}
              </button>
            );
          })}
        </div>
      </div>

      <button className="primary-button" type="submit">
        Give me 3 ideas <span aria-hidden="true">→</span>
      </button>

      <p className="form-note">No signup. No meal plan. Just dinner.</p>
    </form>
  );
}
