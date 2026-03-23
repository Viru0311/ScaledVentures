import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function EdgeApplicationsALPRPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <Navbar />

      <main className="container mx-auto px-4 md:px-6 py-24">
        <div className="max-w-4xl mx-auto space-y-10">
          <header>
            <div className="relative overflow-hidden rounded-[32px] border border-border/80 bg-gradient-to-r from-primary/5 via-background to-primary/5 px-8 pt-12 pb-8 md:px-12 md:py-10 shadow-sm">
              <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
              <span className="absolute top-4 left-6 md:left-8 text-primary font-bold tracking-widest uppercase text-[0.9rem]">
                ALPR Platform
              </span>
              <h1 className="relative text-2xl md:text-3xl lg:text-4xl font-heading font-bold leading-tight text-center">
                Edge Applications
              </h1>
            </div>
          </header>

          <section className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
              Edge Powered Vision AI for Real Time Public Safety
            </h2>
            <p>
              Our Vision AI platform enables third party edge applications to deliver public safety
              directly where incidents occur without relying on delayed and centralized processing.
              This edge based approach improves situational awareness, reduces response time, and
              supports safer roads and public spaces while operating efficiently within existing
              infrastructure.
            </p>
            <p>
              By pairing edge applications with ALPR platforms, we mitigate operational and safety
              challenges, thereby directly impacting law enforcement effectiveness and officer
              safety. Here are key challenges solved by our platform.
            </p>
          </section>

          <section className="space-y-3 text-base md:text-lg text-muted-foreground leading-relaxed">
            <ul className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed list-none">
              <li className="flex gap-3 items-start">
                <span
                  className="text-primary shrink-0 w-1.5 h-1.5 bg-current rounded-none mt-[0.6em]"
                  aria-hidden
                />
                <span>
                  Low latency AI data processing at the edge accelerates detection and response,
                  when every second matters.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <span
                  className="text-primary shrink-0 w-1.5 h-1.5 bg-current rounded-none mt-[0.6em]"
                  aria-hidden
                />
                <span>
                  Officers are no longer hampered by receiving intelligence after events unfold; they
                  gain the ability to intervene proactively.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <span
                  className="text-primary shrink-0 w-1.5 h-1.5 bg-current rounded-none mt-[0.6em]"
                  aria-hidden
                />
                <span>
                  Reduced operational cost saves bandwidth and compute expense by only streaming
                  relevant raw video tied to real time alerts.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <span
                  className="text-primary shrink-0 w-1.5 h-1.5 bg-current rounded-none mt-[0.6em]"
                  aria-hidden
                />
                <span>
                  Applications running locally on the ALPR platform are no longer dependent on
                  constant connectivity.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <span
                  className="text-primary shrink-0 w-1.5 h-1.5 bg-current rounded-none mt-[0.6em]"
                  aria-hidden
                />
                <span>Vehicle movement and patterns are easier to track in real time.</span>
              </li>
              <li className="flex gap-3 items-start">
                <span
                  className="text-primary shrink-0 w-1.5 h-1.5 bg-current rounded-none mt-[0.6em]"
                  aria-hidden
                />
                <span>
                  Manual review decreases as automation and prioritization improve, reducing fatigue
                  and missed signals while delivering real time intelligence and simplifying
                  enforcement.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <span
                  className="text-primary shrink-0 w-1.5 h-1.5 bg-current rounded-none mt-[0.6em]"
                  aria-hidden
                />
                <span>Exposure risk decreases by avoiding the need to centrally process all data.</span>
              </li>
            </ul>
          </section>

          <section className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
              Edge Intelligence for Faster, More Reliable Enforcement
            </h2>
            <p>
              Edge applications play a critical role in making ALPR systems effective in real world
              enforcement conditions. When a potential risk is identified, the system immediately
              triggers alerts with clear context.
            </p>
            <p>
              By minimizing latency and limiting the need to transmit raw data, edge processing
              improves system responsiveness and resilience, particularly in connectivity
              constrained environments. This allows law enforcement teams to act with greater
              confidence, reduces operational friction, and supports faster, safer decisions
              without adding to the burden officers already carry in the field.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

