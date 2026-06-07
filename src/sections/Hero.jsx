import {  useRef } from 'react'
//gsap
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from 'gsap/all';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger,SplitText);
export default function Hero({tl}) {
const scrollToProjects = (e) => {
  e.preventDefault()
  if(ScrollSmoother.get()){
    ScrollSmoother.get().scrollTo('#projects', true , "bottom bottom")
  }else{
    document.getElementById("project".replace('#', ''))?.scrollIntoView({ behavior: 'smooth', })
  }
}
  const sectionRef = useRef(null)
  const badgeRef = useRef(null)
  const headingRef = useRef(null)
  const descRef = useRef(null)
  const ctaRef = useRef(null)
  const scrollRef = useRef(null)
  const left = useRef(null)
  const blob = useRef(null)
  const overlay = useRef(null)
  const blob2 = useRef(null)
  const blob3 = useRef(null)
  const right = useRef(null)
  const down = useRef(null)
  const scrolldot = useRef(null)
  const animatepulse = useRef(null)
  useGSAP(()=>{
    const animate = () => {
      gsap.to(blob.current, {
          x: gsap.utils.random(0,300),
          y: gsap.utils.random(-23, 12),
          rotate:gsap.utils.random(-10, 10),
          duration: gsap.utils.random(10, 15),
          repeat: -1,
          opacity:0.7,
          yoyo:true,
          ease: "sine.inOut",
        onComplete: animate,
        
      });
    };
    const animate3 = () => {
      gsap.to(blob3.current, {
          x: gsap.utils.random(0,300),
          y: gsap.utils.random(-30, 10),
          rotate:gsap.utils.random(-10, 10),
          duration: gsap.utils.random(10, 17),
          repeat: -1,
          opacity:0.8,
          yoyo:true,
          ease: "sine.inOut",
        onComplete: animate3,
        
      });
    };
    const animate2 = () => {
      gsap.to(blob2.current, {
          x: gsap.utils.random(-400,0),
          opacity:0.5,
          y: gsap.utils.random(-2, 3),
          duration: gsap.utils.random(6, 12),
          repeat: -1,
          yoyo:true,
          ease: "sine.inOut",
        onComplete: animate2,
        
      });
    };
    animate()
      animate2()
      animate3()
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
    filter: "blur(15px)",
    x: -15,
    },"+=1")
    tl.from(overlay.current,{
      opacity:0
    },"<")
    tl.from(badgeRef.current,{
      opacity:0
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
      className="relative min-h-screen z-10  flex items-center flex-col justify-center overflow-hidden pt-24 md:pt-38 pb-16 bg-transparent"
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
            href="/src/assets/pdf/my_cv.pdf"
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
      <div className="absolute inset-0 -z-10 flex flex-col  justify-center items-start overflow-hidden min-h-full min-w-full" ref={overlay}>
        <div className='flex'>
        <svg
        ref={blob}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="1440"
        height="360"
        viewBox="0 0 1440 360"
        preserveAspectRatio="none"
        className="relative top-8 blur-md scale-[2]"
      >
        <g mask="url(#mask1)" fill="none">
          <rect
            width="1440"
            height="360"
            fill="url(#gradient1)"
          />

          <path
            d="M0,116 C96,150.8 288,285.4 480,290 C672,294.6 768,149 960,139 C1152,129 1344,219.8 1440,240L1440 360L0 360Z"
            fill="rgb(41 43 46)"
          />
        </g>

        <defs>
          <mask id="mask1">
            <rect width="1440" height="360" fill="#fff" />
          </mask>

          <linearGradient
            id="gradient1"
            x1="81.25%"
            y1="175%"
            x2="18.75%"
            y2="-75%"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.16" stopColor="#000" />
            <stop offset="0.35" stopColor="#000" />
            <stop offset="0.61" stopColor="#000" />
            <stop offset="0.88" stopColor="#000" />
            <stop offset="1" stopColor="#000" />
          </linearGradient>
        </defs>
        </svg>
        <svg
          ref={blob3}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="1440"
          height="360"
          viewBox="0 0 1440 360"
          preserveAspectRatio="none"
          className="relative top-8 blur-md scale-[2]"
        >
          <g mask="url(#mask2)" fill="none">
            <rect
              width="1440"
              height="360"
              fill="url(#gradient2)"
            />

            <path
              d="M0,116 C96,150.8 288,285.4 480,290 C672,294.6 768,149 960,139 C1152,129 1344,219.8 1440,240L1440 360L0 360Z"
              fill="rgb(41 43 46)"
            />
          </g>

          <defs>
            <mask id="mask2">
              <rect width="1440" height="360" fill="#fff" />
            </mask>

            <linearGradient
              id="gradient2"
              x1="81.25%"
              y1="175%"
              x2="18.75%"
              y2="-75%"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.16" stopColor="#000" />
              <stop offset="0.35" stopColor="#000" />
              <stop offset="0.61" stopColor="#000" />
              <stop offset="0.88" stopColor="#000" />
              <stop offset="1" stopColor="#000" />
            </linearGradient>
          </defs>
        </svg>
        </div>
        <svg
      ref={blob2}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="1440"
      height="160"
      viewBox="0 0 1440 160"
      preserveAspectRatio="none"
      className="blur-xl scale-[2]"
    >
      <g mask="url(#mask3)" fill="none">
        <rect
          width="1440"
          height="160"
          fill="url(#gradient3)"
        />

        <path
          d="M0,113 C48,99 144,48.8 240,43 C336,37.2 384,86.2 480,84 C576,81.8 624,31.8 720,32 C816,32.2 864,86.6 960,85 C1056,83.4 1104,13 1200,24 C1296,35 1392,116.8 1440,140L1440 160L0 160Z"
          fill="rgb(28 29 29)"
        />
      </g>

      <defs>
        <mask id="mask3">
          <rect width="1440" height="160" fill="#fff" />
        </mask>

        <linearGradient
          id="gradient3"
          x1="77.78%"
          y1="-200%"
          x2="22.22%"
          y2="300%"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.16" stopColor="#000" />
          <stop offset="0.25" stopColor="#000" />
          <stop offset="0.35" stopColor="#000" />
          <stop offset="0.61" stopColor="#000" />
          <stop offset="0.88" stopColor="#000" />
          <stop offset="1" stopColor="#000" />
        </linearGradient>
      </defs>
    </svg>
      </div>
    </section>
    </>
  )
}
