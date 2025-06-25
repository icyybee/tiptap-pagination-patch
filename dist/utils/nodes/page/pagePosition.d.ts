/**
 * @file /src/utils/nodes/page/pagePosition.ts
 * @name PagePosition
 * @description Utility functions for page position nodes.
 */
import { Node as PMNode, ResolvedPos } from "@tiptap/pm/model";
import { DirectChild, NullableNodePos } from "../../../types/node";
/**
 * Get the page node (parent of the current node) position.
 * @param doc - The document node.
 * @param pos - The resolved position in the document or the absolute position of the node.
 * @returns {number} The position of the page node.
 */
export declare const getThisPageNodePosition: (doc: PMNode, pos: ResolvedPos | number) => number;
/**
 * Get the page node position and the page node itself.
 *
 * @param doc - The document node.
 * @param pos - The resolved position in the document or the absolute position of the node.
 * @returns {NullableNodePos} The position and the node of the page.
 */
export declare const getPageNodeAndPosition: (doc: PMNode, pos: ResolvedPos | number) => NullableNodePos;
/**
 * Get the child of the page node at the specified position.
 *
 * @param doc - The document node.
 * @param pos - The resolved position in the document or the absolute position of the node.
 * @returns {DirectChild} The child of the page node at the specified position.
 */
export declare const getPageChild: (doc: PMNode, pos: ResolvedPos | number) => DirectChild;
/**
 * Get the start of the page position.
 *
 * @param doc - The document node.
 * @param pos - The resolved position in the document or the absolute position of the node.
 * @returns {number} The start position of the page.
 */
export declare const getStartOfPagePosition: (doc: PMNode, pos: ResolvedPos | number) => number;
/**
 * Get the end of the page position.
 *
 * @param doc - The document node.
 * @param pos - The resolved position in the document or the absolute position of the node.
 * @returns {number} The end position of the page.
 */
export declare const getEndOfPagePosition: (doc: PMNode, pos: ResolvedPos | number) => number;
/**
 * Gets the page node of the page before the page at the specified position.
 *
 * @param doc - The document node.
 * @param pos - Any position in the current page.
 * @returns {NullableNodePos} The page node of the page before the current page.
 */
export declare const getPageBeforePos: (doc: PMNode, pos: ResolvedPos | number) => NullableNodePos;
/**
 * Gets the page node of the page after the page at the specified position.
 *
 * @param doc - The document node.
 * @param pos - Any position in the current page.
 * @returns {NullableNodePos} The page node of the page after the current page.
 */
export declare const getPageAfterPos: (doc: PMNode, pos: ResolvedPos | number) => NullableNodePos;
//# sourceMappingURL=pagePosition.d.ts.map