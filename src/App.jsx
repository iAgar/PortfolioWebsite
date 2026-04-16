import React, { useEffect, useRef, useState, useLayoutEffect, useImperativeHandle } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MousePointer2, Menu, ArrowRight, Terminal, Linkedin, Mail, Activity, Newspaper, Music, Plane, Camera, Code, Link, Check, Play } from 'lucide-react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

gsap.registerPlugin(ScrollTrigger);

// Utility for class merging
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// ==========================================
// AMBIENT BACKGROUND
// ==========================================
function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      {/* Floating circles */}
      <div className="absolute w-[800px] h-[800px] rounded-full border border-white/[0.1] top-[10%] left-[-10%]" style={{ animation: 'float-slow 12s ease-in-out infinite' }} />
      <div className="absolute w-[600px] h-[600px] rounded-full border border-accent/[0.15] bottom-[10%] right-[-5%]" style={{ animation: 'float-slow-reverse 15s ease-in-out infinite' }} />
      <div className="absolute w-[500px] h-[500px] rounded-full border border-white/[0.08] top-[50%] left-[20%]" style={{ animation: 'float-slow 18s ease-in-out infinite 2s' }} />

      {/* Subtle glowing orbs */}
      <div className="absolute w-[700px] h-[700px] rounded-full bg-accent/[0.04] blur-[150px] top-[15%] right-[5%]" style={{ animation: 'pulse-glow 6s ease-in-out infinite' }} />
      <div className="absolute w-[600px] h-[600px] rounded-full bg-accent/[0.03] blur-[120px] bottom-[5%] left-[0%]" style={{ animation: 'pulse-glow 8s ease-in-out infinite 2s' }} />

      {/* Tiny floating dots */}
      <div className="absolute w-2 h-2 rounded-full bg-accent/[0.4] top-[20%] left-[10%]" style={{ animation: 'float-slow 10s ease-in-out infinite' }} />
      <div className="absolute w-2.5 h-2.5 rounded-full bg-white/[0.25] top-[75%] left-[75%]" style={{ animation: 'float-slow-reverse 11s ease-in-out infinite 1s' }} />
      <div className="absolute w-2 h-2 rounded-full bg-accent/[0.3] top-[35%] left-[85%]" style={{ animation: 'float-slow 9s ease-in-out infinite 3s' }} />
      <div className="absolute w-2 h-2 rounded-full bg-white/[0.28] top-[90%] left-[20%]" style={{ animation: 'float-slow-reverse 12s ease-in-out infinite 1s' }} />
      <div className="absolute w-1.5 h-1.5 rounded-full bg-accent/[0.35] top-[10%] left-[60%]" style={{ animation: 'float-slow 14s ease-in-out infinite 5s' }} />
      <div className="absolute w-2 h-2 rounded-full bg-white/[0.2] top-[45%] left-[40%]" style={{ animation: 'float-slow-reverse 13s ease-in-out infinite 3s' }} />

      {/* Diagonal thin lines */}
      <div className="absolute w-[400px] h-[2px] bg-gradient-to-r from-transparent via-white/[0.2] to-transparent top-[25%] left-[15%] rotate-[35deg]" style={{ animation: 'float-slow 15s ease-in-out infinite 1.5s' }} />
      <div className="absolute w-[300px] h-[2px] bg-gradient-to-r from-transparent via-accent/[0.25] to-transparent top-[70%] right-[10%] rotate-[-25deg]" style={{ animation: 'float-slow-reverse 14s ease-in-out infinite 4s' }} />
    </div>
  );
}

// ==========================================
// A. NAVBAR — "The Floating Island"
// ==========================================
function Navbar() {
  const navRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: 'top -80',
        end: 99999,
        toggleClass: {
          className: 'scrolled-nav',
          targets: navRef.current
        }
      });
    }, navRef);
    return () => ctx.revert();
  }, []);

  return (
    <nav
      ref={navRef}
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500",
        "flex items-center justify-center px-10 py-4 rounded-full",
        "w-fit border border-transparent",
        "text-background"
      )}
    >
      <style>{`
        .scrolled-nav {
          background-color: #0D0D12;
          border-color: rgba(201, 168, 76, 0.2);
          color: #FAF8F5;
        }
      `}</style>
      <div className="hidden md:flex items-center gap-16 font-data text-base md:text-lg tracking-wide">
        <a href="#ai-products" className="link-lift hover:text-accent transition-colors">AI Products</a>
        <a href="#experience" className="link-lift hover:text-accent transition-colors">Experience</a>
        <a href="#projects" className="link-lift hover:text-accent transition-colors">Projects</a>
        <a href="#contact" className="link-lift hover:text-accent transition-colors">Contact</a>
      </div>
      <button className="md:hidden text-current">
        <Menu size={24} />
      </button>
    </nav>
  );
}

// ==========================================
// B. HERO SECTION — "The Opening Shot"
// ==========================================
function Hero() {
  const container = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(".hero-text", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.2
      }).from(".hero-btn", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.6");
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative w-full h-[100dvh] flex items-center justify-center pt-16 px-6 md:px-12 overflow-hidden">
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center gap-4 text-background">
        <h1 className="flex flex-col items-center gap-2">
          <span className="hero-text font-sans font-bold text-3xl md:text-5xl lg:text-6xl tracking-tight text-background/90">
            Ishaan Agarwal
          </span>
          {/* <span className="hero-text font-drama italic text-7xl md:text-8xl lg:text-[10rem] leading-[0.85] text-accent">
            Excellence.
          </span> */}
        </h1>
        <p className="hero-text font-sans text-lg md:text-xl text-background/70 max-w-lg mt-6 mx-auto">
          Product Manager with technical depth, <br></br>passionate about using AI to deliver great products.
        </p>
        <a href="#projects" className="hero-btn btn-magnetic mt-8 bg-accent text-primary px-8 py-4 rounded-full font-sans font-bold text-lg flex items-center justify-center gap-2 group inline-flex">
          View some of my personal projects
          <ArrowRight className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section >
  );
}

