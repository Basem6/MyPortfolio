import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ScrollSmoother } from "gsap/all";
export function Serviecs(){
useGSAP(()=>{
    const mm = gsap.matchMedia();
        mm.add("(min-width: 768px)", () => {
        const servicesCards = gsap.utils.toArray("#serviece-c .card-s")
        if(ScrollSmoother.get()){
        const smoother = ScrollSmoother.get();
        smoother.effects(servicesCards, {
            lag: (i) => i * 0.5,
        });
        }
    })
    const servicesTitle = document.getElementById("services-title");
    ScrollTrigger.create({
    trigger: servicesTitle,
    start: "50% 90%",
    end: "bottom bottom",
    endTrigger: "#services",
    scrub: 1,
    pin: true,
    });
})
return(
    <div
        id="services"
        className="hidden lg:block min-h-screen w-full relative perspective-distant py-14 mt-20 px-4"
        >
        <div className="h-screen relative min-w-full flex justify-center">
            <div
            id="services-title"
            className="absolute-center font-boldonse uppercase tracking-widest text-3xl 2xl:text-9xl"
            >
            <h2
                className="absolute outlined-text"
                data-lag=".2"
            >
                Services
            </h2>

            <h2
                className="absolute outlined-text"
                data-lag=".4"
            >
                Services
            </h2>

            <h2
                className="absolute outlined-text"
                data-lag=".6"
            >
                Services
            </h2>
        

            <h2 className="absolute-center">
                Services
            </h2>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-30 mx-auto max-w-7xl p-20 text-3xl font-boldonse capitalize " id="serviece-c">
            <div className="card-s e">
            <h4 className="text-right">1</h4>
            <h3>Web Design</h3>
            </div>

            <div className="card-s">
            <h4 className="text-right">2</h4>
            <h3>Web Development</h3>
            </div>

            <div className="card-s">
            <h4 className="text-right">3</h4>
            <h3>WebGL</h3>
            </div>

            <div className="card-s">
            <h4 className="text-right">4</h4>
            <h3>3D Modeling</h3>
            </div>

            <div className="card-s">
            <h4 className="text-right">5</h4>
            <h3>2D / 3D Animation</h3>
            </div>

            <div className="card-s">
            <h4 className="text-right">6</h4>
            <h3>Shaders</h3>
            </div>
        </div>
        </div>
    )
}