import { useRef } from "react";
import Button from "../components/Arrow";
import { gsap, useGSAP} from "../lib/gsap";
import man from "/src/assets/manphot.webp";
import volera from "/src/assets/volrea.png";
import estatehun from "/src/assets/Screenshot 2026-07-15 091811.png";
import freelancerproject from "/src/assets/Screenshot 2026-08-27 004509.png";
import dashboard from "/src/assets/dashboard.png";

export default function PhotoGrid() {
const gsapRef = useRef(null);
const smootherRef = useRef(null);
const section = useRef(null);
useGSAP(() => {
    let cancelled = false;
    let cleanup = () => {};

    const initAnimations = async () => {
    // PhotoGrid موجود على desktop فقط
    if (!window.matchMedia("(min-width: 1024px)").matches) {
        return;
    }


    if (cancelled) return;

    const scrollAnimation = gsap.to(section.current, {
        scale: 1.14,
        duration: 0.5,
        scrollTrigger: {
        trigger: section.current,
        start: "33% bottom",
        once: true,
        },
    });

    cleanup = () => {
        scrollAnimation.scrollTrigger?.kill();
        scrollAnimation.kill();

        gsapRef.current = null;
    };
    };
    initAnimations();

    return () => {
    cancelled = true;
    cleanup();
    };
}, {dependencies:[],scope:section});
const enterBigPhoto = () => {
    gsap.to(".mouseforward", {
      paddingBottom: "20.5px",
      paddingTop: "20.5px",
      paddingRight: "33px",
      paddingLeft: "33px",
      filter: "blur(0px)",
      duration: 0.22,
      ease: "power3.out",
      backgroundColor: "#918c8c88",
    });

    gsap.to(".cursor-label", {
      opacity: 1,
      duration: 0.22,
      fontSize: "15px",
      color: "white",
    });
};
const leave = () => {
gsap.to(".mouseforward", {
scale: 1,
duration: 0.35,
ease: "power2.inOut",
backgroundColor: "white",
padding: 0,
});

gsap.to(".cursor-label", {
opacity: 0,
duration: 0.15,
fontSize: "1.5px",
});
};
const scrollToAbout = (e) => {
    e.preventDefault();

    const smoother = smootherRef.current;

    if (smoother) {
    smoother.scrollTo("#about", true, "bottom bottom");
    return;
    }

    document.getElementById("about")?.scrollIntoView({
    behavior: "smooth",
    });
};

return (
    <section
        ref={section}
        aria-labelledby="works-heading"
        className="hidden lg:block min-w-full p-3 my-40 px-18 lg:px-30"
        >
        <h2 id="works-heading" className="sr-only">
            Selected Projects
        </h2>

        <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[150px] gap-2.5"
        >

            <div
            className="overflow-hidden card rounded-sm col-span-1 row-span-2 relative"
            >
            <a
                href="https://velora-dun-eta.vercel.app"
                target="_self"
                rel="noopener noreferrer"
                aria-label="View Velora e-commerce project case study"
                className="block w-full h-full"
            >
                <img
                src={volera}
                alt="Velora e-commerce project screenshot"
                loading="lazy"
                decoding="async"
                width="919"
                height="918"
                className="w-full h-full will-change-transform object-cover card grayscale hover:grayscale-0 hover:scale-110 transition duration-500"
                />

                <div className="flex gap-2 absolute bg-gray-400/30 border-gray-50/20 border justify-center items-center bottom-2 left-1/2 text-sm -translate-x-1/2 min-w-[95%] rounded-full">
                <span>View Case Study</span>
                <Button />
                </div>
            </a>
            </div>


            <div className="overflow-hidden rounded-sm col-span-2 row-span-5 relative bottom-1/11">
            <a
                href="#about"
                onClick={scrollToAbout}
                aria-label="Learn more about Basem"
                className="block w-full h-full"
            >
                <img
                src={man}
                alt="Portrait photograph of Basem Mahmoud"
                width="960"
                loading="lazy"
                height="1280"
                onMouseEnter={enterBigPhoto}
                onMouseLeave={leave}
                decoding="async"
                className="w-full h-full will-change-transform object-cover grayscale hover:grayscale-0 hover:scale-110 transition duration-500"
                />
            </a>
            </div>

            {/* -------------------------------- */}
            {/* Freelance Hub */}
            {/* -------------------------------- */}

            <div
            className="overflow-hidden card rounded-sm col-span-1 row-span-2 relative group"
            >
            <a
                href="https://freelance-hub-c7ws.vercel.app"
                target="_self"
                rel="noopener noreferrer"
                aria-label="View Freelance Hub project case study"
                className="block w-full h-full"
            >
                <img
                src={freelancerproject}
                alt="Freelance Hub website project screenshot"
                loading="lazy"
                decoding="async"
                className="w-full h-full will-change-transform card object-cover grayscale hover:grayscale-0 hover:scale-110 transition duration-500"
                />

                <div className="flex gap-2 absolute bg-gray-400/30 border-gray-50/20 border justify-center items-center bottom-2 left-1/2 text-sm -translate-x-1/2 min-w-[95%] rounded-full">
                <span>View Case Study</span>
                <Button hover={"gr"} />
                </div>
            </a>
            </div>

            {/* -------------------------------- */}
            {/* Estate Hub */}
            {/* -------------------------------- */}

            <div className="overflow-hidden card rounded-sm col-span-1 row-span-2 relative">
            <a
                href="https://estate-hub-bay.vercel.app/"
                target="_self"
                rel="noopener noreferrer"
                aria-label="View Estate Hub project case study"
                className="block w-full h-full"
            >
                <img
                src={estatehun}
                alt="Estate Hub landing page project screenshot"
                loading="lazy"
                decoding="async"
                className="w-full h-full will-change-transform card object-cover grayscale hover:grayscale-0 hover:scale-110 transition duration-500"
                />

                <div className="flex gap-2 absolute bg-gray-400/30 border-gray-50/20 border justify-center items-center bottom-2 left-1/2 text-sm -translate-x-1/2 min-w-[95%] rounded-full">
                <span>View Case Study</span>
                <Button />
                </div>
            </a>
            </div>

            {/* -------------------------------- */}
            {/* Dashboard */}
            {/* -------------------------------- */}

            <div className="overflow-hidden card rounded-sm col-span-1 row-span-2 relative">
            <a
                href="https://advance-dashboard-ol870lkod-basem6s-projects.vercel.app"
                target="_self"
                rel="noopener noreferrer"
                aria-label="View Advanced Dashboard project case study"
                className="block w-full h-full"
            >
                <img
                src={dashboard}
                alt="Advanced dashboard interface project screenshot"
                loading="lazy"
                decoding="async"
                className="w-full h-full will-change-transform card object-cover grayscale hover:grayscale-0 hover:scale-110 transition duration-500"
                />

                <div className="flex gap-2 card absolute bg-gray-400/30 border-gray-50/20 border justify-center items-center bottom-2 left-1/2 text-sm -translate-x-1/2 min-w-[95%] rounded-full">
                <span>View Case Study</span>
                <Button />
                </div>
            </a>
            </div>
        </div>
    </section>
);
}