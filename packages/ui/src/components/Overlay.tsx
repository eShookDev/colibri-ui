"use client"

import Elements from "./Elements";

import { cn } from "../utils";
import clsx from "clsx";

export interface OverlayProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * 
     */
    opacity?: 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100,
    /*
     * 
     */
    backgroundColor?: string
}

const Overlay = (props: OverlayProps) => {

    const {
        opacity = 60,
        backgroundColor = "bg-black",
        className,
        ...rest
    } = props;

    // Define tailwindCSS classes based on opacity level
    const opacityClasses = clsx(`opacity-${opacity}`)

    return (
        <Elements.div
            className={
                cn(
                    "absolute h-full w-full top-0 left-0 z-10 opacity-60",
                    backgroundColor,
                    className
                )
            }
            {...rest}
        />
    )

}

Overlay.displayName = "Overlay"

export default Overlay
