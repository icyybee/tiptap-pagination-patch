/**
 * @file /src/utils/pageBorders.ts
 * @name PageBorders
 * @description Utility functions for handling page borders.
 */
import { Transaction } from "@tiptap/pm/state";
import { Dispatch, Editor } from "@tiptap/core";
import { Node as PMNode } from "@tiptap/pm/model";
import { BorderConfig } from "../../../../types/page";
import { Nullable } from "../../../../types/record";
import { MultiAxisSide } from "../../../../types/page";
/**
 * Checks if a (single) border is valid.
 * Borders must be non-negative and finite to be considered valid.
 *
 * @param border - The border to check.
 * @returns {boolean} True if the border is valid, false otherwise.
 */
export declare const isBorderValid: (border: number) => boolean;
/**
 * Checks if the page borders are valid.
 * Borders must be non-negative and finite to be considered valid.
 *
 * @param pageBorder - The page borders to check.
 * @returns {boolean} True if the page borders are valid, false otherwise.
 */
export declare const isValidPageBorders: (pageBorder: BorderConfig) => boolean;
/**
 * Get the page borders from a page node.
 *
 * @param pageNode - The page node to get the page borders from.
 * @returns {Nullable<BorderConfig>} The page borders of the specified page.
 */
export declare const getPageNodePageBorders: (pageNode: PMNode) => Nullable<BorderConfig>;
/**
 * Converts a border config to a CSS string using px as the unit.
 *
 * @param pageBorders - The page borders to convert to a CSS string.
 * @returns {string} The CSS string representation of the page borders. Remember MDN says
 * order is (top, right, bottom, left). See https://developer.mozilla.org/en-US/docs/Web/CSS/border.
 */
export declare const calculateShorthandPageBorders: (pageBorders: BorderConfig) => string;
/**
 * Retrieves the page border config of a specific page using the editor instance.
 * Falls back to the default page border config if the page number is invalid.
 *
 * @param editor - The current editor instance.
 * @param pageNum - The page number to retrieve the page border config for.
 * @returns {BorderConfig} The page border config of the specified page or default.
 */
export declare const getPageNumPageBorders: (editor: Editor, pageNum: number) => BorderConfig;
/**
 * Set the page borders of a page node.
 *
 * @param tr - The transaction to apply the change to.
 * @param dispatch - The dispatch function to apply the transaction.
 * @param pagePos - The position of the page node to set the page borders for.
 * @param pageNode - The page node to set the page borders for.
 * @param pageBorders - The page borders to set.
 * @returns {boolean} True if the page borders were set, false otherwise.
 */
export declare const setPageNodePosPageBorders: (tr: Transaction, dispatch: Dispatch, pagePos: number, pageNode: PMNode, pageBorders: BorderConfig) => boolean;
/**
 * Updates the border on the given page. Does not dispatch the transaction.
 *
 * @param tr - The transaction to apply the change to.
 * @param pagePos - The position of the page node to update the border for.
 * @param pageNode - The page node to update the border for.
 * @param border - The border to update.
 * @param value - The new value of the border.
 * @returns {boolean} True if the border was updated, false otherwise.
 */
export declare const updatePageBorder: (tr: Transaction, pagePos: number, pageNode: PMNode, border: MultiAxisSide, value: number) => boolean;
//# sourceMappingURL=pageBorders.d.ts.map