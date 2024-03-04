'use client';

import { useRef, useState } from "react"
import { twMerge } from "tailwind-merge";

const Navigation = () => {

    const [open, setOpen] = useState<boolean>(false)


    const onHandleClick = (event: any) => {
        setOpen(!open);

    }

    return (
        <header className="fixed w-full top-0 flex z-20">
            <nav
                className={
                    twMerge(
                        open === true ? "opacity-100 visible transform-none" : "opacity-0 invisible -translate-y-full",
                        "fixed flex h-screen w-full px-24 z-10",
                        "before:absolute before:h-full before:w-px before:bg-[var(--border-color)]",
                        "after:absolute after:right-12 after:h-full after:w-px after:bg-[var(--border-color)]"
                    )
                }>
                <ul className="flex flex-col justify-center w-3/4 pl-12">
                    <li className="my-4 cursor-pointer [--index-li:0]">
                        <span className={
                            twMerge(
                                open === true ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
                                "transition-opacity ease-out duration-100 origin-[center_top] delay-[calc(.1s*var(--index-li))]",
                                "before:content-['01.'] before:text-sm before:opacity-30"
                            )
                        }>
                            <a href="#" className="pl-2 text-4xl transition-all duration-500 delay-0 origin-top-left hover:skew-x-2 hover:tracking-widest">Home</a>
                        </span>
                    </li>
                    <li className="my-4 cursor-pointer [--index-li:1]">
                        <span className={
                            twMerge(
                                open === true ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
                                "transition-opacity ease-out duration-100 origin-[center_top] delay-[calc(.1s*var(--index-li))]",
                                "before:content-['02.'] before:text-sm before:opacity-30"
                            )
                        }>
                            <a href="#" className="pl-2 text-4xl transition-all duration-500 delay-0 origin-top-left hover:skew-x-2 hover:tracking-widest">Stories</a>
                        </span>
                    </li>
                    <li className="my-4 cursor-pointer [--index-li:2]">
                        <span className={
                            twMerge(
                                open === true ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
                                "transition-opacity ease-out duration-100 origin-[center_top] delay-[calc(.1s*var(--index-li))]",
                                "before:content-['03.'] before:text-sm before:opacity-30"
                            )
                        }>
                            <a href="#" className="pl-2 text-4xl transition-all duration-500 delay-0 origin-top-left hover:skew-x-2 hover:tracking-widest">Account</a>
                        </span>
                    </li>
                </ul>
                <div className={
                    twMerge(
                        "relative flex justify-center flex-col pr-12 my-28",
                        "after:absolute after:h-full after:w-px after:bg-[var(--border-color)]"
                    )
                }>
                    <section className="relative pl-12">
                        <span className="text-yellow-800 text-2xl text-bold">Contact</span>
                        <div className="flex flex-col">
                            <p>+39 057526457</p>
                            <p>info@eshookdev.com</p>
                        </div>
                    </section>
                    <section className="relative pl-12 mt-8">
                        <span className="text-yellow-800 text-2xl text-bold">Follow us</span>
                        <ul className="flex flex-row justify-between">
                            <li>Facebook.</li>
                            <li>Instagram.</li>
                            <li>Twitter.</li>
                        </ul>
                    </section>
                </div>
            </nav>
            <div className="fixed top-1/2 w-24 flex flex-col items-center justify-center -translate-y-1/2 cursor-pointer z-10" onClick={onHandleClick}>
                <div className="relative w-6 py-2">
                    <div className="relative h-[2px] bg-white w-6 origin-bottom rotate-45"></div>
                    <div className="relative h-[2px] bg-white w-6 origin-top -rotate-45"></div>
                </div>
            </div>
            <div className={
                twMerge(
                    open === true ? "opacity-100 visible" : "opacity-0 invisible",
                    "fixed w-full h-full top-0 left-0 bg-black -z-10 pointer-events-none"
                )
            } />
        </header>
    )

}

export default Navigation