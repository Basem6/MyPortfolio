import MarqueeImport from "react-fast-marquee";
export default function Skills(){
    const Marquee = MarqueeImport?.default || MarqueeImport;
    return (
        <div  className="my-15">
            <div className="text-white flex justify-center items-center flex-col max-w-7xl mx-auto px-0 md:px-40 lg:px-90 " >
                    <Marquee speed={60} direction="left"   loop={0} gradient={true} gradientColor={["#000000f4", 0, "#000000f4"]} gradientWidth={100}>
                        <div className="flex md:gap-18 gap-12">
                        <div className="md:size-15 size-10"><img src="/github-brands-solid-full.svg" alt="github" loading="lazy"/></div>
                        <div className="md:size-15 size-10"><img src="/js-brands-solid-full.svg" alt="js" loading="lazy" /></div>
                        <div className="md:size-15 size-10"><img src="/tailwind-css-brands-solid-full.svg" alt="tailwind" loading="lazy" /></div>
                        <div className="md:size-15 size-10"><img src="/react-brands-solid-full.svg" alt="react" loading="lazy" /></div>
                        </div>
                </Marquee>
            </div>
        </div>
    )
}
