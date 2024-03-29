"use client"

import Move from "./animations/Move";
import FadeIn from "./animations/FadeIn";


export interface AnimationConfigProps {
    /**
     * 
     */
    fromVars?: Object;
    /**
     * 
     */
    toVars?: Object;
    /**
     * 
     */
    scrollTrigger?: { start: string; end: string };
}

interface AnimationProps extends AnimationConfigProps {
    /**
     * Type of animation. Can be a string or predefined values "Move", "fadeIn".
     */
    animation: | string | "Move" | "fadeIn";
      /**
     * Function that takes a RefObject and returns ReactNode or ReactNode[]
     * @param animationRef RefObject to be passed to children
     * @returns ReactNode or ReactNode[]
     */
    children: (animationRef: React.RefObject<any>) => React.ReactNode | React.ReactNode | React.ReactNode[];
}

const Animation = ({ animation, children, ...rest }: AnimationProps) => {

    let AnimationComponent: React.ReactNode;

    switch (animation) {
        case "Move":
            AnimationComponent = <Move {...rest}>{children}</Move>
            break;
        case "fadeIn":
            AnimationComponent = <FadeIn {...rest}>{children}</FadeIn>
            break;
        default:
            throw new Error(`Unsupported animation type: ${animation}`);
    }

    // Return the selected Animation component
    return AnimationComponent;
};

export default Animation;