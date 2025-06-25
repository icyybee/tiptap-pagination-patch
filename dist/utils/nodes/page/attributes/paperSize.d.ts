/**
 * @file /src/utils/paperSize.ts
 * @name PaperSize
 * @description Utility functions for paper sizes.
 */
import { Transaction } from "@tiptap/pm/state";
import { Dispatch, Editor } from "@tiptap/core";
import { Node as PMNode } from "@tiptap/pm/model";
import { PaperOrientation, PaperDimensions, PaperSize } from "../../../../types/paper";
import { PageNodeAttributes, PageContentPixelDimensions } from "../../../../types/page";
import { Nullable } from "../../../../types/record";
import { BodyNodeAttributes } from "../../../../types/body";
/**
 * Check if the given paper size is valid.
 *
 * @param paperSize - The paper size to check.
 * @returns {boolean} True if the paper size is valid, false otherwise.
 */
export declare const isValidPaperSize: (paperSize: PaperSize) => boolean;
/**
 * Given a paper size, return the dimensions of the paper in millimeters.
 *
 * @param paperSize - The paper size
 * @param orientation - The orientation of the paper
 * @returns {PaperDimensions} - The dimensions of the paper
 */
export declare const getPaperDimensions: (paperSize: PaperSize, orientation: PaperOrientation) => PaperDimensions;
/**
 * Gets the paper dimensions of a page node.
 *
 * @param pageNode - The page node to get the paper dimensions from
 * @returns {PaperDimensions} - The dimensions of the paper
 */
export declare const getPaperDimensionsFromPageNode: (pageNode: PMNode) => PaperDimensions;
/**
 * Flips the width and height of a given set of dimensions.
 *
 * @param dimensions - The dimensions to flip.
 * @returns {PaperDimensions} The flipped dimensions.
 */
export declare const flipDimensions: (dimensions: PaperDimensions) => PaperDimensions;
/**
 * Calculates the pixel width and height of a given paper size.
 *
 * @param pageNodeAttributes - The attributes of the page node.
 * @param bodyNodeAttributes - The attributes of the body node.
 * @returns {PageContentPixelDimensions} The height and width of the page in pixels.
 */
export declare const calculatePageContentPixelDimensions: (pageNodeAttributes: PageNodeAttributes, bodyNodeAttributes: BodyNodeAttributes) => PageContentPixelDimensions;
/**
 * Check if a page node has a paper size attribute.
 *
 * @param pageNode - The page node to check.
 * @returns {boolean} True if the page node has a paper size attribute, false otherwise.
 */
export declare const pageNodeHasPageSize: (pageNode: PMNode) => boolean;
/**
 * Get the paper size of a particular page node in the document.
 *
 * @param pageNode - The page node to find the paper size for
 * @returns {Nullable<PaperSize>} The paper size of the specified page or null
 * if the paper size is not set.
 */
export declare const getPageNodePaperSize: (pageNode: PMNode) => Nullable<PaperSize>;
/**
 * Retrieves the paper size of a specific page using the editor instance.
 * Falls back to the default paper size if the page number is invalid.
 *
 * @param editor - The current editor instance.
 * @param pageNum - The page number to retrieve the paper size for.
 * @returns {PaperSize} The paper size of the specified page or default.
 */
export declare const getPageNumPaperSize: (editor: Editor, pageNum: number) => PaperSize;
/**
 * Set the paper size for a page node at the specified position.
 *
 * @param tr - The transaction to apply the change to.
 * @param dispatch - The dispatch function to apply the transaction.
 * @param pagePos - The position of the page node to set the paper size for.
 * @param paperSize - The paper size to set.
 * @returns {boolean} True if the paper size was set, false otherwise.
 */
export declare const setPagePaperSize: (tr: Transaction, dispatch: Dispatch, pagePos: number, paperSize: PaperSize) => boolean;
/**
 * Helper to set the paper size for a page node at the specified position.
 *
 * @param tr - The transaction to apply the change to.
 * @param dispatch - The dispatch function to apply the transaction.
 * @param pagePos - The position of the page node to set the paper size for.
 * @param pageNode - The page node to set the paper size for.
 * @param paperSize - The paper size to set.
 * @returns {boolean} True if the paper size was set, false otherwise.
 */
export declare const setPageNodePosPaperSize: (tr: Transaction, dispatch: Dispatch, pagePos: number, pageNode: PMNode, paperSize: PaperSize) => boolean;
//# sourceMappingURL=paperSize.d.ts.map