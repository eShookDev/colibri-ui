"use client"

import { twMerge } from "tailwind-merge"

import { Element, Scrollable } from "@repo/ui"

interface Props extends React.HTMLAttributes<HTMLDivElement> { }

const Layout = (props: Props) => {

    const {
        children
    } = props;

    return (
        <Element.div className="bg-black">
            <div className="relative overflow-hidden w-full">
                <Scrollable>
                    {children}
                </Scrollable>
                <div className={
                    twMerge(
                        "fixed h-full w-full top-0 left-0 pointer-events-none mix-blend-exclusion",
                        "before:left-24 before:absolute before:top-0 before:h-full before:w-px before:bg-[var(--border-color)] before:z-10",
                        "after:right-24 after:absolute after:top-0 after:h-full after:w-px after:bg-[var(--border-color)] after:z-10"
                    )}
                />
            </div>
        </Element.div>
    )
}

Layout.displayName = "Layout"

export default Layout