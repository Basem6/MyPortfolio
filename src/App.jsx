import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
// gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from '@gsap/react';
import { useRef, useState } from 'react';
import { Observer } from "gsap/Observer";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, Observer);

function App() {
  const [tl,settl]=useState(null)
  const smoother = useRef(null);
  const mouseforward = useRef(null);
  const cursorLabel = useRef(null);
  useGSAP(() => {
    const servicesCards = gsap.utils.toArray("#serviece-c .card-s")
    const toSkew = gsap.quickTo(servicesCards, "skewY");
    const clamp = gsap.utils.clamp(-20, 20);
    const time = gsap.timeline({defaults:{ease:"power1.inOut",duration:1.6}})
    settl(time)
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
    smoother.current = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 2,
      effects: true,
      onUpdate: (self) => toSkew(clamp(self.getVelocity() / -40)),
        onStop: () => toSkew(0),
    });
    const xTo = gsap.quickTo(mouseforward.current, "x", { duration: 0.3 });
    const yTo = gsap.quickTo(mouseforward.current, "y", { duration: 0.3 });
    const observer = Observer.create({
      target: window,
      type: "pointer",
      onMove: (self) => {
        xTo(self.x);
        yTo(self.y);
      },
    });
      return () => {
      smoother.current.kill();
      observer.kill();
    };
  });
  return () => mm.revert();
},[]);
  // ─── Big photo hover → "about me" button cursor ───────────────────────────
  const enterBigPhoto = () => {
    if (!mouseforward.current) return;
    gsap.to(mouseforward.current, {
      paddingBottom:"20.5px",
      paddingTop:"20.5px",
      // FIX: was `filter:blur(10)` — not a string, caused a JS runtime error
      filter:"blur(0px)",
      paddingRight:"33px",
      paddingLeft:"33px",
      duration: 0.22,
      ease: "power3.out",
      backgroundColor:'#918c8c88',
    });
    gsap.to(cursorLabel.current, {
      opacity: 1,
      duration: 0.22,
      fontSize:"15px",
      color:"white",
    });
  };

  // ─── Project card hover → small white circle ──────────────────────────────
  const enterProject = () => {
    if (!mouseforward.current) return;
    gsap.to(mouseforward.current, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
      backgroundColor:'white',
      paddingTop:"0px",
      paddingRight:"0px",
      paddingBottom:"0px",
      paddingLeft:"0px",
      
    });
    gsap.to(cursorLabel.current, {
      opacity: 0,
      duration: 0.15,
      fontSize:"1.5px",
    });
  };

  // ─── Leave → reset to default small circle ────────────────────────────────
  const leave = () => {
    if (!mouseforward.current) return;
    gsap.to(mouseforward.current, {
      scale: 1,
      duration: 0.35,
      ease: "power2.inOut",
      backgroundColor:"white",
      paddingTop:"0px",
      paddingBottom:"0px",
      paddingRight:"0px",
      paddingLeft:"0px",
    });
    gsap.to(cursorLabel.current, {
      opacity: 0,
      duration: 0.15,
      fontSize:"1.5px",
    });
  };

  return (
    <>
      {/* ── Custom cursor ─────────────────────────────────────────────────── */}
      <div
        ref={mouseforward}
        className="hidden fixed w-4 h-4 bg-white rounded-full border-[1px] border-gray-200/80 pointer-events-none -translate-x-1/2 -translate-y-1/2 z-100 lg:flex items-center justify-center overflow-hidden min-w-fit"
      >
        <span
          ref={cursorLabel}
          className=" text-center   whitespace-nowrap"
          style={{ fontSize: "2.5px" ,letterSpacing: "0.6px" }}
        >
          About Me
        </span>
      </div>

      <Navbar />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="min-h-screen flex flex-col bg-dark text-text-primary">
            <main className="flex-1">
              <Routes>
                <Route
                  path="/"
                  element={
                    <Home
                      enterBigPhoto={enterBigPhoto}
                      enterProject={enterProject}
                      leave={leave}
                      tl={tl}
                    />
                  }
                />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
