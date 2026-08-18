import type { ComponentType } from "react";
import { Slide01, Slide02, Slide03, Slide04, Slide05 } from "./slides/SlidesA";
import { Slide06, Slide07, Slide08, Slide09, Slide10 } from "./slides/SlidesB";

export type Slide = { id: string; title: string; Component: ComponentType };

export const slides: Slide[] = [
  { id: "open", title: "Opening", Component: Slide01 },
  { id: "gap", title: "The gap", Component: Slide02 },
  { id: "story", title: "Brand story", Component: Slide03 },
  { id: "why", title: "Why now", Component: Slide04 },
  { id: "system", title: "What we build", Component: Slide05 },
  { id: "ai", title: "Web + AI", Component: Slide06 },
  { id: "services", title: "Capability", Component: Slide07 },
  { id: "proof", title: "Track record", Component: Slide08 },
  { id: "clients", title: "Clients", Component: Slide09 },
  { id: "cta", title: "Let's talk", Component: Slide10 },
];
