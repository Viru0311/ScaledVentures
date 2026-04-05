import { useEffect, useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

import dataCompressionHeroImg from "@assets/DataCompressionPlatformHero.png";
import dataCompressionFeature1Img from "@assets/DataCompressionPlatformFeature1.png";
import dataCompressionFeature2Img from "@assets/DataCompressionPlatformFeature2.png";
import dataCompressionFeature3Img from "@assets/DataCompressionPlatformFeature3.png";

const DATA_COMPRESSION_SLIDES = [
  {
    id: "tokenization",
    tag: "How it Works",
    name: "Tokenization Features",
    description:
      "Create a mathematical fingerprint using arithmetic circuits — a form of zero-knowledge proof technology. It contains all statistical information needed for analytics.",
    highlight: "mathematical fingerprint",
    accentClass: "bg-[#5E17EB]",
    image: dataCompressionFeature1Img,
  },
  {
    id: "aggregation",
    tag: "How it Works",
    name: "Aggregation Features",
    description:
      "Combine tokenized data from multiple silos into one unified format, regardless of schema or source.",
    highlight: "unified format",
    accentClass: "bg-[#39827a]",
    image: dataCompressionFeature2Img,
  },
  {
    id: "utilization",
    tag: "How it Works",
    name: "Utilization Features",
    description:
      "Train ML models, plug into BI tools, and run compliance queries — all without exposing raw data.",
    highlight: "without exposing raw data",
    accentClass: "bg-[#1f6fff]",
    image: dataCompressionFeature3Img,
  },
];

function DataCompressionSlider() {
  const [index, setIndex] = useState(0);
  const slide = DATA_COMPRESSION_SLIDES[index];

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % DATA_COMPRESSION_SLIDES.length), 5000);
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
                onClick={() => setIndex((i) => (i - 1 + DATA_COMPRESSION_SLIDES.length) % DATA_COMPRESSION_SLIDES.length)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#111827] text-white hover:bg-[#1f2937] transition-colors"
                aria-label="Previous data compression section"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setIndex((i) => (i + 1) % DATA_COMPRESSION_SLIDES.length)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#5E17EB] text-white hover:bg-[#4b12c2] transition-colors"
                aria-label="Next data compression section"
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

export default function DataCompressionPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <Navbar />
      <main className="pt-16">
        <section className="w-full relative overflow-hidden bg-white" aria-label="Data Compression Platform hero">
          <div
            className="relative w-full max-h-[85vh] min-h-[320px] md:min-h-[400px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${dataCompressionHeroImg})`, aspectRatio: "1920 / 810" }}
          />
          <div className="hidden md:block absolute inset-0">
            <div className="mx-auto w-full pl-4 pr-4 pt-4 md:pl-10 md:pt-6 lg:pl-16 lg:pt-8">
              <div className="inline-flex max-w-xl bg-black/35 text-primary-foreground rounded-2xl px-5 py-4 md:px-8 md:py-6 shadow-xl">
                <div className="space-y-3">
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">Data Compression Platform</h1>
                  <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                    We help organizations unlock value from sensitive data by compressing and tokenizing it into secure mathematical representations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-14 md:pt-20 pb-0 section-soft">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              This enables analytics, machine learning (ML), and collaboration without moving or storing raw data.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Datasent is a fundamentally new way to transform and share data, creating a data substrate that makes information smaller, safer, and instantly usable.
            </p>
          </div>
        </section>

        <DataCompressionSlider />

        <section className="py-14 md:py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">Key benefits</h2>
              <div className="h-1 w-16 rounded-full bg-primary" />
            </div>
            <ul className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed list-none">
              {[
                "100+ built-to-purpose solutions delivered across industries.",
                "Human-centric design approach for stronger user adoption.",
                "Modern cloud-based architectures for scalable digital growth.",
                "End-to-end digital transformation expertise across business functions.",
                "Value driven engagement models aligned to outcomes.",
                "Experience serving customers across 10+ global markets.",
                "Tailored software development built around specific business needs.",
                "Strong domain expertise across multiple industry verticals.",
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
                  Our privacy and compression engine runs a custom Datasent instance at the edge and in the cloud. We compress, tokenize, and encrypt all data.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Our compression engine uses polynomial tokenization, resulting in up to 300% payload reduction. Stop moving data and simply query it. Stream only what you need.
                </p>
              </div>
              <div className="p-8 md:p-12 lg:p-14 space-y-16 md:space-y-24 bg-[hsl(0,0%,96%)]">
                {[
                  {
                    title: "Tokenization",
                    image: dataCompressionFeature1Img,
                    description:
                      "We convert raw records into secure mathematical representations using arithmetic circuits, creating a fingerprint that preserves full statistical value without exposing source data. This enables analytics, ML, and cross-system collaboration while maintaining analytical fidelity.",
                    reverse: false,
                  },
                  {
                    title: "Aggregation",
                    image: dataCompressionFeature2Img,
                    description:
                      "Tokenized data from multiple silos is combined into a unified format regardless of source system, schema, or operating environment. This enables organizations to work across disconnected data environments without moving raw records.",
                    reverse: true,
                  },
                  {
                    title: "Utilization",
                    image: dataCompressionFeature3Img,
                    description:
                      "Train ML models, connect with BI tools, and run compliance queries using tokenized data instead of sensitive source records. The result is faster access, lower privacy risk, and secure intelligence across enterprise and government environments.",
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

