"use client"

import { MutableRefObject, useRef } from 'react';

// Custom React hook to manage an array of HTMLElement references
export function useArrayRef(): [MutableRefObject<HTMLElement[]>, ((element: HTMLElement | null) => void)] {

    // Create a mutable ref to store an array of HTMLElement references
    const refs = useRef<HTMLElement[]>([]);

    // Return an array containing the ref and a function to add elements to the ref
    return [
        refs,
        // Callback function that adds the given element to the array if it's not null and not already in the array
        (element: HTMLElement | null) => {
            if (element && !refs.current.includes(element)) {
                refs.current.push(element);
            }
        },
    ];
}