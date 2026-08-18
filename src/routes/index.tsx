import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Grid2x2, Maximize2 } from "lucide-react";
import { ScaledSlide } from "@/components/deck/ScaledSlide";
import { slides } from "@/components/deck/registry";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Web Anatomy — Web & AI Expo Deck" },
      {
        name: "description",
        content:
          "A seven-minute Web Anatomy presentation on the revenue a modern website plus AI opens for a business, and the cost it removes.",
      },
      { property: "og:title", content: "Web Anatomy — Web & AI Expo Deck" },
      {
        property: "og:description",
        content:
          "Websites, SEO, performance marketing and agentic AI — the Web Anatomy expo presentation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Deck,
});

function Deck() {
  const [index, setIndex] = useState(0);
  const [grid, setGrid] = useState(false);
  const [printing, setPrinting] = useState(false);
  const total = slides.length;

  useEffect(() => {
    setPrinting(new URLSearchParams(window.location.search).has("print"));
  }, []);

  const go = useCallback(
    (n: number) => setIndex((i) => Math.min(Math.max(i + n, 0), total - 1)),
    [total],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        go(1);
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        go(-1);
      } else if (e.key.toLowerCase() === "g") {
        setGrid((g) => !g);
      } else if (e.key.toLowerCase() === "f") {
        document.documentElement.requestFullscreen?.();
      } else if (e.key === "Escape") {
        setGrid(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  const current = slides[index]!;

  useEffect(() => {
    document.title = `${index + 1}/${total} — ${slides[index]!.title} · Web Anatomy`;
  }, [index, total]);

  if (printing) {
    return (
      <div className="bg-white">
        {slides.map(({ id, Component }) => (
          <div key={id} className="wa-print-slide">
            <Component />
          </div>
        ))}
      </div>
    );
  }

  const Current = current.Component;

  return (
    <main className="flex h-screen w-screen flex-col bg-neutral-950 font-sans text-neutral-100">
      {grid ? (
        <div className="h-full overflow-y-auto p-10">
          <p className="slide-chrome mb-8 uppercase tracking-[0.22em] text-neutral-500">
            All slides — press G to close
          </p>
          <div className="grid grid-cols-3 gap-6">
            {slides.map(({ id, title, Component }, i) => (
              <button
                key={id}
                onClick={() => {
                  setIndex(i);
                  setGrid(false);
                }}
                className="group text-left"
              >
                <ScaledSlide className="aspect-video w-full rounded-xl border border-neutral-800 transition-colors group-hover:border-neutral-500">
                  <Component />
                </ScaledSlide>
                <p className="mt-3 text-sm text-neutral-500">
                  {String(i + 1).padStart(2, "0")} · {title}
                </p>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <>
          <ScaledSlide className="flex-1">
            <div key={index} className="wa-fade h-full w-full">
              <Current />
            </div>
          </ScaledSlide>

          <div className="wa-no-print flex items-center justify-between border-t border-neutral-800 px-6 py-3">
            <div className="flex items-center gap-3 text-xs tracking-[0.18em] text-neutral-500 uppercase">
              <button
                onClick={() => setGrid(true)}
                className="rounded-md p-2 transition-colors hover:bg-neutral-800 hover:text-neutral-100"
                aria-label="Show all slides"
              >
                <Grid2x2 size={16} />
              </button>
              <button
                onClick={() => document.documentElement.requestFullscreen?.()}
                className="rounded-md p-2 transition-colors hover:bg-neutral-800 hover:text-neutral-100"
                aria-label="Present fullscreen"
              >
                <Maximize2 size={16} />
              </button>
              <span>{current.title}</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-px w-56 bg-neutral-800">
                <div
                  className="h-px bg-neutral-100 transition-[width] duration-500 ease-out"
                  style={{ width: `${((index + 1) / total) * 100}%` }}
                />
              </div>
              <span className="text-xs tabular-nums text-neutral-500">
                {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
              <button
                onClick={() => go(-1)}
                disabled={index === 0}
                className="rounded-md p-2 transition-colors hover:bg-neutral-800 disabled:opacity-25"
                aria-label="Previous slide"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => go(1)}
                disabled={index === total - 1}
                className="rounded-md p-2 transition-colors hover:bg-neutral-800 disabled:opacity-25"
                aria-label="Next slide"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
