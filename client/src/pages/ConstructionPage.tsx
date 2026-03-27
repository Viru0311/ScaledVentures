import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

import constructionHeroImg from "@assets/knowledge-&-workflow.png";
import constructionFeature1Img from "@assets/product-development.png";
import constructionFeature2Img from "@assets/contact-center-platform.png";

const KEY_CHALLENGES = [
  "Manual takeoff errors on critical project components frequently lead to multi-million dollar discrepancies.",
  "Non-AI bidding workflows often take weeks to complete causing firms to miss high-value projects.",
  "Static pricing risks leave bids vulnerable to sudden spikes in material costs because they lack the protection of real-time market data integration.",
  "Poor project selection results in firms wasting thousands of dollars on bid-responses with a low statistical probability of winning.",
  "Margin erosion occurs when inaccurate \"gut-feeling\" estimates create razor-thin profits that are easily erased by even minor site delays.",
  "Data silos prevent valuable historical performance from informing future strategy, keeping critical insights trapped in disconnected, dead spreadsheets.",
  "Estimator burnout results from wasting top-tier talent on tedious manual math and data entry instead of high-level project engineering.",
];

export default function ConstructionPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <Navbar />

      <main className="pt-16">
        <section className="w-full relative overflow-hidden bg-white" aria-label="Construction hero">
          <div
            className="relative w-full max-h-[85vh] min-h-[320px] md:min-h-[400px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${constructionHeroImg})`, aspectRatio: "1920 / 810" }}
          />
          <div className="hidden md:block absolute inset-0">
            <div className="mx-auto w-full pl-4 pr-4 pt-4 md:pl-10 md:pt-6 lg:pl-16 lg:pt-8">
              <div className="inline-flex max-w-2xl bg-black/35 text-primary-foreground rounded-2xl px-5 py-4 md:px-8 md:py-6 shadow-xl">
                <div className="space-y-3">
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">Construction</h1>
                  <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                    We combine Knowledge and Workflow AI to automate construction bid workflows and accelerate RFP response cycles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-10 md:pt-14 section-soft">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-foreground">Overview</h2>
            <div className="h-1 w-16 rounded-full bg-primary mb-6" />
            <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-stretch">
              <div>
                <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Commercial construction bid cycles are manually intensive, requiring input from multiple teams. The current approach, when streamlined with automation will significantly reduce the impact from recursive workflows, bid-rework and departmental friction, thereby eliminating hidden costs, delays and overruns that risk project success before it even begins.
                  </p>
                  <p>
                    At Scaled Ventures, our AI computer vision model performs instant, accurate takeoffs (RFP data OCR ingestion) while predictive analytics provide real-time pricing. Instead of weeks of spreadsheet grinding, AI analyzes historical data to automate project discovery and selection. This replaces intuitive estimation with a data-driven strategy, allowing firms to scale their bid volume with incredible speed and precision.
                  </p>
                </div>
              </div>
              <div className="relative min-h-[340px] md:min-h-[380px] lg:min-h-[420px] rounded-xl overflow-hidden">
                <img src={constructionFeature1Img} alt="Construction workflows" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="pt-10 md:pt-14 bg-background">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-foreground">Key Challenges</h2>
            <div className="h-1 w-16 rounded-full bg-primary mb-8" />
            <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-stretch">
              <ul className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed list-none">
                {KEY_CHALLENGES.map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <span className="text-primary shrink-0 w-1.5 h-1.5 bg-current rounded-none mt-[0.6em]" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="relative min-h-[340px] md:min-h-[380px] lg:min-h-[420px] rounded-xl overflow-hidden">
                <img src={constructionFeature2Img} alt="Construction key challenges" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="pt-10 md:pt-14 pb-10 md:pb-14 section-soft">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-foreground">
              Our Approach: Bidding Reimagined
            </h2>
            <div className="h-1 w-16 rounded-full bg-primary mb-6" />
            <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-stretch">
              <div className="order-2 lg:order-1 relative min-h-[340px] md:min-h-[380px] lg:min-h-[420px] rounded-xl overflow-hidden">
                <img src={constructionFeature2Img} alt="AI-driven construction bidding" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="order-1 lg:order-2">
                <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-foreground">Accuracy You Can Bank On:</strong> Computer vision reduces manual takeoff errors and replaces intuition-based estimates with validated pricing models to protect margins.
                  </p>
                  <p>
                    <strong className="text-foreground">Velocity That Scales:</strong> Automated workflows compress proposal cycles from weeks to minutes and reduce estimator burnout by removing repetitive data-entry tasks.
                  </p>
                  <p>
                    <strong className="text-foreground">Intelligence That Drives Strategy:</strong> Live market data and historical win-pattern analysis improve project selection, pricing confidence, and long-term growth planning.
                  </p>
                </div>
                <Link href="/calendar" className="inline-block mt-6">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full">
                    Talk to an Expert <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

