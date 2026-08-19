import { motion } from "motion/react";
import { useState } from "react";

import {
  motionTransition,
  pressMotion,
} from "../../lib/motion";

type WorkoutStepCardProps = {
  label?: string;
  title?: string;
  detail?: string;
  accent?: "run" | "swim" | "strength" | "hybrid" | "ride" | "triathlon";
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
      style={{
        "--step-accent": accentMap[accent],
      } as React.CSSProperties}
      transition={motionTransition.springSoft}
    >
      <div className="workout-step-accent" />

      <button
        className="workout-step-main"
        onClick={() => setExpanded((value) => !value)}
        {...pressMotion}
      >
        <div className="workout-step-grip" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

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

        <div className="workout-step-actions">
          <button
            className="workout-step-menu"
            type="button"
            aria-label="More options"
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            <span />
            <span />
            <span />
          </button>

          <motion.span
            className="workout-step-chevron"
            animate={{
              rotate: expanded ? 180 : 0,
            }}
            transition={motionTransition.springSnappy}
          >
            ↓
          </motion.span>
        </div>
      </button>

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
            <button type="button">
              Edit
            </button>

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
