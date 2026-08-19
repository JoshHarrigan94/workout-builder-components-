import { motion } from "motion/react";
import { ReactNode, useState } from "react";

type PreviewSize = "phone" | "tablet" | "desktop" | "fluid";

type SpecimenFrameProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

const sizes: {
  key: PreviewSize;
  label: string;
  width?: number;
}[] = [
  { key: "phone", label: "Phone", width: 390 },
  { key: "tablet", label: "Tablet", width: 768 },
  { key: "desktop", label: "Desktop", width: 1180 },
  { key: "fluid", label: "Fluid" },
];

export default function SpecimenFrame({
  title,
  subtitle,
  children,
}: SpecimenFrameProps) {
  const [previewSize, setPreviewSize] =
    useState<PreviewSize>("phone");

  const selected = sizes.find(
    (size) => size.key === previewSize
  );

  return (
    <section className="specimen">
      <header className="specimen-header">
        <div>
          <span className="specimen-kicker">
            COMPONENT SPECIMEN
          </span>

          <h3>{title}</h3>

          {subtitle && <p>{subtitle}</p>}
        </div>

        <div
          className="specimen-size-control"
          aria-label="Preview size"
        >
          {sizes.map((size) => (
            <button
              key={size.key}
              className={
                previewSize === size.key
                  ? "specimen-size-button is-active"
                  : "specimen-size-button"
              }
              onClick={() => setPreviewSize(size.key)}
            >
              {size.label}
            </button>
          ))}
        </div>
      </header>

      <div className="specimen-meta">
        <span>{previewSize.toUpperCase()}</span>

        <span>
          {selected?.width
            ? `${selected.width}px`
            : "RESPONSIVE"}
        </span>
      </div>

      <div className="specimen-canvas">
        <motion.div
          layout
          className={`specimen-device specimen-device-${previewSize}`}
          animate={{
            width:
              previewSize === "fluid"
                ? "100%"
                : selected?.width,
          }}
          transition={{
            type: "spring",
            stiffness: 330,
            damping: 32,
          }}
        >
          <div className="specimen-device-inner">
            {children}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
