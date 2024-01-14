import React from "react";

import Element from "./Element";

import { cn } from "../utils";

export interface OverlayProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * 
     */
    backgroundColor?: string
}

const Overlay = (props: OverlayProps) => {

    const {
        backgroundColor = "bg-black",
        className,
        ...rest
    } = props;

    return (
        <Element.div
            className={
                cn(
                    "fixed w-full h-full top-0 left-0 -z-10 pointer-events-none",
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
