/**
 * @file /src/utils/nodes/document.ts
 * @name Document
 * @description Utility functions for the document node.
 */
import { Node as PMNode, ResolvedPos } from "@tiptap/pm/model";
/**
 * Check if the given position is at the start of the document.
 *
 * @param doc - The document node.
 * @param $pos - The resolved position in the document or the absolute position of the node.
 * @param allowTextBlock - Whether to allow text blocks at the start of the document. Default is false.
 * @returns {boolean} True if the position is at the start of the document, false otherwise.
 */
export declare const isPosAtStartOfDocument: (doc: PMNode, $pos: ResolvedPos | number, allowTextBlock: boolean) => boolean;
/**
 * Check if the given position is at the end of the document.
 *
 * @param doc - The document node.
 * @param $pos - The resolved position in the document or the absolute position of the node.
 * @returns {boolean} True if the position is at the end of the document, false otherwise.
 */
export declare const isPosAtEndOfDocument: (doc: PMNode, $pos: ResolvedPos | number) => boolean;
//# sourceMappingURL=document.d.ts.map