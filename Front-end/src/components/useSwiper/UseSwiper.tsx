"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper/modules"
import { Cursos, Videos } from '@/interface';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination"
import "swiper/css/navigation"
import { IconFlechaDe, IconFlechaIz } from '../icon/Icons';
import { Cards } from '../cards/Cards';

interface Props {
    cursos: Cursos[]
    dbVideos: Videos[]
    id: string
}

export const UseSwiper = ({ cursos, dbVideos, id }: Props) => {


    return (
        <div className='mt-10'>
            <div className='max-w-[1600px] w-full mx-auto px-20 relative'>
                <Swiper
                    className='cursor-pointer '
                    modules={[Navigation, Pagination]}
                    navigation={{
                        nextEl: ".button-next",
                        prevEl: ".button-prev",

                    }}
                    pagination={{ el: ".swiper-pagination", clickable: true }}
                    spaceBetween={50}
                    slidesPerView={4}
                >
                    {

                        cursos.filter(curso => curso.id_category === id).map(curso => (

                            <SwiperSlide key={curso.id} style={{ "display": "flex", "justifyContent": "center", }}>

                                <Cards curso={curso} dbVideos={dbVideos} />

                            </SwiperSlide>

                        ))
                    }

                </Swiper>

                <button style={{ "--swiper-navigation-color": "#CFEAC8" } as React.CSSProperties}
                    className='swiper-button-next  button-next'></button>
                <button
                    style={{ "--swiper-navigation-color": "#CFEAC8" } as React.CSSProperties}
                    className='swiper-button-prev button-prev'></button>

            </div>

            <div className='mt-20 flex justify-center gap-7 text-xl text-texto-green relative '>
                <button className='border border-texto-green rounded-md px-2 py-1 button-prev flex items-center gap-3'><IconFlechaIz /> Anterior</button>

                <div className='swiper-pagination max-w-min flex items-center gap-2'
                    style={{
                        "position": "static", "--swiper-pagination-color": "#DFF4CC",
                        "--swiper-pagination-bullet-size": "12px",
                        "--swiper-pagination-bullet-horizontal-gap": "0px"
                    } as React.CSSProperties}></div>

                <button className='border border-texto-green rounded-md px-2 py-1 button-next flex items-center gap-3'> Proximo <IconFlechaDe /></button>
            </div>
        </div>
    );
}; 