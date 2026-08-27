import { useGSAP } from "@gsap/react";
import Button from "./Arrow";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import{ScrollSmoother} from "gsap/ScrollSmoother"
import man from "/src/assets/manphot.webp"
import volera from "/src/assets/Screenshot 2026-06-25 164608.png"
import estatehun from "/src/assets/Screenshot 2026-07-15 091811.png"
import freelancerproject from "/src/assets/Screenshot 2026-08-27 004509.png"
import dashboard from "/src/assets/dashboard.png"
gsap.registerPlugin(ScrollTrigger);
export default function PhotoGrid({ enterBigPhoto, leave ,tl}) {
    const grid  = useRef(null)
    const leftphoto  = useRef(null)
    const rightphoto  = useRef(null)
    const section = useRef(null)
    const scrollToabout = (e) => {
    e.preventDefault()
    if(ScrollSmoother.get()){
        ScrollSmoother.get().scrollTo('#about', true , "bottom bottom")
    }else{
        document.getElementById("about".replace('#', ''))?.scrollIntoView({ behavior: 'smooth', })
    }
    }
    useGSAP(() => {
        if (!tl) return;
        tl.from(grid.current, {
        y: -700,
        scale: 1.1,
        duration:2
        },0);
        tl.from(leftphoto.current, {
        x: 32,
        y: 160,
        }, "<");
        tl.from(rightphoto.current, {
        x: -32,
        y: 160,
        }, "<");
    }, [tl]);

    useGSAP(()=>{
        gsap.to(section.current,{
            padding:"0 10px",
            duration:0.7,
            once:true,
            scrollTrigger:{
                trigger:section.current,
                start:"33% bottom"
            }
        })
    },[])

    return (
        <section className="hidden lg:block min-w-full p-3 my-40  px-18 lg:px-30" ref={section}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[150px] gap-2.5" ref={grid}>

            <div className="overflow-hidden card rounded-sm  col-span-1 row-span-2 relative -z-1" ref={leftphoto}>
                    <a
                    href="https://e-commerce-uo5k83pi1-basem6s-projects.vercel.app/"
                    target="_self"
                    rel="noopener noreferrer"
                    >
                <img
                alt="E-commerce project screenshot"
                src={volera}
                className="w-full h-full will-change-transform  object-cover card  grayscale hover:grayscale-0 hover:scale-110 transition duration-500"
                />
                <div className="flex gap-2 absolute bg-gray-400/30  border-gray-50/20 border-[1px] justify-center items-center bottom-2 left-1/2 text-sm  -translate-x-1/2 min-w-[95%] rounded-full">
                    <button className="" aria-label="View e-commerce case study">View Case Study</button>
                    <Button></Button>
                </div>
                </a>
            </div>

            <div className="overflow-hidden rounded-sm col-span-2 row-span-5  relative bottom-1/11">
                <a 
                onClick={scrollToabout}
                href="#about">
                    <img
                    alt="Portrait photograph of Basem Mahmoud"
                    src={man}
                    onMouseEnter={enterBigPhoto}   
                    onMouseLeave={leave} 
                    className="w-full h-full will-change-transform  object-cover grayscale hover:grayscale-0 hover:scale-110 transition duration-500"
                    />
                </a>
            </div>

            <div className="overflow-hidden card rounded-sm col-span-1 row-span-2 relative -z-1" ref={rightphoto}>
                {/* FIX: same external link issue as above */}
                    <a
                    href="https://freelance-hub-c7ws.vercel.app"
                    target="_self"
                    rel="noopener noreferrer"
                    >
                <img
                alt="freelance website"
                src={freelancerproject}
                className="w-full h-full will-change-transform  card object-cover grayscale hover:grayscale-0 hover:scale-110 transition duration-500"
                /> 
                <div className="flex gap-2 absolute bg-gray-400/30 border-gray-50/20 border-[1px]   justify-center items-center bottom-2 left-1/2 text-sm  -translate-x-1/2 min-w-[95%] rounded-full">
                    <button className="" aria-label="View todo app case study">View Case Study</button>
                    <Button></Button>
                </div>
                    </a>
            </div>

            <div className="overflow-hidden card rounded-sm col-span-1 row-span-2 relative">
                <a
                    href="https://estate-dgapy9769-basem6s-projects.vercel.app/"
                    target="_self"
                    rel="noopener noreferrer"
                >
                <img
                alt="Landing page project screenshot"
                loading="lazy"
                src={estatehun}
                className="w-full h-full will-change-transform  card object-cover grayscale hover:grayscale-0 hover:scale-110 transition duration-500"
                />
                <div className="flex gap-2 absolute bg-gray-400/30 border-gray-50/20 border-[1px]  justify-center items-center bottom-2 left-1/2 text-sm  -translate-x-1/2 min-w-[95%] rounded-full">
                    <button className="" aria-label="View landing page case study">View Case Study</button>
                    <Button></Button>
                </div>
                </a>
            </div>

            <div className="overflow-hidden card rounded-sm col-span-1 row-span-2 relative">
                <a
                    href="https://advance-dashboard-ol870lkod-basem6s-projects.vercel.app"
                    target="_self"
                    rel="noopener noreferrer"
                >
                <img
                alt="Dashboard interface project screenshot"
                loading="lazy"
                src={dashboard}
                className="w-full h-full will-change-transform  card object-cover grayscale hover:grayscale-0 hover:scale-110 transition duration-500"
                />
                <div className="flex gap-2 card absolute bg-gray-400/30  border-gray-50/20 border-[1px] justify-center items-center bottom-2 left-1/2 text-sm  -translate-x-1/2 min-w-[95%] rounded-full">
                    <button className="" aria-label="View dashboard case study">View Case Study</button>
                    <Button></Button>
                </div>
                </a>
            </div>
            </div>
        </section>
    );
}
