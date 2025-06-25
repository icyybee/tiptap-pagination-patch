/**
 * @file /src/utils/page.ts
 * @name Page
 * @description Utility functions for page nodes in the editor.
 */
import { Node as PMNode, ResolvedPos } from "@tiptap/pm/model";
import { EditorState } from "@tiptap/pm/state";
import { NodePosArray, NullableNodePos } from "../../../types/node";
import { Nullable } from "../../../types/record";
/**
 * Check if the given node is a page node.
 *
 * @param node - The node to check.
 * @returns {boolean} True if the node is a page node, false otherwise.
 */
export declare const isPageNode: (node: Nullable<PMNode>) => boolean;
/**
 * Check if the document has page nodes.
 *
 * @param state - The editor state.
 * @returns {boolean} True if the document has page nodes, false otherwise.
 */
export declare const doesDocHavePageNodes: (state: EditorState) => boolean;
/**
 * Collect page nodes and their positions in the document.
 *
 * @param doc - The document node.
 * @returns {NodePosArray} A map of page positions to page nodes.
 */
export declare const collectPageNodes: (doc: PMNode) => NodePosArray;
/**
 * Given a position in the document, get the child node of the page node at that position.
 * I.e. that will be a header/footer node or a body node.
 * @param doc - The document node.
 * @param $pos - The resolved position in the document.
 * @returns {NullableNodePos} The child node position of the page node at the given position.
 */
export declare const getPageChildNodePosFromPosition: (doc: PMNode, $pos: ResolvedPos | number) => NullableNodePos;
//# sourceMappingURL=page.d.ts.map