// ==========================================
// C. FEATURES — "Interactive Functional Artifacts"
// ==========================================
function TerminalCard({ title, text }) {
  return (
    <div className="bg-[#15151b] border border-accent/20 p-6 lg:p-8 rounded-[2rem] w-full min-h-[50px] flex flex-col shadow-2xl border-l-4 border-l-accent animate-fadeIn">
      <div className="flex items-center gap-3 mb-8 pb-5 border-b border-white/10">
        <span className="font-sans font-bold text-2xl text-background tracking-tight">{title}</span>
      </div>
      <div className="font-sans text-base text-background/70 whitespace-pre-line flex-1 leading-[1.8] overflow-y-auto">
        {text}
      </div>
    </div>
  );
}

function Experience() {
  const experiences = [
    {
      company: "Amazon",
      role: "Software Engineer",
      tenure: "May 2025 – Present",
      color: "#FF9900",
      logo: (
        <svg role="img" viewBox="0 0 24 24" className="w-8 h-8 shrink-0" fill="#FF9900">
          <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.654-1.244.743-2.64 1.316-4.185 1.726a17.617 17.617 0 01-10.951-.577 17.88 17.88 0 01-5.43-3.35c-.1-.074-.151-.15-.151-.22 0-.047.021-.09.051-.13zm6.565-6.218c0-1.005.247-1.863.743-2.577.495-.71 1.17-1.25 2.04-1.615.796-.335 1.756-.575 2.912-.72.39-.046 1.033-.103 1.92-.174v-.37c0-.93-.105-1.558-.3-1.875-.302-.43-.78-.65-1.44-.65h-.182c-.48.046-.896.196-1.246.46-.35.27-.575.63-.675 1.096-.06.3-.206.465-.435.51l-2.52-.315c-.248-.06-.372-.18-.372-.39 0-.046.007-.09.022-.15.247-1.29.855-2.25 1.82-2.88.976-.616 2.1-.975 3.39-1.05h.54c1.65 0 2.957.434 3.888 1.29.135.15.27.3.405.48.12.165.224.314.283.45.075.134.15.33.195.57.06.254.105.42.135.51.03.104.062.3.076.615.01.313.02.493.02.553v5.28c0 .376.06.72.165 1.036.105.313.21.54.315.674l.51.674c.09.136.136.256.136.36 0 .12-.06.226-.18.314-1.2 1.05-1.86 1.62-1.963 1.71-.165.135-.375.15-.63.045a6.062 6.062 0 01-.526-.496l-.31-.347a9.391 9.391 0 01-.317-.42l-.3-.435c-.81.886-1.603 1.44-2.4 1.665-.494.15-1.093.227-1.83.227-1.11 0-2.04-.343-2.76-1.034-.72-.69-1.08-1.665-1.08-2.94l-.05-.076zm3.753-.438c0 .566.14 1.02.425 1.364.285.34.675.512 1.155.512.045 0 .106-.007.195-.02.09-.016.134-.023.166-.023.614-.16 1.08-.553 1.424-1.178.165-.28.285-.58.36-.91.09-.32.12-.59.135-.8.015-.195.015-.54.015-1.005v-.54c-.84 0-1.484.06-1.92.18-1.275.36-1.92 1.17-1.92 2.43l-.035-.02zm9.162 7.027c.03-.06.075-.11.132-.17.362-.243.714-.41 1.05-.5a8.094 8.094 0 011.612-.24c.14-.012.28 0 .41.03.65.06 1.05.168 1.172.33.063.09.099.228.099.39v.15c0 .51-.149 1.11-.424 1.8-.278.69-.664 1.248-1.156 1.68-.073.06-.14.09-.197.09-.03 0-.06 0-.09-.012-.09-.044-.107-.12-.064-.24.54-1.26.806-2.143.806-2.64 0-.15-.03-.27-.087-.344-.145-.166-.55-.257-1.224-.257-.243 0-.533.016-.87.046-.363.045-.7.09-1 .135-.09 0-.148-.014-.18-.044-.03-.03-.036-.047-.02-.077 0-.017.006-.03.02-.063v-.06z" />
        </svg>
      ),
      text: `• Drove Implementation of Brazil-specific fulfillment workflow for small sellers by defining integration requirements and aligning multiple service teams, resulting in 12% regional e-commerce growth
• Scaled seller onboarding by integrating end-to-end service workflows, whitelisting secure inter-service communication, and configuring plugin-based extensions within the core system, generating $700M in revenue over 3 years
• Improved customer experience by building a synthetic traffic canary system that proactively detected production regression, enabling earlier incident response before customer impact
• Improved service observability by configuring high-signal CloudWatch metrics and alarms, strengthening service reliability and on-call readiness
• Led high-severity incident by coordinating cross-functional remediation, communicating stakeholder updates, and driving post-incident corrective actions to maintain SLAs.`
    },
    {
      company: "Wells Fargo",
      role: "Software Engineer",
      tenure: "Aug 2023 – May 2025",
      color: "#D71E28",
      logo: (
        <svg role="img" viewBox="0 0 24 24" className="w-8 h-8 shrink-0" fill="#D71E28">
          <path d="M12.136 13.949c0 .392-.245.616-.719.616h-.628v-1.226h.628c.48 0 .72.212.72.61zM6.922 15.06h1.044l-.523-1.443-.521 1.443zm12.46-1.82c-.72 0-1.109.562-1.109 1.526 0 .97.384 1.526 1.108 1.526.725 0 1.108-.556 1.108-1.526 0-.964-.389-1.526-1.108-1.526zM23.73 0v24H.269V0h23.462zm-5.548 10.652c.484.245.948.354 1.571.354.895 0 1.481-.458 1.481-1.171 0-.6-.357-1.014-1.028-1.172l-.677-.158c-.394-.092-.559-.25-.559-.517 0-.322.25-.523.74-.523s.778.18.89.604l.048.186h.383v-.943a2.927 2.927 0 0 0-1.352-.338c-.911 0-1.497.447-1.497 1.166 0 .556.34.965.996 1.112l.676.152c.432.099.592.273.592.562 0 .354-.261.55-.784.55-.59 0-.894-.24-1.027-.697l-.07-.235h-.383v1.068zm-3.378.245h3.02V9.595h-.383l-.043.19c-.106.486-.255.638-.607.638h-.74V7.557h.506v-.474h-1.753v.474h.453v2.866h-.453v.474zm-3.355 0h3.02V9.595h-.384l-.042.19c-.107.486-.256.638-.608.638h-.74V7.557h.506v-.474H11.45v.474h.452v2.866h-.452v.474zm-8.758-3.34.938 3.34h.74l.778-2.768.756 2.768h.74l.932-3.34h.736v2.866h-.453v.474h3.201V9.595h-.383l-.043.19c-.106.486-.26.638-.607.638h-.922V9.241h1.071a.58.58 0 0 0 .059-.273.55.55 0 0 0-.059-.26h-1.07v-1.15h.884c.357 0 .48.157.596.615l.038.147h.383V7.083H6.49v.474h.522l-.613 2.305-.762-2.779h-.766l-.746 2.774-.624-2.3h.501v-.474H2.266v.474h.426zm1.412 7.002v-1.22h.947c.358 0 .48.158.597.615l.038.147h.383v-1.236H2.857v.474h.453v2.866h-.453v.474h1.78v-.474h-.533v-1.112H5.2a.58.58 0 0 0 .058-.272.551.551 0 0 0-.058-.262H4.104zm9.114 1.913a.461.461 0 0 0-.048-.224.663.663 0 0 1-.112.011c-.245 0-.309-.142-.34-.458l-.022-.201c-.048-.43-.245-.708-.73-.746v-.017c.48-.022.975-.349.975-.964 0-.621-.496-1.008-1.257-1.008H9.542v.474h.453v2.866H9.26l-1.332-3.34H7.22l-1.305 3.34h-.373v.474h1.412v-.474h-.448l.245-.682h1.385l.245.682h-.437v.474h3.35v-.474h-.505v-1.16h.293c.586 0 .761.212.826.762l.02.19c.06.507.31.725.826.725.15 0 .299-.01.416-.027a.46.46 0 0 0 .048-.223zm3.633-1.788h-1.417a.52.52 0 0 0-.059.256c0 .11.016.18.059.268h.634v.964a1.598 1.598 0 0 1-.629.125c-.767 0-1.166-.56-1.166-1.53s.4-1.532 1.124-1.532c.485 0 .767.245.932.67l.058.153h.384v-.976a3.063 3.063 0 0 0-1.412-.337c-1.172 0-1.96.8-1.96 2.027 0 1.231.767 2.016 1.96 2.016.474 0 .964-.136 1.492-.404v-1.7zm4.512.082c0-1.182-.831-2.021-1.982-2.021-1.145 0-1.981.839-1.981 2.021 0 1.188.83 2.022 1.981 2.022 1.156 0 1.982-.834 1.982-2.022z" />
        </svg>
      ),
      text: `• Identified operational visibility gaps and defined the team's first 6-metric KPI reporting suite, adopted by business and product leadership for roadmap prioritization
• Collaborated with product, business and design stakeholders to evaluate trade-offs and influence quarterly prioritization
• Led automation of off-boarding workflows, reducing manual operations by 40%, and earning an Excellence in Execution Award
• Decreased case processing time by 40% by delivering contractor offboarding functionality two quarters ahead of deadline
• Implemented regulatory content changes impacting 4,000+ employees, ensuring rollout under strict deadlines.
• Introduced scheduled email notification mechanisms, improving efficiency by reducing processing time by 80% and human error from 3% to 0%.
• Implemented automate testing, reducing manual QA effort by 80 hours per release cycle.`
    }
  ];

  return (
    <section id="experience" className="px-6 py-32 z-10 relative">
      <div className="max-w-4xl mx-auto">
        <div className="mb-24 text-center">
          <h2 className="font-sans font-bold text-4xl lg:text-5xl text-background">Career Journey</h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[23px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent/50 via-accent/20 to-transparent"></div>

          <div className="flex flex-col gap-20">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative pl-16 group">
                {/* Timeline Marker */}
                <div className="absolute left-0 top-0 w-16 h-16 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-accent relative z-10 group-hover:scale-125 transition-transform duration-300">
                    <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-25"></div>
                  </div>
                </div>

                {/* Content Container */}
                <div className="flex flex-col gap-6">
                  {/* Header Row */}
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center p-3 border border-white/10 group-hover:border-accent/40 transition-colors">
                        {exp.logo}
                      </div>
                      <div>
                        <h3 className="font-sans font-bold text-2xl lg:text-3xl text-background leading-tight">{exp.company}</h3>
                        <p className="font-sans font-medium text-accent uppercase tracking-wider text-sm">{exp.role}</p>
                      </div>
                    </div>
                    <div className="font-data text-background/50 text-base md:text-lg mb-1 italic">
                      {exp.tenure}
                    </div>
                  </div>

                  {/* Description Card */}
                  <div className="bg-[#0e0e13] border border-white/5 p-6 lg:p-10 rounded-[2rem] shadow-xl transition-all duration-500 group-hover:border-white/10">
                    <div className="font-sans text-base lg:text-lg text-background/70 whitespace-pre-line leading-[1.8]">
                      {exp.text}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



// ==========================================
// E. PROTOCOL — "Sticky Stacking Archive"
// ==========================================
function RotatingGeometry() {
  return (
    <svg viewBox="0 0 200 200" className="w-[80%] max-w-[400px] animate-[spin_40s_linear_infinite] opacity-60">
      <circle cx="100" cy="100" r="90" fill="none" stroke="#C9A84C" strokeWidth="1" strokeDasharray="4 8" />
      <circle cx="100" cy="100" r="70" fill="none" stroke="#FAF8F5" strokeWidth="0.5" />
      <circle cx="100" cy="100" r="50" fill="none" stroke="#C9A84C" strokeWidth="2" strokeDasharray="20 10 5 10" className="animate-[spin_20s_linear_infinite_reverse]" style={{ transformOrigin: 'center' }} />
      <path d="M100 20 L100 180 M20 100 L180 100" stroke="#FAF8F5" strokeWidth="0.5" opacity="0.3" />
    </svg>
  );
}

function ScanningLaser() {
  const scanRef = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(scanRef.current, { top: "100%", duration: 2, repeat: -1, yoyo: true, ease: "power1.inOut" });
    });
    return () => ctx.revert();
  }, []);
  return (
    <div className="relative w-full h-full max-w-[400px] max-h-[400px] border border-white/10 grid grid-cols-10 grid-rows-10 gap-[2px] p-4">
      {[...Array(100)].map((_, i) => (
        <div key={i} className="bg-background/5 rounded-sm"></div>
      ))}
      <div ref={scanRef} className="absolute top-0 left-0 w-full h-[2px] bg-accent shadow-[0_0_15px_#C9A84C] z-10" />
    </div>
  );
}

