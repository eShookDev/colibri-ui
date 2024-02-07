'use client'

import { useEffect, useRef } from "react"
import Scrollbar from "smooth-scrollbar"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import Elements from "./Elements";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * The 'tag' prop allows specifying the HTML element type for rendering the Card component.
     * It is limited to the values "div" or "section" using the 'LimitedElementType' type.
     * It is optional and defaults to the "div" element if not provided.
     */
    tag?: React.ElementType
}

/** Register GSAP Plugin */
gsap.registerPlugin(ScrollTrigger);

const Scrollable = (props: Props) => {

    const {
        tag: Component = "div",
        children
    } = props;

    const refScrollbar = useRef<HTMLElement>(null);

    useEffect(() => {

        if (refScrollbar.current) {

            /** Initializes a scrollbar on the given element ref */
            const Scroll = Scrollbar.init(refScrollbar.current, { alwaysShowTracks: true, damping: 0.085 });

            /** Set the default values that apply to every ScrollTrigger upon creation */
            ScrollTrigger.defaults({ scroller: refScrollbar.current });

            /** Recalculates the positioning of all of the ScrollTriggers on the page */
            Scroll.addListener(() => ScrollTrigger.refresh())

            /** Storage current position */
            document.body.classList.add("ui-active-scrollable");

            /** Remove xAxis */
            document.querySelector(".scrollbar-track-x")?.remove();

            /** Set style property yAxis */
            refScrollbar.current.style.removeProperty("overflow");

            return () => {
                ScrollTrigger.defaults({ scroller: null });
                Scroll.destroy();
            }
        }

    }, [])

    return (
        <Component
            ref={refScrollbar}
            style={{ height: "100vh" }}
        >
            <Elements.div className="relative px-24">
                {children}
            </Elements.div>
        </Component>
    )
}

export default Scrollable