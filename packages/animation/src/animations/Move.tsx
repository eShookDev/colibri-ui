"use client";

import { ReactNode, useEffect } from "react";

import gsap from "gsap";

import { useArrayRef } from "@repo/utils";

import { AnimationConfigProps } from "../Animation";

/** Register GSAP Plugin */

interface Props extends AnimationConfigProps {
    children?: ((setRefScroll: any) => ReactNode) | ReactNode;
}

function Move(props: Props) {

    const {
        fromVars,
        toVars,
        scrollTrigger = { start: "top 100%", end: "bottom 0%" },
        children
    } = props;

    // Create a ref array using hook
    const [refScroll, setRefScroll] = useArrayRef();

    // Determine the content based on the type of children prop
    const content = typeof children === "function"
        ? // If children is a function, call it with setRefScroll
        (children as (setRefScroll: any) => ReactNode)(setRefScroll)
        : // If children is not a function, use it directly
        children;

    useEffect(() => {

        if (refScroll.current) {

            // Create a GSAP animation from the 'fromVars' to 'toVars' values
            const animation = gsap.fromTo(
                refScroll.current,
                { ...fromVars },
                {
                    ...toVars,
                    ...(scrollTrigger && {
                        scrollTrigger: {
                            trigger: refScroll.current,
                            scrub: true,
                            start: scrollTrigger.start,
                            end: scrollTrigger.end,
                        }
                    })
                }
            );

            // Cleanup function to kill the animation on unmount or update
            return () => {
                animation.kill();
            };
        }
    }, [fromVars, refScroll, scrollTrigger, toVars]);


    return content;
}

export default Move;