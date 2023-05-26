import React from 'react'
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

function SimpleCarusel(props: { images: string[], isVerticalLeayout: boolean }) {
    const {images, isVerticalLeayout } = props;

    return (
        <>
            <Swiper
                slidesPerView={1}
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                style={{margin: 0}}
                className={`${isVerticalLeayout ? "vertacal" :"horizont" }`}
            >
                {images?.map((image) => {
                   return <SwiperSlide  key={image}>
                        <img  src={image} alt="Картинка" />
                    </SwiperSlide>

                })}


            </Swiper>
        </>

    )

}

export default SimpleCarusel;