"use client"

import { CSSProperties, HTMLAttributes, forwardRef } from "react"
import { twMerge } from "tailwind-merge";

interface BaseProps extends HTMLAttributes<HTMLDivElement> {
    asGrid?: boolean
}

interface ISection extends BaseProps {
    asGrid?: never
}

interface IGrid extends BaseProps {
    templateColumns?: number
    templateRows?: number
    templateGap?: {
        Column?: number
        Row?: number
    }
}

export type SectionContentProps = ISection | IGrid

const SectionContent = forwardRef<HTMLDivElement, SectionContentProps>((props, ref) => {

    const {
        children, 
        className 
    } = props;

    const Component = "div"

    if (isWithGridProps(props)) {

        const {
            templateColumns,
            templateRows,
            templateGap
        } = props;

        const gapPx = ($param: any) => {
            if (!isNaN($param))
                return $param + "px";
            return $param;
        }

        return (
            <div ref={ref} className={twMerge("container mx-auto px-12 my-12", className)}>
                <div
                    className={twMerge("grid-layout", className)}
                    style={{
                        "--grid-columns": templateColumns,
                        "--grid-rows": templateRows,
                        "--grid-columns-gap": gapPx(templateGap?.Column),
                        "--grid-rows-gap": gapPx(templateGap?.Row)
                    } as CSSProperties}
                >
                    {children}
                </div>
            </div>
        )
    }

    return (
        <Component ref={ref} className={twMerge("container mx-auto px-12 my-12", className)}>
            {children}
        </Component>
    )

});

function isWithGridProps(props: SectionContentProps): props is IGrid {
    return (props as SectionContentProps).asGrid === true
}

SectionContent.displayName = "Section.Content"

export default SectionContent;
