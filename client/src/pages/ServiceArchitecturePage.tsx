import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Building2, Database, Code2 } from "lucide-react";

export default function ServiceArchitecturePage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <Navbar />

      <main className="pt-24 md:pt-28 pb-20 md:pb-24">
        {/* Hero / Intro */}
        <section className="section-soft border-b border-border/60 pb-14 md:pb-20">
          <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-primary font-bold tracking-[0.24em] uppercase text-base md:text-lg mb-4">
                Service Architecture
              </p>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold leading-tight mb-5">
                Engineered for Real-Time Insight,
                <span className="block text-primary">At the Edge.</span>
              </h1>
              <div className="space-y-5 max-w-2xl">
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  We offer personalized, high-touch service tailored to your unique business needs, ensuring seamless
                  integration and optimized performance. With specialized industry expertise and a focus on agility, we
                  deliver innovative solutions faster and more efficiently than larger firms. Partnering with us means
                  gaining a dedicated team committed to your success, providing unmatched attention to detail and
                  long-term value.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  We start with the status quo, automate the mundane and transform the human experience when solving
                  complex use cases across contact center, product development, data management and construction.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Our process combines a variety of technologies across AI, advanced computer vision, OCR, encryption,
                  compression, tokenization, edge computing, real-time video processing, micro data centers, virtualized
                  environments, and open APIs to deliver lasting value and realize unmatched outcomes.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Our approach ensures service delivery that&apos;s designed to perform in complex, high-traffic
                  environments while maintaining strict data security and operational reliability.
                </p>
              </div>

              <div className="mt-8">
                <Link href="/calendar">
                  <Button size="lg" className="rounded-full">
                    Talk to our team
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="lg:mt-12"
            >
              <div className="rounded-2xl border border-border/60 bg-card/80 backdrop-blur-sm p-6 md:p-7 space-y-5 shadow-lg shadow-primary/5">
                <div>
                  <h2 className="text-lg md:text-xl font-heading font-semibold leading-snug">
                    Service Delivery Architecture
                  </h2>
                  <p className="text-sm md:text-base text-primary font-semibold mt-2 leading-snug">
                    How we differentiate to deliver lasting value
                  </p>
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Our service delivery architecture aligns with business goals, leverages agile methodologies, and
                  prioritizes customer-centric design to drive innovation and revenue growth. With real-time data
                  insights, scalable technology, proactive risk management, and executive dashboards, it ensures
                  transparency, efficiency, and measurable impact.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-sm md:text-base text-muted-foreground">
                  <div className="flex gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                    <span>
                      Service delivery is aligned at the onset with business goals and a spartan mindset to demonstrate
                      clear value.
                    </span>
                  </div>
                  <div className="flex gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                    <span>
                      Customer Centricity delivers products that resonate and accelerate revenue.
                    </span>
                  </div>
                  <div className="flex gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                    <span>Speed, adaptability, and iterative progress frames our ethos.</span>
                  </div>
                  <div className="flex gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                    <span>
                      Executive Dashboards provide real-time visibility into progress, ROI, and impact.
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Design & build + edge to core */}
        <section className="py-14 md:py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4 }}
              className="space-y-5"
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold leading-tight">
                We Design &amp; Build for Complex,
                <span className="block">High-Performance Environments</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Our Service Delivery architecture is designed for environments where real-time insight, behavioral
                context, and operational awareness directly influence outcomes. From AI, to automation, to inferencing
                and response, we sustain performance and reliability under constant load.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Our design-build-validate approach integrates seamlessly with your existing services stack to deliver
                tailored solutions that accelerate innovation, enhance efficiency, and drive measurable business
                outcomes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="lg:mt-1"
            >
              <div className="rounded-2xl border border-border/60 bg-card/70 backdrop-blur-sm p-6 md:p-7 space-y-5">
                <h3 className="text-lg md:text-xl font-heading font-semibold">
                  Edge to Core Service Design
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Our approach ensures your product experience shines at the Edge or in the cloud. We architect across
                  the continuum for responsiveness and outcomes.
                </p>
                <ul className="space-y-3 text-sm md:text-base text-muted-foreground">
                  <li>
                    <span className="font-semibold text-foreground">Data Centers:</span> Virtualized environments,
                    localized or in the cloud provide elastic capacity for analytics, storage, and orchestration.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Open APIs:</span> Standards-based APIs allow
                    interoperability with front-end &amp; back-end systems, marketing tools, and analytic platforms.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Security by Design:</span> Encryption, compression
                    and tokenization protect sensitive data in motion and at rest, aligned with privacy, transparency,
                    and policy requirements.
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Flexible services — three industry solutions */}
        <section className="py-14 md:py-20 section-soft border-y border-border/60">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4 }}
              className="max-w-3xl mx-auto text-center mb-10 md:mb-14"
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                Flexible Services Architecture. Targeted Impact
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Tailored solutions that adapt to your unique business needs, ensuring maximum efficiency, scalability,
                and measurable impact. Empower your organization to stay ahead of the competition with agile,
                future-ready systems that drive strategic growth and innovation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl border border-border/60 bg-card/80 backdrop-blur-sm p-6 md:p-7 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Building2 className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-heading font-semibold">Construction Industry</h3>
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 flex-1">
                  For the construction industry, our approach ensures real-time bid response to maximize your win
                  rate. By leveraging advanced analytics and automation, we streamline the bidding process, enabling
                  faster, more accurate proposals. Our solutions integrate seamlessly with your existing workflows,
                  reducing manual effort and increasing efficiency. With actionable insights and data-driven
                  strategies, we empower your team to secure more projects and drive sustained growth.
                </p>
                <Link href="/construction">
                  <Button variant="outline" size="sm" className="self-start rounded-full">
                    Explore Further
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: 0.03 }}
                className="rounded-2xl border border-border/60 bg-card/80 backdrop-blur-sm p-6 md:p-7 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Database className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-heading font-semibold">Data Management</h3>
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 flex-1">
                  For CTOs exploring data compression solutions, our approach ensures real-time data processing to
                  optimize system performance and scalability. By leveraging polynomial tokenization while preserving
                  full statistical value without exposing source data, we streamline storage and transmission, enabling
                  faster, more efficient operations. Our solutions integrate seamlessly with your existing
                  infrastructure, reducing resource consumption and enhancing system efficiency. Thereby empowering
                  your organization to reduce costs, improve performance, and drive sustained innovation.
                </p>
                <Link href="/data-management">
                  <Button variant="outline" size="sm" className="self-start rounded-full">
                    Explore Further
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: 0.06 }}
                className="rounded-2xl border border-border/60 bg-card/80 backdrop-blur-sm p-6 md:p-7 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Code2 className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-heading font-semibold">Software Development</h3>
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 flex-1">
                  For Engineering and Product Development leaders that crave agile outcomes to respond rapidly to
                  C-Suite and board initiatives, our approach enables your teams to collaborate and adapt quickly to
                  prioritize features, meet market demands and deliver exceptional customer value. We seamlessly
                  integrate with your existing systems to streamline development cycles, optimize workflows, and
                  accelerate innovation. Designed for scalability and efficiency, we ensure every initiative aligns with
                  your technical objectives and drives maximum operational impact.
                </p>
                <Link href="/software-development">
                  <Button variant="outline" size="sm" className="self-start rounded-full">
                    Explore Further
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="py-14 md:py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center rounded-3xl border border-primary/20 bg-primary/5 p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                Ready to explore our services architecture in depth?
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6">
                Schedule time with our team to walk through deployment models, integrations, and how our tailored
                solutions align with your goals and demonstrate measurable impact.
              </p>
              <div className="flex justify-center">
                <Link href="/calendar">
                  <Button size="lg" className="rounded-full">
                    Book a discovery session
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
