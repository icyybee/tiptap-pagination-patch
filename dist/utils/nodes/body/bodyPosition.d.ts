/**
 * @file /src/utils/nodes/body/bodyPosition.ts
 * @name BodyPosition
 * @description Utility functions for the body position node.
 */
import { Node as PMNode, ResolvedPos } from "@tiptap/pm/model";
import { Nullable } from "../../../types/record";
import { NullableNodePos } from "../../../types/node";
/**
 * Get the body node (parent of the current node) position.
 * @param doc - The document node.
 * @param pos - The resolved position in the document or the absolute position of the node.
 * @returns {number} The position of the body node.
 */
export declare const getThisBodyNodePosition: (doc: PMNode, pos: ResolvedPos | number) => number;
/**
 * Get the body node position and the body node itself.
 *
 * @param doc - The document node.
 * @param pos - The resolved position in the document or the absolute position of the node.
 * @returns {bodyPos: number, bodyNode: Node} The position and the node of the body.
 */
export declare const getBodyNodeAndPosition: (doc: PMNode, pos: ResolvedPos | number) => {
    bodyPos: number;
    bodyNode: Nullable<PMNode>;
};
/**
 * Get the start of the body position.
 *
 * @param doc - The document node.
 * @param pos - The resolved position in the document or the absolute position of the node.
 * @returns {number} The start position of the body.
 */
export declare const getStartOfBodyPosition: (doc: PMNode, pos: ResolvedPos | number) => number;
/**
 * Get the end of the body position.
 *
 * @param doc - The document node.
 * @param pos - The resolved position in the document or the absolute position of the node.
 * @returns {number} The end position of the body.
 */
export declare const getEndOfBodyPosition: (doc: PMNode, pos: ResolvedPos | number) => number;
/**
 * Gets the previous page's body and positiom, if any, after the given position.
 * @param doc - The current document.
 * @param pos - Any position within the current page's body
 * @returns {NullableNodePos} The previous page's body and position, if any.
 */
export declare const getBodyBeforePos: (doc: PMNode, pos: ResolvedPos | number) => NullableNodePos;
/**
 * Gets the next page's body and positiom, if any, after the given position.
 * @param doc - The current document.
 * @param pos - Any position within the current page's body
 * @returns {NullableNodePos} The next page's body and position, if any.
 */
export declare const getBodyAfterPos: (doc: PMNode, pos: ResolvedPos | number) => NullableNodePos;
//# sourceMappingURL=bodyPosition.d.ts.map