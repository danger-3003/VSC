import MarqueeElement from "../MarqueeElement";

import Cycle360 from "../../assets/Bookings/360Cycle.jpg";
import AquaWorld from "../../assets/Bookings/AquaWorld.jpg";
import Badminton from "../../assets/Bookings/Badminton.jpeg";
import GoKarting from "../../assets/Bookings/Gokarting.jpg";
import GoKartingChampion from "../../assets/Bookings/GokartingChampion.jpeg";
import RopeCourse from "../../assets/Bookings/Rope.jpg";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../HeaderSwiper.css";
import "swiper/css/autoplay"; // Import autoplay styles

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

function HeaderSwiper() {
    return (
        <>
            <Swiper
                slidesPerView={
                    window.innerWidth < 560
                        ? 2
                        : window.innerWidth < 768
                            ? 3
                            : window.innerWidth < 1024
                                ? 4
                                : 5
                }
                spaceBetween={15}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Pagination, Autoplay]}
                className="w-full sm:w-[85vw] lg:w-[55rem]"
            >
                <SwiperSlide>
                    <MarqueeElement
                        content={"360 Cycle"}
                        img={Cycle360}
                        link={"https://in.bookmyshow.com/sports/360-cycle-vsc/ET00390376"}
                        className={"bg-text rounded-lg px-3 py-1 text-primary text-sm font-medium shadow-customShadow"}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <MarqueeElement
                        content={"Aqua World"}
                        img={AquaWorld}
                        link={"https://in.bookmyshow.com/sports/aqua-world-swimming-pool-vsc/ET00389705"}
                        className={"bg-text rounded-lg px-3 py-1 text-primary text-sm font-medium shadow-customShadow"}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <MarqueeElement
                        content={"Badminton"}
                        img={Badminton}
                        link={"https://in.bookmyshow.com/sports/badminton-vsc/ET00390299"}
                        className={"bg-text rounded-lg px-3 py-1 text-primary text-sm font-medium shadow-customShadow"}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <MarqueeElement
                        content={<p>Go&nbsp;Karting</p>}
                        img={GoKarting}
                        link={"https://in.bookmyshow.com/activities/gokarting-vizag-vishwanadh-sports-club/ET00376476"}
                        className={"bg-text rounded-lg px-3 py-1 text-primary text-sm font-medium shadow-customShadow"}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <MarqueeElement
                        content={"Rope Course"}
                        img={RopeCourse}
                        link={"https://in.bookmyshow.com/activities/rope-course-at-adventure-thrill-city-vsc/ET00428598"}
                        className={"bg-text rounded-lg px-3 py-1 text-primary text-sm font-medium shadow-customShadow"}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <MarqueeElement
                        content={<p>Go&nbsp;Karting Champion</p>}
                        img={GoKartingChampion}
                        link={"https://in.bookmyshow.com/sports/gokarting-championship-vsc/ET00379295"}
                        className={"bg-text rounded-lg px-3 py-1 text-primary text-sm font-medium shadow-customShadow"}
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default HeaderSwiper;