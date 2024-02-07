"use client";

import { forwardRef } from "react"

import { twMerge } from "tailwind-merge";

import { Animation, AnimationConfigProps } from "@repo/animation"

import Typography from "../Typography";

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
      * The 'tag' prop allows specifying the HTML element type for rendering the component.
      * It is limited to the values "div" using the extract element type.
      * It is optional and defaults to the "div" element if not provided.
      */
    tag?: Extract<React.ElementType, "div">
    /**
     * Determine if the card header should be rendered as a Heading component.
     * If true, it renders the content as a Heading; otherwise, it uses the specified 'tag' or defaults to "div".
     */
    asHeading?: boolean
    /**
    * Animation details for the component.
    * 'animation' specifies the type of animation, and 'config' provides optional animation configuration.
    */
    withAnimation?: { animation: string; config?: AnimationConfigProps }
}

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>((props, ref) => {

    const {
        tag: Component = "div",
        asHeading,
        withAnimation,
        children,
        className,
        ...rest
    } = props;

    // Destructure the animation prop, default to "Move" if not provided
    const { animation, config } = withAnimation || { animation: "Move", config: {} }

    // Conditionally render based on withAnimation prop
    const renderContent = (animationRef: React.RefObject<any>) => (
        <>
            {asHeading ? (
                <Typography.Title
                    ref={animationRef}
                    level="h1"
                    className={twMerge(className)}
                    {...rest}
                >
                    {children}
                </Typography.Title>
            ) : (
                <Component
                    ref={animationRef}
                    className={twMerge("flex flex-col items-center space-y-6", className)}
                    {...rest}
                >
                    {children}
                </Component>
            )}
        </>
    );

    // Conditionally wrap content
    return withAnimation ? (
        <Animation animation={animation} {...config}>
            {(animationRef: React.RefObject<any>) => renderContent(animationRef)}
        </Animation>
    ) : (
        renderContent(ref as React.RefObject<HTMLDivElement | null>)
    );
});

CardHeader.displayName = "Card.Header"

export default CardHeader;