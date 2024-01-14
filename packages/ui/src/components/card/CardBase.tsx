"use client";

import { ElementType, HTMLAttributes, RefObject, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "../../utils";

import { Animation, AnimationConfigProps } from "@repo/animation";


// Define a limited set of HTML element types that can be used for the 'tag' prop.
type LimitedElementType = Extract<ElementType, "div" | "section">

export interface CardBaseProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
    /**
     * The 'tag' prop allows specifying the HTML element type for rendering the Card component.
     * It is limited to the values "div" or "section" using the 'LimitedElementType' type.
     * It is optional and defaults to the "div" element if not provided.
     */
    tag?: LimitedElementType
    /**
    * Animation details for the component.
    * 'animation' specifies the type of animation, and 'config' provides optional animation configuration.
    */
    withAnimation?: { animation: string; config?: AnimationConfigProps }
}

// Define tailwindCSS classes based on card variant
const cardVariants = cva(
    "relative",
    {
        variants: {
            variant: {
                default: "p-6 border border-[var(--border-color)] hover:border-[var(--border-color-hover)]",
                outline: "p-6 border border-[var(--border-color)]",
                ghost: "",
            }
        },
        defaultVariants: {
            variant: "default"
        }
    }
)

const CardBase = forwardRef<HTMLDivElement, CardBaseProps>((props, ref) => {

    const {
        tag: Comp = "div",
        withAnimation,
        variant,
        className,
        children,
        ...rest
    } = props;

    // Destructure the animation prop, default to "Move" if not provided
    const { animation, config } = withAnimation || { animation: "Move", config: {} }

    // Conditionally render AnimationWrapper based on withAnimation prop
    const renderContent = (animationRef: RefObject<any>) => (
        <Comp ref={animationRef} className={cn(cardVariants({ variant, className }))} {...rest}>
            {children}
        </Comp>
    );

    // Conditionally wrap content with AnimationWrapper
    return withAnimation ? (
        <Animation animation={animation} {...config}>
            {(animationRef: RefObject<any>) => renderContent(animationRef)}
        </Animation>
    ) : (
        renderContent(ref as RefObject<HTMLDivElement | null>) // Pass ref directly if no animation
    );

});

CardBase.displayName = "Card.Base"

export default CardBase;
