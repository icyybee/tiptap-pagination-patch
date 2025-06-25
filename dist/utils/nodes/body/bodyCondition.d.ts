/**
 * @file /src/utils/nodes/body/bodyCondition.ts
 * @name BodyCondition
 * @description Utility functions for body conditions.
 */
import { Node as PMNode, ResolvedPos } from "@tiptap/pm/model";
/**
 * Check if the given position is within the body.
 *
 * @param doc - The document node.
 * @param $pos - The resolved position in the document or the absolute position of the node.
 * @returns {boolean} True if the position is within the body, false otherwise.
 */
export declare const isPosInBody: (doc: PMNode, $pos: ResolvedPos | number) => boolean;
/**
 * Check if the given position is exactly at the start of the first child of the body.
 *
 * @param doc - The document node.
 * @param $pos - The resolved position in the document or the absolute position of the node.
 * @returns {boolean} True if the condition is met, false otherwise.
 */
export declare const isPosAtStartOfBody: (doc: PMNode, $pos: ResolvedPos | number) => boolean;
/**
 * Check if the given position is within the first paragraph child of the body.
 *
 * @param doc - The document node.
 * @param pos - The resolved position in the document or the absolute position of the node.
 * @returns {boolean} True if the position is at the start of the body, false otherwise.
 */
export declare const isPosAtFirstChildOfBody: (doc: PMNode, $pos: ResolvedPos | number) => boolean;
/**
 * Check if the given position is exactly at the end of the body.
 *
 * @param doc - The document node.
 * @param pos - The resolved position in the document or the absolute position of the node.
 * @returns {boolean} True if the position is at the end of the body, false otherwise.
 */
export declare const isPosAtEndOfBody: (doc: PMNode, $pos: ResolvedPos | number) => boolean;
/**
 * Check if the given position is at the end of the last paragraph child of the body.
 *
 * @param doc - The document node.
 * @param pos - The resolved position in the document or the absolute position of the node.
 * @returns {boolean} True if the position is at the end of the body, false otherwise.
 */
export declare const isPosAtLastChildOfBody: (doc: PMNode, $pos: ResolvedPos | number) => boolean;
/**
 * Checks if the given position is at the start of the first page's body.
 * @param doc - The document node.
 * @param $pos - The resolved position in the document or the absolute position of the node.
 * @param checkExactStart - Whether the position must be at the exact start of the body.
 * @returns {boolean} True if the position is at the start of the first page's body, false otherwise.
 */
export declare const isPosAtStartOfDocumentBody: (doc: PMNode, $pos: ResolvedPos | number, checkExactStart: boolean) => boolean;
/**
 * Checks if the given position is at the end of the last page's body.
 * @param doc - The document node.
 * @param $pos - The resolved position in the document or the absolute position of the node.
 * @returns {boolean} True if the position is at the end of the last page's body, false otherwise.
 */
export declare const isPosAtEndOfDocumentBody: (doc: PMNode, $pos: ResolvedPos | number) => boolean;
/**
 * Check if the given position is at the start of the document.
 *
 * @param doc - The document node.
 * @param pos - The resolved position in the document or the absolute position of the node.
 * @param checkExactStart - Whether the position must be at the exact start of the body.
 * @returns {boolean} True if the position is at the start of the document, false otherwise.
 */
export declare const isPosMatchingStartOfBodyCondition: (doc: PMNode, $pos: ResolvedPos | number, checkExactStart: boolean) => boolean;
/**
 * Check if the given position is at the end of the body or the last child of the body.
 *
 * @param doc - The document node.
 * @param $pos - The resolved position in the document or the absolute position of the node.
 * @param checkExactEnd - Whether to check for the exact end of the body (true) or the last child of the body (false).
 * @returns {boolean} True if the condition is met, false otherwise.
 */
export declare const isPosMatchingEndOfBodyCondition: (doc: PMNode, $pos: ResolvedPos | number, checkExactEnd: boolean) => boolean;
//# sourceMappingURL=bodyCondition.d.ts.map