import { motion } from "motion/react";
import { useState } from "react";
import type { CSSProperties } from "react";

import {
  motionTransition,
  pressMotion,
} from "../../lib/motion";

type WorkoutStepCardProps = {
  label?: string;
  title?: string;
  detail?: string;
  accent?:
    | "run"
    | "swim"
    | "strength"
    | "hybrid"
    | "ride"
    | "triathlon";
  selected?: boolean;
};

const accentMap = {
  run: "var(--color-run)",
  swim: "var(--color-swim)",
  strength: "var(--color-strength)",
  hybrid: "var(--color-hybrid)",
  ride: "var(--color-ride)",
  triathlon: "var(--color-triathlon)",
};

export default function WorkoutStepCard01({
  label = "WORK",
  title = "4 min Threshold",
  detail = "165–175 bpm",
  accent = "run",
  selected = false,
}: WorkoutStepCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      layout
      className={[
        "workout-step-card",
        selected ? "is-selected" : "",
        expanded ? "is-expanded" : "",
      ].join(" ")}
      style={
        {
          "--step-accent": accentMap[accent],
        } as CSSProperties
      }
      transition={motionTransition.springSoft}
    >
      <div className="workout-step-accent" />

      <div className="workout-step-main">
        <div
          className="workout-step-grip"
          aria-hidden="true"
        >
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <motion.button
          type="button"
          className="workout-step-content-button"
          onClick={() =>
            setExpanded((value) => !value)
          }
          aria-expanded={expanded}
          {...pressMotion}
        >
          <div className="workout-step-copy">
            <span className="workout-step-label">
              {label}
            </span>

            <strong className="workout-step-title">
              {title}
            </strong>

            <span className="workout-step-detail">
              {detail}
            </span>
          </div>

          <motion.span
            className="workout-step-chevron"
            animate={{
              rotate: expanded ? 180 : 0,
            }}
            transition={motionTransition.springSnappy}
          >
            ↓
          </motion.span>
        </motion.button>

        <button
          className="workout-step-menu"
          type="button"
          aria-label="More options"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <motion.div
        className="workout-step-expanded"
        initial={false}
        animate={{
          height: expanded ? "auto" : 0,
          opacity: expanded ? 1 : 0,
        }}
        transition={{
          height: motionTransition.springSoft,
          opacity: motionTransition.ui,
        }}
      >
        <div className="workout-step-expanded-inner">
          <StepMetric
            label="Duration"
            value="4 min"
          />

          <StepMetric
            label="Intensity"
            value="Threshold"
          />

          <StepMetric
            label="Target"
            value="165–175 bpm"
          />

          <div className="workout-step-expanded-actions">
            <button type="button">Edit</button>

            <button type="button">
              Duplicate
            </button>

            <button
              className="danger"
              type="button"
            >
              Remove
            </button>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}

function StepMetric({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="workout-step-metric">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}
