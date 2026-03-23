import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AutoplayVideoWithPlayPause } from "@/components/AutoplayVideoWithPlayPause";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import heroBannerImg from "@assets/hero-banner.jpg";
import alprDeepDiveBg from "@assets/alpr-deep-dive-bg.png";
import virginiaLicensePlateImg from "@assets/virginia-license-plate.png";
import alprPlatformVideo from "@/assets/alpr-platform.mp4";
import unifiedDashboardVideo from "@/assets/unified-dashboard.mp4";
import layerSecurityVideo from "@/assets/layer-security.mp4";
import edgeApplicationVideo from "@/assets/edge-application.mp4";

const ALPR_PRODUCT_SLIDES = [
  {
    id: "alpr-platform",
    tag: "Products",
    name: "ALPR Platform",
    description:
      "Our advanced automated license plate reader (ALPR) platform monitors real time traffic.",
    highlight: "Our",
    accentClass: "bg-[#5E17EB]",
    media: { type: "video" as const, src: alprPlatformVideo },
  },
  {
    id: "real-time-alerts",
    tag: "Features",
    name: "Real Time AI Alerts",
    description:
      'Vision AI identifies a stolen license plate and issues an alert.',
    highlight: "Vision AI",
    accentClass: "bg-[#639b5c]",
    media: { type: "image" as const, src: virginiaLicensePlateImg },
  },
  {
    id: "unified-dashboard",
    tag: "Features",
    name: "Unified Dashboard",
    description:
      'Real time alerts are displayed on a dahsboard for law enforcement: "FELONY WARRANT - STOLEN VEHICLE."',
    highlight: "Real time",
    accentClass: "bg-[#e84826]",
    media: { type: "video" as const, src: unifiedDashboardVideo },
  },
  {
    id: "layered-security",
    tag: "Features",
    name: "Layered Security & Privacy",
    description:
      "All this while ensuring layered security and compliance across platforms to protect public data and preserve privacy.",
    highlight: "protect public data",
    accentClass: "bg-[#feac00]",
    media: { type: "video" as const, src: layerSecurityVideo },
  },
  {
    id: "edge-applications",
    tag: "Use Cases",
    name: "Edge Applications",
    description:
      "integrates IoT applications at the edge such as signal intervention and water main leak detection.",
    highlight: "IoT applications",
    accentClass: "bg-[#78afdb]",
    media: { type: "video" as const, src: edgeApplicationVideo },
  },
];

/* Box positions (left, top 0–1, width/height in %) align with license plates in hero banner
 * Order: 0 = left silver car, 1 = center blue BMW, 2 = right red car
 */
const DEMO_VEHICLES = [
  {
    id: "car-left-silver",
    fallbackPlate: "LQR-A21B",
    region: "Oregon",
    model: "Accord",
    make: "Honda",
    color: "Silver",
    direction: "Moving West",
    confidence: "95.8%",
    // Slightly further left and a bit higher to sit on the plate
    box: { left: 0.14, top: 0.52, width: 7.5, height: 4 },
  },
  {
    id: "bus-left-blue",
    fallbackPlate: "YSAM000",
    region: "Oregon",
    model: "9700 Coach",
    make: "Volvo",
    color: "Blue",
    direction: "Moving West",
    confidence: "96.3%",
    // Slightly further left and a bit higher to sit on the plate
    box: { left: 0.37, top: 0.41, width: 7.5, height: 4 },
  },
  {
    id: "car-center-blue-bmw",
    fallbackPlate: "GXB-5332",
    region: "New York",
    model: "3 Series (F30)",
    make: "BMW",
    color: "Dark Blue",
    direction: "Moving West",
    confidence: "97.2%",
    // Move more toward the center and slightly adjust height for the BMW plate
    box: { left: 0.32, top: 0.905, width: 7.5, height: 4 },
  },
  {
    id: "car-right-red",
    fallbackPlate: "2AQC214",
    region: "California",
    model: "Camry",
    make: "Toyota",
    color: "Red",
    direction: "Moving West",
    confidence: "96.5%",
    box: { left: 0.70, top: 0.52, width: 8, height: 4 },
  },
  {
    id: "car-center-black",
    fallbackPlate: "EST-1788",
    region: "Florida",
    model: "Accord",
    make: "Honda",
    color: "Black",
    direction: "Moving West",
    confidence: "95.7%",
    box: { left: 0.57, top: 0.39, width: 5, height: 3 },
  },
];

