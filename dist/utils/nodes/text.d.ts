/**
 * @file /src/utils/nodes/text.ts
 * @name Text
 * @description Utility functions for text nodes.
 */
import { Node as PMNode, ResolvedPos } from "@tiptap/pm/model";
import { Nullable } from "../../types/record";
import { NullableNodePos } from "../../types/node";
/**
 * Check if the given node is a text node.
 *
 * @param node - The node to check.
 * @returns {boolean} True if the node is a text node, false otherwise.
 */
export declare const isTextNode: (node: Nullable<PMNode>) => boolean;
/**
 * Check if the given position is at the start of the text node.
 *
 * @param doc - The document node.
 * @param $pos - The resolved position in the document or the absolute position of the node.
 * @returns {boolean} True if the position is at the start of the text node, false otherwise.
 */
export declare const isAtStartOfTextNode: (doc: PMNode, $pos: ResolvedPos | number) => boolean;
/**
 * Check if the given position is at the end of the text node.
 *
 * @param doc - The document node.
 * @param $pos - The resolved position in the document or the absolute position of the node.
 * @returns {boolean} True if the position is at the end of the text node, false otherwise.
 */
export declare const isAtEndOfTextNode: (doc: PMNode, $pos: ResolvedPos | number) => boolean;
/**
 * Get the position of the text node.
 *
 * @param doc - The document node.
 * @param pos - The resolved position in the document or the absolute position of the node.
 * @returns {number} The position of the text node.
 */
export declare const getThisTextNodePosition: (doc: PMNode, pos: ResolvedPos | number) => number;
/**
 * Get the text node and the position of the text node.
 *
 * @param doc - The document node.
 * @param pos - The resolved position in the document or the absolute position of the node.
 * @returns {NullableNodePos} The text node and the position of the text node.
 */
export declare const getTextNodeAndPosition: (doc: PMNode, pos: ResolvedPos | number) => NullableNodePos;
/**
 * Measure the width and height of a text node.
 *
 * @param text - The text content of the node.
 * @param computedStyles - The computed styles of the node.
 * @returns {DOMRect} The bounding rectangle of the text node.
 */
export declare const measureText: (text: string, computedStyles: CSSStyleDeclaration) => DOMRect;
/**
 * Measure the cumulative width of each character in a text node.
 *
 * @param textContent - The text content of the node.
 * @param computedStyles - The computed styles of the node.
 * @returns {number[]} The cumulative width of each character in the text node.
 */
export declare const measureCumulativeTextWidths: (textContent: string, computedStyles: CSSStyleDeclaration) => number[];
//# sourceMappingURL=text.d.ts.map