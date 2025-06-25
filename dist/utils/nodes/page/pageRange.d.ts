/**
 * @file /src/utils/nodes/page/pageRange.ts
 * @name PageRange
 * @description Utility functions for page ranges.
 */
import { Node as PMNode } from "@tiptap/pm/model";
import { EditorState } from "@tiptap/pm/state";
/**
 * Get the last page number in the document (0-indexed).
 * @param doc - The current document.
 * @returns {number} The last page number in the document (0-indexed).
 */
export declare const getLastPageNum: (doc: PMNode) => number;
/**
 * Handles cases where the given page number is out of range.
 * Logs a warning and falls back to the last page number.
 *
 * @param state - The current editor state.
 * @param pageNum - The page number to validate.
 * @param fallbackFn - A function to determine the fallback value based on the last page number.
 * @returns {T} The result of the fallback function.
 */
export declare const handleOutOfRangePageNum: <T>(state: EditorState, pageNum: number, fallbackFn: (state: EditorState, pageNum: number) => T) => T;
/**
 * Check if the page number is in range for the document.
 *
 * @param doc - The current document.
 * @param pageNum - The page number to check (0-indexed).
 * @returns {boolean} True if the page number is in range, false otherwise.
 */
export declare const isPageNumInRange: (doc: PMNode, pageNum: number) => boolean;
//# sourceMappingURL=pageRange.d.ts.map