import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, ChevronDown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import logoNew from "@assets/LogoNew.png";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      name: "SERVICES",
      options: [
        { label: "Contact Center", path: "/contact-center" },
        { label: "Data Compression", path: "/data-compression" },
        { label: "Knowledge & Workflow AI", path: "/platform-architecture" },
        { label: "Product Development", path: "/product-development" },
      ],
    },
    { 
      name: "INDUSTRY SOLUTIONS", 
      options: [
        { label: "Construction", path: "/construction" },
        { label: "Data Management", path: "/data-management" },
        { label: "Software Development", path: "/software-development" }
      ]
    },
    { 
      name: "RESOURCES", 
      options: [
        { label: "Contact Center", path: "/adtech-resources" },
        { label: "Data Compression", path: "/alpr-resources" },
        { label: "Knowledge & Workflow AI", path: "/blog/adtech" },
        { label: "Product Development", path: "/blog/alpr" }
      ]
    },
    { 
      name: "ABOUT US", 
      options: [
        { label: "Company", path: "/about-us" },
        { label: "Careers", path: "/careers" },
        { label: "Office Locations", path: "/office-locations" }
      ]
    },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b font-[Roboto,sans-serif]",
        isScrolled
          ? "bg-background/98 backdrop-blur-md border-border/80 shadow-sm"
          : "bg-transparent border-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
        <Link href="/">
          <a className="flex items-center gap-2 group">
            <img
              src={logoNew}
              alt="Torinsoft"
              className="h-10 w-auto object-contain"
            />
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-3">
          <div className="flex items-center gap-2 mr-2">
            {navItems.map((item) => (
              <HoverCard key={item.name} openDelay={0} closeDelay={100}>
                <HoverCardTrigger asChild>
                  <button
                    type="button"
                    className="text-base font-bold text-foreground/80 hover:text-foreground hover:bg-muted/50 transition-all duration-200 flex items-center gap-1.5 uppercase tracking-wider outline-none cursor-pointer px-3 py-2 rounded-lg"
                  >
                    {item.name} <ChevronDown className="h-3 w-3 opacity-50" />
                  </button>
                </HoverCardTrigger>
                <HoverCardContent
                  sideOffset={6}
                  align="start"
                  className="bg-card/98 backdrop-blur-xl border border-border/50 shadow-lg rounded-xl w-auto p-3 mt-1"
                >
                  <div className="flex flex-col gap-0.5">
                    {item.options.map((opt) => (
                      <Link key={opt.path} href={opt.path}>
                        <a className="text-base py-2 px-3 rounded-lg hover:bg-primary/10 hover:text-primary cursor-pointer transition-all duration-200 font-medium whitespace-nowrap">
                          {opt.label}
                        </a>
                      </Link>
                    ))}
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
          
          <div className="flex items-center gap-2">
            <Link href="/get-in-touch">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full px-5 flex items-center gap-2 h-9 text-base">
                Contact Us <ExternalLink className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile/Tablet Toggle */}
        <button
          className="xl:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile/Tablet Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border p-4 flex flex-col gap-4 animate-in slide-in-from-top-5 max-h-[calc(100vh-4rem)] overflow-y-auto">
          {navItems.map((item) => (
            <div key={item.name} className="flex flex-col gap-1.5">
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-[0.18em] px-2">{item.name}</span>
              {item.options.map((opt) => (
                <Link key={opt.path} href={opt.path}>
                  <a
                    className="text-base text-foreground/90 hover:text-primary hover:bg-muted/50 px-3 py-1.5 rounded-lg transition-all duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {opt.label}
                  </a>
                </Link>
              ))}
            </div>
          ))}
          <div className="flex flex-col gap-2 pt-2">
            <Link href="/get-in-touch">
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full h-10 text-base"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
