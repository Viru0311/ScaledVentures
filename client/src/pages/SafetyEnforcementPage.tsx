import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import safetyKeyImg from "@assets/safety-enforcement-key.png";
import safetyEnforcementBannerImg from "../../../attached_assets/SafetyEnforcement-Banner.png";

const SAFETY_KEY_CHALLENGES = [
  "Officers cannot be present everywhere",
  "Operational strain continues to rise due to staffing shortages and increasing administrative workload",
  "Fragmented systems and delayed information limit real-time visibility",
  "High volumes of data overwhelm control room teams",
  "Inconsistent coverage across key areas forces enforcement teams into reactive responses",
  "Growing public expectations for faster, more transparent responses",
  "Balancing safety, privacy, and compliance requirements",
  "Limited opportunities for proactive planning and prevention",
];

export default function SafetyEnforcementPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <Navbar />

      <main className="container mx-auto px-4 md:px-6 py-24">
        <div className="max-w-5xl mx-auto space-y-16 md:space-y-20">
          {/* Intro + banner */}
          <section>
            <div className="relative overflow-hidden rounded-[32px] border border-border/80 bg-gradient-to-r from-primary/5 via-background to-primary/5 px-8 py-8 md:px-12 md:py-10 shadow-sm mb-8">
              <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
              <h1 className="relative text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-center tracking-tight text-foreground">
                Safety Enforcement
              </h1>
            </div>
            <div className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
                <div className="flex flex-col justify-center space-y-6">
                  <p>
                    Keeping a community safe across age groups, lifestyles, and vulnerabilities
                    presents complex and evolving challenges for the public safety and traffic
                    enforcement industry. Law enforcement agencies are tasked with safeguarding
                    people with limited resources, fragmented systems, and incomplete real time
                    visibility. As urban environments grow denser and more dynamic, maintaining
                    consistent situational awareness and taking timely action before potential
                    threats escalate becomes increasingly difficult.
                  </p>

                  {/* Mobile: image directly after first paragraph */}
                  <div className="md:hidden w-full flex justify-center">
                    <div className="relative w-full max-w-[380px] rounded-2xl overflow-hidden shadow-sm mt-2">
                      <img
                        src={safetyEnforcementBannerImg}
                        alt="Safety enforcement"
                        className="w-full h-full object-cover object-left"
                      />
                    </div>
                  </div>
                </div>
                {/* Desktop / tablet: image in second column */}
                <div className="hidden md:flex w-full justify-end h-full">
                  <div className="relative w-full max-w-[380px] h-full rounded-2xl overflow-hidden shadow-sm">
                    <img
                      src={safetyEnforcementBannerImg}
                      alt="Safety enforcement"
                      className="absolute inset-0 w-full h-full object-cover object-left"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Key Challenges */}
          <section>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-foreground">
              Key Challenges
            </h2>
            <div className="h-1 w-16 rounded-full bg-primary mb-8" />
            <ul className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed list-none">
              {SAFETY_KEY_CHALLENGES.map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <span
                    className="text-primary shrink-0 w-1.5 h-1.5 bg-current rounded-none mt-[0.6em]"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* We Enable Proactive Protection */}
          <section>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-foreground">
              We Enable Proactive Protection through Vision AI
            </h2>
            <div className="h-1 w-16 rounded-full bg-primary mb-6" />
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Deliver real-time intelligence and expanded situational awareness that
              enable proactive intervention, helping officers protect people across ages,
              environments, and vulnerabilities with greater confidence and care.
            </p>
          </section>

          {/* Vision AI Proactive Protection + How We Do It with image */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3 text-foreground">
                  Vision AI Proactive Protection
                </h2>
                <div className="h-1 w-16 rounded-full bg-primary mb-4" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-heading font-semibold mb-3 text-foreground">
                  How We Do It
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                  One stop solution for securing communities. Our advanced automated license
                  plate recognition (ALPR) platform uses Vision AI to analyze live and
                  recorded camera feeds. It delivers real time intelligence through a
                  single pane of glass, enabling faster decision making and improved
                  situational awareness for officers in the field.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  The platform supports early detection of suspicious vehicle activity,
                  anomalies, and threats, while improving operational efficiency in
                  complex, data rich environments. Our solutions are focused on enhancing
                  officer safety through precise location intelligence while safeguarding
                  privacy, supporting community safety and public trust.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[320px] rounded-2xl overflow-hidden shadow-lg border border-border/50">
              <img
                src={safetyKeyImg}
                alt="Safety enforcement vehicles responding with lights on"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
