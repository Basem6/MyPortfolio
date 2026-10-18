import ChromaGrid  from "../components/CircularGallery";

export default function Works(){
return(
    <section
        id="projects"
        aria-labelledby="projects-heading"
        className="min-w-full gap-4  border-y min-h-full b px-8 lg:px-10 border-gray-400/20 py-5 flex flex-col   relative max-w-full overflow-hidden"
        >
        <div className="flex gap-4 py-4 items-center  text-3xl">
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
        <div className="min-w-full min-h-100">
            <ChromaGrid></ChromaGrid>
        </div>
    </section>
)}