import { SlideLayout, Kicker, Rise, Mark } from "../SlideLayout";
import { Counter } from "../Counter";
import mesh from "@/assets/ai-mesh.jpg";
import {
  Bot,
  BrainCircuit,
  Workflow,
  Code2,
  PenTool,
  Search,
  Target,
  LineChart,
  Sparkles,
  ShoppingBag,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const TOTAL = 10;

/* ------------------------------------------- 06 — AI on top of the web */
const aiPoints = [
  {
    icon: Bot,
    title: "Agents that close the loop",
    body: "Qualify, quote, book and follow up — on the site, on WhatsApp, at 3am.",
  },
  {
    icon: BrainCircuit,
    title: "LLMs trained on your business",
    body: "Your catalogue, pricing logic and past deals answering in your tone, not a generic one.",
  },
  {
    icon: Workflow,
    title: "Workflows that remove admin",
    body: "Lead routing, proposals, invoices and reporting running without a human relay.",
  },
];

export function Slide06() {
  return (
    <div
      className="slide-content"
      style={{ background: "oklch(0.115 0 0)", color: "oklch(0.98 0 0)" }}
    >
      <img
        src={mesh}
        alt=""
        width={1408}
        height={1008}
        loading="lazy"
        className="wa-drift absolute inset-0 h-full w-full object-cover"
        style={{ opacity: 0.4 }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(90deg, oklch(0.115 0 0) 32%, oklch(0.115 0 0 / 0.35) 100%)",
        }}
      />

      <div className="absolute left-[96px] right-[96px] top-[64px] flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Mark tone="dark" size={26} />
          <span className="slide-kicker" style={{ opacity: 0.55 }}>
            Web + AI
          </span>
        </div>
        <span className="slide-chrome" style={{ opacity: 0.45 }}>
          06 / 10
        </span>
      </div>

      <div className="absolute inset-0 flex flex-col justify-between px-[96px] pb-[96px] pt-[150px]">
        <div className="max-w-[1180px]">
          <Rise delay={140}>
            <h2 className="slide-title">
              The same website, with AI inside,
              <br />
              stops being a page and becomes
              <span style={{ color: "oklch(0.65 0 0)" }}> a workforce.</span>
            </h2>
          </Rise>
        </div>

        <div className="grid grid-cols-3 gap-[36px]">
          {aiPoints.map((p, i) => (
            <Rise key={p.title} delay={380 + i * 140}>
              <div
                className="wa-card h-[300px] rounded-[22px] border p-[38px] backdrop-blur-sm"
                style={{
                  borderColor: "oklch(1 0 0 / 0.16)",
                  background: "oklch(0.14 0 0 / 0.72)",
                }}
              >
                <p.icon size={34} strokeWidth={1.4} />
                <p className="slide-subtitle mt-[26px]">{p.title}</p>
                <p className="slide-body mt-[16px]" style={{ color: "oklch(0.72 0 0)" }}>
                  {p.body}
                </p>
              </div>
            </Rise>
          ))}
        </div>
      </div>

      <span className="slide-chrome absolute bottom-[30px] left-[96px]" style={{ opacity: 0.4 }}>
        webanatomy.in
      </span>
      <span className="slide-chrome absolute bottom-[30px] right-[96px]" style={{ opacity: 0.4 }}>
        WEB ANATOMY — SINCE 2018
      </span>
    </div>
  );
}

/* ------------------------------------------------- 07 — Everything else */
const services = [
  { icon: Code2, t: "Web & App Development", s: "Sites, portals, commerce, apps" },
  { icon: PenTool, t: "Brand & UI/UX", s: "Identity, design systems, packaging" },
  { icon: Search, t: "SEO", s: "Technical, on-page, authority" },
  { icon: Target, t: "Performance Marketing", s: "Meta, Google, LinkedIn — AI-optimised" },
  { icon: Bot, t: "Agentic Automation", s: "Sales, support and ops agents" },
  { icon: BrainCircuit, t: "LLM Solutions", s: "Private assistants on your data" },
  { icon: ShoppingBag, t: "Content & Social", s: "Story, creative, always-on" },
  { icon: LineChart, t: "Analytics & CRO", s: "Attribution, testing, dashboards" },
];

