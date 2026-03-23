import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { WhitepaperPdfViewer } from "@/components/WhitepaperPdfViewer";
import { Link } from "wouter";
import alprWhitepaperPdf from "../../../attached_assets/pdfs/1703026_Whitepaper_Safety_Enforcement.pdf";

export default function AlprWhitepaperPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <Navbar />

      <main className="container mx-auto px-4 md:px-6 py-24">
        <section className="max-w-5xl mx-auto space-y-6">
          <header className="space-y-3">
            <p className="text-primary font-bold tracking-widest uppercase text-[0.85rem]">
              ALPR Platform · Whitepaper
            </p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold leading-tight">
              A responsible blueprint for creating Safety Enforcement
            </h1>
          </header>

          <div className="flex flex-wrap gap-3 items-center">
            <Link href="/alpr-resources">
              <Button variant="outline" size="sm" className="rounded-full">
                ← Back to ALPR Resources
              </Button>
            </Link>
            <a href={"/calendar"} target="_blank" rel="noreferrer">
              <Button size="sm" className="rounded-full">
                Calculate your ROI
              </Button>
            </a>
          </div>

          <WhitepaperPdfViewer file={alprWhitepaperPdf} />
        </section>
      </main>

      <Footer />
    </div>
  );
}

