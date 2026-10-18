import { ScrollSmoother } from "gsap/ScrollSmoother";

export function  scrollToSection(href , pos) {
const smoother = ScrollSmoother.get()
if (smoother) {
    if(href!="#contact"){
    smoother.scrollTo(href,true ,pos)
    }else{
    const maxScroll =
    document.documentElement.scrollHeight - window.innerHeight;
    smoother.scrollTo(maxScroll, true);
    }
} else {
    if(href!="#contact"){
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth', })
    }else{
    window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
    });
    }
}
}