export function Slide07() {
  return (
    <SlideLayout index={7} total={TOTAL} label="Capability">
      <div className="flex h-full flex-col justify-between">
        <div className="flex items-end justify-between gap-[80px]">
          <div className="max-w-[1100px]">
            <Kicker delay={80}>End to end, under one roof</Kicker>
            <Rise delay={180}>
              <h2 className="slide-title mt-[26px]">
                One partner from the first
                <br />
                wireframe to the last rupee
                <span style={{ color: "oklch(0.62 0 0)" }}> of return.</span>
              </h2>
            </Rise>
          </div>
          <Rise delay={280}>
            <Sparkles size={80} strokeWidth={0.9} style={{ opacity: 0.25 }} />
          </Rise>
        </div>

        <div className="grid grid-cols-4 gap-[24px]">
          {services.map((s, i) => (
            <Rise key={s.t} delay={380 + i * 70}>
              <div
                className="wa-card h-[200px] rounded-[20px] border p-[30px]"
                style={{
                  borderColor: "oklch(0 0 0 / 0.1)",
                  background: "oklch(1 0 0)",
                }}
              >
                <s.icon size={30} strokeWidth={1.4} />
                <p
                  className="slide-body-lg mt-[24px]"
                  style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
                >
                  {s.t}
                </p>
                <p className="slide-caption mt-[8px]" style={{ color: "oklch(0.52 0 0)" }}>
                  {s.s}
                </p>
              </div>
            </Rise>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}

/* ------------------------------------------------------- 08 — Proof */
export function Slide08() {
  const stats = [
    {
      node: <Counter to={350} suffix="+" delay={400} />,
      l: "businesses served, start-ups to enterprises",
    },
    { node: <Counter to={50} suffix="+" delay={550} />, l: "web apps, portals and plugins built" },
    {
      node: (
        <>
          <span>$</span>
          <Counter to={250} suffix="M+" delay={700} />
        </>
      ),
      l: "revenue generated through ads & strategy",
    },
    { node: <Counter to={100} suffix="+" delay={850} />, l: "brands created and launched" },
  ];
  return (
    <SlideLayout index={8} total={TOTAL} label="Track record" tone="dark">
      <div className="flex h-full flex-col justify-between">
        <div className="max-w-[1200px]">
          <Kicker delay={80} tone="dark">
            Eight years, no capes
          </Kicker>
          <Rise delay={180}>
            <h2 className="slide-title mt-[26px]">
              We don't sell potential.
              <br />
              We sell the second time
              <span style={{ color: "oklch(0.6 0 0)" }}> it worked.</span>
            </h2>
          </Rise>
        </div>

        <div className="grid grid-cols-4 gap-[36px]">
          {stats.map((s, i) => (
            <Rise key={s.l} delay={340 + i * 120}>
              <div
                className="h-[270px] border-t pt-[30px]"
                style={{ borderColor: "oklch(1 0 0 / 0.2)" }}
              >
                <div className="slide-title-lg" style={{ letterSpacing: "-0.055em" }}>
                  {s.node}
                </div>
                <p
                  className="slide-body mt-[22px] max-w-[330px]"
                  style={{ color: "oklch(0.68 0 0)" }}
                >
                  {s.l}
                </p>
              </div>
            </Rise>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}

/* ----------------------------------------------------- 09 — Clients */
const clients = [
  "TOYOTA",
  "HYUNDAI",
  "dormakaba",
  "ToggleNow",
  "halcyon",
  "FOSSICK",
  "XCGLIA",
  "Pearl PDS",
  "eco root",
  "KSLTA",
  "s4access",
  "WEQUITY",
];

export function Slide09() {
  return (
    <SlideLayout index={9} total={TOTAL} label="Clients">
      <div className="flex h-full flex-col justify-between">
        <div className="flex items-end justify-between gap-[80px]">
          <div className="max-w-[1000px]">
            <Kicker delay={80}>Trusted across industries</Kicker>
            <Rise delay={180}>
              <h2 className="slide-title mt-[26px]">
                Brands that handed us
                <br />
                their growth.
              </h2>
            </Rise>
          </div>
          <Rise delay={300}>
            <p
              className="slide-body max-w-[430px] border-l pl-[28px]"
              style={{
                borderColor: "oklch(0 0 0 / 0.14)",
                color: "oklch(0.42 0 0)",
              }}
            >
              “They don't just deliver results, they deliver WOW.”
              <span className="slide-caption mt-[10px] block" style={{ color: "oklch(0.58 0 0)" }}>
                Ravi Kumar M, CEO, Raghav Foundation
              </span>
            </p>
          </Rise>
        </div>

        <div className="grid grid-cols-6 gap-px" style={{ background: "oklch(0 0 0 / 0.1)" }}>
          {clients.map((c, i) => (
            <Rise key={c} delay={380 + i * 55}>
              <div
                className="flex h-[170px] items-center justify-center px-[18px] text-center"
                style={{ background: "oklch(0.985 0 0)" }}
              >
                <span
                  className="slide-body-lg wa-underline"
                  style={{
                    fontWeight: 500,
                    letterSpacing: "-0.01em",
                    color: "oklch(0.3 0 0)",
                  }}
                >
                  {c}
                </span>
              </div>
            </Rise>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}

/* --------------------------------------------------------- 10 — CTA */
export function Slide10() {
  return (
    <div
      className="slide-content"
      style={{ background: "oklch(0.115 0 0)", color: "oklch(0.98 0 0)" }}
    >
      <div
        className="wa-fade absolute inset-0"
        style={{
          ["--d" as string]: "200ms",
          backgroundImage:
            "radial-gradient(60% 60% at 78% 40%, oklch(1 0 0 / 0.09) 0%, transparent 70%)",
        }}
      />
      <div className="absolute inset-0 grid grid-cols-[1.15fr_1fr] items-center gap-[80px] px-[112px] py-[96px]">
        <div>
          <Rise delay={100}>
            <div className="slide-kicker" style={{ color: "oklch(0.68 0 0)" }}>
              Booth conversation, not a cold email
            </div>
          </Rise>
          <Rise delay={220}>
            <h2 className="slide-title-lg mt-[30px]">
              Let's build something
              <br />
              great together.
            </h2>
          </Rise>
          <div
            className="wa-line mt-[44px] h-px w-full"
            style={{
              background: "oklch(1 0 0 / 0.18)",
              ["--d" as string]: "520ms",
            }}
          />
          <Rise delay={620}>
            <p
              className="slide-body-lg mt-[32px] max-w-[720px]"
              style={{ color: "oklch(0.74 0 0)" }}
            >
              Give us twenty minutes and we'll map exactly where your website and AI stack should
              earn — before you spend a rupee with us.
            </p>
          </Rise>
          <Rise delay={760}>
            <div className="mt-[46px] flex flex-wrap gap-x-[64px] gap-y-[22px]">
              <span className="slide-body flex items-center gap-[14px]">
                <Mail size={24} strokeWidth={1.5} /> hello@webanatomy.in
              </span>
              <span className="slide-body flex items-center gap-[14px]">
                <Phone size={24} strokeWidth={1.5} /> +91 970 503 0977
              </span>
              <span
                className="slide-body flex items-center gap-[14px]"
                style={{ color: "oklch(0.72 0 0)" }}
              >
                <MapPin size={24} strokeWidth={1.5} /> Madhapur, Hyderabad
              </span>
            </div>
          </Rise>
        </div>

        <div className="flex flex-col items-center justify-center">
          <Rise delay={340}>
            <div className="relative flex items-center justify-center">
              <span
                className="absolute h-[300px] w-[300px] rounded-full border"
                style={{
                  borderColor: "oklch(1 0 0 / 0.18)",
                  animation: "wa-pulse-ring 3.4s ease-out infinite",
                }}
              />
              <span
                className="absolute h-[300px] w-[300px] rounded-full border"
                style={{
                  borderColor: "oklch(1 0 0 / 0.14)",
                  animation: "wa-pulse-ring 3.4s ease-out 1.7s infinite",
                }}
              />
              <div className="wa-float">
                <Mark tone="dark" size={210} />
              </div>
            </div>
          </Rise>
          <Rise delay={860}>
            <p className="slide-subtitle mt-[56px]" style={{ letterSpacing: "0.06em" }}>
              webanatomy.in
            </p>
          </Rise>
        </div>
      </div>

      <span className="slide-chrome absolute bottom-[38px] left-[112px]" style={{ opacity: 0.4 }}>
        WEB ANATOMY — SINCE 2018
      </span>
      <span className="slide-chrome absolute bottom-[38px] right-[112px]" style={{ opacity: 0.4 }}>
        10 / 10
      </span>
    </div>
  );
}
