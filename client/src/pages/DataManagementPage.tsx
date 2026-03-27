import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

import dataManagementHeroImg from "@assets/ProductDevelopmentFeature4.png";

const KEY_CHALLENGES = [
  "Rapid growth in data volumes and storage requirements",
  "Rising infrastructure and data transfer costs",
  "Fragmented data across disconnected systems",
  "Increasing privacy and regulatory compliance pressures",
  "Limited interoperability between data environments",
  "High cost of analytics on raw data",
  "Security risks from storing sensitive source records",
  "Slow access to usable data for analytics and machine learning",
];

export default function DataManagementPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <Navbar />

      <main className="pt-16">
        <section className="w-full relative overflow-hidden bg-white" aria-label="Data Management hero">
          <div
            className="relative w-full max-h-[85vh] min-h-[320px] md:min-h-[400px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${dataManagementHeroImg})`, aspectRatio: "1920 / 810" }}
          />
          <div className="hidden md:block absolute inset-0">
            <div className="mx-auto w-full pl-4 pr-4 pt-4 md:pl-10 md:pt-6 lg:pl-16 lg:pt-8">
              <div className="inline-flex max-w-2xl bg-black/35 text-primary-foreground rounded-2xl px-5 py-4 md:px-8 md:py-6 shadow-xl">
                <div className="space-y-3">
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">Data Management</h1>
                  <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                    The data management industry today is under tremendous pressure to handle rapidly growing data volumes while controlling infrastructure costs, protecting sensitive information, and maintaining accessibility for analytics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-10 md:pt-14 section-soft">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-foreground">How We Solve This</h2>
            <div className="h-1 w-16 rounded-full bg-primary mb-6" />
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              We solve this by compressing, tokenizing, and securing data so organizations can reduce storage burden, protect privacy, and use information without moving raw records.
            </p>
          </div>
        </section>

        <section className="pt-10 md:pt-14 bg-background">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-foreground">Key Challenges</h2>
            <div className="h-1 w-16 rounded-full bg-primary mb-8" />
            <ul className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed list-none">
              {KEY_CHALLENGES.map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <span className="text-primary shrink-0 w-1.5 h-1.5 bg-current rounded-none mt-[0.6em]" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="pt-10 md:pt-14 pb-10 md:pb-14 section-soft">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-foreground">
              How We Empower Organizations to Run Secure and Scalable Data Operations
            </h2>
            <div className="h-1 w-16 rounded-full bg-primary mb-6" />
            <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                We transform sensitive records into compressed, tokenized, and encrypted mathematical representations that retain full statistical fidelity without exposing source data.
              </p>
              <p>
                This enables reduced storage growth, lower infrastructure and transfer costs, and avoids moving raw records across systems while improving interoperability across fragmented environments.
              </p>
              <p>
                Organizations gain faster access to usable intelligence while reducing privacy exposure, limiting breach impact, and maintaining stronger control over how data is shared, governed, and reconstructed at scale.
              </p>
            </div>
            <Link href="/calendar" className="inline-block mt-6">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full">
                Talk to an Expert <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

