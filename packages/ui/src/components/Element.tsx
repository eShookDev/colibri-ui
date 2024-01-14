import { forwardRef } from "react";

const Elements = [
    'div',
    'span',
    'p',
    'header',
    'nav',
    'ul',
    'li',
    'span'
] as const;

interface ElementProps extends React.HTMLAttributes<HTMLElement>, React.RefAttributes<HTMLElement> {
    /**
     * The 'tag' prop allows specifying the HTML element type for rendering the component.
     * It is optional and defaults to the "div" element if not provided.
     */
    tag?: React.ElementType
    /**
     * 'children' prop for passing children elements directly into the component
     */
    children?: React.ReactNode
}

/**
 * Wrapper component to render the respective HTML element with the given props
 */
const BaseElement = forwardRef<HTMLElement, ElementProps>((props, ref) => {

    const {
        tag: Component = "div",
        children,
        ...rest
    } = props;

    return (
        <Component ref={ref} {...rest}>
            {children}
        </Component>
    )
});

BaseElement.displayName = "BaseElement";

/**
 * Typing dynamic element map
 */
type ElementMap = { [ElementName in typeof Elements[number]]: React.FC<Omit<ElementProps, 'tag'>> };

/**
 * Dynamically create a component for each element
 */
const Element = Elements.reduce((element, node) => {

    // Create component
    const Component = forwardRef<HTMLElement, Omit<ElementProps, 'tag'>>((props, ref) => (
        <BaseElement ref={ref} tag={node} {...props} />
    ));

    // Set displayName for debugging purposes
    Component.displayName = `Element.${node}`;

    // Assign the component to element
    element[node] = Component;

    return element;

}, {} as ElementMap);

export default Element;