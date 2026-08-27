import { useRef } from 'react'
import NoiseShader from '../components/NoiseShader'
//gsap
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import { delay } from 'framer-motion';
gsap.registerPlugin(ScrollTrigger,SplitText);
export default function Hero({tl}) {
const scrollToProjects = (e) => {
  e.preventDefault()
  if(ScrollSmoother.get()){
    ScrollSmoother.get().scrollTo('#projects', true , "bottom bottom")
  }else{
    document.getElementById("projects".replace('#', ''))?.scrollIntoView({ behavior: 'smooth', })
  }
}
  const sectionRef = useRef(null)
  const badgeRef = useRef(null)
  const headingRef = useRef(null)
  const descRef = useRef(null)
  const ctaRef = useRef(null)
  const scrollRef = useRef(null)
  const left = useRef(null)
  const right = useRef(null)
  const backshader= useRef(null)
  const down = useRef(null)
  const scrolldot = useRef(null)
  const animatepulse = useRef(null)
  useGSAP(()=>{
    const textpara=SplitText.create(descRef.current,{
      type:"lines",
      mask:"lines"
    })
    gsap.to(scrolldot.current,{
      y:16,
      repeat:-1,
      yoyo:true,
      duration:1.2
    })
    gsap.to(animatepulse.current,{
      opacity:0.4,
      repeat:-1,
      boxShadow: "0_0_20px_rgba(0,255,200,0.1)",
      duration:2,
      stagger:{
        each:-1,
      }
    })
    if (!tl) return;
    tl.from(headingRef.current,{
    opacity: 0,
    filter: "blur(20px)",
    x: -15,
    },"+=1")
    tl.to(backshader.current,{
      opacity:1,
    },"<")
    tl.from(badgeRef.current,{
      opacity:0,
    },"-=1.4")
    tl.from(down.current,{
      opacity:0,
    },"<")
    tl.from(textpara.lines,{
      y:200,
      rotate:10,
      stagger:0.12
    },"-=1.6")
    tl.from(left.current,{
      y:300
    },"<")
    tl.from(right.current,{
      y:300
    },"<")
    tl.from(ctaRef.current,{
      opacity:0,
      x:-10
    },"-=1.3")
  },[tl])
  return (
    <>
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen z-10  flex items-center flex-col justify-center overflow-hidden pt-24 md:pt-34 pb-16 bg-transparent"
    >
      <div className="relative max-w-7xl mx-auto z-10 px-8 lg:px-0 text-center pt-4">
        {/* Badge */}
        <div
          ref={badgeRef}
          className="inline-flex  text-sm badge relative  items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-gray-400/10 to-black mb-10 rounded-full   text-gray-50"

        >
          <span className="w-2 h-2 bg-white  rounded-full shadow-[0_0_10px_rgba(0,255,255,0.92)] shadow-accent" ref={animatepulse}/>
          Crafting Unique Brand Identities
        </div>
        {/* Heading */}
        <h1
          ref={headingRef}
          className="text-4xl sm:text-5xl  md:text-6xl lg:text-[90px] font-thin   leading-[1.1] tracking-tight"
        >
          Basem Mahmoud
          <span className="text-white whitespace-nowrap">
            <br />
            Frontend Developer
          </span>
        </h1>

        <p
          ref={descRef}
          className="mt-8 text-md  text-text-secondary max-w-2xl mx-auto leading-relaxed"
          
        >
          A passionate developer crafting beautiful, performant digital
          experiences. I turn ideas into reality with clean code and modern
          design.
        </p>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            onClick={scrollToProjects}
            className="group px-6 py-2 bg-black  text-white     transition-all duration-300 btn"
          >
            See Projects
          </a>
          <a
            href="/src/assets/pdf/cv.pdf"
            className="px-6 py-2 btn   text-white   transition-all duration-300 "
          >
            View Resume
          </a>
        </div>

      <div className="hidden lg:flex gap-75 justify-center items-center absolute left-1/2 transform -translate-x-1/2  mt-9" ref={down}>
              <div className='whitespace-nowrap text-gray-300/70  text-sm' ref={left}>Scroll down</div>
              <div
                className={``}
                ref={scrollRef}
                
              >
                <div className="relative w-7 h-11 mouse border-2 border-white/20 rounded-full flex justify-center pt-2.5">
                  <div className=" w-1.5 h-1.5 bg-white rounded-full relative bottom-1.5" ref={scrolldot}/>
                </div>
              </div>
              <div className='whitespace-nowrap  text-gray-300/70 text-sm' ref={right}>to see projects</div>
        </div>
      </div>

      {/* ── WebGL noise shader background ── */}
      <div className="absolute inset-0 -z-50 opacity-0" ref={backshader}>
        <NoiseShader/>
      </div>
    </section>
    </>
  )
}
