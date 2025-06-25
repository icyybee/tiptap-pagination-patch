/**
 * @file /src/utils/nodes/hardBreak.ts
 * @name HardBreak
 * @description Utility functions for hard breaks.
 */
import { Node as PMNode, ResolvedPos } from "@tiptap/pm/model";
/**
 * Check if the given node is a hard break node.
 *
 * @param node - The node to check.
 * @returns {boolean} True if the node is a hard break node, false otherwise.
 */
export declare const isHardBreakNode: (node: PMNode) => boolean;
/**
 * Check if the given position is at the start of the hard break node.
 *
 * @param doc - The document node.
 * @param $pos - The resolved position in the document or the absolute position of the node.
 * @returns {boolean} True if the position is at the start of the hard break node, false otherwise.
 */
export declare const isAtHardBreak: (doc: PMNode, $pos: ResolvedPos | number) => boolean;
//# sourceMappingURL=hardBreak.d.ts.map