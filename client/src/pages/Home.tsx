import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Calendar, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

import contactCenterImg from "../../../attached_assets/contact-center.png";
import dataCompressionImg from "../../../attached_assets/data-compression.png";
import productDevelopmentImg from "../../../attached_assets/product-development.png";
import contactCenterPlatformImg from "../../../attached_assets/contact-center-platform.png";
import dataCompressionPlatformImg from "../../../attached_assets/CarouselDataCompressionPlatform.png";
import knowledgeWorkflowImg from "../../../attached_assets/knowledge-&-workflow.png";
import productDevelopmentPlatformImg from "../../../attached_assets/ProductDevelopmentHero.png";
import torinosoftHeroImg from "../../../attached_assets/TorinosoftLandingPageImage.png";

const SERVICE_CARD_COLORS = ["#6a2de2", "#39827a", "#1f6fff", "#78afdb", "#feac00"];

const VISUAL_GRADIENTS = [
  "linear-gradient(135deg, #1a0f33 0%, #47208f 45%, #6a2de2 100%)",
  "linear-gradient(135deg, #0f2d2b 0%, #24665f 45%, #39827a 100%)",
  "linear-gradient(135deg, #0d1f4d 0%, #1b4ca8 45%, #1f6fff 100%)",
  "linear-gradient(135deg, #143455 0%, #4f8ec0 45%, #78afdb 100%)",
  "linear-gradient(135deg, #5c3c00 0%, #c78600 45%, #feac00 100%)",
];

const ONE_PARTNER_TAGLINES = [
  "Powering the world's leading customer experiences",
  "Unlocking growth through custom product and technology advisory services",
  "Transforming data storage through compression and privacy",
  "Leveraging Knowledge and Workflow AI to accelerate revenue cycles",
] as const;

const ONE_PARTNER_TRANSITION = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1] as const,
};

function OnePartnerRotatingTaglines() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % ONE_PARTNER_TAGLINES.length);
    }, 3000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div
      className="text-lg md:text-xl text-primary font-bold mb-3 md:mb-4 text-pretty px-2"
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="relative mx-auto flex min-h-[3.75rem] md:min-h-[4.25rem] w-full max-w-3xl items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.p
            key={index}
            className="text-center w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={ONE_PARTNER_TRANSITION}
          >
            {ONE_PARTNER_TAGLINES[index]}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}

