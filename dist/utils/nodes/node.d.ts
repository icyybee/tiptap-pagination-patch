/**
 * @file /src/utils/node.ts
 * @name Node
 * @description Utility functions for creating custom nodes in the editor.
 */
import { Node as PMNode, ResolvedPos, TagParseRule } from "@tiptap/pm/model";
import { Transaction } from "@tiptap/pm/state";
import { EditorView } from "@tiptap/pm/view";
import { Undefinable } from "../../types/record";
/**
 * Get the type of the node at the specified position.
 *
 * @param $pos - The resolved position in the document.
 * @returns {ResolvedPos} The type of the node at the specified position.
 */
export declare const getPositionNodeType: ($pos: ResolvedPos) => string;
/**
 * Retrieves the size of a ProseMirror node if it is defined, otherwise returns 0.
 *
 * @param node - The ProseMirror node which may be undefined.
 * @returns The size of the node if it is defined, otherwise 0.
 */
export declare const getMaybeNodeSize: (node: Undefinable<PMNode>) => number;
/**
 * Get the parent node position of the specified type.
 *
 * @param doc - The document node.
 * @param $pos - The resolved position in the document or the absolute position of the node.
 * @param type - The type of the node to search for. Can be string or an array of strings.
 * @returns {ResolvedPos} The position of the parent node of the specified type.
 */
export declare const getParentNodePosOfType: (doc: PMNode, $pos: ResolvedPos | number, type: string | string[]) => ResolvedPos;
/**
 * Append the new node to the existing node and replace the existing node with the new node.
 *
 * @param tr - The current transaction.
 * @param pos - The position to replace the node at.
 * @param existingNode - The existing node to replace.
 * @param newNode - The new node to append and replace with.
 * @returns {void}
 */
export declare const appendAndReplaceNode: (tr: Transaction, pos: number, existingNode: PMNode, newNode: PMNode) => void;
/**
 * Delete the node at the specified position.
 *
 * @param tr - The current transaction.
 * @param pos - The position of the node to delete.
 * @param node - The node to delete.
 * @returns {void}
 */
export declare const deleteNode: (tr: Transaction, pos: number, node: PMNode) => void;
/**
 * Check if the node is empty.
 *
 * @param node - The node to check.
 * @returns {boolean} True if the node is empty, false otherwise.
 */
export declare const isNodeEmpty: (node: PMNode) => boolean;
/**
 * A rule that matches a node based on the specified tag and attribute.
 *
 * @param baseElement - The base element to match.
 * @param nodeTagAttribute - The attribute of the node tag.
 * @param preventNestedNodes - True if nested nodes should be prevented, false otherwise.
 * @returns {TagParseRule} The rule that matches the node based on the specified tag and attribute.
 */
export declare const parseHTMLNode: (baseElement: string, nodeTagAttribute: string, preventNestedNodes: boolean) => TagParseRule;
/**
 * Check if the given node is atomic.
 *
 * @param node - The node to check.
 * @returns {boolean} True if the node is a text node, false otherwise.
 */
export declare const isAtomNode: (view: EditorView, node: Node) => boolean;
//# sourceMappingURL=node.d.ts.map