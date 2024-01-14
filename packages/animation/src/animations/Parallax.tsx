"use client";

import { useEffect, useRef, useState } from "react";

import Image, { ImageProps } from 'next/image';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { twMerge } from "tailwind-merge";

import { Element } from "@repo/ui";

interface AnimationConfig {
    /**
     * 
     */
    ease?: string
}

interface Props extends ImageProps {
    /**
     * 
     */
    withAnimation?: (boolean & { config?: AnimationConfig }) | { config?: AnimationConfig }
}

function Parallax(props: Props) {

    const {
        alt,
        withAnimation,
        ...rest
    } = props;

    // Create refs for the scrolling element and the ScrollTrigger instance
    const refScroll = useRef<HTMLDivElement>(null);
    const activeAnimationTrigger = useRef<ScrollTrigger | null>(null);

    // State to manage any active state (optional)
    const [active, setActive] = useState<string>('');

    const config = withAnimation?.config || { ease: 'none' };

    useEffect(() => {

        // Create a target object referencing the cover-image element using querySelector
        const target = { current: refScroll.current?.querySelector('.cover-image') } as { current: GSAPTweenTarget };

        // If withAnimation is enabled, create a ScrollTrigger
        if (withAnimation) {
            activeAnimationTrigger.current = ScrollTrigger.create({
                trigger: refScroll.current,     // Set the trigger element
                start: 'top bottom',            // Set the start position element
                onEnter: () => setActive('ui-animate-active')    // Callback when entering the trigger area
            })
        }

        // Set an initial height and yPercent using gsap.set
        gsap.set(target.current, { height: `+=30%`, yPercent: `-=30` });

        // Create a gsap animation for the target element with ScrollTrigger options
        const animation = gsap.to(target.current, {
            yPercent: 0,
            ease: config.ease,
            scrollTrigger: {
                trigger: refScroll.current,
                start: 'top bottom',
                scrub: true
            }
        })

        // Cleanup function to reset styles and kill animations on component unmount
        return () => {
            gsap.set(target.current, { clear: "height, yPercent" });
            animation.kill();
            activeAnimationTrigger.current?.kill();
        }

    }, [config.ease, withAnimation])

    return (
        <Element.div
            ref={refScroll}
            className={
                twMerge(
                    withAnimation && 'ui-animate',
                    active,
                    "relative overflow-hidden h-full"
                )}
        >
            <Image
                fill
                alt={alt || ""}
                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
                className="cover-image object-cover absolute"
                {...rest} />
        </Element.div>
    )

}

export default Parallax