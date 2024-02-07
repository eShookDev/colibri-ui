"use client";

import { HTMLAttributes, RefObject, forwardRef, } from "react"

import { twMerge } from "tailwind-merge";

import { Animation, AnimationConfigProps } from "@repo/animation";

export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
    /**
    * Animation details for the component.
    * 'animation' specifies the type of animation, and 'config' provides optional animation configuration.
    */
    withAnimation?: { animation: string; config?: AnimationConfigProps }
}

const CardContent = forwardRef<HTMLDivElement, CardContentProps>((props, ref) => {

    const {
        withAnimation,
        children,
        className,
        ...rest
    } = props;

    // Destructure the animation prop, default to "Move" if not provided
    const { animation, config } = withAnimation || { animation: "Move", config: {} }

    // Conditionally render AnimationWrapper based on withAnimation prop
    const renderContent = (animationRef: RefObject<any>) => {

        return (
            <div ref={animationRef} className={twMerge("flex flex-col p-6 pt-0", className)} {...rest}>
                {children}
            </div>)
    };

    // Conditionally wrap content with AnimationWrapper
    return withAnimation ? (
        <Animation animation={animation} {...config}>
            {(animationRef: RefObject<any>) => renderContent(animationRef)}
        </Animation>
    ) : (
        renderContent(ref as RefObject<HTMLDivElement | null>) // Pass ref directly if no animation
    );
});

CardContent.displayName = "Card.Content"

export default CardContent;
