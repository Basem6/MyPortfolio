import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import MarqueeImport from "react-fast-marquee";
export function Skills(){
    const bar=useRef(null)
    const Marquee = MarqueeImport?.default || MarqueeImport;
    const array_brands = ["react" , "github", "html5", "js" ,]
    useGSAP(()=>{
        gsap.from(bar.current,{
            delay:2.7,
            opacity:0
        })
    },[])
    return (
        <div ref={bar} className="mt-20">
            <div className="text-white flex justify-center items-center flex-col max-w-7xl mx-auto px-90" >
                <Marquee speed={60} direction="left"  gradient={false} loop={0} gradient={true} gradientColor={["#000000f4", 0, "#000000f4"]} gradientWidth={100}>
                {array_brands.map((skill , index)=>{
                return <div className={`fa-brands fa-${skill} text-gray-400 text-4xl lg:text-5xl px-14 `} key={index}></div>
                })}
                </Marquee>
            </div>
        </div>
    )
}
