/**
 * @file /src/utils/nodes/page/pageNumber.ts
 * @name PageNumber
 * @description Utility functions for page numbers
 */
import { Node as PMNode, ResolvedPos } from "@tiptap/pm/model";
import { EditorState } from "@tiptap/pm/state";
import { NodePos } from "../../../types/node";
import { Nullable } from "../../../types/record";
/**
 * Get the page node by page number.
 *
 * @param doc - The current document.
 * @param pageNum - The page number to find the page node for (0-indexed).
 * @returns {Nullable<PMNode>} The page node of the specified page or null
 * if the page could not be found.
 */
export declare const getPageNodeByPageNum: (doc: PMNode, pageNum: number) => Nullable<PMNode>;
/**
 * Get the page node and position by page number.
 *
 * @param doc - The current document.
 * @param pageNum - The page number to find the page node for (0-indexed).
 * @returns {Nullable<NodePos>} The page node position of the specified page or null
 * if the page could not be found.
 */
export declare const getPageNodePosByPageNum: (doc: PMNode, pageNum: number) => Nullable<NodePos>;
/**
 * Get the page number of the resolved position.
 *
 * @param doc - The document node.
 * @param $pos - The resolved position in the document.
 * @param zeroIndexed - Whether to return the page number as zero-indexed. Default is true.
 * @returns {number} The page number of the resolved position.
 */
export declare const getPageNumber: (doc: PMNode, $pos: ResolvedPos | number, zeroIndexed?: boolean) => number;
/**
 * Retrieves a specific attribute of a given page number.
 * Falls back to defaults if the page number is invalid or the attribute is missing.
 *
 * @param state - The editor state.
 * @param pageNum - The page number to retrieve the attribute for.
 * @param defaultValue - The default value to return if the attribute is missing.
 * @param getNodeAttribute - A function to extract the attribute from the page node.
 * @returns {T} The attribute of the specified page or default.
 */
export declare const getPageAttributeByPageNum: <T>(state: EditorState, pageNum: number, defaultValue: T, getNodeAttribute: (node: PMNode) => Nullable<T>) => T;
//# sourceMappingURL=pageNumber.d.ts.map