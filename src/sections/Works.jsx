
import { lazy, Suspense } from "react";
const Sweiper= lazy(
    () => import("../components/Swiper")
);
export default function Works(){
return(
    <section
        id="projects"
        aria-labelledby="projects-heading"
        className="min-w-full px-8 lg:px-10 relative max-w-full overflow-hidden"
        >
        <div className="min-w-full px-8 lg:px-10 flex gap-1.5 items-center text-3xl py-15">
            <h1 id="projects-heading">Recent Works</h1>

            <span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-8"
                aria-hidden="true"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
            </svg>
            </span>
        </div>

        <div className="border-t border-b- border-gray-400/20 py-22">
            <Suspense fallback={null}>
            <Sweiper />
            </Suspense>
        </div>
    </section>
)}