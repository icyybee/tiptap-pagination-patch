/**
 * @file /src/utils/math.ts
 * @name Math
 * @description Utility functions for mathematical operations.
 */
/**
 * Checks if a value is within a specified range inclusive of the bounds.
 *
 * @param value - The value to check.
 * @param min - The minimum value of the range.
 * @param max - The maximum value of the range.
 * @returns True if the value is within the range, false otherwise.
 */
export declare const inRange: (value: number, min: number, max: number) => boolean;
/**
 * Calculates the hypotenuse of a right triangle given the lengths of the other two sides.
 *
 * @param a - The length of side A.
 * @param b - The length of side B.
 * @returns The length of the hypotenuse.
 */
export declare const pythagoreanTheorem: (a: number, b: number) => number;
/**
 * Generic binary search function.
 *
 * @param arr - The sorted array to search.
 * @param target - The target value to search for.
 * @param compare - A comparison function that returns:
 *                  - A negative number if `target` < element at current index
 *                  - Zero if `target` === element at current index
 *                  - A positive number if `target` > element at current index
 * @returns {number} - The index of the target element, or null if not found.
 */
export declare const binarySearch: <T>(arr: T[], target: T, compare: (a: T, b: T) => number) => number;
/**
 * Find the index of the closest element in an array to a target value.
 *
 * @param arr - The array to search.
 * @param target - The target value to find the closest element to.
 * @returns The index of the closest element in the array.
 */
export declare const findClosestIndex: (arr: number[], target: number) => number;
//# sourceMappingURL=math.d.ts.map