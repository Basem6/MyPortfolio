import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import {ScrollSmoother , gsap  , Observer, useGSAP} from './lib/gsap'
import { useRef } from "react";

function App() {
  const gsapRef = useRef(null);
  const smoother = useRef(null);
  const mouseforward = useRef(null);
  const cursorLabel = useRef(null);

  useGSAP(() => {
    let cancelled = false;
    let cleanup = () => {};

    const initGSAP = () => {
      // GSAP is only needed for desktop interactions
      if (!window.matchMedia("(min-width: 768px)").matches) {
        return;
      }


      if (cancelled) return;

      smoother.current = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 2,
        effects: true,
      });

      const xTo = gsap.quickTo(
        mouseforward.current,
        "x",
        {
          duration: 0.3,
        }
      );

      const yTo = gsap.quickTo(
        mouseforward.current,
        "y",
        {
          duration: 0.3,
        }
      );

      const observer = Observer.create({
        target: window,
        type: "pointer",

        onMove: (self) => {
          xTo(self.x);
          yTo(self.y);
        },
      });

      cleanup = () => {
        observer.kill();
        smoother.current?.kill();
        smoother.current = null;
        gsapRef.current = null;
      };
    };

    initGSAP();

    return () => {
      cleanup();
    };
  }, {dependencies:[]});
  return (
    <>
      <div
        ref={mouseforward}
        aria-hidden="true"
        className="hidden mouseforward fixed w-4 h-4 bg-white rounded-full border border-gray-200/80 pointer-events-none -translate-x-1/2 -translate-y-1/2 z-100 lg:flex items-center justify-center overflow-hidden min-w-fit"
      >
        <span
          ref={cursorLabel}
          className="text-center cursor-label whitespace-nowrap"
          style={{
            fontSize: "2.5px",
            letterSpacing: "0.6px",
          }}
        >
          About Me
        </span>
      </div>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
                <Home/>
        </div>
      </div>
    </>
  );
}

export default App;