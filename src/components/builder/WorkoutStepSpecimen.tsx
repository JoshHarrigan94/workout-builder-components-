import { motion } from "motion/react";

import WorkoutStepCard01 from "./WorkoutStepCard01";
import {
  fadeUp,
  staggerContainer,
} from "../../lib/motion";

export default function WorkoutStepSpecimen() {
  return (
    <motion.div
      className="workout-step-specimen"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="workout-step-specimen-copy"
        variants={fadeUp}
      >
        <span>BUILDER / STEP</span>

        <h3>
          Dense enough to build.
          <br />
          Quiet enough to think.
        </h3>

        <p>
          The step is the atomic unit of the workout
          builder. Drag it, inspect it, edit it or group it
          without losing sight of the workout structure.
        </p>
      </motion.div>

      <motion.div
        className="workout-step-stack"
        variants={fadeUp}
      >
        <WorkoutStepCard01
          label="WARM UP"
          title="10 min Easy"
          detail="Easy aerobic effort"
          accent="run"
        />

        <WorkoutStepCard01
          label="WORK"
          title="4 min Threshold"
          detail="165–175 bpm"
          accent="run"
          selected
        />

        <WorkoutStepCard01
          label="RECOVER"
          title="2 min Easy"
          detail="140–150 bpm"
          accent="run"
        />

        <WorkoutStepCard01
          label="COOL DOWN"
          title="10 min Easy"
          detail="Easy aerobic effort"
          accent="run"
        />
      </motion.div>
    </motion.div>
  );
}
