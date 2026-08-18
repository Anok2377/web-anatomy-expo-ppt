import type { ReactNode } from "react";
import logoWhite from "@/assets/logo-white.png.asset.json";
import logoBlack from "@/assets/logo-black.png.asset.json";

export type Tone = "light" | "dark";

export function Mark({ tone, size = 34 }: { tone: Tone; size?: number }) {
  return (
    <img
      src={tone === "dark" ? logoWhite.url : logoBlack.url}
      alt="Web Anatomy"
      width={size}
      height={size}
      style={{ width: size, height: size }}
    />
  );
}

export function SlideLayout({
  tone = "light",
  index,
  total,
  label,
  children,
  padded = true,
}: {
  tone?: Tone;
  index: number;
  total: number;
  label: string;
  children: ReactNode;
  padded?: boolean;
}) {
  const dark = tone === "dark";
  return (
    <div
      className="slide-content"
      style={{
        background: dark ? "oklch(0.115 0 0)" : "oklch(0.985 0 0)",
        color: dark ? "oklch(0.98 0 0)" : "oklch(0.13 0 0)",
      }}
    >
      {/* chrome: top rule + label */}
      <div
        className="absolute left-[96px] right-[96px] top-[64px] flex items-center justify-between"
        style={{ opacity: 0.85 }}
      >
        <div className="flex items-center gap-4">
          <Mark tone={tone} size={26} />
          <span className="slide-kicker" style={{ opacity: dark ? 0.55 : 0.45 }}>
            {label}
          </span>
        </div>
        <span className="slide-chrome" style={{ opacity: dark ? 0.45 : 0.4 }}>
          {String(index).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>
      <div
        className="wa-line absolute left-[96px] right-[96px] top-[104px] h-px"
        style={{
          background: dark ? "oklch(1 0 0 / 0.16)" : "oklch(0 0 0 / 0.12)",
          ["--d" as string]: "120ms",
        }}
      />

      <div
        className="absolute inset-0"
        style={padded ? { padding: "150px 96px 96px" } : { padding: 0 }}
      >
        {children}
      </div>

      {/* bottom rule */}
      <div
        className="wa-line absolute bottom-[64px] left-[96px] right-[96px] h-px"
        style={{
          background: dark ? "oklch(1 0 0 / 0.12)" : "oklch(0 0 0 / 0.08)",
          ["--d" as string]: "260ms",
        }}
      />
      <span
        className="slide-chrome absolute bottom-[30px] left-[96px]"
        style={{ opacity: dark ? 0.38 : 0.35 }}
      >
        webanatomy.in
      </span>
      <span
        className="slide-chrome absolute bottom-[30px] right-[96px]"
        style={{ opacity: dark ? 0.38 : 0.35 }}
      >
        WEB ANATOMY — SINCE 2018
      </span>
    </div>
  );
}

export function Kicker({
  children,
  delay = 0,
  tone = "light",
}: {
  children: ReactNode;
  delay?: number;
  tone?: Tone;
}) {
  return (
    <div
      className="wa-rise slide-kicker"
      style={{
        ["--d" as string]: `${delay}ms`,
        opacity: 1,
        color: tone === "dark" ? "oklch(0.72 0 0)" : "oklch(0.5 0 0)",
      }}
    >
      {children}
    </div>
  );
}

export function Rise({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div className={`wa-rise ${className}`} style={{ ["--d" as string]: `${delay}ms` }}>
      {children}
    </div>
  );
}
