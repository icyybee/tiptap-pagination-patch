/**
 * @file /src/utils/paperColour.ts
 * @name PaperColour
 * @description Utility functions for paper colours.
 */
import { Transaction } from "@tiptap/pm/state";
import { Dispatch, Editor } from "@tiptap/core";
import { Node as PMNode } from "@tiptap/pm/model";
import { Nullable } from "../../../../types/record";
/**
 * Get the paper colour based on the device theme.
 *
 * @returns {string} The paper colour based on the device theme.
 */
export declare const getDeviceThemePaperColour: () => string;
/**
 * Retrieves the default paper colour based on the provided editor options.
 * If the `useDeviceThemeForPaperColour` option is enabled, it returns the device theme paper colour.
 * Otherwise, it returns the `defaultPaperColour` specified in the options.
 *
 * @param editor - The editor instance.
 * @returns The default paper colour as a string.
 */
export declare const getDefaultPaperColour: (editor: Editor) => string;
/**
 * Check if a page node has a paper colour attribute.
 *
 * @param pageNode - The page node to check.
 * @returns {boolean} True if the page node has a paper colour attribute, false otherwise.
 */
export declare const pageNodeHasPaperColour: (pageNode: PMNode) => boolean;
/**
 * Get the paper colour of a particular page node in the document.
 *
 * @param pageNode - The page node to find the paper colour for
 * @returns {Nullable<string>} The paper colour of the specified page or null
 * if the paper colour is not set.
 */
export declare const getPageNodePaperColour: (pageNode: PMNode) => Nullable<string>;
/**
 * Retrieves the paper color of a specific page using the editor instance.
 * Falls back to the default paper color if the page number is invalid.
 *
 * @param editor - The current editor instance.
 * @param pageNum - The page number to retrieve the paper color for.
 * @returns {string} The paper color of the specified page or default.
 */
export declare const getPageNumPaperColour: (editor: Editor, pageNum: number) => string;
/**
 * Set the paper colour for a page node at the specified position.
 *
 * @param tr - The transaction to apply the change to.
 * @param dispatch - The dispatch function to apply the transaction.
 * @param pagePos - The position of the page node to set the paper colour for.
 * @param pageNode - The page node to set the paper colour for.
 * @param paperColour - The paper colour to set.
 * @returns {boolean} True if the paper colour was set, false otherwise.
 */
export declare const setPageNodePosPaperColour: (tr: Transaction, dispatch: Dispatch, pagePos: number, pageNode: PMNode, paperColour: string) => boolean;
//# sourceMappingURL=paperColour.d.ts.map