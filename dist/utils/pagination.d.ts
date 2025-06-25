/**
 * @file /src/utils/pagination.ts
 * @name Pagination
 * @description Utility functions for paginating the editor content.
 */
import { Node as PMNode, ResolvedPos, Schema } from "@tiptap/pm/model";
import { PaginationNodeTypes } from "../types/pagination";
/**
 * Get the start of the page amendment and paragraph positions.
 *
 * @param doc - The document node.
 * @param pos - The resolved position in the document or the absolute position of the node.
 * @returns {startOfPageAmendmentPos: number, startOfParagraphPos: number} The start positions of the
 * page amendment and paragraph.
 */
export declare const getStartOfPageAmendmentAndParagraphPosition: (doc: PMNode, pos: ResolvedPos | number) => {
    startOfPageAmendmentPos: number;
    startOfParagraphPos: number;
};
/**
 * Get the end of the page amendment and paragraph positions.
 *
 * @param doc - The document node.
 * @param pos - The resolved position in the document or the absolute position of the node.
 * @returns {endOfPageAmendmentPos: number, endOfParagraphPos: number} The end positions of the
 * page amendment and paragraph.
 */
export declare const getEndOfPageAmendmentAndParagraphPosition: (doc: PMNode, $pos: ResolvedPos | number) => {
    endOfPageAmendmentPos: number;
    endOfParagraphPos: number;
};
/**
 * Get the start of the body and paragraph positions.
 *
 * @param doc - The document node.
 * @param pos - The resolved position in the document or the absolute position of the node.
 * @returns {startOfBodyPos: number, startOfParagraphPos: number} The start positions of the body and paragraph.
 */
export declare const getStartOfBodyAndParagraphPosition: (doc: PMNode, pos: ResolvedPos | number) => {
    startOfBodyPos: number;
    startOfParagraphPos: number;
};
/**
 * Get the end of the body and paragraph positions.
 *
 * @param doc - The document node.
 * @param pos - The resolved position in the document or the absolute position of the node.
 * @returns {endOfBodyPos: number, endOfParagraphPos: number} The end positions of the body and paragraph.
 */
export declare const getEndOfBodyAndParagraphPosition: (doc: PMNode, $pos: ResolvedPos | number) => {
    endOfBodyPos: number;
    endOfParagraphPos: number;
};
/**
 * Collect the node types for pagination.
 *
 * @param schema - The schema of the editor.
 * @returns {PaginationNodeTypes} The node types for pagination.
 * @throws {Error} Throws an error if the page, body, or header/footer node types are not found in the schema.
 */
export declare const getPaginationNodeTypes: (schema: Schema) => PaginationNodeTypes;
//# sourceMappingURL=pagination.d.ts.map