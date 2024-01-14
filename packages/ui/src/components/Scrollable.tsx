'use client'

import { HTMLAttributes, useEffect, useRef } from "react"

import { gsap } from "gsap"
import { ScrollTrigger, ScrollSmoother } from "gsap/all"

interface ScrollableProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
    * The 'tag' prop allows specifying the HTML element type for rendering the component.
    * It is optional and defaults to the "div" element if not provided.
    */
    tag?: React.ElementType
}

/** Register GSAP Plugin */
gsap.registerPlugin([ScrollTrigger, ScrollSmoother]);

const Scrollable = (props: ScrollableProps) => {

    const {
        tag: Component = "div",
        children
    } = props;

    const refContainer = useRef<HTMLElement>(null);

    useEffect(() => {

        if (refContainer.current) {

            /** Initializes a scrollbar on the given element ref */
            const Smoother = ScrollSmoother.create({
                content: refContainer.current,
                smooth: 1,
                effects: true
            });

            /** Set the default values that apply to every ScrollTrigger upon creation */
            ScrollTrigger.defaults({ scroller: refContainer.current });

            return () => {
                Smoother.kill();
                ScrollTrigger.defaults({ scroller: null });
            }
        }

    }, [])

    return (
        <Component
            ref={refContainer}
            style={{ height: "100vh" }}
        >
            <div className="relative px-24">
                {children}
            </div>
        </Component>
    )
}

export default Scrollable