function PulsingWaveform() {
  const pathRef = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(pathRef.current, { strokeDashoffset: 0, duration: 2, repeat: -1, ease: "none" });
    });
    return () => ctx.revert();
  }, []);
  return (
    <svg viewBox="0 0 400 200" className="w-full">
      <path
        ref={pathRef}
        d="M0 100 H150 L170 40 L200 180 L230 100 H400"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="800"
        strokeDashoffset="800"
      />
      <circle cx="200" cy="100" r="80" fill="none" stroke="#FAF8F5" strokeWidth="1" opacity="0.1" />
    </svg>
  );
}

const Carousel = React.forwardRef(function Carousel({ items, renderCard, sectionId, sectionTitle }, ref) {
  const scrollRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);

  // Extended item list with clones for infinite scroll: [Last, 1, 2, ..., N, First]
  const extendedItems = [
    items[items.length - 1],
    ...items,
    items[0]
  ];

  useLayoutEffect(() => {
    if (!scrollRef.current) return;
    // More bulletproof: find the second item (first real item)
    const secondCard = scrollRef.current.children[1];
    if (secondCard) {
      const offsetPos = secondCard.offsetLeft - (scrollRef.current.offsetWidth - secondCard.offsetWidth) / 2;
      scrollRef.current.scrollLeft = offsetPos;
    }
  }, []);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollPos = scrollRef.current.scrollLeft;
    const containerWidth = scrollRef.current.offsetWidth;
    const cards = scrollRef.current.querySelectorAll('.carousel-card');

    // Stealth Jump Logic
    const totalContentWidth = scrollRef.current.scrollWidth;

    if (scrollPos <= 20) { // Near the start (Clone of Last)
      // Jump to the real Last item
      const lastRealIdx = items.length;
      const targetPos = cards[lastRealIdx].offsetLeft - (containerWidth - cards[lastRealIdx].offsetWidth) / 2;
      scrollRef.current.scrollLeft = targetPos;
      return;
    }

    if (scrollPos >= totalContentWidth - containerWidth - 20) { // Near the end (Clone of First)
      // Jump to the real First item
      const firstRealIdx = 1;
      const targetPos = cards[firstRealIdx].offsetLeft - (containerWidth - cards[firstRealIdx].offsetWidth) / 2;
      scrollRef.current.scrollLeft = targetPos;
      return;
    }

    // Calculate activeIdx for pagination/content (map back to original range)
    let closestIdx = 1;
    let minDiff = Infinity;
    const centerPoint = scrollPos + containerWidth / 2;

    cards.forEach((card, i) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const diff = Math.abs(centerPoint - cardCenter);
      if (diff < minDiff) {
        minDiff = diff;
        closestIdx = i;
      }
    });

    // Map the closest extended index back to original index
    let mappedIdx = closestIdx - 1;
    if (mappedIdx < 0) mappedIdx = items.length - 1;
    if (mappedIdx >= items.length) mappedIdx = 0;

    if (mappedIdx !== activeIdx) setActiveIdx(mappedIdx);
  };

  const scrollToIndex = (idx) => {
    if (!scrollRef.current) return;
    const cards = scrollRef.current.querySelectorAll('.carousel-card');
    const targetIdx = idx + 1; // Map original idx to extended idx
    if (cards[targetIdx]) {
      cards[targetIdx].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  };

  useImperativeHandle(ref, () => ({ scrollToIndex }));

  return (
    <section id={sectionId} className="projects-container relative w-full pt-32 pb-32 flex flex-col overflow-hidden">
      <div className="px-6 max-w-7xl mx-auto w-full mb-12 shrink-0">
        <h2 className="font-sans font-bold text-4xl text-background">{sectionTitle}</h2>
      </div>

      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="w-full overflow-x-auto snap-x snap-mandatory flex items-center gap-8 pb-16 pt-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {extendedItems.map((item, idx) => {
          // Map idx to its original position in the items array
          let originalIdx = idx - 1;
          if (originalIdx < 0) originalIdx = items.length - 1;
          if (originalIdx >= items.length) originalIdx = 0;

          const isActive = originalIdx === activeIdx;
          return (
            <div
              key={idx}
              className={cn(
                "carousel-card shrink-0 w-[85vw] md:w-[600px] lg:w-[850px] h-[70vh] md:h-[550px]",
                "bg-[#15151b] rounded-[2rem] border border-white/10 flex flex-col md:flex-row shadow-2xl snap-center relative transition-all duration-700 ease-out",
                !isActive && "blur-[0.5px] opacity-60 scale-[0.98] grayscale-0 pointer-events-none"
              )}
            >
              {renderCard(item, isActive)}
            </div>
          );
        })}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center items-center gap-3 mt-4 mb-8 shrink-0 relative z-10">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollToIndex(idx)}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-500",
              idx === activeIdx ? "bg-accent w-8" : "bg-white/20 hover:bg-white/40"
            )}
            aria-label={`Go to item ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
});

function Projects() {
  const projectData = [
    {
      num: '01',
      title: 'Spotify AI feature',
      desc: 'Spotify Party is an AI-powered "Computer Vision DJ" that uses the device\u2019s camera to analyse the energy, movement, and sentiment of a room in real-time. By removing the need for manual song selection, Party automates the party atmosphere, selecting and transitioning tracks based on how the crowd is actually reacting to the music.',
      prdLink: 'https://drive.google.com/file/d/1FP7IjBdaoAjIq8jGP8eETtRRONGh1Cvy/view?usp=share_link',
      logo: <svg viewBox="0 0 24 24" fill="#1DB954" className="w-6 h-6 lg:w-8 lg:h-8 shrink-0"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.299 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.24 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.38 4.2-1.26 11.28-1.02 15.241 1.32.54.3 1.021 1.02.42 1.5-.3.601-.9.72-1.08.66z" /></svg>
    },
    {
      num: '02',
      title: 'Google SmartPack',
      desc: 'SmartPack is an AI-powered add-on for Google Flights that provides hyper-personalized weather forecasts and wardrobe recommendations during the flight search and booking process. By leveraging Google\u2019s user data (age, gender, interests) and real-time climate patterns, it eliminates the need for external packing research.',
      prdLink: 'https://drive.google.com/file/d/1wfDKv0NombfqfGvFxbf2BZKxB9DDSJvA/view?usp=share_link',
      logo: <svg viewBox="0 0 24 24" className="w-6 h-6 lg:w-8 lg:h-8 shrink-0"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /></svg>
    },
    {
      num: '03',
      title: 'District Wayfinder',
      desc: 'District Wayfinder is an offline-first navigation feature within the Zomato District app. It enables users at high-density events to download custom, hand-drawn vector venue maps and navigate to specific coordinates (like a group "Home Base") using the device\u2019s internal sensors (GPS/Magnetometer) and QR-based location sharing, requiring zero cellular data or Wi-Fi.',
      prdLink: 'https://drive.google.com/file/d/18Rtt59AR-dMBKzMQoGq6c1qaOZCy5F4b/view?usp=sharing',
      logo: <svg role="img" viewBox="0 0 24 24" fill="#E23744" className="w-8 h-8 lg:w-10 lg:h-10 shrink-0"><path d="M19.615 9.45l-1.258.473-.167.71-.446.021-.115.978h.408l-.211 1.51c-.131.939.036 1.381.865 1.381.488 0 .91-.175 1.135-.297l.145-.9c-.167.083-.436.19-.618.19-.247 0-.276-.13-.225-.488l.189-1.396h.843c.03-.206.131-.877.16-1h-.865zm-3.779 1.002c-.115.002-.236.01-.361.026a3.592 3.592 0 0 0-1.347.432l.26.789c.269-.15.615-.28.978-.326.538-.066.757.1.79.375.014.109.004.199-.005.289l-.014.056a3.46 3.46 0 0 0-1.097-.036c-.518.063-.943.273-1.204.6a1.324 1.324 0 0 0-.225 1.034c.127.583.553.84 1.199.76.45-.055.812-.27 1.076-.63a2.665 2.665 0 0 1-.03.304 1.74 1.74 0 0 1-.072.29l1.244.001a3.657 3.657 0 0 1-.001-.365c.036-.459.118-1.143.247-2.051a2.397 2.397 0 0 0-.002-.59c-.08-.644-.628-.969-1.436-.958zm6.536.063c-1.194 0-2.107 1.067-2.107 2.342 0 .959.552 1.693 1.628 1.693 1.2 0 2.107-1.067 2.107-2.35 0-.95-.538-1.685-1.628-1.685zm-11.777.041c-.538 0-1.12.465-1.52 1.236.102-.504.08-1.076.051-1.198a8.964 8.964 0 0 1-1.287.122 6.9 6.9 0 0 1-.073 1.243l-.167 1.145c-.066.45-.138.969-.211 1.297h1.353c.007-.199.058-.511.094-.786l.116-.786c.095-.511.502-1.114.815-1.114.182 0 .175.176.124.504l-.131.885c-.066.45-.138.969-.211 1.297h1.367c.008-.199.051-.512.088-.786l.116-.786c.094-.512.502-1.114.814-1.114.182 0 .175.168.146.396l-.327 2.29H13l.438-2.609c.095-.649.044-1.236-.676-1.236-.523 0-1.09.443-1.49 1.182.087-.61.036-1.182-.677-1.182zm-4.88.008c-1.177 0-2.08 1.053-2.08 2.312 0 .946.546 1.67 1.608 1.67 1.185 0 2.08-1.052 2.08-2.319 0-.938-.531-1.663-1.607-1.663zm-5.126.091c-.05.39-.102.778-.175 1.13.328-.008.619-.016 1.411-.016l-1.81 1.96-.015.703c.444-.03.997-.039 1.63-.039.566 0 1.134.008 1.497.039.065-.458.13-.763.21-1.137-.275.015-.755.023-1.512.023l1.81-1.969.023-.694c-.437.023-.83.03-1.52.03-.749 0-.975-.007-1.549-.03zm4.988.927c.255 0 .408.228.408.701 0 .687-.276 1.251-.626 1.251-.261 0-.414-.236-.414-.702 0-.694.283-1.25.632-1.25zm16.629 0c.254 0 .407.228.407.701 0 .687-.276 1.251-.625 1.251-.262 0-.415-.236-.415-.702 0-.694.284-1.25.633-1.25zM15.51 12.64c.206-.003.403.024.55.058l-.013.118c-.075.44-.39.881-.848.938-.31.037-.578-.148-.608-.39a.538.538 0 0 1 .114-.41c.117-.159.336-.268.599-.3.069-.009.138-.013.206-.014Z" /></svg>
    },
    {
      num: '04',
      title: 'Swiggy OneSearch',
      desc: 'Currently, Swiggy users must navigate to specific verticals (Food, Instamart, Dineout) before searching. This creates friction. OneSearch aims to provide a single entry point where a single query (e.g., "Samosa") aggregates results from all Swiggy services, allowing users to choose between ordering, cooking, or dining out.',
      prdLink: 'https://drive.google.com/file/d/13TPTCJlcuqlr2EpoTZb1dmKJnsXSL_-H/view?usp=sharing',
      logo: <svg role="img" viewBox="0 0 24 24" fill="#FC8019" className="w-6 h-6 lg:w-8 lg:h-8 shrink-0"><path d="M12.034 24c-.376-.411-2.075-2.584-3.95-5.513-.547-.916-.901-1.63-.833-1.814.178-.48 3.355-.743 4.333-.308.298.132.29.307.29.409 0 .44-.022 1.619-.022 1.619a.441.441 0 1 0 .883-.002l-.005-2.939c0-.255-.278-.319-.331-.329-.511-.002-1.548-.006-2.661-.006-2.457 0-3.006.101-3.423-.172-.904-.591-2.383-4.577-2.417-6.819C3.849 4.964 5.723 2.225 8.362.868A8.13 8.13 0 0 1 12.026 0c4.177 0 7.617 3.153 8.075 7.209l.001.011c.084.981-5.321 1.189-6.39.904-.164-.044-.206-.212-.206-.284L13.5 4.996a.442.442 0 0 0-.884.002l.009 3.866a.33.33 0 0 0 .268.32l3.354-.001c1.79 0 2.542.207 3.042.588.333.254.461.739.349 1.37C18.633 16.755 12.273 23.71 12.034 24z" /></svg>
    },
    {
      num: '05',
      title: 'Instagram Verified Match',
      desc: 'Verified Match is an AI-driven curation layer for the Instagram Creator Marketplace. Unlike traditional search tools, it uses Meta\u2019s internal data (Spending Power, Real-Reach, and Conversion History) to provide businesses with Ready-made Influencer Buckets. By silently downranking accounts with high bot activity, Instagram ensures brands only see high-integrity partners.',
      prdLink: 'https://drive.google.com/file/d/1ejdyo3031HsDhnR5956u89EdsOwNd8vS/view?usp=sharing',
      logo: <svg role="img" viewBox="0 0 24 24" fill="#E4405F" className="w-6 h-6 lg:w-8 lg:h-8 shrink-0"><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" /></svg>
    }
  ];

  return (
    <Carousel
      items={projectData}
      sectionId="projects"
      sectionTitle="Personal Projects"
      renderCard={(proj, isActive) => (
        <>
          <div className={cn(
            "flex-1 p-6 md:p-8 lg:p-12 flex flex-col justify-center w-full md:w-1/2 transition-all duration-500",
            !isActive && "opacity-0 invisible"
          )}>
            <span className="font-data text-accent text-sm lg:text-base mb-2 lg:mb-4 uppercase tracking-widest">// {proj.num}</span>
            <h3 className="font-sans font-bold text-2xl md:text-3xl lg:text-4xl text-background mb-4 leading-tight flex items-center gap-3">
              {proj.logo}
              {proj.title}
            </h3>
            <p className="font-sans text-sm md:text-base lg:text-lg text-background/80 leading-relaxed pr-2">{proj.desc}</p>
          </div>

          {proj.prdLink ? (
            <div className={cn(
              "flex-1 bg-[#1A1A22] flex flex-col items-center justify-center gap-6 p-6 lg:p-10 border-t md:border-t-0 md:border-l border-white/10 rounded-b-[2rem] md:rounded-bl-none md:rounded-r-[2rem] transition-all duration-500",
              !isActive && "opacity-0 invisible"
            )}>
              <div className="flex flex-col items-center gap-4 w-full">
                <a
                  href={proj.prdLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-magnetic w-full max-w-[240px] flex items-center justify-center gap-2 bg-accent text-primary px-6 py-3 lg:py-4 rounded-full font-sans font-bold text-base lg:text-lg transition-all hover:scale-105 shadow-xl"
                >
                  View documentation
                </a>
              </div>

              {/* <div className="flex flex-col items-center gap-2 text-center mt-2">
                <div className="w-1 px-4 py-[1px] bg-accent/50 rounded-full mb-1"></div>
                <p className="font-sans font-black text-xl lg:text-3xl text-background tracking-tight">
                  <span className="text-accent">TL;DR</span> try MVP here
                </p>
              </div> */}
            </div>
          ) : (
            <div className={cn(
              "flex-1 bg-[#1A1A22] flex items-center justify-center p-6 lg:p-10 border-t md:border-t-0 md:border-l border-white/10 overflow-hidden rounded-b-[2rem] md:rounded-bl-none md:rounded-r-[2rem] transition-all duration-500",
              !isActive && "opacity-0 invisible"
            )}>
              <PulsingWaveform />
            </div>
          )}
        </>
      )}
    />
  );
}

// ==========================================
// E2. AI PRODUCTS SHIPPED
// ==========================================
function CopyLinkButton({ index, isActive }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const url = `${window.location.origin}${window.location.pathname}#ai-product-${index + 1}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <button
      onClick={handleCopy}
      className={cn(
        "absolute top-4 right-4 w-8 h-8 flex items-center justify-center",
        "bg-white/5 border border-white/10 rounded-lg transition-all duration-200",
        "text-background/40 hover:bg-white/10 hover:border-accent/30 hover:text-accent",
        !isActive && "opacity-0 invisible pointer-events-none"
      )}
      aria-label="Copy link to this card"
    >
      {copied ? <Check size={16} /> : <Link size={16} />}
    </button>
  );
}