function ServiceSuiteSection({
  title,
  subtitle,
  description,
  panelTone = 0,
  reverse = false,
  visualImageSrc,
  visualImageAlt,
  learnMoreHref = "/get-in-touch",
}: {
  title: string;
  subtitle: string;
  description: string;
  panelTone?: number;
  reverse?: boolean;
  visualImageSrc?: string;
  visualImageAlt?: string;
  learnMoreHref?: string;
}) {
  function TextSide({
    title,
    subtitle,
    description,
    learnMoreHref: href,
  }: {
    title: string;
    subtitle: string;
    description: string;
    learnMoreHref: string;
  }) {
    return (
      <div className="flex h-full flex-col py-4 md:py-6">
        <div>
          <span className="text-primary font-bold tracking-widest uppercase text-[1.05rem] mb-4 block">Product Suite</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mt-0 mb-4 leading-tight text-left -ml-[2px]">
            {title}
          </h2>
          <p className="text-xl md:text-2xl font-medium text-foreground mb-6">{subtitle}</p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{description}</p>
        </div>
        <Link href={href}>
          <a className="link-underline inline-flex items-center gap-1 text-primary font-semibold mt-6">
            Learn More <span className="ml-1">-&gt;</span>
          </a>
        </Link>
      </div>
    );
  }

  function VisualSide({
    title,
    panelTone,
    visualImageSrc,
    visualImageAlt,
  }: {
    title: string;
    panelTone: number;
    visualImageSrc?: string;
    visualImageAlt?: string;
  }) {
    return (
      <div className="relative w-full self-start aspect-[4/3] rounded-2xl overflow-hidden">
        {visualImageSrc ? (
          <img
            src={visualImageSrc}
            alt={visualImageAlt ?? title}
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{ background: VISUAL_GRADIENTS[panelTone % VISUAL_GRADIENTS.length] }}
          />
        )}

        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/45 via-black/20 to-black/5" />

        {!visualImageSrc ? (
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.35),_transparent_55%)]" />
        ) : null}
      </div>
    );
  }

  return (
    <section className="py-14 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {reverse ? (
            <>
              <VisualSide title={title} panelTone={panelTone} visualImageSrc={visualImageSrc} visualImageAlt={visualImageAlt} />
              <TextSide title={title} subtitle={subtitle} description={description} learnMoreHref={learnMoreHref} />
            </>
          ) : (
            <>
              <TextSide title={title} subtitle={subtitle} description={description} learnMoreHref={learnMoreHref} />
              <VisualSide title={title} panelTone={panelTone} visualImageSrc={visualImageSrc} visualImageAlt={visualImageAlt} />
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function SeeTheResultsCarousel() {
  const slides = [
    { label: "Contact Center Platform", imageSrc: contactCenterPlatformImg, tone: 0 },
    { label: "Product Development Platform", imageSrc: productDevelopmentPlatformImg, tone: 4 },
    { label: "Data Compression Platform", imageSrc: dataCompressionPlatformImg, tone: 1 },
    { label: "Knowledge & Workflow AI", imageSrc: knowledgeWorkflowImg, tone: 2 },
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
                {slide.imageSrc ? (
                  <img
                    src={slide.imageSrc}
                    alt={slide.label}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                ) : (
                  <div
                    className="w-full h-full"
                    style={{ background: VISUAL_GRADIENTS[slide.tone % VISUAL_GRADIENTS.length] }}
                  />
                )}
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
            <h1 className="text-5xl md:text-7xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-heading font-bold leading-[1.1] mb-6 tracking-tight">
              <span className="text-black">Product</span>{" "}
              <span className="text-gradient">Foundry</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl leading-relaxed">
              We pair AI, Machine Learning, Product Development and System Integration to deliver intelligent
              technology solutions that help Enterprises and Government innovate, improve efficiency, manage
              complexity, and accelerate growth.
            </p>
            <div className="text-base md:text-lg text-foreground mb-8 max-w-2xl">
              <span className="font-semibold block mb-3">Our offerings</span>
              <div className="grid grid-cols-2 gap-x-6 sm:gap-x-10 md:gap-x-14 gap-y-2.5 text-left">
                <span className="min-w-0">Contact Center</span>
                <span className="min-w-0">Product Development</span>
                <span className="min-w-0">Data Compression</span>
                <span className="min-w-0">Knowledge &amp; Workflow AI</span>
              </div>
            </div>
            <Link href="/get-in-touch">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full h-14 px-10 text-lg shadow-lg shadow-primary/20">
                Contact Us <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
          <div className="relative w-full lg:max-w-none mx-auto aspect-[7.9/4.9]">
            <div className="relative w-full h-full rounded-2xl overflow-hidden lg:scale-[1.05] lg:origin-center">
              <img
                src={torinosoftHeroImg}
                alt="Smart city skyline with digital data visualization overlay"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      <ServiceSuiteSection
        title="Contact Center"
        subtitle="Powering the world's leading customer experiences"
        description="AI is rapidly transforming Contact Centers and its impact transcends both agents and consumers. As a leading reseller of Cresta's modern contact center solutions, we help Enterprises and Government deliver delight across the customer journey with greater speed, visibility, and consistency."
        panelTone={0}
        visualImageSrc={contactCenterImg}
        visualImageAlt="Contact center"
      />

      <ServiceSuiteSection
        title="Product Development"
        subtitle="Propelling Businesses using Technology"
        description="Unlock innovation and spearhead new business opportunities by leveraging our expert advisory services and proven track record of revenue acceleration. We design and integrate custom product offerings that position Enterprises and Government for transformative growth."
        panelTone={4}
        visualImageSrc={productDevelopmentImg}
        visualImageAlt="Product development"
        reverse
      />

      <ServiceSuiteSection
        title="Data Compression"
        subtitle="From Data Tokenization to Enterprise Scale"
        description="Data Storage is slated to increase 30% YoY with commensurate increases in infrastructure costs. As the primary reseller of Datasent's data compression and privacy solutions, we reduce workload costs while securely optimizing workflows, to keep pace with scale for Enterprise and Government environments."
        panelTone={1}
        visualImageSrc={dataCompressionImg}
        visualImageAlt="Data compression"
      />

      <ServiceSuiteSection
        title="Knowledge and Workflow AI"
        subtitle="Automating construction RFP responses with AI"
        description="We unlock the ability to deliver accelerated RFP responses by automating the commercial construction bid review process. We bring Knowledge and Workflow AI together to format and deliver a final bid proposal that positions your Construction business for growth and success."
        panelTone={2}
        visualImageSrc={knowledgeWorkflowImg}
        visualImageAlt="Knowledge and Workflow AI"
        learnMoreHref="/knowledge-workflow-ai"
        reverse
      />

      <section className="py-10 md:py-14 section-soft">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-2 md:mb-3 leading-tight">
              One Partner
            </h2>
            <OnePartnerRotatingTaglines />
            <Link href="/platform-architecture">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full px-8">
                Explore Service Architecture <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <SeeTheResultsCarousel />

      <section className="py-14 md:py-20 section-soft">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-10">Explore our services</h2>
          <div className="max-w-6xl mx-auto lg:flex lg:items-stretch lg:gap-4">
            {/* Left: 2/3 width, 2x2 grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-x-4 lg:gap-y-4 auto-rows-fr lg:w-2/3">
              <Link href="/get-in-touch">
                <a
                  className="group block rounded-2xl p-6 min-h-[160px] lg:h-[160px] text-white no-underline transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
                  style={{ backgroundColor: SERVICE_CARD_COLORS[0] }}
                >
                  <div className="h-full flex flex-col justify-between">
                    <span className="font-heading font-bold text-lg leading-snug">Contact Center</span>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </a>
              </Link>

              <Link href="/get-in-touch">
                <a
                  className="group block rounded-2xl p-6 min-h-[160px] lg:h-[160px] text-white no-underline transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
                  style={{ backgroundColor: SERVICE_CARD_COLORS[3] }}
                >
                  <div className="h-full flex flex-col justify-between">
                    <span className="font-heading font-bold text-lg leading-snug">Product Development</span>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </a>
              </Link>

              <Link href="/get-in-touch">
                <a
                  className="group block rounded-2xl p-6 min-h-[160px] lg:h-[160px] text-white no-underline transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
                  style={{ backgroundColor: SERVICE_CARD_COLORS[1] }}
                >
                  <div className="h-full flex flex-col justify-between">
                    <span className="font-heading font-bold text-lg leading-snug">Data Compression</span>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </a>
              </Link>

              <Link href="/knowledge-workflow-ai">
                <a
                  className="group block rounded-2xl p-6 min-h-[160px] lg:h-[160px] text-white no-underline transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
                  style={{ backgroundColor: SERVICE_CARD_COLORS[2] }}
                >
                  <div className="h-full flex flex-col justify-between">
                    <span className="font-heading font-bold text-lg leading-snug">Knowledge &amp; Workflow AI</span>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </a>
              </Link>
            </div>

            {/* Right: 1/3 width, full height */}
            <div className="mt-4 lg:mt-0 lg:w-1/3">
              <Link href="/get-in-touch">
                <a
                  className="group block rounded-2xl p-6 min-h-[160px] lg:h-[336px] text-white no-underline transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
                  style={{ backgroundColor: SERVICE_CARD_COLORS[4] }}
                >
                  <div className="h-full flex flex-col justify-between">
                    <span className="font-heading font-bold text-lg leading-snug">System Integration</span>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
