import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePrefersHoverNav } from "@/hooks/use-prefers-hover-nav";
import logoNew from "@assets/TorinosoftLogo.png";

const NAV_TRIGGER_CLASS =
  "text-sm 2xl:text-base font-bold text-foreground/80 hover:text-foreground hover:bg-muted/50 transition-all duration-200 flex items-center gap-1 uppercase 2xl:gap-1.5 tracking-wide 2xl:tracking-wider outline-none cursor-pointer px-2.5 py-2 2xl:px-3 rounded-lg data-[state=open]:bg-muted/50 data-[state=open]:text-foreground shrink-0 whitespace-nowrap";

export function Navbar() {
  const [, setLocation] = useLocation();
  const prefersHoverNav = usePrefersHoverNav();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileMenuOpen]);

  const navItems = [
    {
      name: "SERVICES",
      options: [
        { label: "Contact Center", path: "/contact-center" },
        { label: "Product Development", path: "/product-development" },
        { label: "Data Compression", path: "/data-compression" },
        { label: "Knowledge & Workflow AI", path: "/knowledge-workflow-ai" },
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
        { label: "Contact Center", path: "/contact-center-resources" },
        { label: "Product Development", path: "/product-development-resources" },
        { label: "Data Compression", path: "/data-compression-resources" },
        { label: "Knowledge & Workflow AI", path: "/knowledge-workflow-ai-resources" }
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
        "fixed top-0 left-0 right-0 z-50 pt-[env(safe-area-inset-top,0px)] transition-all duration-300 border-b font-[Roboto,sans-serif]",
        isScrolled
          ? "bg-background/98 backdrop-blur-md border-border/80 shadow-sm"
          : "bg-transparent border-transparent"
      )}
    >
      <div className="container mx-auto flex h-16 min-w-0 items-center px-4 md:px-6">
        <Link href="/">
          <a className="group flex shrink-0 items-center gap-2">
            <img
              src={logoNew}
              alt="Torinosoft"
              className="h-[3.125rem] w-auto max-h-12 object-contain"
            />
          </a>
        </Link>

        {/* Right cluster: nav headings + Contact Us (desktop); menu toggle (mobile) */}
        <div className="flex min-h-0 min-w-0 flex-1 items-center justify-end gap-3 md:gap-4 xl:gap-5 2xl:gap-6">
          <div className="hidden min-w-0 items-center justify-end gap-x-4 md:gap-x-5 xl:flex xl:gap-x-6 2xl:gap-x-7">
            {navItems.map((item) =>
              prefersHoverNav ? (
                <HoverCard key={item.name} openDelay={0} closeDelay={100}>
                  <HoverCardTrigger asChild>
                    <button type="button" className={NAV_TRIGGER_CLASS}>
                      {item.name} <ChevronDown className="h-3 w-3 shrink-0 opacity-50" />
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
              ) : (
                <DropdownMenu key={item.name} modal={false}>
                  <DropdownMenuTrigger asChild>
                    <button type="button" className={NAV_TRIGGER_CLASS}>
                      {item.name} <ChevronDown className="h-3 w-3 shrink-0 opacity-50" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    sideOffset={6}
                    align="start"
                    className="bg-card/98 backdrop-blur-xl border border-border/50 shadow-lg rounded-xl p-2 min-w-[12rem]"
                  >
                    {item.options.map((opt) => (
                      <DropdownMenuItem
                        key={opt.path}
                        className="text-base py-2.5 px-3 rounded-lg cursor-pointer font-medium focus:bg-primary/10 focus:text-primary"
                        onSelect={() => setLocation(opt.path)}
                      >
                        {opt.label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              )
            )}
          </div>

          <div className="relative z-10 hidden shrink-0 items-center xl:flex">
            <Link href="/get-in-touch">
              <Button className="flex h-9 max-w-full items-center gap-1.5 rounded-full bg-primary px-4 text-sm font-bold text-primary-foreground hover:bg-primary/90 2xl:h-10 2xl:gap-2 2xl:px-5 2xl:text-base">
                Contact Us <ExternalLink className="h-3.5 w-3.5 shrink-0" />
              </Button>
            </Link>
          </div>

          {/* Mobile/Tablet Toggle — min touch target ~44px */}
          <button
            type="button"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-foreground hover:bg-muted/50 active:bg-muted/70 xl:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border p-4 flex flex-col gap-4 animate-in slide-in-from-top-5 max-h-[calc(100vh-4rem-env(safe-area-inset-top,0px))] overflow-y-auto supports-[height:100dvh]:max-h-[calc(100dvh-4rem-env(safe-area-inset-top,0px))]">
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
