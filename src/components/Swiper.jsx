import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import girl from "/src/assets/girlphot.jpg"
import ropot from "/src/assets/ropot.jpg"
    // import required modules
    import { Pagination, Navigation } from 'swiper/modules';
    import Button from './Arrow';
import { Link } from 'react-router-dom';
    export default function Sweiper() {
    return (
        <>
        <Swiper
            slidesPerView={4.1}
            spaceBetween={16}
            grabCursor
            freeMode
            touchRatio={1}
            slidesPerView={1.1}
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
                <Link to={"https://e-commerce-uo5k83pi1-basem6s-projects.vercel.app/"}>
                <div className="overflow-hidden card grow rounded-sm  col-span-1 row-span-2 relative size-80">
                    <img
                    src={girl}
                    loading="lazy"
                    className="w-full h-full object-cover card  grayscale hover:grayscale-0 hover:scale-110 transition duration-500"
                    />
                    <div className="flex gap-2 absolute bg-gray-400/30  border-gray-50/20 border-[1px] justify-center items-center bottom-2 left-1/2 text-sm  -translate-x-1/2 min-w-[95%] rounded-full">
                        <button className="">View Casestudy </button>
                        <Button></Button>
                    </div>
                </div>
                </Link>
            </SwiperSlide>
            
            <SwiperSlide> 
                <Link to={"https://todo-app32.vercel.app/"}>
                <div className="overflow-hidden card grow rounded-sm  col-span-1 row-span-2 relative size-80">
                    <img
                    src={ropot}
                    loading="lazy"
                    className="w-full h-full object-cover card  grayscale hover:grayscale-0 hover:scale-110 transition duration-500"
                    />
                    <div className="flex gap-2 absolute bg-gray-400/30  border-gray-50/20 border-[1px] justify-center items-center bottom-2 left-1/2 text-sm  -translate-x-1/2 min-w-[95%] rounded-full">
                        <button className="">View Casestudy </button>
                        <Button></Button>
                    </div>
                </div>
                </Link>
            </SwiperSlide>
            <SwiperSlide> 
                <Link to={""}>
                <div className="overflow-hidden card grow rounded-sm  col-span-1 row-span-2 relative size-80">
                    <img
                    src={girl}
                    loading="lazy"
                    className="w-full h-full object-cover card  grayscale hover:grayscale-0 hover:scale-110 transition duration-500"
                    />
                    <div className="flex gap-2 absolute bg-gray-400/30  border-gray-50/20 border-[1px] justify-center items-center bottom-2 left-1/2 text-sm  -translate-x-1/2 min-w-[95%] rounded-full">
                        <button className="">View Casestudy </button>
                        <Button></Button>
                    </div>
                </div>
                </Link>
            </SwiperSlide>
            <SwiperSlide> 
                <div className="overflow-hidden card grow rounded-sm  col-span-1 row-span-2 relative size-80">
                    <img
                    src={girl}
                    loading="lazy"
                    className="w-full h-full object-cover card  grayscale hover:grayscale-0 hover:scale-110 transition duration-500"
                    />
                    <div className="flex gap-2 absolute bg-gray-400/30  border-gray-50/20 border-[1px] justify-center items-center bottom-2 left-1/2 text-sm  -translate-x-1/2 min-w-[95%] rounded-full">
                        <button className="">View Casestudy </button>
                        <Button></Button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide> 
                <div className="overflow-hidden card grow rounded-sm  col-span-1 row-span-2 relative size-80">
                    <img
                    src={ropot}
                    loading="lazy"
                    className="w-full h-full object-cover card  grayscale hover:grayscale-0 hover:scale-110 transition duration-500"
                    />
                    <div className="flex gap-2 absolute bg-gray-400/30  border-gray-50/20 border-[1px] justify-center items-center bottom-2 left-1/2 text-sm  -translate-x-1/2 min-w-[95%] rounded-full">
                        <button className="">View Casestudy </button>
                        <Button></Button>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
        </>
    );
    }
