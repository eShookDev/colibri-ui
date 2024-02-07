"use client"

import React from "react";

import { Fragment, forwardRef, useMemo } from "react";

/**
 * Type for the function that renders an item in the list.
 * @template T - The type of the item in the list.
 */
type RenderItemFunction<T> = (item: T, key: string) => React.ReactNode | JSX.Element


interface FlatListPropsWithoutRender<T> {
    /**
     * Takes an item from data and renders it into the list
     */
    renderItem: RenderItemFunction<T>
}

export interface FlatListProps<T> extends FlatListPropsWithoutRender<T> {
    /**
     * Data to use in renderItem
     */
    data: T[]
}


/**
 * Function to handle rendering an item using the provided renderItem function.
 */
const handleRenderItem = <T,>(onRenderItem: RenderItemFunction<T>) =>

    (item: T, key: number | string) => {

        // If renderItem is not provided, return null.
        if (!onRenderItem) return null;

        // Determine the key for the item.
        const itemId = (`${item}` === "[object Object]" && (item as { id: number | string }).id) || key;

        // If onRenderItem is a function, invoke it with the item and key.
        if (typeof onRenderItem === "function")
            return onRenderItem(item, `${itemId}`)

        // If onRenderItem is a React element, clone it with a new key and the item.
        const component = onRenderItem as React.ReactElement

        return React.cloneElement(component, { key: itemId, item });
    }

/**
* FlatList component.
*/
const FlatList = <T,>(props: FlatListProps<T>, ref: React.Ref<HTMLElement>) => {

    const {
        data,
        renderItem,
    } = props;

    const dataList = Object.values(data);

    // Create a memoized version of the onRenderItem function.
    const onRenderItem = useMemo(() =>
        () => handleRenderItem(renderItem),
        [renderItem]
    )

    return (
        <>
            {/* Map through the dataList and render each item using onRenderItem */}
            {dataList.map((item, index) => (
                <Fragment key={index}>{onRenderItem()(item, index)}</Fragment>
            ))}
        </>
    );
};

FlatList.displayName = "FlatList";

// Forward the ref for the FlatList component with the correct generic type.
export default forwardRef(FlatList) as <T>(props: FlatListProps<T>, ref: React.Ref<HTMLElement>) => JSX.Element