import { motion } from "motion/react";

import {
  dragLift,
  fadeUp,
  liftMotion,
  motionTransition,
  pressMotion,
  quietPressMotion,
  scaleIn,
  staggerContainer,
} from "../../lib/motion";

export default function MotionPrimitives() {
  return (
    <motion.div
      className="motion-demo"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="motion-demo-intro"
        variants={fadeUp}
      >
        <span className="motion-demo-kicker">
          MOTION LANGUAGE
        </span>

        <h3>Move with purpose.</h3>

        <p>
          Controls respond immediately. Layout settles
          physically. Editorial moments are allowed to breathe.
        </p>
      </motion.div>

      <div className="motion-demo-grid">
        <motion.button
          className="motion-tile"
          variants={fadeUp}
          {...pressMotion}
        >
          <span>01</span>

          <strong>Press</strong>

          <small>
            Compact compression for primary controls.
          </small>
        </motion.button>

        <motion.button
          className="motion-tile"
          variants={fadeUp}
          {...liftMotion}
        >
          <span>02</span>

          <strong>Lift</strong>

          <small>
            Slight elevation for interactive surfaces.
          </small>
        </motion.button>

        <motion.button
          className="motion-tile motion-tile-quiet"
          variants={fadeUp}
          {...quietPressMotion}
        >
          <span>03</span>

          <strong>Quiet</strong>

          <small>
            Restrained response for secondary actions.
          </small>
        </motion.button>

        <motion.div
          className="motion-tile"
          variants={scaleIn}
          animate="visible"
        >
          <span>04</span>

          <strong>Reveal</strong>

          <small>
            Soft spring entrance for new content.
          </small>
        </motion.div>
      </div>

      <DragExample />
    </motion.div>
  );
}

function DragExample() {
  return (
    <div className="drag-demo">
      <div className="drag-demo-copy">
        <span className="motion-demo-kicker">
          DRAG / LIFT
        </span>

        <strong>Pick this card up.</strong>

        <small>
          Drag feedback should feel physical without becoming
          playful or exaggerated.
        </small>
      </div>

      <motion.div
        className="drag-demo-card"
        drag
        dragConstraints={{
          top: -60,
          right: 80,
          bottom: 60,
          left: -80,
        }}
        dragElastic={0.12}
        variants={dragLift}
        initial="idle"
        whileDrag="dragging"
        dragTransition={{
          bounceStiffness: 520,
          bounceDamping: 32,
        }}
        whileTap={{
          cursor: "grabbing",
        }}
        transition={motionTransition.springDrag}
      >
        <div className="drag-lines">
          <i />
          <i />
          <i />
        </div>

        <span>4 MIN</span>

        <strong>Threshold</strong>

        <small>165–175 BPM</small>
      </motion.div>
    </div>
  );
}
