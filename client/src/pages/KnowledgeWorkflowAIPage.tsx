import { useEffect, useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

import heroImg from "@assets/Knowledge-&-workflowHero.png";
import kwAiPic2 from "@assets/Knowledge WF AI Pic 2.png";
import kwAiPic3 from "@assets/Knowledge WF AI Pic 3.png";
import kwAiPic4 from "@assets/Knowledge WF AI Pic 4.png";
import kwAiPic5 from "@assets/Knowledge WF AI Pic 5.png";

const SLIDES = [
  {
    id: "knowledge-ai",
    tag: "PRODUCTS",
    name: "Knowledge AI",
    description:
      "Precision at the speed of 2026. We leverage advanced AI to deliver the industry's most accurate bids, ensuring your project is built on a foundation of data, not guesswork.",
    highlight: "foundation of data",
    accentClass: "bg-[#5E17EB]",
    image: kwAiPic2,
  },
  {
    id: "workflow",
    tag: "PRODUCTS",
    name: "Workflow Automation",
    description:
      "Dominate the 2026 construction market with AI-driven speed that outpaces every competitor's manual takeoff. Our system captures 98% accuracy to eliminate the human errors that kill your margins and project viability. Start securing data-backed wins that turn every bid into a high-profit reality.",
    highlight: "98% accuracy",
    accentClass: "bg-[#39827a]",
    image: kwAiPic3,
  },
];

function KnowledgeWorkflowSlider() {
  const [index, setIndex] = useState(0);
  const slide = SLIDES[index];

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 5000);
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
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-sm ${slide.accentClass}`}
                >
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
                onClick={() => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#111827] text-white hover:bg-[#1f2937] transition-colors"
                aria-label="Previous section"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setIndex((i) => (i + 1) % SLIDES.length)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#5E17EB] text-white hover:bg-[#4b12c2] transition-colors"
                aria-label="Next section"
              >
                <ArrowRight className="w-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const KEY_BENEFITS = [
  "Accelerated Quantity Takeoffs slash estimation time by up to 90% by using computer vision to automate material counts from 2D and 3D plans.",
  "Surgical Cost Accuracy eliminates manual spreadsheet errors and typos to achieve near-perfect precision in every line item and calculation.",
  "Proactive Risk Intelligence automatically flags predatory contract clauses and hidden project risks before you ever commit to a bid.",
  "Intelligent Subcontractor Matching increases bid participation by 30% by automatically aligning the right trades to your specific project scopes.",
  "Data-Backed Profit Protection preserves your margins by benchmarking real-time market fluctuations against your firm's historical project data.",
  "Comprehensive Scope Coverage ensures no detail is missed by using deep-learning scans to extract every requirement from massive specification books.",
  "Optimized Win Rates allow you to submit faster, more competitive proposals that are statistically proven to secure more profitable work.",
];

const ROI_TABLE_ROWS: { benefit: string; before: string; after: string; impact: string }[] = [
  {
    benefit: "Quantity Takeoffs",
    before: "1–2 weeks of manual measurement and pixel-counting.",
    after: "Under 60 minutes via automated computer vision.",
    impact: "90% reduction in pre-con labor costs.",
  },
  {
    benefit: "Estimation Accuracy",
    before: "5–10% variance due to human error and missed lines.",
    after: "98%+ precision with automated error-detection.",
    impact: "Eliminates costly over/under-estimation errors.",
  },
  {
    benefit: "Risk Assessment",
    before: 'Subjective "gut feel" and manual contract review.',
    after: "Instant flags for predatory clauses and high-risk terms.",
    impact: 'Protects the firm from "bid-trap" projects.',
  },
  {
    benefit: "Subcontractor Buy-in",
    before: "Generic email blasts with low response rates.",
    after: "Strategic matching based on trade and availability.",
    impact: "30% increase in bid participation.",
  },
  {
    benefit: "Profit Margins",
    before: "Reactive pricing based on outdated market data.",
    after: "Real-time benchmarking against historical data.",
    impact: "3–7% increase in total project profitability.",
  },
  {
    benefit: "Scope Coverage",
    before: "Missing details in massive specification books.",
    after: "100% data extraction of all project requirements.",
    impact: "40% fewer unplanned Change Orders.",
  },
  {
    benefit: "Win Rates",
    before: "Slow turnaround; often the last to submit.",
    after: "Speed-to-lead with data-optimized, competitive bids.",
    impact: "Up to 300% increase in successful project wins.",
  },
];

const FEATURE_DEEP_DIVE_INTRO =
  "Our AI powered Takeoff Engine utilizes advanced computer vision to automate 2D material measurements with surgical precision in minutes. Simultaneously, we scan thousands of pages of documentation and instantly flag hidden contract risks. To protect your margins from volatility, we compare up-to-date pricing against a database of about 92,000 products thereby integrating real-time global supply chain pricing directly into your estimate. Finally, our model optimizes project variations to find the most strategic, high-margin construction path for every proposal.";

export default function KnowledgeWorkflowAIPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <Navbar />
      <main className="pt-16">
        <section className="w-full relative overflow-hidden bg-white" aria-label="Knowledge and Workflow AI hero">
          <div
            className="relative w-full max-h-[85vh] min-h-[320px] md:min-h-[400px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImg})`, aspectRatio: "1920 / 810" }}
          />
          <div className="hidden md:block absolute inset-0">
            <div className="mx-auto w-full pl-4 pr-4 pt-4 md:pl-10 md:pt-6 lg:pl-16 lg:pt-8">
              <div className="inline-flex max-w-xl bg-black/35 text-primary-foreground rounded-2xl px-5 py-4 md:px-8 md:py-6 shadow-xl">
                <div className="space-y-3">
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">Knowledge and Workflow AI</h1>
                  <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                    &ldquo;AI-Powered Bidding. Human-Driven Excellence. Smarter estimates for a faster future.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-14 md:pt-20 pb-0 section-soft">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              Precision at the speed of 2026. We leverage advanced AI to deliver the industry&apos;s most accurate bids, ensuring your project is built on a foundation of data, not guesswork.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Dominate the 2026 construction market with AI-driven speed that outpaces every competitor&apos;s manual takeoff. Our system captures 98% accuracy to eliminate the human errors that kill your margins and project viability. Start securing data-backed wins that turn every bid into a high-profit reality.
            </p>
          </div>
        </section>

        <KnowledgeWorkflowSlider />

        <section className="py-14 md:py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">Key benefits</h2>
              <div className="h-1 w-16 rounded-full bg-primary" />
            </div>
            <ul className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed list-none">
              {KEY_BENEFITS.map((item) => (
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
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              The ROI of AI: Traditional vs AI-Powered Bidding
            </h3>
            <div className="h-1 w-16 rounded-full bg-primary mb-8" />
            <div className="overflow-x-auto rounded-2xl border border-primary/20 bg-[hsl(0,0%,98%)]">
              <table className="w-full min-w-[760px] text-sm md:text-base">
                <thead className="bg-[hsl(262,88%,96%)] text-foreground">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold">Key Benefit</th>
                    <th className="text-left px-4 py-3 font-semibold">Traditional Bidding (Before)</th>
                    <th className="text-left px-4 py-3 font-semibold">AI-Powered Bidding (After)</th>
                    <th className="text-left px-4 py-3 font-semibold">Measurable ROI Impact</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  {ROI_TABLE_ROWS.map((row) => (
                    <tr key={row.benefit} className="border-t border-border/70">
                      <td className="px-4 py-3 align-top">{row.benefit}</td>
                      <td className="px-4 py-3 align-top">{row.before}</td>
                      <td className="px-4 py-3 align-top">{row.after}</td>
                      <td className="px-4 py-3 align-top">{row.impact}</td>
                    </tr>
                  ))}
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
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{FEATURE_DEEP_DIVE_INTRO}</p>
              </div>
              <div className="p-8 md:p-12 lg:p-14 space-y-16 md:space-y-24 bg-[hsl(0,0%,96%)]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">Knowledge AI</h3>
                    <div className="h-1 w-16 rounded-full bg-primary mb-6" />
                    <p className="text-muted-foreground leading-relaxed">
                      Our platform doesn&apos;t just give you an AI calculator, it provides an automated bid response engine. The platform is integrated with up-to-date market pricing to ensure real-time adjustments as market prices shift and project documents evolve, so your human experts can focus on strategy instead of spreadsheets. While traditional bidding methods require significant human input, we automate the &apos;bid-cycle&apos;—from the first plan download to the final subcontractor follow-up, all infused with &ldquo;human-in-the-loop&rdquo; to ensure bid accuracy that maximizes win rates right out the gate.
                    </p>
                    <Link href="/calendar" className="inline-block mt-6">
                      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full">
                        Get a demo <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                  <div className="aspect-video rounded-xl overflow-hidden">
                    <img src={kwAiPic4} alt="Knowledge AI" className="w-full h-full object-cover" />
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                  <div className="order-2 lg:order-2">
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">Workflow Automation</h3>
                    <div className="h-1 w-16 rounded-full bg-primary mb-6" />
                    <p className="text-muted-foreground leading-relaxed">
                      Workflow automation in the construction industry has evolved beyond isolated tools into fully integrated, intelligent systems that manage the entire project lifecycle. This shift moves the focus from manually executing tasks to orchestrating complex, networked operations, all while significantly reducing the time to response. The core advantage is transforming human roles from reactive problem-solvers buried in administrative paperwork to strategic decision-makers focused on performance and quality.
                    </p>
                    <Link href="/calendar" className="inline-block mt-6">
                      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full">
                        Get a demo <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                  <div className="order-1 lg:order-1 aspect-video rounded-xl overflow-hidden">
                    <img src={kwAiPic5} alt="Workflow Automation" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
