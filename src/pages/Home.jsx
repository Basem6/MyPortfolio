import Hero from '../sections/Hero'
import About from '../sections/About'
import PhotoGrid from '../components/Photogrid'
import { Works } from '../components/Works'
import { Answers } from '../sections/Answers'
import { Skills } from '../components/Skills'
export default function Home({ enterBigPhoto, enterProject, leave, tl }) {
  return (
    <>
      <Hero tl={tl} />
      <Skills/>
      <PhotoGrid tl={tl} enterBigPhoto={enterBigPhoto} enterProject={enterProject} leave={leave} />
      <About />
      <Works/>
      <Answers/>
    </>
  )
}
