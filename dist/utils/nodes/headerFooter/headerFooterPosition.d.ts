/**
 * @file /src/utils/nodes/headerFooter/headerFooterPosition.ts
 * @name HeaderFooterPosition
 * @description Utility functions for header and footer positions.
 */
import { Node as PMNode, ResolvedPos } from "@tiptap/pm/model";
import { Nullable } from "../../../types/record";
/**
 * Get the header or footer node (parent of the current node) position.
 * @param doc - The document node.
 * @param pos - The resolved position in the document or the absolute position of the node.
 * @returns {number} The position of the header or footer node.
 */
export declare const getThisPageAmendmentNodePosition: (doc: PMNode, pos: ResolvedPos | number) => number;
/**
 * Get the header or footer node position and the header or footer node itself.
 *
 * @param doc - The document node.
 * @param pos - The resolved position in the document or the absolute position of the node.
 * @returns {pageAmendmentPos: number, pageAmendmentNode: Node} The position and the node of the header or footer.
 */
export declare const getPageAmendmentNodeAndPosition: (doc: PMNode, pos: ResolvedPos | number) => {
    pageAmendmentPos: number;
    pageAmendmentNode: Nullable<PMNode>;
};
/**
 * Get the start of the header or footer position.
 *
 * @param doc - The document node.
 * @param pos - The resolved position in the document or the absolute position of the node.
 * @returns {number} The start position of the header or footer.
 */
export declare const getStartOfPageAmendmentPosition: (doc: PMNode, pos: ResolvedPos | number) => number;
/**
 * Get the end of the header or footer position.
 *
 * @param doc - The document node.
 * @param pos - The resolved position in the document or the absolute position of the node.
 * @returns {number} The end position of the header or footer.
 */
export declare const getEndOfPageAmendmentPosition: (doc: PMNode, pos: ResolvedPos | number) => number;
//# sourceMappingURL=headerFooterPosition.d.ts.map