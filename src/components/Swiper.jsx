import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import volera from "/src/assets/volrea.png"
import estatehun from "/src/assets/Screenshot 2026-07-15 091811.png"
import freelancerproject from "/src/assets/Screenshot 2026-08-27 004509.png"
import jar from "/src/assets/Screenshot 2026-06-25 175758.png"
import dashboard from "/src/assets/dashboard.png"
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import Button from './Arrow';

export default function Sweiper() {
return (
    <>
    <Swiper
        slidesPerView={4.1}
        spaceBetween={16}
        grabCursor
        freeMode
        touchRatio={1}
        slidesPerView={1}
        breakpoints={{
            480: { slidesPerView: 1.2 },
            768: { slidesPerView: 2.1 },
            1024: { slidesPerView: 4.1 },
        }}
        navigation={{color:"red"}}
        modules={[Pagination, Navigation]}
        className="mySwiper"
    >
        
        <SwiperSlide > 
            <a href={"https://velora-dun-eta.vercel.app"}>
            <div className="overflow-hidden card grow rounded-sm  col-span-1 row-span-2 relative size-80">
                <img
                alt="E-commerce project screenshot"
                src={volera}
                width={100}
                height={100}
                loading="lazy"
                className="w-full h-full object-cover card  grayscale hover:grayscale-0 hover:scale-110 transition duration-500"
                />
                <div className="flex gap-2 absolute bg-gray-400/30  border-gray-50/20 border-[1px] justify-center items-center bottom-2 left-1/2 text-sm  -translate-x-1/2 min-w-[95%] rounded-full">
                    <button className="">View Casestudy </button>
                    <Button aria-label="View project"></Button>
                </div>
            </div>
            </a>
        </SwiperSlide>
        
        <SwiperSlide> 
            <a href={"https://freelance-hub-c7ws.vercel.app"}>
            <div className="overflow-hidden card grow rounded-sm  col-span-1 row-span-2 relative size-80">
                <img
                src={freelancerproject}
                alt="Freelance Hub website project screenshot"
                loading="lazy"
                className="w-full h-full object-cover card  grayscale hover:grayscale-0 hover:scale-110 transition duration-500"
                />
                <div className="flex gap-2 absolute bg-gray-400/30  border-gray-50/20 border-[1px] justify-center items-center bottom-2 left-1/2 text-sm  -translate-x-1/2 min-w-[95%] rounded-full">
                    <button className="">View Casestudy </button>
                    <Button aria-label="View project"></Button>
                </div>
            </div>
            </a>
        </SwiperSlide>

        <SwiperSlide> 
            <a href={"https://landingpage-omega-six-26.vercel.app"}>
            <div className="overflow-hidden card grow rounded-sm  col-span-1 row-span-2 relative size-80">
                <img
                alt="Landing page project screenshot"
                src={jar}
                loading="lazy"
                className="w-full h-full object-cover card  grayscale hover:grayscale-0 hover:scale-110 transition duration-500"
                />
                <div className="flex gap-2 absolute bg-gray-400/30  border-gray-50/20 border-[1px] justify-center items-center bottom-2 left-1/2 text-sm  -translate-x-1/2 min-w-[95%] rounded-full">
                    <button className="">View Casestudy </button>
                    <Button aria-label="View project"></Button>
                </div>
            </div>
            </a>
        </SwiperSlide>

        <SwiperSlide> 
            <a href={"https://advance-dashboard-ol870lkod-basem6s-projects.vercel.app/"}>
            <div className="overflow-hidden card grow rounded-sm  col-span-1 row-span-2 relative size-80">
                <img
                alt="Dashboard interface project screenshot"
                src={dashboard}
                loading="lazy"
                className="w-full h-full object-cover card  grayscale hover:grayscale-0 hover:scale-110 transition duration-500"
                />
                <div className="flex gap-2 absolute bg-gray-400/30  border-gray-50/20 border-[1px] justify-center items-center bottom-2 left-1/2 text-sm  -translate-x-1/2 min-w-[95%] rounded-full">
                    <button className="">View Casestudy </button>
                    <Button aria-label="View project"></Button>
                </div>
            </div>
            </a>
        </SwiperSlide>

        <SwiperSlide> 
            <a href={"https://estate-dgapy9769-basem6s-projects.vercel.app"}>
            <div className="overflow-hidden card grow rounded-sm  col-span-1 row-span-2 relative size-80">
                <img
                    alt="Todo app project screenshot"
                    src={estatehun}
                    loading="lazy"
                    className="w-full h-full object-cover card  grayscale hover:grayscale-0 hover:scale-110 transition duration-500"
                />
                <div className="flex gap-2 absolute bg-gray-400/30  border-gray-50/20 border-[1px] justify-center items-center bottom-2 left-1/2 text-sm  -translate-x-1/2 min-w-[95%] rounded-full">
                    <button className="">View Casestudy </button>
                    <Button aria-label="View project"></Button>
                </div>
            </div>
            </a>
        </SwiperSlide>
    </Swiper>
    </>
);
}