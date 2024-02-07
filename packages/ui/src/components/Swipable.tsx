'use client';

import { useState } from "react"

import Image, { ImageProps } from "next/image";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Parallax } from "swiper/modules";

import { twMerge } from "tailwind-merge";

import "swiper/css";

import { Elements, Section } from "..";

export interface SwipableItem {
    id: number
    source: ImageProps["src"]
    title: string,
    description?: string,
}

interface SwipableImage {
    priority?: ImageProps["priority"]
    sizes?: ImageProps["sizes"]
    fill?: ImageProps["fill"]
}

interface SwipableVideo {

}

interface SwipableProps<T> {
    /**
     * 
     */
    data: T[]
    /**
     * 
     */
    fullWidth?: boolean
    /**
     * 
     */
    withImage?: (boolean & SwipableImage) | SwipableImage
    /**
     * 
     */
    withVideo?: SwipableVideo
    /**
     * Content Fit
     * @param Top top
     * @param Center center
     * @param Bottom bottom
     * @return Content fit
     */
    contentFit?: "top" | "center" | "bottom",
    /**
     * 
     */
    contentHasSeparator?: boolean
}

function Swipable<T extends SwipableItem>(props: SwipableProps<T>) {

    const {
        data,
        fullWidth,
        withImage,
        withVideo,
        contentFit,
        contentHasSeparator
    } = props;

    const [activeSlide, setActiveSlide] = useState<number>(0);

    const handleSlideChange = (swiper: SwiperClass): void => {

        const { activeIndex } = swiper;

        setActiveSlide(activeIndex);
    }

    return (
        <Section className="relative">
            <div className={
                twMerge(
                    "relative h-screen overflow-hidden left-2/4",
                    fullWidth && "w-screen -ml-[50vw]"
                )}
            >
                <Swiper
                    modules={[Parallax]}
                    spaceBetween={50}
                    slidesPerView={1}
                    speed={1500}
                    onSlideChange={handleSlideChange}
                    grabCursor
                    className="h-full w-full"
                >
                    {data.map((item, index) => (
                        <SwiperSlide key={index} data-slider-id={index}>
                            <Elements.div className="relative h-full w-full">
                                {withImage && (
                                    <Image
                                        src={item.source}
                                        alt={item.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw,(max-width: 1200px) 70vw,100vw"
                                        className="object-cover"
                                    />
                                )}
                                {withVideo && (
                                    <></>
                                )}
                            </Elements.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className={
                twMerge(
                    "flex absolute top-0 h-full w-full pointer-events-none px-12 z-10",
                    contentFit === "top" && "w-full left-0 items-end",
                    contentFit === "center" && "items-center justify-center text-center"
                )
            }
            >
                {data.map((item, index) =>
                    <div className={
                        twMerge(
                            activeSlide === index ? "opacity-100" : "opacity-0",
                            "flex flex-col items-center absolute py-10 w-full"
                        )}
                        key={index}
                    >
                        <span className="text-6xl">{item.title}</span>
                        {contentHasSeparator && (<hr className="mt-5 w-full" />)}
                        <span className="mt-5 max-w-lg uppercase">{item.description}</span>
                    </div>
                )}
            </div>
        </Section>
    )

}

Swipable.displayName = "Swipable"

export default Swipable