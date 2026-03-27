import { useEffect, useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

import productDevelopmentHeroImg from "@assets/ProductDevelopmentHero.png";
import productDevelopmentFeature1Img from "@assets/ProductDevelopmentFeature1.png";
import productDevelopmentFeature2Img from "@assets/ProductDevelopmentFeature2.png";
import productDevelopmentFeature4Img from "@assets/ProductDevelopmentFeature4.png";

const PRODUCT_DEVELOPMENT_SLIDES = [
  {
    id: "digital-experiences",
    tag: "End-to-End Digital Services",
    name: "Digital Experiences",
    description:
      "Personalized, omnichannel, human-centric digital experiences are designed to create intuitive journeys, improve engagement, and deliver consistent value across every customer touchpoint.",
    highlight: "omnichannel",
    accentClass: "bg-[#5E17EB]",
    image: productDevelopmentFeature1Img,
  },
  {
    id: "custom-applications",
    tag: "End-to-End Digital Services",
    name: "Custom Applications",
    description:
      "Custom applications are designed around specific business needs using scalable web, mobile, and enterprise technologies. They help businesses adapt faster, improve flexibility, and support changing operational demands.",
    highlight: "specific business needs",
    accentClass: "bg-[#39827a]",
    image: productDevelopmentFeature2Img,
  },
  {
    id: "digital-transformation",
    tag: "End-to-End Digital Services",
    name: "Digital Transformation",
    description:
      "Digital transformation services help re-engineer core systems, modernize existing technology, and automate business processes for greater efficiency.",
    highlight: "re-engineer core systems",
    accentClass: "bg-[#1f6fff]",
    image: productDevelopmentFeature4Img,
  },
];

function ProductDevelopmentSlider() {
  const [index, setIndex] = useState(0);
  const slide = PRODUCT_DEVELOPMENT_SLIDES[index];

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % PRODUCT_DEVELOPMENT_SLIDES.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative pt-14 md:pt-20 pb-14 md:pb-20 bg-background overflow-hidden" data-section="products">
      <div className="relative w-full max-w-6xl mx-auto px-4 md:px-6">
        <div className="relative rounded-3xl bg-[#020617] text-white overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 lg:gap-20 p-6 md:p-10 lg:p-12 items-center">
            <div className="relative h-full">
              <div className="relative h-[220px] md:h-[260px] lg:h-[300px] rounded-xl overflow-hidden bg-foreground/10">
                <img src={slide.image} alt={slide.name} className="w-full h-full object-cover object-center" />
              </div>
            </div>
            <div className="space-y-5 md:space-y-6 max-w-sm md:max-w-md">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">{slide.tag}</span>
                <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-sm ${slide.accentClass}`}>
                  {slide.name}
                </span>
              </div>
              <p className="text-sm md:text-base text-white/80 leading-relaxed">
                {slide.description.split(slide.highlight).map((part, i, parts) => (
                  <span key={i}>
                    {part}
                    {i < parts.length - 1 ? <span className="font-semibold text-white">{slide.highlight}</span> : null}
                  </span>
                ))}
              </p>
            </div>
          </div>

          <div className="hidden md:flex absolute inset-x-0 bottom-4 justify-end px-6 md:px-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 backdrop-blur-sm p-1 shadow-lg shadow-black/40">
              <button
                type="button"
                onClick={() => setIndex((i) => (i - 1 + PRODUCT_DEVELOPMENT_SLIDES.length) % PRODUCT_DEVELOPMENT_SLIDES.length)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#111827] text-white hover:bg-[#1f2937] transition-colors"
                aria-label="Previous product development section"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setIndex((i) => (i + 1) % PRODUCT_DEVELOPMENT_SLIDES.length)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#5E17EB] text-white hover:bg-[#4b12c2] transition-colors"
                aria-label="Next product development section"
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

export default function ProductDevelopmentPage() {
  const featureSections = [
    {
      title: "Digital Experiences",
      image: productDevelopmentFeature1Img,
      description:
        "We build personalized, omnichannel, and human-centric digital experiences tailored to each business context. Our approach combines insight-led design, behavior analysis, and practical technology choices to improve engagement across the full customer journey.",
      reverse: false,
    },
    {
      title: "Custom Applications",
      image: productDevelopmentFeature2Img,
      description:
        "Custom applications are built around specific business needs using scalable web, mobile, and enterprise technologies that adapt to changing operational demands. We combine secure architecture with modern development practices for long-term business goals.",
      reverse: true,
    },
    {
      title: "Digital Transformation",
      image: productDevelopmentFeature1Img,
      description:
        "We reduce operational complexity, improve agility, and support faster adoption of digital capabilities through structured delivery methods and modern architectures. Our services modernize core systems using AI, ML, automation, and practical upgrades.",
      reverse: false,
    },
    {
      title: "Bigdata and Cognitive Analytics",
      image: productDevelopmentFeature4Img,
      description:
        "Convert large and complex datasets into actionable intelligence that supports faster decision making across business functions. Our analytics frameworks uncover patterns, improve forecasting accuracy, and help organizations make confident decisions.",
      reverse: true,
    },
    {
      title: "Internet of Things",
      image: productDevelopmentFeature2Img,
      description:
        "Our Internet of Things solutions connect devices, systems, and live data streams to create real-time operational visibility. This enables faster monitoring, quicker response, and better decision making across connected operations.",
      reverse: false,
    },
    {
      title: "Cloud and DevOps",
      image: productDevelopmentFeature4Img,
      description:
        "Cloud and DevOps services strengthen development and deployment through scalable infrastructure, automation, and continuous delivery practices. We help teams release faster, improve reliability, and reduce operational risk.",
      reverse: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <Navbar />
      <main className="pt-16">
        <section className="w-full relative overflow-hidden bg-white" aria-label="Product Development hero">
          <div
            className="relative w-full max-h-[85vh] min-h-[320px] md:min-h-[400px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${productDevelopmentHeroImg})`, aspectRatio: "1920 / 810" }}
          />
          <div className="hidden md:block absolute inset-0">
            <div className="mx-auto w-full pl-4 pr-4 pt-4 md:pl-10 md:pt-6 lg:pl-16 lg:pt-8">
              <div className="inline-flex max-w-xl bg-black/35 text-primary-foreground rounded-2xl px-5 py-4 md:px-8 md:py-6 shadow-xl">
                <div className="space-y-3">
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">Product Development</h1>
                  <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                    We enable global brands, market leaders, and innovators to succeed in business strategy with next-gen custom software solutions and technology advisory services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-14 md:pt-20 pb-0 section-soft">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              End-to-end digital services designed to improve engagement, agility, and long-term growth.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              We bring cloud, analytics, automation, and connected technologies together to strengthen delivery velocity and operational efficiency.
            </p>
          </div>
        </section>

        <ProductDevelopmentSlider />

        <section className="py-14 md:py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">Key benefits</h2>
              <div className="h-1 w-16 rounded-full bg-primary" />
            </div>
            <ul className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed list-none">
              {[
                "Selective data sharing with precise control over what is shared and with whom.",
                "Minimal size data tokens that preserve trends and statistical insight.",
                "Full fidelity reconstruction available only through controlled token access.",
                "Granular privacy controls for different users and recipients.",
                "Dense feature rich data representation without loss of granularity.",
                "Automatic noise removal to improve data quality and model readiness.",
                "Statistical fidelity maintained for analytics, machine learning, and business intelligence.",
                "Reduced preprocessing effort for faster downstream analysis.",
                "Raw data does not need to be stored, lowering exposure risk.",
                "Tokenized data remains non invertible without reconstruction keys.",
                "Data breaches expose meaningless mathematical representations instead of sensitive records.",
                "Consent controls enable governed data usage through triggers, blockers, and API based permissions.",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <span className="text-primary shrink-0 w-1.5 h-1.5 bg-current rounded-none mt-[0.6em]" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-14 md:py-20 section-soft">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="rounded-3xl border border-primary/20 bg-[hsl(0,0%,98%)] shadow-sm overflow-hidden">
              <div className="p-8 md:p-12 lg:p-14 border-b border-primary/20 bg-[hsl(262,88%,96%)]">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">Feature Deep Dive</h2>
                <div className="h-1 w-20 rounded-full bg-primary mb-6" />
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                  Our connected digital services portfolio helps businesses design better customer experiences, build tailored applications, modernize core systems, unlock data-driven decisions, and improve operational visibility.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  We bring cloud, analytics, automation, and connected technologies together to strengthen agility, accelerate delivery, and support scalable growth.
                </p>
              </div>

              <div className="p-8 md:p-12 lg:p-14 space-y-16 md:space-y-24 bg-[hsl(0,0%,96%)]">
                {featureSections.map((section) => (
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

