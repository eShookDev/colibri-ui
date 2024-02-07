"use client"

import { ImageProps } from "next/dist/shared/lib/get-img-props";
import { ElementType, HTMLAttributes, forwardRef } from "react"
import { twMerge } from "tailwind-merge";

// Define a limited set of HTML element types that can be used for the 'tag' prop.
type LimitedElementType = Extract<ElementType, "div" | "section">

export interface SectionBaseProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * The 'tag' prop allows specifying the HTML element type for rendering the Card component.
     * It is limited to the values "div" or "section" using the 'LimitedElementType' type.
     * It is optional and defaults to the "div" element if not provided.
     */
    tag?: LimitedElementType
    /**
     * 
     */
    withBackgroundImage?: ImageProps
}

const SectionBase = forwardRef<HTMLDivElement, SectionBaseProps>((props, ref) => {

    const { 
        tag: Component = "section", 
        withBackgroundImage, 
        children, 
        className 
    } = props;

    return (
        <Component className={twMerge("flex flex-col justify-center my-20", className)}>
            {children}
        </Component>
    )

});

SectionBase.displayName = "Section.Base"

export default SectionBase;
