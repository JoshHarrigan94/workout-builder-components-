import { motion } from "motion/react";
import { useState } from "react";

export default function WorkoutBlock01() {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      className={`workout-block ${expanded ? "is-expanded" : ""}`}
      layout
      transition={{
        layout: {
          type: "spring",
          stiffness: 380,
          damping: 32,
        },
      }}
    >
      <button
        className="workout-block-main"
        onClick={() => setExpanded((value) => !value)}
        aria-expanded={expanded}
      >
        <div className="workout-block-index">
          <span>01</span>
        </div>

        <div className="workout-block-content">
          <div className="workout-block-meta">
            <span className="workout-type">RUN</span>
            <span className="workout-dot" />
            <span>INTERVAL</span>
          </div>

          <div className="workout-block-heading">
            <h3>5 × 1 km</h3>

            <span className="workout-block-arrow">
              {expanded ? "−" : "+"}
            </span>
          </div>

          <div className="workout-block-details">
            <span>
              <strong>4:10</strong>
              /KM
            </span>

            <span>
              <strong>90</strong>
              SEC REC
            </span>
          </div>
        </div>

        <div className="workout-drag-handle" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
      </button>

      <motion.div
        className="workout-expanded"
        initial={false}
        animate={{
          height: expanded ? "auto" : 0,
          opacity: expanded ? 1 : 0,
        }}
        transition={{
          height: {
            type: "spring",
            stiffness: 360,
            damping: 34,
          },
          opacity: {
            duration: 0.16,
          },
        }}
      >
        <div className="workout-expanded-inner">
          <div className="expanded-line">
            <span>WORK</span>

            <div>
              <strong>1 km</strong>
              <small>Target 4:10/km</small>
            </div>
          </div>

          <div className="expanded-line">
            <span>RECOVER</span>

            <div>
              <strong>90 sec</strong>
              <small>Easy movement</small>
            </div>
          </div>

          <div className="expanded-line">
            <span>REPEAT</span>

            <div>
              <strong>5 rounds</strong>
              <small>5 km total quality</small>
            </div>
          </div>

          <button className="edit-workout-button">
            Edit block
            <span>↗</span>
          </button>
        </div>
      </motion.div>
    </motion.article>
  );
}
