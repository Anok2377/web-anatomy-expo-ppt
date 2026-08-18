import { SlideLayout, Kicker, Rise, Mark } from "../SlideLayout";
import { Counter } from "../Counter";
import mockup from "@/assets/mockup-devices.jpg";
import {
  ArrowRight,
  ArrowUpRight,
  Clock3,
  Megaphone,
  Search,
  Layers,
  Gauge,
  ShieldCheck,
} from "lucide-react";

const TOTAL = 10;

/* ---------------------------------------------------------- 01 — Title */
export function Slide01() {
  return (
    <div
      className="slide-content"
      style={{ background: "oklch(0.115 0 0)", color: "oklch(0.98 0 0)" }}
    >
      {/* faint grid */}
      <div
        className="wa-fade absolute inset-0"
        style={{
          ["--d" as string]: "200ms",
          backgroundImage:
            "linear-gradient(oklch(1 0 0 / 0.05) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.05) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
          maskImage: "radial-gradient(120% 90% at 30% 45%, black 20%, transparent 78%)",
        }}
      />
      <div className="absolute inset-0 flex flex-col justify-between px-[112px] py-[88px]">
        <div className="flex items-start justify-between">
          <Rise delay={80}>
            <div className="wa-float">
              <Mark tone="dark" size={168} />
            </div>
          </Rise>
          <Rise delay={200}>
            <div className="slide-kicker" style={{ color: "oklch(0.7 0 0)" }}>
              Expo 2026 · Web &amp; AI
            </div>
          </Rise>
        </div>

        <div className="max-w-[1420px]">
          <Rise delay={320}>
            <h1 className="slide-display">
              The internet stopped
              <br />
              being a brochure.
              <br />
              <span style={{ color: "oklch(0.58 0 0)" }}>Most businesses still print one.</span>
            </h1>
          </Rise>
          <div
            className="wa-line mt-[52px] h-px w-full"
            style={{
              background: "oklch(1 0 0 / 0.18)",
              ["--d" as string]: "700ms",
            }}
          />
          <Rise delay={820}>
            <div className="mt-[36px] flex items-end justify-between">
              <p className="slide-body-lg max-w-[820px]" style={{ color: "oklch(0.75 0 0)" }}>
                Seven minutes on what a website plus AI actually does to a business — the revenue it
                opens, and the cost it removes.
              </p>
              <div className="text-right">
                <p className="slide-body" style={{ color: "oklch(0.98 0 0)" }}>
                  Supraja Singireddy
                </p>
                <p className="slide-caption" style={{ color: "oklch(0.6 0 0)" }}>
                  CEO, Web Anatomy
                </p>
              </div>
            </div>
          </Rise>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------- 02 — The quiet leak */
const leaks = [
  {
    icon: Megaphone,
    stat: <Counter to={100} suffix="%" delay={500} />,
    label: "Rented attention",
    body: "Pause the ad spend and the pipeline stops the same week.",
  },
  {
    icon: Clock3,
    stat: <Counter to={18} suffix="h" delay={700} />,
    label: "Repeated by hand",
    body: "A week of team hours lost to the same five questions and quotes.",
  },
  {
    icon: Search,
    stat: "?",
    label: "Missing from the answer",
    body: "Buyers ask an AI first. Unstructured businesses never make the reply.",
  },
];

export function Slide02() {
  return (
    <SlideLayout index={2} total={TOTAL} label="The gap">
      <div className="flex h-full flex-col justify-between">
        <div className="flex items-end justify-between gap-[80px]">
          <div className="max-w-[1080px]">
            <Kicker delay={80}>Where growth quietly leaks</Kicker>
            <Rise delay={180}>
              <h2 className="slide-title mt-[26px]">
                Not short on effort.
                <br />
                Short on
                <span style={{ color: "oklch(0.62 0 0)" }}> ownership.</span>
              </h2>
            </Rise>
          </div>
          <Rise delay={300}>
            <p
              className="slide-body max-w-[420px] border-l pl-[28px]"
              style={{
                borderColor: "oklch(0 0 0 / 0.14)",
                color: "oklch(0.42 0 0)",
              }}
            >
              Every one of these leaks is invisible on a P&amp;L. All three compound month over
              month.
            </p>
          </Rise>
        </div>

        <div className="grid grid-cols-3 gap-[36px]">
          {leaks.map((l, i) => (
            <Rise key={l.label} delay={420 + i * 130}>
              <div
                className="wa-card h-[330px] rounded-[22px] border p-[38px]"
                style={{
                  borderColor: "oklch(0 0 0 / 0.1)",
                  background: "oklch(1 0 0)",
                }}
              >
                <l.icon size={34} strokeWidth={1.4} />
                <div className="slide-title-lg mt-[26px]" style={{ letterSpacing: "-0.05em" }}>
                  {l.stat}
                </div>
                <p className="slide-subtitle mt-[14px]">{l.label}</p>
                <p className="slide-body mt-[12px]" style={{ color: "oklch(0.48 0 0)" }}>
                  {l.body}
                </p>
              </div>
            </Rise>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}

/* ------------------------------------------------ 03 — Before / After */
const before = [
  ["Organic monthly traffic", "0"],
  ["Ranking keywords", "0"],
  ["Referring backlinks", "0"],
  ["Inbound enquiries", "Referrals only"],
];
const after = [
  ["Organic monthly traffic", "4,128"],
  ["Ranking keywords", "379"],
  ["Referring backlinks", "3,036"],
  ["On-page SEO score", "92 / 100"],
];

export function Slide03() {
  return (
    <SlideLayout index={3} total={TOTAL} label="Brand story">
      <div className="flex h-full flex-col justify-between">
        <div className="max-w-[1300px]">
          <Kicker delay={80}>One client · twelve months</Kicker>
          <Rise delay={180}>
            <h2 className="slide-title mt-[26px]">
              They had a good business
              <br />
              and a silent one.
            </h2>
          </Rise>
        </div>

        <div className="grid grid-cols-[1fr_auto_1fr] items-stretch gap-[56px]">
          <Rise delay={340}>
            <div
              className="h-[400px] rounded-[22px] border p-[40px]"
              style={{
                borderColor: "oklch(0 0 0 / 0.1)",
                background: "oklch(0.96 0 0)",
              }}
            >
              <p className="slide-kicker" style={{ color: "oklch(0.55 0 0)" }}>
                Before
              </p>
              <div className="mt-[28px] space-y-[18px]">
                {before.map(([k, v]) => (
                  <div
                    key={k}
                    className="flex items-baseline justify-between border-b pb-[14px]"
                    style={{ borderColor: "oklch(0 0 0 / 0.08)" }}
                  >
                    <span className="slide-body" style={{ color: "oklch(0.48 0 0)" }}>
                      {k}
                    </span>
                    <span className="slide-subtitle">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </Rise>

          <div className="flex items-center">
            <Rise delay={520}>
              <div
                className="flex h-[86px] w-[86px] items-center justify-center rounded-full"
                style={{ background: "oklch(0.13 0 0)", color: "oklch(1 0 0)" }}
              >
                <ArrowRight size={34} strokeWidth={1.5} />
              </div>
            </Rise>
          </div>

          <Rise delay={620}>
            <div
              className="wa-card h-[400px] rounded-[22px] p-[40px]"
              style={{ background: "oklch(0.13 0 0)", color: "oklch(0.98 0 0)" }}
            >
              <p className="slide-kicker" style={{ color: "oklch(0.68 0 0)" }}>
                After website + SEO + AI workflows
              </p>
              <div className="mt-[28px] space-y-[18px]">
                {after.map(([k, v]) => (
                  <div
                    key={k}
                    className="flex items-baseline justify-between border-b pb-[14px]"
                    style={{ borderColor: "oklch(1 0 0 / 0.14)" }}
                  >
                    <span className="slide-body" style={{ color: "oklch(0.7 0 0)" }}>
                      {k}
                    </span>
                    <span className="slide-subtitle">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </Rise>
        </div>

        <Rise delay={780}>
          <p className="slide-body-lg" style={{ color: "oklch(0.42 0 0)" }}>
            Same team. Same product. The only thing that changed was where the demand came from —
            and who owned it.
          </p>
        </Rise>
      </div>
    </SlideLayout>
  );
}

/* --------------------------------------------------- 04 — Why now */
const whyNow = [
  {
    icon: Gauge,
    title: "Cost per conversation falls",
    body: "An ad buys one click. A page you own answers forever — visitor ten-thousand costs nothing.",
  },
  {
    icon: Clock3,
    title: "It sells while you sleep",
    body: "Enquiries, bookings and quotes arriving at 2am from cities your sales team will never drive to.",
  },
  {
    icon: ShieldCheck,
    title: "It is an asset, not a bill",
    body: "Rankings, content and data appreciate. Ad accounts reset to zero the day you pause them.",
  },
];

export function Slide04() {
  return (
    <SlideLayout index={4} total={TOTAL} label="Why now" tone="dark">
      <div className="flex h-full flex-col justify-between">
        <div className="flex items-end justify-between gap-[80px]">
          <div className="max-w-[1150px]">
            <Kicker delay={80} tone="dark">
              The economics
            </Kicker>
            <Rise delay={180}>
              <h2 className="slide-title mt-[26px]">
                A website is the only salesperson
                <br />
                that gets
                <span style={{ color: "oklch(0.6 0 0)" }}> cheaper </span>
                every month.
              </h2>
            </Rise>
          </div>
          <Rise delay={300}>
            <ArrowUpRight size={92} strokeWidth={1} style={{ opacity: 0.35 }} />
          </Rise>
        </div>

        <div className="grid grid-cols-3 gap-[36px]">
          {whyNow.map((w, i) => (
            <Rise key={w.title} delay={420 + i * 130}>
              <div
                className="wa-card h-[320px] rounded-[22px] border p-[38px]"
                style={{
                  borderColor: "oklch(1 0 0 / 0.14)",
                  background: "oklch(0.155 0 0)",
                }}
              >
                <w.icon size={34} strokeWidth={1.4} />
                <p className="slide-subtitle mt-[28px]">{w.title}</p>
                <p className="slide-body mt-[14px]" style={{ color: "oklch(0.68 0 0)" }}>
                  {w.body}
                </p>
              </div>
            </Rise>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}

/* ------------------------------------------ 05 — Not a page, a system */
const systemPoints = [
  {
    icon: Layers,
    title: "Front door",
    body: "Positioning, proof and pricing clarity in the first eight seconds.",
  },
  {
    icon: Gauge,
    title: "Conversion engine",
    body: "Speed, structure and journeys tuned to the one action that matters.",
  },
  {
    icon: ShieldCheck,
    title: "Operating layer",
    body: "CRM, payments, bookings and dashboards wired into how you already work.",
  },
];

export function Slide05() {
  return (
    <SlideLayout index={5} total={TOTAL} label="What we build">
      <div className="grid h-full grid-cols-[1fr_1.05fr] items-center gap-[80px]">
        <div>
          <Kicker delay={80}>Beyond the homepage</Kicker>
          <Rise delay={180}>
            <h2 className="slide-title mt-[26px]">
              A website is no longer
              <br />a page. It's a<span style={{ color: "oklch(0.62 0 0)" }}> system.</span>
            </h2>
          </Rise>
          <div className="mt-[40px] space-y-[22px]">
            {systemPoints.map((p, i) => (
              <Rise key={p.title} delay={360 + i * 130}>
                <div
                  className="flex gap-[24px] border-t pt-[22px]"
                  style={{ borderColor: "oklch(0 0 0 / 0.1)" }}
                >
                  <p.icon size={30} strokeWidth={1.4} className="shrink-0" />
                  <div>
                    <p className="slide-subtitle">{p.title}</p>
                    <p
                      className="slide-body mt-[8px] max-w-[600px]"
                      style={{ color: "oklch(0.48 0 0)" }}
                    >
                      {p.body}
                    </p>
                  </div>
                </div>
              </Rise>
            ))}
          </div>
        </div>

        <Rise delay={420} className="wa-card">
          <div
            className="overflow-hidden rounded-[26px] border"
            style={{
              borderColor: "oklch(0 0 0 / 0.08)",
              background: "oklch(1 0 0)",
            }}
          >
            <img
              src={mockup}
              alt="Responsive website design shown on a laptop and phone"
              width={1408}
              height={1008}
              loading="lazy"
              className="wa-float h-[560px] w-full object-cover"
            />
          </div>
        </Rise>
      </div>
    </SlideLayout>
  );
}