function AIProducts() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const match = window.location.hash.match(/^#ai-product-(\d+)$/);
    if (!match) return;
    const cardNum = parseInt(match[1], 10);
    if (cardNum < 1 || cardNum > 6) return;
    const timer = setTimeout(() => {
      carouselRef.current?.scrollToIndex(cardNum - 1);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const getLinkLabel = (url) => {
    if (!url) return null;
    if (url.includes('github.com')) return 'View on GitHub';
    if (url.includes('instagram.com')) return 'View on Instagram';
    return 'View documentation';
  };

  const aiProductData = [
    {
      num: '01',
      title: 'Spotify Party DJ',
      desc: 'A webcam-based AI DJ that uses computer vision (pixel differencing) to detect room energy in real-time. Features Web Audio API crossfading, drag-and-drop track upload, and automatic track selection based on crowd movement and sentiment analysis.',
      prdLink: 'https://github.com/iAgar/SpotifyDJ',
      // demoLink: 'https://drive.google.com/file/d/1k2l3m4n5o/view?usp=sharing',
      logo: <Music size={32} color="#8B5CF6" className="shrink-0" />,
    },
    {
      num: '02',
      title: 'Strava MCP Server',
      desc: 'A Model Context Protocol server that connects Claude to the Strava fitness API, enabling natural-language fitness data analysis. Built with Cloudflare Workers, MCP-native OAuth (workers-oauth-provider, McpAgent, Durable Objects, KV storage), and StreamableHTTPServerTransport in stateless mode.',
      prdLink: 'https://github.com/iAgar/Strava-MCP#',
      demoLink: 'https://drive.google.com/file/d/1zk6xZP5oqmh62rXidjYsfwZVRp_dDEhV/view?usp=sharing',
      logo: <Activity size={32} color="#FC4C02" className="shrink-0" />,
    },
    {
      num: '03',
      title: 'SmartTravel Extension',
      desc: 'A Chrome extension that auto-displays a travel companion widget on flight search sites. Features Packing, Attractions, Food, and Transport tabs with AI-powered recommendations. All API keys handled server-side via Cloudflare Workers.',
      prdLink: 'https://github.com/iAgar/SmartTravel',
      // demoLink: 'https://drive.google.com/file/d/6p7q8r9s0t/view?usp=sharing',
      logo: <Plane size={32} color="#0EA5E9" className="shrink-0" />,
    },
    /* {
      num: '04',
      title: 'CS Edutainment Reels',
      desc: 'An Instagram Reels page delivering computer science education through dark humor and meme aesthetics. Features graph algorithm explainers with custom canvas-based fire particle systems, BFS wave animations, and the signature Ash & Ember color scheme.',
      prdLink: 'https://www.instagram.com/ishaan.codes',
      demoLink: 'https://drive.google.com/file/d/1u2v3w4x5y/view?usp=sharing',
      logo: <Camera size={32} color="#E4405F" className="shrink-0" />,
    }, */
    {
      num: '04',
      title: 'NewsLens',
      desc: 'An AI-powered media bias detection agent that analyzes news articles across sources to surface ideological framing, factual discrepancies, and coverage gaps. Helps users see beyond the headline by comparing how different outlets report the same story.',
      prdLink: 'https://github.com/iAgar/NewsLens',
      // demoLink: 'https://drive.google.com/file/d/6f7g8h9i0j/view?usp=sharing',
      logo: <Newspaper size={32} color="#4A90D9" className="shrink-0" />,
    },
    /* {
      num: '06',
      title: 'Portfolio Website',
      desc: 'This website itself — a React 19 + Vite + Tailwind CSS portfolio with GSAP scroll-triggered animations, infinite-loop carousels, ambient floating geometry backgrounds, and a dark gold-accent design system. Fully responsive with custom magnetic button interactions.',
      prdLink: 'https://github.com/iAgar/PortfolioWebsite',
      demoLink: 'https://drive.google.com/file/d/6a7b8c9d0e/view?usp=sharing',
      logo: <Code size={32} color="#10B981" className="shrink-0" />,
    }, */
  ];

  return (
    <Carousel
      ref={carouselRef}
      items={aiProductData}
      sectionId="ai-products"
      sectionTitle="AI Products Shipped"
      renderCard={(prod, isActive) => (
        <>
          <CopyLinkButton index={parseInt(prod.num) - 1} isActive={isActive} />
          <div className={cn(
            "flex-1 p-6 md:p-8 lg:p-12 flex flex-col justify-center w-full md:w-1/2 transition-all duration-500",
            !isActive && "opacity-0 invisible"
          )}>
            <span className="font-data text-accent text-sm lg:text-base mb-2 lg:mb-4 uppercase tracking-widest">// {prod.num}</span>
            <h3 className="font-sans font-bold text-2xl md:text-3xl lg:text-4xl text-background mb-4 leading-tight flex items-center gap-3">
              {prod.logo}
              {prod.title}
            </h3>
            <p className="font-sans text-sm md:text-base lg:text-lg text-background/80 leading-relaxed pr-2">{prod.desc}</p>
          </div>

          <div className={cn(
            "flex-1 bg-[#1A1A22] flex flex-col items-center justify-center gap-6 p-6 lg:p-10 border-t md:border-t-0 md:border-l border-white/10 rounded-b-[2rem] md:rounded-bl-none md:rounded-r-[2rem] transition-all duration-500",
            !isActive && "opacity-0 invisible"
          )}>
            <div className="flex flex-col items-center gap-4 w-full">
              {/* <a
                href={prod.demoLink || undefined}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "btn-magnetic w-full max-w-[240px] flex items-center justify-center gap-2 bg-transparent border-2 border-accent text-accent px-6 py-3 lg:py-4 rounded-full font-sans font-bold text-base lg:text-lg transition-all hover:bg-accent/10 hover:scale-105 shadow-xl",
                  !prod.demoLink && "opacity-40 pointer-events-none cursor-default"
                )}
              >
                <Play size={16} />
                View Demo
              </a> */}
              <a
                href={prod.prdLink || undefined}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "btn-magnetic w-full max-w-[240px] flex items-center justify-center gap-2 bg-accent text-primary px-6 py-3 lg:py-4 rounded-full font-sans font-bold text-base lg:text-lg transition-all hover:scale-105 shadow-xl",
                  !prod.prdLink && "opacity-40 pointer-events-none cursor-default"
                )}
              >
                {getLinkLabel(prod.prdLink) ?? 'View source'}
              </a>
            </div>
          </div>
        </>
      )}
    />
  );
}

