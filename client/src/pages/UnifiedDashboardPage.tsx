import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function UnifiedDashboardPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <Navbar />

      <main className="container mx-auto px-4 md:px-6 py-24">
        <div className="max-w-4xl mx-auto space-y-10">
          <header className="space-y-4">
            <div className="relative overflow-hidden rounded-[32px] border border-border/80 bg-gradient-to-r from-primary/5 via-background to-primary/5 px-8 pt-12 pb-8 md:px-12 md:py-10 shadow-sm">
              <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
              <span className="absolute top-4 left-6 md:left-8 text-primary font-bold tracking-widest uppercase text-[0.9rem]">
                ALPR Platform
              </span>
              <h1 className="relative text-2xl md:text-3xl lg:text-4xl font-heading font-bold leading-tight text-center">
                Unified Dashboard
              </h1>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-center">
              One Unified View for Real Time Public Safety.
            </p>
          </header>

          <section className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>
              A &apos;single pane of glass&apos; dashboard enables faster decision making and
              improves situational awareness, both of which are critical to public safety. It
              consolidates all relevant data, alerts, analytics, and system controls into a
              unified real time view allowing either the dispatch agent or the officer to
              prioritize resources for engagement.
            </p>
          </section>

          <section className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
              Operational Challenges Law Enforcement Encounter
            </h2>
            <p>
              In the absence of a unified dashboard, law enforcement officers are forced to piece
              together information from multiple systems. This slows response, increases mental
              strain, and raises the risk of missed potential threats.
            </p>
            <p>
              Fragmented visibility makes coordination difficult and reduces confidence in the
              decision making process, adding to the everyday challenges officers already face in
              protecting their communities.
            </p>
          </section>

          <section className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
              How Our Unified View Dashboard Supports Officers in Critical Moments
            </h2>
            <ul className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed list-none">
              <li className="flex gap-3 items-start">
                <span
                  className="text-primary shrink-0 w-1.5 h-1.5 bg-current rounded-none mt-[0.6em]"
                  aria-hidden
                />
                <span>Offers unified intelligence in one interface.</span>
              </li>
              <li className="flex gap-3 items-start">
                <span
                  className="text-primary shrink-0 w-1.5 h-1.5 bg-current rounded-none mt-[0.6em]"
                  aria-hidden
                />
                <span>
                  Reduces cognitive load by presenting prioritized, contextual alerts instead of raw
                  data streams.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <span
                  className="text-primary shrink-0 w-1.5 h-1.5 bg-current rounded-none mt-[0.6em]"
                  aria-hidden
                />
                <span>
                  Enables real time situational awareness using edge processing and continuous data
                  streaming.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <span
                  className="text-primary shrink-0 w-1.5 h-1.5 bg-current rounded-none mt-[0.6em]"
                  aria-hidden
                />
                <span>
                  Provides a single source of truth through secure APIs that integrate multiple
                  systems and data sources.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <span
                  className="text-primary shrink-0 w-1.5 h-1.5 bg-current rounded-none mt-[0.6em]"
                  aria-hidden
                />
                <span>Accelerates decision making through real time correlation of events.</span>
              </li>
              <li className="flex gap-3 items-start">
                <span
                  className="text-primary shrink-0 w-1.5 h-1.5 bg-current rounded-none mt-[0.6em]"
                  aria-hidden
                />
                <span>
                  Improves response coordination with visual overlays, location intelligence, and
                  shared operational views.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <span
                  className="text-primary shrink-0 w-1.5 h-1.5 bg-current rounded-none mt-[0.6em]"
                  aria-hidden
                />
                <span>
                  Scales efficiently by supporting high volume data processing and complex
                  environments through a unified architecture.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <span
                  className="text-primary shrink-0 w-1.5 h-1.5 bg-current rounded-none mt-[0.6em]"
                  aria-hidden
                />
                <span>
                  Strengthens operational reliability by delivering consistent workflows, analytics,
                  and alerting in one controlled platform.
                </span>
              </li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