function ALPRProductsSlider() {
  const [index, setIndex] = useState(0);
  const slide = ALPR_PRODUCT_SLIDES[index];

  const handleNext = () => {
    setIndex((i) => (i + 1) % ALPR_PRODUCT_SLIDES.length);
  };

  const handlePrev = () => {
    setIndex((i) => (i - 1 + ALPR_PRODUCT_SLIDES.length) % ALPR_PRODUCT_SLIDES.length);
  };

  // Auto-advance every 5 seconds
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % ALPR_PRODUCT_SLIDES.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative py-14 md:py-20 section-soft overflow-hidden" data-section="products">
      <div className="relative w-full max-w-6xl mx-auto px-4 md:px-6">
        <div className="relative rounded-3xl bg-[#020617] text-white overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-14 p-6 md:p-10 lg:p-12 items-center">
            <div className="relative">
              {slide.media.type === "video" ? (
                <AutoplayVideoWithPlayPause
                  key={slide.id}
                  src={slide.media.src}
                  videoClassName={
                    slide.id === "unified-dashboard" ? "object-[50%_0%]" : undefined
                  }
                />
              ) : slide.media.type === "image" ? (
                <div className="relative aspect-video rounded-xl overflow-hidden bg-foreground/10">
                  <img
                    src={slide.media.src}
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              ) : null}
            </div>
            <div className="space-y-5 md:space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                  {slide.tag}
                </span>
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-sm ${slide.accentClass}`}
                >
                  {slide.name}
                </span>
              </div>
              <p className="text-sm md:text-base text-white/80 leading-relaxed">
                {slide.description.split(slide.highlight).map((part, i, parts) => (
                  <span key={i}>
                    {part}
                    {i < parts.length - 1 ? (
                      <span className="font-semibold text-white">{slide.highlight}</span>
                    ) : null}
                  </span>
                ))}
              </p>
            </div>
          </div>

          {/* Slide controls (previous/next arrows) */}
          {/* Desktop / tablet: bottom-right overlay */}
          <div className="hidden md:flex absolute inset-x-0 bottom-4 justify-end px-6 md:px-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 backdrop-blur-sm p-1 shadow-lg shadow-black/40">
              <button
                type="button"
                onClick={handlePrev}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#111827] text-white hover:bg-[#1f2937] transition-colors"
                aria-label="Previous product"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#5E17EB] text-white hover:bg-[#4b12c2] transition-colors"
                aria-label="Next product"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Mobile: controls below content, no overlap with text */}
          <div className="flex md:hidden justify-end px-4 pb-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 backdrop-blur-sm p-1 shadow-lg shadow-black/30">
              <button
                type="button"
                onClick={handlePrev}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#111827] text-white hover:bg-[#1f2937] transition-colors"
                aria-label="Previous product"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#5E17EB] text-white hover:bg-[#4b12c2] transition-colors"
                aria-label="Next product"
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

export default function ALPRPage() {
  const [demoVehicleIndex, setDemoVehicleIndex] = useState(0);
  const [cardUpdating, setCardUpdating] = useState(false);

  const currentVehicle = DEMO_VEHICLES[demoVehicleIndex];

  useEffect(() => {
    const id = setInterval(() => {
      setCardUpdating(true);
      setTimeout(() => {
        setDemoVehicleIndex((i) => (i + 1) % DEMO_VEHICLES.length);
        setCardUpdating(false);
      }, 260);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <Navbar />

      <main className="pt-16">
        {/* 1. Vision AI demo: hero banner + detection overlay + ANPR card */}
        <section
          className="demo-image-section w-full relative overflow-hidden"
          aria-label="Vision AI demo"
        >
          <div
            className="demo-image-section__inner relative w-full max-h-[85vh]"
            style={{ aspectRatio: "1920 / 810" }}
          >
            <div
              className="demo-image-section__bg absolute inset-0 bg-cover bg-center bg-no-repeat bg-[#0b1220]"
              style={{ backgroundImage: `url(${heroBannerImg})` }}
            />
            <div
              id="vehicle-detection-overlay"
              className="vehicle-detection-overlay absolute inset-0 pointer-events-none z-[1]"
              aria-hidden
            >
              {currentVehicle && (
                <div
                  className="vehicle-detection-box active"
                  style={{
                    left: `${currentVehicle.box.left * 100}%`,
                    top: `${currentVehicle.box.top * 100}%`,
                    width: "6%",
                    height: "4%",
                    borderWidth: "1px",
                  }}
                  aria-hidden
                />
              )}
            </div>
            <div className="demo-image-section__card absolute bottom-10 right-6 z-[2] max-w-[320px] hidden md:block">
              <div
                id="anpr-card"
                className="vehicle-detection-card w-[320px] h-[260px] rounded-xl bg-black/70 text-white border border-white/15 shadow-2xl p-4"
              >
                <div className={`vehicle-card-top space-y-4 ${cardUpdating ? "is-updating" : ""}`}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="vehicle-card-left">
                      <div className="license-plate-display inline-block rounded bg-primary px-3 py-1.5">
                        <div className="plate-number js-plate-number text-primary-foreground font-bold text-lg tracking-wide">
                          {currentVehicle?.fallbackPlate ?? "--"}
                        </div>
                        <div className="plate-region js-plate-region text-primary-foreground/80 text-sm">
                          {currentVehicle?.region ?? "--"}
                        </div>
                      </div>
                    </div>
                    <div className="anpr-inline">
                      <span className="anpr-status inline-flex items-center px-2.5 py-1 rounded-full bg-success/20 text-success text-sm font-medium js-anpr-status">
                        {cardUpdating ? "Detecting..." : "Plate Detected"}
                      </span>
                    </div>
                  </div>
                  <div className="vehicle-details-compact space-y-2 text-sm">
                    <div className="detail-line flex justify-between gap-2">
                      <span className="detail-label text-muted-foreground">Vehicle Model:</span>
                      <span className="detail-value js-vehicle-model font-medium">
                        {currentVehicle?.model ?? "--"}
                      </span>
                    </div>
                    <div className="detail-line flex justify-between gap-2">
                      <span className="detail-label text-muted-foreground">Vehicle Make:</span>
                      <span className="detail-value js-vehicle-make font-medium">
                        {currentVehicle?.make ?? "--"}
                      </span>
                    </div>
                    <div className="detail-line flex justify-between gap-2">
                      <span className="detail-label text-muted-foreground">Vehicle Color:</span>
                      <span className="detail-value js-vehicle-color font-medium">
                        {currentVehicle?.color ?? "--"}
                      </span>
                    </div>
                    <div className="detail-line flex justify-between gap-2">
                      <span className="detail-label text-muted-foreground">Direction:</span>
                      <span className="detail-value js-vehicle-direction font-medium">
                        {currentVehicle?.direction ?? "--"}
                      </span>
                    </div>
                    <div className="detail-line flex justify-between gap-2">
                      <span className="detail-label text-muted-foreground">Confidence:</span>
                      <span className="detail-value js-vehicle-confidence font-medium">
                        {currentVehicle?.confidence ?? "--"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile ANPR card below hero image */}
        <section className="md:hidden px-4 pt-4 pb-6 section-soft">
          <div className="max-w-md mx-auto">
            <div
              id="anpr-card-mobile"
              className="vehicle-detection-card w-full rounded-xl bg-black/80 text-white border border-white/15 shadow-2xl p-4"
            >
              <div className={`vehicle-card-top space-y-4 ${cardUpdating ? "is-updating" : ""}`}>
                <div className="flex items-start justify-between gap-4">
                  <div className="vehicle-card-left">
                    <div className="license-plate-display inline-block rounded bg-primary px-3 py-1.5">
                      <div className="plate-number js-plate-number text-primary-foreground font-bold text-lg tracking-wide">
                        {currentVehicle?.fallbackPlate ?? "--"}
                      </div>
                      <div className="plate-region js-plate-region text-primary-foreground/80 text-sm">
                        {currentVehicle?.region ?? "--"}
                      </div>
                    </div>
                  </div>
                  <div className="anpr-inline">
                    <span className="anpr-status inline-flex items-center px-2.5 py-1 rounded-full bg-success/20 text-success text-sm font-medium js-anpr-status">
                      {cardUpdating ? "Detecting..." : "Plate Detected"}
                    </span>
                  </div>
                </div>
                <div className="vehicle-details-compact space-y-2 text-sm">
                  <div className="detail-line flex justify-between gap-2">
                    <span className="detail-label text-muted-foreground">Vehicle Model:</span>
                    <span className="detail-value js-vehicle-model font-medium">
                      {currentVehicle?.model ?? "--"}
                    </span>
                  </div>
                  <div className="detail-line flex justify-between gap-2">
                    <span className="detail-label text-muted-foreground">Vehicle Make:</span>
                    <span className="detail-value js-vehicle-make font-medium">
                      {currentVehicle?.make ?? "--"}
                    </span>
                  </div>
                  <div className="detail-line flex justify-between gap-2">
                    <span className="detail-label text-muted-foreground">Vehicle Color:</span>
                    <span className="detail-value js-vehicle-color font-medium">
                      {currentVehicle?.color ?? "--"}
                    </span>
                  </div>
                  <div className="detail-line flex justify-between gap-2">
                    <span className="detail-label text-muted-foreground">Direction:</span>
                    <span className="detail-value js-vehicle-direction font-medium">
                      {currentVehicle?.direction ?? "--"}
                    </span>
                  </div>
                  <div className="detail-line flex justify-between gap-2">
                    <span className="detail-label text-muted-foreground">Confidence:</span>
                    <span className="detail-value js-vehicle-confidence font-medium">
                      {currentVehicle?.confidence ?? "--"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Intro text */}
        <section className="pt-14 md:pt-20 pb-5 md:pb-8 section-soft">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              Traditional traffic enforcement often misses critical events,
              provides limited situational awareness, and increases burden on law
              enforcement. When threats go unseen and unresolved, communities
              lose trust.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Vision AI empowers authorities to identify incidents early, improve
              accuracy, reduce operational burden, and enable faster, evidence
              based decisions.
            </p>
          </div>
        </section>

        {/* 3. Products section – ALPR platform layers slider (video left, content right) */}
        <ALPRProductsSlider />

        {/* 4. Key benefits + Feature Deep Dive */}
        <section className="py-14 md:py-20 section-soft">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                Key benefits
              </h2>
              <div className="h-1 w-16 rounded-full bg-primary" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
              {/* Key benefits */}
              <div className="flex flex-col">
                <ul className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed list-none">
                  <li className="flex gap-3 items-start">
                    <span className="text-primary shrink-0 w-1.5 h-1.5 bg-current rounded-none mt-[0.6em]" aria-hidden />
                    Improved officer safety through situational awareness and location accuracy
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-primary shrink-0 w-1.5 h-1.5 bg-current rounded-none mt-[0.6em]" aria-hidden />
                    Early detection of potential threats before they escalate
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-primary shrink-0 w-1.5 h-1.5 bg-current rounded-none mt-[0.6em]" aria-hidden />
                    Increased situational awareness. Faster and confident decision making
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-primary shrink-0 w-1.5 h-1.5 bg-current rounded-none mt-[0.6em]" aria-hidden />
                    Optimized for existing infrastructure, low operational overhead
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-primary shrink-0 w-1.5 h-1.5 bg-current rounded-none mt-[0.6em]" aria-hidden />
                    Stronger protection of public events, crowded zones, and sensitive buildings
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-primary shrink-0 w-1.5 h-1.5 bg-current rounded-none mt-[0.6em]" aria-hidden />
                    Reduced manual monitoring workload for control room teams
                  </li>
                </ul>
              </div>

              {/* Feature Deep Dive: background image only */}
              <div className="relative min-h-[240px] md:min-h-[260px] rounded-2xl overflow-hidden">
                <img
                  src={alprDeepDiveBg}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 6. Feature Deep Dive + four product sections */}
        <section className="py-14 md:py-20 section-soft">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="rounded-3xl border border-primary/20 bg-[hsl(0,0%,98%)] shadow-sm overflow-hidden">
              {/* Feature Deep Dive heading card */}
              <div className="p-8 md:p-12 lg:p-14 border-b border-primary/20 bg-[hsl(262,88%,96%)]">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4">
                  Feature Deep Dive
                </h2>
                <div className="h-1 w-20 rounded-full bg-primary mb-6" />
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  We eliminate fragmented disparate systems, delayed detection, inconsistent
                  monitoring, and security risks. We provide end-to-end privacy, compliance,
                  and data security for traffic enforcement.
                </p>
              </div>

              {/* 4 product sections */}
              <div className="p-8 md:p-12 lg:p-14 space-y-16 md:space-y-24 bg-[hsl(0,0%,98%)]">
            {/* 1. ALPR Platform: text left, video right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                  ALPR Platform
                </h2>
                <div className="h-1 w-16 rounded-full bg-primary mb-6" />
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Our advanced automated license plate reader (ALPR) platform analyzes
                    live and recorded camera feeds with unparalleled speed, consistency,
                    and scale. It compares license plate numbers against authorized
                    databases to generate timely alerts and maintain accurate records of
                    vehicle activity.
                  </p>
                  <p>
                    It delivers reliable intelligence that helps protect neighborhoods,
                    parks, transit, public area, and community environments.
                  </p>
                </div>
                <Link href="/calendar" className="inline-block mt-6">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full">
                    Get a demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <AutoplayVideoWithPlayPause src={alprPlatformVideo} />
            </div>

            {/* 2. Unified Dashboard: video left, text right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <AutoplayVideoWithPlayPause
                  src={unifiedDashboardVideo}
                  videoClassName="object-[50%_0%]"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                  Unified Dashboard
                </h2>
                <div className="h-1 w-16 rounded-full bg-primary mb-6" />
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Our &apos;Single pane of glass&apos; delivers faster decision making and
                    stronger situational awareness by analyzing vehicle movement and
                    behavior in real time. By combining location, time, movement
                    patterns, and historical data, it provides deep contextual
                    understanding of every situation.
                  </p>
                  <p>
                    Together, these capabilities give law enforcement the clarity and
                    confidence needed to act decisively, enhancing officer safety through
                    improved awareness and precise location information.
                  </p>
                </div>
                <Link href="/calendar" className="inline-block mt-6">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full">
                    Get a demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* 3. Layered Security & Privacy: text left, video right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                  Layered Security & Privacy
                </h2>
                <div className="h-1 w-16 rounded-full bg-primary mb-6" />
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    At iolaire.ai, we recognize that safeguarding resident privacy is
                    essential to maintaining public trust. For this reason, we apply
                    strict data protection standards and ensure that all information is
                    handled responsibly and transparently.
                  </p>
                  <p>
                    Our platform is designed to protect sensitive data while supporting
                    community safety, and our operational practices fully comply with
                    the Driver&apos;s Privacy Protection Act (DPPA) and all applicable
                    privacy requirements.
                  </p>
                </div>
                <Link href="/calendar" className="inline-block mt-6">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full">
                    Get a demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <AutoplayVideoWithPlayPause src={layerSecurityVideo} />
            </div>

            {/* 4. Edge Applications: video left, text right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <AutoplayVideoWithPlayPause src={edgeApplicationVideo} />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                  Edge Applications
                </h2>
                <div className="h-1 w-16 rounded-full bg-primary mb-6" />
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Our edge applications continuously monitor activity and identify
                    potential risks as they emerge, processing intelligence directly
                    in the field close to cameras and sensors.
                  </p>
                  <p>
                    When a risk is detected, alerts are generated immediately with
                    actionable context including location, movement patterns, and visual
                    evidence. This edge based approach strengthens situational
                    awareness for officers and control room teams, helping them respond
                    with confidence and care.
                  </p>
                </div>
                <Link href="/calendar" className="inline-block mt-6">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full">
                    Get a demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
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
