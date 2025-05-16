import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import hero1 from '/src/assets/images/banner1.png'
import hero2 from '/src/assets/images/banner2.png'
import hero3 from '/src/assets/images/banner3.png'

import { EffectCube, Pagination, Autoplay } from 'swiper/modules';

export default function HeroFood() {
    return (
        <>
            <Swiper
                effect={'cube'}
                grabCursor={true}
                cubeEffect={{
                    shadow: false,
                    slideShadows: false,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                }}
                pagination={true}
                autoplay={{
                    delay: 2000, // Change slide every 3 seconds
                    disableOnInteraction: false,
                }}
                modules={[EffectCube, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={hero1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={hero2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={hero3} />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
