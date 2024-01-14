"use client";

import { ReactNode, useEffect } from "react";

import gsap, { Back } from "gsap";

import { useArrayRef } from "@/utils/useArrayRef";

import { AnimationConfigProps } from "../Animation";

interface Props extends AnimationConfigProps {
    /**
     * Function that takes a RefObject and returns ReactNode
     * @param setRefScroll RefObject to be passed to children
     * @returns ReactNode
     */
    children?: ((setRefScroll: any) => ReactNode) | ReactNode;
}

function FadeIn(props: Props) {

    const {
        fromVars,
        toVars,
        scrollTrigger = { start: "top 75%", end: "100% 0%" },
        children,
    } = props;

    const [refScroll, setRefScroll] = useArrayRef();

    // Determine the content based on the type of children pop
    const content = typeof children === "function"
        ? // If children is a function, call it with setRefScroll
        (children as (setRefScroll: any) => ReactNode)(setRefScroll)
        : // If children is not a function, use it directly
        children;

    useEffect(() => {

        if (refScroll.current) {

            // Create a GSAP animation from the from the 'fromVars' to 'toVars' values
            const animation = gsap.fromTo(
                refScroll.current,
                {
                    opacity: 0,
                    ...fromVars,
                },
                {
                    opacity: 1,
                    willChange: "transform , opacity",
                    ease: Back.easeOut.config(1.7),
                    duration: 0.8,
                    stagger: 0.2,
                    delay: 0,
                    ...toVars,
                    ...(scrollTrigger && {
                        scrollTrigger: {
                            trigger: refScroll.current,
                            scrub: false,
                            start: scrollTrigger.start,
                            end: scrollTrigger.end
                        }
                    })
                }
            )

            // Cleanup function to kill the animation on unmount or update
            return () => {
                animation.kill()
            }
        }
    }, [fromVars, refScroll, scrollTrigger, toVars])

    return content;

}

export default FadeIn