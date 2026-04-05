import { useEffect, useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

import contactCenterHeroImg from "@assets/ContactCenterHero.png";
import contactCenterFeature1Img from "@assets/ContactCenterFeature1.png";
import contactCenterFeature2Img from "@assets/ContactCenterFeature2.png";
import contactCenterFeature3Img from "@assets/ContactCenterFeature3.png";

const CONTACT_CENTER_SLIDES = [
  {
    id: "ai-agents",
    tag: "Products",
    name: "AI Agents",
    description:
      "Deliver exceptional CX for less, with human-centric AI agents you can trust. Cresta AI Agent delivers human-like conversations across channels and languages that adapt to customer needs while safeguarding your brand and data.",
    highlight: "human-like conversations",
    accentClass: "bg-[#5E17EB]",
    image: contactCenterFeature1Img,
  },
  {
    id: "agent-assist",
    tag: "Products",
    name: "Agent Assist",
    description:
      "Our Agent Assist gives every agent superpowers across every channel, guiding them with best practices, precise answers, and AI summaries so they can get better results, faster.",
    highlight: "superpowers",
    accentClass: "bg-[#39827a]",
    image: contactCenterFeature2Img,
  },
  {
    id: "conversation-intelligence",
    tag: "Products",
    name: "Conversation Intelligence",
    description:
      "Our Conversation Intelligence uncovers signals within every conversation and captures the voice of the customer at scale. It turns insights into stronger business outcomes through natural language analysis, AI driven quality management, and outcome focused coaching.",
    highlight: "stronger business outcomes",
    accentClass: "bg-[#1f6fff]",
    image: contactCenterFeature3Img,
  },
];

function ContactCenterProductsSlider() {
  const [index, setIndex] = useState(0);
  const slide = CONTACT_CENTER_SLIDES[index];

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % CONTACT_CENTER_SLIDES.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative pt-14 md:pt-20 pb-14 md:pb-20 bg-background overflow-hidden" data-section="products">
      <div className="relative w-full max-w-6xl mx-auto px-4 md:px-6">
        <div className="relative rounded-3xl bg-[#020617] text-white overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 p-4 md:p-6 lg:p-8 items-center">
            <div className="relative h-full">
              <div className="relative h-[260px] md:h-[310px] lg:h-[360px] rounded-xl overflow-hidden bg-foreground/10">
                <img src={slide.image} alt={slide.name} className="w-full h-full object-cover object-center" />
              </div>
            </div>
            <div className="space-y-4 md:space-y-5 max-w-md md:max-w-lg">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">{slide.tag}</span>
                <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-sm ${slide.accentClass}`}>
                  {slide.name}
                </span>
              </div>
              <p className="text-base md:text-lg text-white/80 leading-relaxed">
                {slide.description.split(slide.highlight).map((part, i, parts) => (
                  <span key={i}>
                    {part}
                    {i < parts.length - 1 ? <span className="font-semibold text-white">{slide.highlight}</span> : null}
                  </span>
                ))}
              </p>
            </div>
          </div>

          <div className="hidden md:flex absolute inset-x-0 bottom-3 justify-end px-4 md:px-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 backdrop-blur-sm p-1 shadow-lg shadow-black/40">
              <button
                type="button"
                onClick={() => setIndex((i) => (i - 1 + CONTACT_CENTER_SLIDES.length) % CONTACT_CENTER_SLIDES.length)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#111827] text-white hover:bg-[#1f2937] transition-colors"
                aria-label="Previous contact center product"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setIndex((i) => (i + 1) % CONTACT_CENTER_SLIDES.length)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#5E17EB] text-white hover:bg-[#4b12c2] transition-colors"
                aria-label="Next contact center product"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ContactCenterPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <Navbar />

      <main className="pt-16">
        <section className="w-full relative overflow-hidden bg-white" aria-label="Contact Center Platform hero">
          <div
            className="relative w-full max-h-[85vh] min-h-[320px] md:min-h-[400px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${contactCenterHeroImg})`, aspectRatio: "1920 / 810" }}
          />

          <div className="hidden md:block absolute inset-0">
            <div className="mx-auto w-full pl-4 pr-4 pt-4 md:pl-10 md:pt-6 lg:pl-16 lg:pt-8">
              <div className="inline-flex max-w-xl bg-black/35 text-primary-foreground rounded-2xl px-5 py-4 md:px-8 md:py-6 shadow-xl">
                <div className="space-y-3">
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">Contact Center Platform</h1>
                  <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                    Save money, increase revenue, and build customer loyalty with the only unified platform for human and AI Agents built for enterprise scale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-14 md:pt-20 pb-0 section-soft">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Our Contact Center platform combines AI Agents, Agent Assist, and Conversation Intelligence to improve how customer interactions are managed across channels.
              Together, these capabilities enable natural conversations, real-time agent support, and deeper operational insight, helping organizations improve service quality,
              reduce handle time, strengthen coaching, and drive more consistent business outcomes.
            </p>
          </div>
        </section>

        <ContactCenterProductsSlider />

        <section className="py-14 md:py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">Key benefits</h2>
              <div className="h-1 w-16 rounded-full bg-primary" />
            </div>
            <ul className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed list-none">
              {[
                "Transform conversations and workflows through a unified platform purpose built for the contact center.",
                "Expert led deployment to ensure Contact Center AI is implemented effectively beyond core AI models and machine learning operations.",
                "Flexible integration across modern APIs and legacy systems to maximize value from existing technology investments.",
                "Safe GenAI deployment by combining deterministic systems with the power of large language models.",
                "Multi model architecture designed to strengthen reasoning and decision quality.",
                "Natural low latency voice to create more human like customer interactions.",
                "Deep conversation analysis to guide more effective automation strategies.",
                "AI-driven behavioral analysis to improve performance over time.",
                "Seamless collaboration between human and virtual agents to strengthen shared learning.",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <span className="text-primary shrink-0 w-1.5 h-1.5 bg-current rounded-none mt-[0.6em]" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="pb-14 md:pb-20 bg-background">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">Real World Results. At Scale.</h3>
            <div className="h-1 w-16 rounded-full bg-primary mb-8" />
            <div className="overflow-x-auto rounded-2xl border border-primary/20 bg-[hsl(0,0%,98%)]">
              <table className="w-full min-w-[760px] text-sm md:text-base">
                <thead className="bg-[hsl(262,88%,96%)] text-foreground">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold">Industry</th>
                    <th className="text-left px-4 py-3 font-semibold">Use Case</th>
                    <th className="text-left px-4 py-3 font-semibold">Scale of Deployment</th>
                    <th className="text-left px-4 py-3 font-semibold">Benefits</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-t border-border/70"><td className="px-4 py-3">Aviation</td><td className="px-4 py-3">Care & efficiency</td><td className="px-4 py-3">8,900 agents</td><td className="px-4 py-3">15% lower average handle time</td></tr>
                  <tr className="border-t border-border/70"><td className="px-4 py-3">Home Security</td><td className="px-4 py-3">Care. Sales. Retention</td><td className="px-4 py-3">600 agents</td><td className="px-4 py-3">30 pt increase in NPS</td></tr>
                  <tr className="border-t border-border/70"><td className="px-4 py-3">Banking</td><td className="px-4 py-3">Collections</td><td className="px-4 py-3">600 agents</td><td className="px-4 py-3">11% higher promise-to-pay</td></tr>
                  <tr className="border-t border-border/70"><td className="px-4 py-3">Telecommunications</td><td className="px-4 py-3">Sales</td><td className="px-4 py-3">3,400 agents</td><td className="px-4 py-3">50% higher sales conversion</td></tr>
                  <tr className="border-t border-border/70"><td className="px-4 py-3">Consumer Finance</td><td className="px-4 py-3">Care & efficiency</td><td className="px-4 py-3">600 agents</td><td className="px-4 py-3">40% lower average handle time</td></tr>
                </tbody>
              </table>
            </div>
            <div className="mt-8">
              <Link href="/calendar" className="inline-block">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full">
                  Get a demo <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20 section-soft">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="rounded-3xl border border-primary/20 bg-[hsl(0,0%,98%)] shadow-sm overflow-hidden">
              <div className="p-8 md:p-12 lg:p-14 border-b border-primary/20 bg-[hsl(262,88%,96%)]">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">Feature Deep Dive</h2>
                <div className="h-1 w-20 rounded-full bg-primary mb-6" />
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Our Contact Center platform combines AI Agents, Agent Assist, and Conversation Intelligence to improve how customer interactions are managed across channels.
                  Together, these capabilities enable natural conversations, real-time agent support, and deeper operational insight, helping organizations improve service quality,
                  reduce handle time, strengthen coaching, and drive more consistent business outcomes.
                </p>
              </div>
              <div className="p-8 md:p-12 lg:p-14 space-y-16 md:space-y-24 bg-[hsl(0,0%,96%)]">
                {[
                  {
                    title: "AI Agents",
                    image: contactCenterFeature1Img,
                    description:
                      "Delight customers with human like conversations through AI agents designed to sound natural and stay aligned with your brand. Optimized for the unique demands of each channel, the agents context and transition seamlessly across interactions to resolve issues more effectively. Deep conversational insights help identify what to automate and reveal the behaviors that drive stronger outcomes.",
                    reverse: false,
                  },
                  {
                    title: "Agent Assist",
                    image: contactCenterFeature2Img,
                    description:
                      "Empower agents with real-time guidance and conversation specific workflows that improve confidence and speed from day one. We also combine live interaction signals with on screen context to deliver precise answers instantly. Customizable AI summaries reduce handle time, while AI support for chat and email continues to improve efficiency by reducing manual typing and applying insights learned from top performing agents.",
                    reverse: true,
                  },
                  {
                    title: "Conversation Intelligence",
                    image: contactCenterFeature3Img,
                    description:
                      "Turn customer conversations into better business decisions with AI powered insights that reveal context, behavior, and outcomes beyond simple keyword tracking. We analyze conversations across channels to identify what drives results, helping teams focus more on coaching agents, removing operational blockers, and improving performance at lower cost.",
                    reverse: false,
                  },
                ].map((section) => (
                  <div key={section.title} className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    <div className={section.reverse ? "order-2 lg:order-2" : ""}>
                      <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">{section.title}</h3>
                      <div className="h-1 w-16 rounded-full bg-primary mb-6" />
                      <p className="text-muted-foreground leading-relaxed">{section.description}</p>
                      <Link href="/calendar" className="inline-block mt-6">
                        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full">
                          Get a demo <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                    <div className={`${section.reverse ? "order-1 lg:order-1" : ""} aspect-video rounded-xl overflow-hidden`}>
                      <img src={section.image} alt={section.title} className="w-full h-full object-cover" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

