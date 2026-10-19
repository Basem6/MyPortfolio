import { lazy, Suspense } from 'react';
import Hero from '../sections/Hero'
const PhotoGrid = lazy(() => import("../sections/Photogrid"));
const About = lazy(() => import("../sections/About"));
const Answers = lazy(() => import("../sections/Answers"));
import  Skills  from '../components/Skills'

export default function Home() {
  return (
    <>
      <Hero />
      <Skills/>
      <Suspense fallback={<div className="h-200" />}>
        <PhotoGrid />
      </Suspense>
      <Suspense fallback={<div className="h-200" />}>
      <About />
      </Suspense>
      <Suspense fallback={<div className="h-200" />}>
      <Answers/>
      </Suspense>
    </>
  )
}
