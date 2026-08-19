import SpecimenFrame from "./components/lab/SpecimenFrame";
import MotionPrimitives from "./components/lab/MotionPrimitives";
import WorkoutStepSpecimen from "./components/builder/WorkoutStepSpecimen";
import { motion } from "motion/react";
import { useState } from "react";

type LabSection = {
  title: string;
  description: string;
  items: string[];
};

const sections: LabSection[] = [
  {
    title: "Components",
    description: "Core interface pieces and reusable controls.",
    items: [
      "Workout Cards",
      "Buttons",
      "Chips",
      "Inputs",
      "Sliders",
      "Toggles",
      "Bottom Sheets",
    ],
  },
  {
    title: "Builder",
    description: "The parts that make workout creation feel physical.",
    items: [
      "Workout Block",
      "Exercise Block",
      "Interval Block",
      "Drag States",
      "Add Step",
    ],
  },
  {
    title: "Motion",
    description: "How the product moves, responds and settles.",
    items: [
      "Card Entrance",
      "Expand / Collapse",
      "Drag + Drop",
      "Page Transition",
      "Loading",
      "Success",
    ],
  },
  {
    title: "Icons",
    description: "Sport-specific symbols and visual language.",
    items: ["Run", "Swim", "Ride", "Strength", "Hybrid", "Recovery"],
  },
  {
    title: "Artwork",
    description: "Lines, texture, illustration and environmental graphics.",
    items: [
      "Track Lines",
      "Waves",
      "Contours",
      "Strength Lines",
      "Grain",
      "Editorial Art",
    ],
  },
  {
    title: "Typography",
    description: "Display type, metrics, hierarchy and dense UI.",
    items: ["Display", "Metrics", "Labels", "Editorial", "Dense UI"],
  },
  {
    title: "Experimental",
    description: "Ideas we can push without worrying about production yet.",
    items: ["Playground"],
  },
];

export default function App() {
  const [activeSection, setActiveSection] = useState("Overview");
  const [previewMode, setPreviewMode] = useState<"desktop" | "mobile">(
    "desktop"
  );

  const selectedSection = sections.find(
    (section) => section.title === activeSection
  );

  return (
    <div className="lab-shell">
      <aside className="sidebar">
        <button
          className="brand"
          onClick={() => setActiveSection("Overview")}
          aria-label="Go to overview"
        >
          <span className="brand-symbol">S</span>

          <span className="brand-copy">
            <strong>STRIDE</strong>
            <span>LAB</span>
          </span>
        </button>

        <nav className="navigation">
          <button
            className={
              activeSection === "Overview"
                ? "nav-button nav-button-active"
                : "nav-button"
            }
            onClick={() => setActiveSection("Overview")}
          >
            Overview
          </button>

          {sections.map((section) => (
            <button
              key={section.title}
              className={
                activeSection === section.title
                  ? "nav-button nav-button-active"
                  : "nav-button"
              }
              onClick={() => setActiveSection(section.title)}
            >
              {section.title}
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <span>Design system playground</span>
          <span>v0.1</span>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <div>
            <span className="eyebrow">STRIDE / LAB</span>
            <h1>{activeSection}</h1>
          </div>

          <div className="preview-toggle">
            <button
              className={previewMode === "desktop" ? "selected" : ""}
              onClick={() => setPreviewMode("desktop")}
            >
              Desktop
            </button>

            <button
              className={previewMode === "mobile" ? "selected" : ""}
              onClick={() => setPreviewMode("mobile")}
            >
              Mobile
            </button>
          </div>
        </header>

        <motion.div
          key={activeSection}
          className="page"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.28,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {activeSection === "Overview" ? (
            <Overview onSelect={setActiveSection} />
          ) : selectedSection ? (
            <SectionView
              section={selectedSection}
              previewMode={previewMode}
            />
          ) : null}
        </motion.div>
      </main>
    </div>
  );
}

function Overview({
  onSelect,
}: {
  onSelect: (section: string) => void;
}) {
  return (
    <>
      <section className="hero">
        <div>
          <span className="eyebrow">Component library</span>

          <h2>Build the feeling before the product.</h2>
        </div>

        <p>
          A living playground for refining Stride’s visual system, interaction,
          motion and component language before those ideas reach the main app.
        </p>
      </section>

      <section className="section-grid">
        {sections.map((section, index) => (
          <motion.button
            key={section.title}
            className="section-card"
            onClick={() => onSelect(section.title)}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.99 }}
            transition={{
              type: "spring",
              stiffness: 420,
              damping: 30,
            }}
          >
            <span className="card-number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="card-copy">
              <h3>{section.title}</h3>
              <p>{section.description}</p>
            </div>

            <span className="card-arrow">↗</span>
          </motion.button>
        ))}
      </section>
    </>
  );
}

function SectionView({
  section,
  previewMode,
}: {
  section: LabSection;
  previewMode: "desktop" | "mobile";
}) {
  return (
    <>
      <section className="section-heading">
        <div>
          <span className="eyebrow">Library</span>
          <h2>{section.title}</h2>
        </div>

        <p>{section.description}</p>
      </section>

      <section
        className={
          previewMode === "mobile"
            ? "preview-stage preview-stage-mobile"
            : "preview-stage"
        }
      >
        <div className="stage-toolbar">
          <span>
            {previewMode === "mobile"
              ? "390 × 844"
              : "Responsive canvas"}
          </span>

          <span>Preview</span>
        </div>

        <div className="stage-content">
          {section.title === "Builder" && (
  <SpecimenFrame
    title="Workout Step / 01"
    subtitle="Responsive atomic workout step with expansion, hierarchy and touch-first interaction."
  >
    <WorkoutStepSpecimen />
  </SpecimenFrame>
)}
          {section.title === "Motion" && (
  <SpecimenFrame
    title="Motion Language / 01"
    subtitle="Core interaction behaviours for press, lift, reveal and drag."
  >
    <MotionPrimitives />
  </SpecimenFrame>
)}
          <div className="experiment-list">
            {section.items.map((item, index) => (
              <motion.button
                key={item}
                className="experiment-row"
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.995 }}
              >
                <span className="experiment-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>{item}</strong>

                <span className="experiment-status">
                  Ready to build
                </span>

                <span className="experiment-arrow">→</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
