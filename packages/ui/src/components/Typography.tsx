import React, { forwardRef } from "react";
import clsx from "clsx";
import { cn } from "../utils";
import Element from "./Element";

interface TypographyProps {
    /**
     * 
     */
    fontWeight?: 'thin' | 'extralight' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black'
}

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement>, TypographyProps {
    /**
     * 
     */
    level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const Title = forwardRef<HTMLHeadingElement, TitleProps>((props, ref) => {

    const {
        level,
        fontWeight,
        children,
        className,
        ...rest
    } = props;

    // Dynamically determine the heading level
    const Component = level || 'h1'

    // Define styles using a configuration object
    const headingStyles: { [key in typeof Component]: string } = {
        h1: 'text-4xl',
        h2: 'text-3xl',
        h3: 'text-2xl',
        h4: 'text-xl',
        h5: 'text-lg',
        h6: 'text-base'
    }

    // Define tailwindCSS classes based on heading level
    const headingClasses = clsx(
        `font-${fontWeight || 'bold'} p-6`,
        headingStyles[Component]
    )

    return (
        <Component
            ref={ref}
            className={cn(headingClasses, className)}
        >
            {children}
        </Component>
    )

})

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> { }

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>((props, ref) => {

    const { children } = props;

    return (
        <Element.p ref={ref} className="">{children}</Element.p>
    )
})

interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {

}

const Text = forwardRef<HTMLSpanElement, TextProps>((props, ref) => {

    const { children } = props;

    return (
        <Element.span ref={ref} className="">{children}</Element.span>
    )

})

/**
 * 
 */
const Typography = Object.assign(
    {},
    {
        Title,
        Paragraph,
        Text
    }
)

export default Typography