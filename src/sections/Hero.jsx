import { useRef } from "react";
import { gsap, SplitText , useGSAP} from "../lib/gsap";

import NoiseShader from "../components/NoiseShader"

export default function Hero() {
  const smootherRef = useRef(null);
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);
  const downRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const scrollDotRef = useRef(null);
  const animatePulseRef = useRef(null);

  useGSAP(() => {
    // GSAP animations only on desktop
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    if (!mediaQuery.matches) return;

    const ctx = gsap.context(() => {
      const text = SplitText.create(descRef.current, {
        mask: "lines",
      });

      const tl = gsap.timeline({
        defaults: {
          ease: "power1.inOut",
        },
      });

      // Scroll dot animation
      gsap.to(scrollDotRef.current, {
        y: 16,
        repeat: -1,
        yoyo: true,
        duration: 1.2,
        ease: "power1.inOut",
      });

      // Badge pulse
      gsap.to(animatePulseRef.current, {
        opacity: 0.4,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "power1.inOut",
      });

      // Main Hero animation
      tl.from(headingRef.current, {
        filter: "blur(20px)",
        opacity: 0,
        scale: 0.97,
        x: -20,
        duration: 1.1,
      })
        .from(
          badgeRef.current,
          {
            opacity: 0,
            duration: 0.6,
          },
          "-=0.5"
        )
        .from(
          downRef.current,
          {
            opacity: 0,
            duration: 0.6,
          },
          "<"
        )
        .from(
          text.lines,
          {
            y: 80,
            rotate: 5,
            stagger: 0.06,
            duration: 0.8,
          },
          "-=0.5"
        )
        .from(
          [leftRef.current, rightRef.current],
          {
            y: 100,
            duration: 0.7,
          },
          "<"
        )
        .from(
          ctaRef.current,
          {
            opacity: 0,
            x: -10,
            duration: 0.6,
          },
          "-=0.5"
        );

      return () => {
        text.revert();
      };
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, {dependencies:[],scope:sectionRef});

  const scrollToProjects = (e) => {
    e.preventDefault();

    const smoother = smootherRef.current;

    if (smoother) {
      smoother.scrollTo("#projects", true, "bottom bottom");
      return;
    }

    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen z-10 flex items-center flex-col justify-center overflow-hidden pt-24 md:pt-34 pb-16 bg-transparent"
      aria-label="Home"
    >
      <div className="relative max-w-7xl mx-auto z-10 px-8 lg:px-0 text-center">
        {/* Badge */}
        <div
          ref={badgeRef}
          className="inline-flex text-sm badge relative items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-gray-400/10 to-black mb-10 rounded-full text-gray-50"
        >
          <span
            ref={animatePulseRef}
            className="w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(0,255,255,0.92)] shadow-accent"
            aria-hidden="true"
          />

          Crafting Unique Brand Identities
        </div>

        {/* Heading */}
        <h1
          ref={headingRef}
          className="text-4xl  sm:text-5xl md:text-7xl lg:text-[96px] font-thin  "
        >
          Basem Mahmoud
          <span className="text-white whitespace-nowrap">
            <br />
            Frontend Developer
          </span>
        </h1>

        {/* Description */}
        <p
          ref={descRef}
          className="mt-8 md:text-md text-xs text-text-secondary max-w-2xl mx-auto leading-relaxed"
        >
          A passionate developer crafting beautiful, performant digital
          experiences. I turn ideas into reality with clean code and modern
          design.
        </p>

        {/* CTA */}
        <div
          ref={ctaRef}
          className="mt-6 relative md:top-0 top-20  flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#projects"
            onClick={scrollToProjects}
            className="group px-6 py-2 bg-black text-white transition-all duration-300 btn"
          >
            See Projects
          </a>

          <a
            href="/pdf/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 btn text-white transition-all duration-300"
          >
            View Resume
          </a>
        </div>

        {/* Scroll Indicator */}
        <div
          ref={downRef}
          className="hidden lg:flex gap-75 justify-center items-center absolute left-1/2 transform -translate-x-1/2 mt-9"
          aria-hidden="true"
        >
          <div
            ref={leftRef}
            className="whitespace-nowrap text-gray-300/70 text-sm"
          >
            Scroll down
          </div>

          <div>
            <div className="relative w-7 h-11 mouse border-2 border-white/20 rounded-full flex justify-center pt-2.5">
              <div
                ref={scrollDotRef}
                className="w-1.5 h-1.5 bg-white rounded-full relative bottom-1.5"
              />
            </div>
          </div>

          <div
            ref={rightRef}
            className="whitespace-nowrap text-gray-300/70 text-sm"
          >
            to see projects
          </div>
        </div>
      </div>

      <div
        className="absolute inset-0 -z-50"
        aria-hidden="true"
      >
        <NoiseShader />
      </div>
    </section>
  );
}
