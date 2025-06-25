/**
 * @file /src/utils/pageRegion/pageMargins.ts
 * @name PageMargins
 * @description Utility functions for body margins
 */
import { Dispatch, Editor } from "@tiptap/core";
import { Node as PMNode } from "@tiptap/pm/model";
import { Transaction } from "@tiptap/pm/state";
import { MarginConfig, MultiAxisSide } from "../../../../types/page";
/**
 * Checks if a (single) margin is valid.
 * Margins must be non-negative and finite to be considered valid.
 *
 * @param margin - The margin to check.
 * @returns {boolean} True if the margin is valid, false otherwise.
 */
export declare const isMarginValid: (margin: number) => boolean;
/**
 * Checks if the page margins are valid.
 * Margins must be non-negative and finite to be considered valid.
 *
 * @param pageMargins - The page margins to check.
 * @returns {boolean} True if the page margins are valid, false otherwise.
 */
export declare const isValidPageMargins: (pageMargins: MarginConfig) => boolean;
/**
 * Retrieves the page margin config of a specific body using the editor instance.
 * Falls back to the default page margin config if the page number is invalid.
 *
 * @param editor - The current editor instance.
 * @param pageNum - The page number to retrieve the page margin config for.
 * @returns {MarginConfig} The page margin config of the specified page or default.
 */
export declare const getPageNumPageMargins: (editor: Editor, pageNum: number) => MarginConfig;
/**
 * Calculate the effective DOM margins of the body node. Takes into account
 * what the margins should be to ensure the header and footer nodes are
 * visible on the page.
 *
 * @param bodyNode - The body node to calculate the margins for.
 * @returns {MarginConfig} The effective margins of the body node.
 */
export declare const calculateBodyMargins: (bodyNode: PMNode) => MarginConfig;
/**
 * Converts a margin config to a CSS string using millimeters as the unit.
 *
 * @param pageMargins - The page margins to convert to a CSS string.
 * @returns {string} The CSS string representation of the page margins. As per MDN reference, the
 * order is (top, right, bottom, left). See {@link https://developer.mozilla.org/en-US/docs/Web/CSS/padding}.
 */
export declare const calculateShorthandMargins: (pageMargins: MarginConfig) => string;
/**
 * Set the page margins of a body node.
 *
 * @param tr - The transaction to apply the change to.
 * @param dispatch - The dispatch function to apply the transaction.
 * @param pagePos - The position of the body node to set the page margins for.
 * @param bodyNode - The body node to set the page margins for.
 * @param pageMargins - The page margins to set.
 * @returns {boolean} True if the page margins were set, false otherwise.
 */
export declare const setBodyNodePosPageMargins: (tr: Transaction, dispatch: Dispatch, pagePos: number, bodyNode: PMNode, pageMargins: MarginConfig) => boolean;
/**
 * Updates the margin on the given page. Does not dispatch the transaction.
 *
 * @param tr - The transaction to apply the change to.
 * @param pagePos - The position of the body node to update the margin for.
 * @param bodyNode - The body node to update the margin for.
 * @param margin - The margin to update.
 * @param value - The new value of the margin.
 * @returns {boolean} True if the margin was updated, false otherwise.
 */
export declare const updateBodyMargin: (tr: Transaction, pagePos: number, bodyNode: PMNode, margin: MultiAxisSide, value: number) => boolean;
//# sourceMappingURL=pageMargins.d.ts.map