// ==========================================
// F. CONTACT & G. FOOTER — "The Anchor"
// ==========================================
function Footer() {
  return (
    <footer id="contact" className="bg-[#0A0A0E] mt-[-10vh] rounded-t-[4rem] relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] pb-[10vh]">
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-16 flex flex-col md:flex-row items-center gap-12 md:gap-20">
        {/* Left Side: Photo */}
        <div className="flex-1 w-full max-w-md">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-accent/0 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <img
              src="/profile.jpg"
              alt="Ishaan Agarwal"
              className="relative rounded-[2rem] transition-all duration-700 w-full object-cover shadow-2xl border border-white/5"
            />
          </div>
        </div>

        {/* Right Side: About Me & Contact */}
        <div className="flex-1 flex flex-col gap-8 text-left">
          <div>
            <h2 className="font-sans font-bold text-4xl lg:text-5xl text-background mb-6">About Me</h2>
            <p className="font-sans text-lg lg:text-xl text-background/80 leading-relaxed max-w-xl">
              I’m a software engineer transitioning into product management, focused on building high-quality products by deeply understanding user needs and continuously refining every touchpoint in the user experience.
            </p>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-6">
            <h3 className="font-sans font-bold text-2xl text-accent uppercase tracking-tighter">let's connect !</h3>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a
                href="mailto:ishaanagarwal1805@gmail.com"
                className="btn-magnetic flex justify-center items-center gap-3 bg-accent text-primary w-full sm:w-56 py-4 rounded-full font-sans font-bold text-lg border border-transparent hover:bg-background hover:text-primary transition-all shadow-lg"
              >
                <Mail size={24} /> Send Email
              </a>
              <a
                href="https://www.linkedin.com/in/ishaan-agarwal/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-magnetic text-primary bg-background hover:bg-accent hover:scale-105 transition-all flex justify-center items-center gap-3 w-full sm:w-56 py-4 rounded-full border border-accent/40 font-sans font-bold text-lg shadow-lg"
              >
                <Linkedin size={24} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ==========================================
// MAIN APP COMPONENT
// ==========================================
function App() {
  return (
    <div className="bg-primary min-h-screen text-background selection:bg-accent selection:text-primary relative z-0">
      <BackgroundAnimation />
      <Navbar />
      <Hero />
      <AIProducts />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
