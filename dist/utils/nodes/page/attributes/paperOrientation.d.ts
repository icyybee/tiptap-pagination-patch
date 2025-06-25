/**
 * @file /src/utils/paperOrientation.ts
 * @name PaperOrientation
 * @description Utility functions for paper orientations.
 */
import { Dispatch, Editor } from "@tiptap/core";
import { Transaction } from "@tiptap/pm/state";
import { Node as PMNode } from "@tiptap/pm/model";
import { Nullable } from "../../../../types/record";
import { PaperOrientation } from "../../../../types/paper";
/**
 * Get the paper orientation of a particular page node in the document.
 *
 * @param pageNode - The page node to find the paper orientation for
 * @returns {Nullable<PaperOrientation>} The paper orientation of the specified page or null
 * if the paper orientation is not set.
 */
export declare const getPageNodePaperOrientation: (pageNode: PMNode) => Nullable<PaperOrientation>;
/**
 * Retrieves the paper orientation of a specific page using the editor instance.
 * Falls back to the default paper orientation if the page number is invalid.
 *
 * @param editor - The current editor instance.
 * @param pageNum - The page number to retrieve the paper orientation for.
 * @returns {PaperOrientation} The paper orientation of the specified page or default.
 */
export declare const getPageNumPaperOrientation: (editor: Editor, pageNum: number) => PaperOrientation;
/**
 * Set the paper orientation of a page node to the given value.
 *
 * @param tr - The transaction to apply the change to.
 * @param dispatch - The dispatch function to apply the transaction.
 * @param pagePos - The position of the page node to set the paper colour for.
 * @param pageNode - The page node to set the paper colour for.
 * @param paperOrientation - The paper orientation to set.
 * @returns {boolean} True if the paper colour was set, false otherwise.
 */
export declare const setPageNodePosPaperOrientation: (tr: Transaction, dispatch: Dispatch, pagePos: number, pageNode: PMNode, paperOrientation: PaperOrientation) => boolean;
//# sourceMappingURL=paperOrientation.d.ts.map