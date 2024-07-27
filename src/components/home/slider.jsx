import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

import { services } from "./constants";

import "swiper/css";
import "swiper/css/effect-cards";

const screenWidth = window.screen.width;
const screenHeight = window.screen.height;

function Slider({ toggle }) {
    return (
        <motion.div
            className="bg-matte-black absolute left-[100%] top-0 z-[100] w-screen h-screen"
            // style={{ backgroundColor: 'black' }}
            animate={{
                x: toggle ? -screenWidth : 0,
            }}
            transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 1000,
                damping: 100,
            }}
            style={{
                background: `linear-gradient(to right, #353935, rgba(38,29,109,0.1) 100%)`,
            }}
        >
            <div className="w-screen h-screen relative bg-matte-black flex">
                <div
                    className="w-1/2 h-screen overflow-hidden"
                    style={{
                        background: `linear-gradient(to right, #353935, rgba(38,29,109,0.1) 100%), url('/assets/images/working-woman.jpg') center/cover`,
                    }}
                ></div>
                <div className="w-1/2 h-screen flex flex-col justify-center items-center">
                    <Swiper
                        effect={"cards"}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper text-matte-black w-72 h-96 rounded"
                    >
                        {services.map((item) => (
                            <SwiperSlide
                                key={item.title}
                                className="h-16 w-16 border border-matte-black rounded-xl bg-dark-gray py-6 px-5"
                            >
                                <p className="font-quicksand text-l mb-4 font-semibold">
                                    {item.title}
                                </p>
                                <p className="w-full text-xs line-clamp-[14]">
                                    {item.description}
                                </p>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </motion.div>
    );
}

export default Slider;
