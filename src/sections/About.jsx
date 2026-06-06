import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default function About() {
  const sectionRef = useRef(null)
  return (
    <section id="about" className="py-8 lg:py-10 relative border-t-2  border-l-2 border-r-2 border-b-0 rounded-[50px] border-gray-400/10 max-w-full overflow-hidden" ref={sectionRef}>
    <div className="min-w-full px-8 lg:px-10 flex flex-col-reverse justify-center md:flex-row  md:justify-between   gap-4 ">
        <div className=''>
          <div>
            <h2 className="mt-4 text-4xl pb-10 sm:text-5xl lg:text-7xl font-display font-thin text-white leading-tight">
              Meet Basem
            </h2>
            <div className="about-text">
              <p className="text-lg text-text-secondary leading-[1.8]">
                I&apos;m a developer with a passion for turning complex problems
                into simple, beautiful solutions. With experience in both frontend
                and backend technologies, I build full-stack applications that make
                a difference.
              </p>
            </div>
          </div>
          <div className='py-8 mt-4 border-t border-b border-gray-400/20 flex gap-2.5 flex-wrap'>
            <span className='bg-white/5 py-1.5 px-4 rounded-lg text-gray-300/70'>Web design</span>
            <span className='bg-white/5 py-1.5 px-4 rounded-lg text-gray-300/70'>React</span>
            <span className='bg-white/5 py-1.5 px-4 rounded-lg text-gray-300/70'>Gsap</span>
            <span className='bg-white/5 py-1.5 px-4 rounded-lg text-gray-300/70'>Web development</span>
            <span className='bg-white/5 py-1.5 px-4 rounded-lg text-gray-300/70'>github</span>
            <span className='bg-white/5 py-1.5 px-4 rounded-lg text-gray-300/70'>Ai</span>
            <span className='bg-white/5 py-1.5 px-4 rounded-lg text-gray-300/70'>Figma</span>
            <span className='bg-white/5 py-1.5 px-4 rounded-lg text-gray-300/70'>Soft skills</span>
            <span className='bg-white/5 py-1.5 px-4 rounded-lg text-gray-300/70'>Js</span>
          </div>
          <div className='py-8 mt-4 flex gap-2.5 flex-wrap'>
            <p className="text-lg text-text-secondary leading-[1.8]">
                I am a first-year Computer Science student at Tanta University, passionate about web development and building modern, responsive user interfaces.
                I enjoy turning ideas into real projects using frontend technologies like React and Tailwind CSS
              </p>
          </div>
        </div>
        <div className="w-full  md:w-300 md:h-150 overflow-hidden rounded-lg ">
          <img
            src="/src/assets/beso.jpeg"
            className="grayscale hover:grayscale-0 hover:scale-105 transition duration-700 object-cover min-w-full min-h-full max-w-full max-h-full ease-in-out"
          />
        </div>
    </div>
    </section>
  )
}
