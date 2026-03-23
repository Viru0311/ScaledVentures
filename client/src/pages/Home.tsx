import { useEffect, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Calendar, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const SERVICE_CARD_COLORS = ["#6a2de2", "#39827a", "#1f6fff", "#78afdb", "#feac00"];

const VISUAL_GRADIENTS = [
  "linear-gradient(135deg, #1a0f33 0%, #47208f 45%, #6a2de2 100%)",
  "linear-gradient(135deg, #0f2d2b 0%, #24665f 45%, #39827a 100%)",
  "linear-gradient(135deg, #0d1f4d 0%, #1b4ca8 45%, #1f6fff 100%)",
  "linear-gradient(135deg, #143455 0%, #4f8ec0 45%, #78afdb 100%)",
  "linear-gradient(135deg, #5c3c00 0%, #c78600 45%, #feac00 100%)",
];

function ServiceSuiteSection({
  title,
  subtitle,
  description,
  panelTone = 0,
  reverse = false,
}: {
  title: string;
  subtitle: string;
  description: string;
  panelTone?: number;
  reverse?: boolean;
}) {
  return (
    <section className="py-14 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div className="rounded-2xl border border-border/60 bg-card/40 p-8 md:p-10 lg:min-h-[420px] flex flex-col justify-center">
            <span className="text-primary font-bold tracking-widest uppercase text-[1.05rem] mb-4 block">
              Product Suite
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mt-0 mb-4 leading-tight text-left -ml-[2px]">
              {title}
            </h2>
            <p className="text-xl md:text-2xl font-medium text-foreground mb-6">{subtitle}</p>
            <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">{description}</p>
            <Link href="/get-in-touch">
              <a className="link-underline inline-flex items-center gap-1 text-primary font-semibold">
                Learn More <span className="ml-1">-&gt;</span>
              </a>
            </Link>
          </div>
          <div
            className="relative rounded-2xl overflow-hidden shadow-lg shadow-primary/20 border border-white/10 lg:min-h-[420px] p-8 md:p-10 flex flex-col justify-end"
            style={{ background: VISUAL_GRADIENTS[panelTone % VISUAL_GRADIENTS.length] }}
          >
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.35),_transparent_55%)]" />
            <div className="relative z-10">
              <p className="text-white/80 text-sm uppercase tracking-[0.18em] mb-2">Scaled Ventures</p>
              <p className="text-white text-2xl md:text-3xl font-heading font-bold leading-tight">{title}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SeeTheResultsCarousel() {
  const slides = [
    { label: "Contact Center Platform", tone: 0 },
    { label: "Data Compression Platform", tone: 1 },
    { label: "Knowledge & Workflow AI", tone: 2 },
    { label: "Product Development Platform", tone: 4 },
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <section className="relative py-14 md:py-20 bg-background overflow-hidden">
      <div className="relative w-full max-w-6xl mx-auto px-4 md:px-6">
        <div className="relative min-h-[400px] md:min-h-[500px] rounded-2xl overflow-hidden">
          <div className="absolute inset-0">
            {slides.map((slide, i) => (
              <div
                key={slide.label}
                className={`absolute inset-0 transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`}
              >
                <div
                  className="w-full h-full"
                  style={{ background: VISUAL_GRADIENTS[slide.tone % VISUAL_GRADIENTS.length] }}
                />
                <div className="absolute bottom-4 right-4 bg-white/95 text-foreground text-[1rem] sm:text-[1.2rem] md:text-[1.35rem] px-5 py-2 rounded-full backdrop-blur-sm shadow-md border border-white/70">
                  <span className="text-gradient font-semibold">{slide.label}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute inset-0 flex items-center justify-end px-4 z-20 pointer-events-none">
            <button
              type="button"
              onClick={() => setIndex((i) => (i + 1) % slides.length)}
              className="pointer-events-auto inline-flex items-center justify-center h-10 w-10 rounded-full bg-background/80 text-foreground shadow-md hover:bg-background"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-md p-4 md:p-8">
              <div className="rounded-2xl bg-foreground/80 backdrop-blur-sm p-5 md:p-8 border border-primary-foreground/10">
                <h2 className="text-2xl md:text-4xl font-heading font-bold text-primary-foreground mb-4 md:mb-6 leading-tight">
                  See the results
                  <br />
                  for yourself
                </h2>
                <Button
                  asChild
                  size="sm"
                  className="bg-primary hover:bg-primary/90 text-white font-extrabold rounded-full w-full sm:w-auto h-10 text-sm md:h-12 md:text-base ring-1 ring-white/20"
                >
                  <Link href="/calendar">
                    Book an appointment <Calendar className="ml-2 h-3 w-3 md:h-4 md:w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-background/10 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans selection:bg-primary/30">
      <Navbar />

      <section className="relative min-h-screen flex flex-col justify-center pt-24 md:pt-28 pb-14 md:pb-20 overflow-hidden hero-pattern">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/15 rounded-full blur-[140px] -z-10 opacity-60" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[400px] bg-primary/10 rounded-full blur-[100px] -z-10 opacity-40" />
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-12 items-center relative z-0 flex-1">
          <div className="z-10">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-[1.1] mb-6 tracking-tight">
              <span className="text-gradient">Scaled Ventures</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl leading-relaxed">
              We pair AI, Machine Learning, Product Development and System Integration to deliver intelligent
              technology solutions that help Enterprises and Government innovate, improve efficiency, manage
              complexity, and accelerate growth.
            </p>
            <p className="text-base md:text-lg text-foreground mb-8 max-w-2xl">
              <span className="font-semibold">Our offerings</span>
              <br />
              Contact Center | Data Compression | Knowledge &amp; Workflow AI | Product Development
            </p>
            <Link href="/get-in-touch">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full h-14 px-10 text-lg shadow-lg shadow-primary/20">
                Contact Us <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
          <div className="relative w-full lg:max-w-none mx-auto aspect-[7.9/4.9]">
            <div
              className="relative w-full h-full rounded-2xl overflow-hidden border border-border/60 shadow-2xl shadow-primary/10 lg:scale-[1.05] lg:origin-center"
              style={{ background: VISUAL_GRADIENTS[0] }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.4),_transparent_50%)] opacity-40" />
              <div className="absolute bottom-8 left-8 right-8 z-10">
                <p className="text-white/85 text-sm uppercase tracking-[0.2em] mb-3">Intelligent Technology Solutions</p>
                <p className="text-white text-2xl md:text-4xl font-heading font-bold leading-tight">
                  AI, Machine Learning, Product Development and System Integration
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceSuiteSection
        title="Contact Center"
        subtitle="Powering the world's leading customer experiences"
        description="AI is rapidly transforming Contact Centers and its impact transcends both agents and consumers. As a leading reseller of Cresta's modern contact center solutions, we help Enterprises and Government deliver delight across the customer journey with greater speed, visibility, and consistency."
        panelTone={0}
      />

      <ServiceSuiteSection
        title="Data Compression"
        subtitle="From Data Tokenization to Enterprise Scale"
        description="Data Storage is slated to increase 30% YoY with commensurate increases in infrastructure costs. As the primary reseller of Datasent's data compression and privacy solutions, we reduce workload costs while securely optimizing workflows, to keep pace with scale for Enterprise and Government environments."
        panelTone={1}
        reverse
      />

      <ServiceSuiteSection
        title="Knowledge and Workflow AI"
        subtitle="Automating construction RFP responses with AI"
        description="We unlock the ability to deliver accelerated RFP responses by automating the commercial construction bid review process. We bring Knowledge and Workflow AI together to format and deliver a final bid proposal that positions your Construction business for growth and success."
        panelTone={2}
      />

      <ServiceSuiteSection
        title="Product Development"
        subtitle="Propelling Businesses using Technology"
        description="Unlock innovation and spearhead new business opportunities by leveraging our expert advisory services and proven track record of revenue acceleration. We design and integrate custom product offerings that position Enterprises and Government for transformative growth."
        panelTone={4}
        reverse
      />

      <section className="py-14 md:py-20 section-soft">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
              One Partner
            </h2>
            <div className="text-lg md:text-xl text-muted-foreground space-y-3 mb-8">
              <p>Powering the world's leading customer experiences</p>
              <p>Transforming data storage through compression and privacy</p>
              <p>Leveraging Knowledge and Workflow AI to accelerate revenue cycles</p>
              <p>&amp; Unlocking growth through custom product and technology advisory services</p>
            </div>
            <Link href="/get-in-touch">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full px-8">
                Speak to an expert <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <SeeTheResultsCarousel />

      <section className="py-14 md:py-20 section-soft">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-10">Explore our services</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              "Contact Center",
              "Data Compression",
              "Knowledge & Workflow AI",
              "Product Development",
              "System Integration",
            ].map((service, idx) => (
              <Link key={service} href="/get-in-touch">
                <a
                  className="group block rounded-2xl p-6 min-h-[160px] text-white no-underline transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
                  style={{ backgroundColor: SERVICE_CARD_COLORS[idx] }}
                >
                  <div className="h-full flex flex-col justify-between">
                    <span className="font-heading font-bold text-lg leading-snug">{service}</span>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
