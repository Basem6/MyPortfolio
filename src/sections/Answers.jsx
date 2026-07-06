import { useGSAP } from "@gsap/react";
import AccordionUsage from "../components/Acording";
import gsap from "gsap";
import ropot from "/src/assets/ropot.webp"
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NavLink } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);
export function Answers() {
    const section = useRef(null)
    const sectiontop = useRef(null)
    const animatepulse = useRef(null)
    useGSAP(()=>{
            const mm = gsap.matchMedia();
            mm.add("(min-width: 768px)", () => {
            gsap.to(sectiontop.current,{
                scrollTrigger:{
                    trigger:section.current,
                    start:"top top",
                    pin:section.current,
                    scrub:true
                },
                yPercent:-110,
            
            })
            gsap.to(animatepulse.current,{
            opacity:0.4,
            repeat:-1,
            boxShadow: "0_0_20px_rgba(0,255,200,0.1)",
            duration:2.3,
            stagger:{
                each:-1,
            }
        })
    })
    },[])
    return (
        <section className="relative min-w-full min-h-screen" ref={section}> 
            <div className="px-8 lg:px-10 lg:absolute inset-0  bg-black flex flex-col shadow-md shadow-gray-200/5 lg:flex-row justify-between gap-8  w-full h-fit z-10" ref={sectiontop}>
                <div>
                <div className="text-4xl md:text-6xl py-8 ">
                    <span className="text-5xl md:text-7xl ">A</span>nswers
                </div>
                <p className="text-gray-500/90 text-md md:text-2xl py-5">
                    Find answers to common questions about my design process,
                    services etc…
                </p>

                <div className="w-full md:w-125 md:w-125">
                    <img
                    alt="Robot illustration for the answers section"
                    src={ropot}
                    className="w-full h-full object-cover grayscale rounded"
                    />
                </div>
                </div>

                <div className="lg:w-1/2 py-6">
                <AccordionUsage />
                </div>

            </div>
            <div className="lg:absolute min-h-screen  flex items-center flex-col justify-center  pt-38   -z-10 left-0 inset-0" id="contact">
                <div className="relative max-w-7xl mx-auto px-8 lg:px-0 text-center">
                    {/* Badge */}
                    <div
                    className="inline-flex  text-sm badge relative  items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-gray-400/10 to-black mb-10 rounded-full   text-gray-50"

                    >
                    <span className="w-2 h-2 bg-white  rounded-full shadow-[0_0_10px_rgba(0,255,255,0.92)] shadow-accent" ref={animatepulse}/>
                    Available For Work
                    </div>

                    {/* Heading */}
                    <h1
                    style={{fontFamily: "'Playfair Display', serif",}}
                    className="text-3xl md:text-5xl    leading-[1.1] tracking-tight"
                    >
                    Curious about what we can create together? Let’s 
                    <span className="text-white">
                        <br />
                        bring something extraordinary to life!
                    </span>
                    </h1>

                    {/* CTA Buttons */}
                    <div  className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <NavLink
                        to="https://wa.me/201206178766?"
                        className="group px-6 py-2 bg-black  text-white     transition-all duration-300 btn"
                    >
                        Send a meesage
                    </NavLink>
                    </div>
                    <div className="flex gap-3 min-w-full justify-center  py-12">
                        <NavLink
                        to="https://github.com/Basem6"
                        className="flex p-3 bg-gray-900/20 rounded-full  transition-all duration-300"
                        >
                            <span className="fa-brands fa-github text-gray-50 text-2xl hover:scale-125 transition duration-300 hover:text-blue-400/80 "></span>
                        </NavLink>
                        <NavLink
                        to="https://www.linkedin.com/in/basem-mahmoud-831162399/"
                        className="flex p-3 bg-gray-900/20 rounded-full  transition-all duration-300"
                        >
                            <span className="fa-brands fa-linkedin text-gray-50 text-2xl hover:scale-125 transition duration-300 hover:text-blue-400/80 "></span>
                        </NavLink>
                        <NavLink
                        to="https://www.facebook.com/share/1AzTGPdiGX/"
                        className="flex p-3 bg-gray-900/20 rounded-full  transition-all duration-300"
                        >
                            <span className="fa-brands fa-facebook text-gray-50 text-2xl hover:scale-125 transition duration-300 hover:text-blue-400/80 "></span>
                        </NavLink>
                    </div>

                </div>
            </div>
        </section>
    );
}