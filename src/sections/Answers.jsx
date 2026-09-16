import { gsap, useGSAP} from "../lib/gsap";
import AccordionUsage from "../components/Acording";
import ropot from "/src/assets/ropot.png"
import { useRef } from "react";
export default function Answers() {
    const sectionanswer = useRef(null)
    const sectiontop = useRef(null)
    const animatepulse = useRef(null)
    
    useGSAP(() => {
        const mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {
            // تحسين 1: استخدام scrub: 0.6 بدلاً من 1 + ease: "power1.inOut"
            gsap.to(sectiontop.current, {
                yPercent: -110,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: sectionanswer.current,
                    start: "top top",
                    end: "+=100%",
                    pin: true,
                    scrub: 0.6, // أسرع من 1 = أداء أفضل
                    
                },
            });
        });

        // تحسين 2: الـ pulse animation منفصل - استخدام أقل موارد
        if (animatepulse.current) {
            gsap.to(animatepulse.current, {
                opacity: 0.4,
                scale: 1.3,
                repeat: -1,
                yoyo: true,
                duration: 1.5,
                ease: "power1.inOut",
            });
        }

        return () => mm.revert();
    }, {dependencies:[],scope:sectionanswer});

    return (
        <section
            className="relative min-w-full min-h-screen"
            ref={sectionanswer}
            >
            <div
                className="px-8 lg:px-10 lg:absolute inset-0 bg-black flex flex-col shadow-md shadow-gray-200/5 lg:flex-row justify-between gap-8 w-full h-fit z-10"
                ref={sectiontop}
            >
                <div>
                <h2 className="text-4xl md:text-6xl py-8">
                    <span className="text-5xl md:text-7xl">A</span>nswers
                </h2>

                <p className="text-gray-500/90 text-md md:text-2xl py-5">
                    Find answers to common questions about my design process,
                    services etc…
                </p>

                <div className="w-full md:w-125 overflow-hidden">
                    <img
                    src={ropot}
                    alt="Robot illustration for the answers section"
                    loading="lazy"
                    width="500"
                    height="300"
                    decoding="async"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 cursor-pointer transition-transform duration-500 rounded"
                    />
                </div>
                </div>

                <div className="lg:w-1/2 py-6">
                <AccordionUsage />
                </div>
            </div>

            <div
                className="lg:absolute min-h-screen flex items-center flex-col justify-center pt-38 -z-10 left-0 inset-0"
                id="contact"
            >
                <div className="relative max-w-7xl mx-auto px-8 lg:px-0 text-center">

                <div
                    className="inline-flex text-sm badge relative items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-gray-400/10 to-black mb-10 rounded-full text-gray-50"
                >
                    <span
                    className="w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(0,255,255,0.92)]"
                    ref={animatepulse}
                    aria-hidden="true"
                    />

                    Available For Work
                </div>

                <h2
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-3xl md:text-5xl leading-[1.1] tracking-tight"
                >
                    Curious about what we can create together? Let's
                    <span className="text-white">
                    <br />
                    bring something extraordinary to life!
                    </span>
                </h2>

                <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                    href="https://wa.me/201206178766"
                    aria-label="Send me a message on WhatsApp"
                    className="group px-6 py-2 bg-black text-white transition-all duration-300 btn"
                    >
                    Send a message
                    </a>
                </div>

                <div className="flex gap-3 min-w-full justify-center py-12">
                    <a
                    href="https://github.com/Basem6"
                    aria-label="Visit my GitHub profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex p-3 bg-gray-900/20 rounded-full transition-all duration-300"
                    >
                    <span
                        className="fa-brands fa-github text-gray-50 text-2xl hover:scale-125 transition duration-300 hover:text-blue-400/80"
                        aria-hidden="true"
                    />
                    </a>

                    <a
                    href="https://www.linkedin.com/in/basem-mahmoud-831162399/"
                    aria-label="Visit my LinkedIn profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex p-3 bg-gray-900/20 rounded-full transition-all duration-300"
                    >
                    <span
                        className="fa-brands fa-linkedin text-gray-50 text-2xl hover:scale-125 transition duration-300 hover:text-blue-400/80"
                        aria-hidden="true"
                    />
                    </a>

                    <a
                    href="https://www.facebook.com/share/1AzTGPdiGX/"
                    aria-label="Visit my Facebook profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex p-3 bg-gray-900/20 rounded-full transition-all duration-300"
                    >
                    <span
                        className="fa-brands fa-facebook text-gray-50 text-2xl hover:scale-125 transition duration-300 hover:text-blue-400/80"
                        aria-hidden="true"
                    />
                    </a>
                </div>
                </div>
            </div>
        </section>
    );
}