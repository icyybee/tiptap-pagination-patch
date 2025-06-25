/**
 * @file /src/utils/pageRegion/getAttributes.ts
 * @name GetAttributes
 * @description Utility functions for getting page region attributes.
 */
import { Node as PMNode } from "@tiptap/pm/model";
import { PageRegion } from "../../types/pageRegions";
import { Nullable } from "../../types/record";
import { NullableNodePos } from "../../types/node";
import { EditorState } from "@tiptap/pm/state";
/**
 * Get the page region node of the current page by the page region type.
 *
 * @param pageNode - The page node to search for the neighbouring page region.
 * @param regionType - The type of the page region to search for.
 * @returns {Nullable<PMNode>} The neighbouring page region node or null if not found.
 */
export declare const getPageRegionNode: (pageNode: PMNode, regionType: PageRegion) => Nullable<PMNode>;
/**
 * Get the page region node and position of the current page by the page region type.
 *
 * @param pagePos - The position of the page node to search for the neighbouring page region.
 * @param pageNode - The page node to search for the neighbouring page region.
 * @param regionType - The type of the page region to search for.
 * @returns {NullableNodePos} The neighbouring page region node and position or null if not found.
 */
export declare const getPageRegionNodeAndPos: (pagePos: number, pageNode: PMNode, regionType: PageRegion) => NullableNodePos;
/**
 * Retrieves a specific attribute of a the body node of specified type of a given page number.
 * Falls back to the default value if the page number is invalid or the attribute is missing.
 *
 * @param state - The editor state.
 * @param pageNum - The page number to retrieve the attribute for.
 * @param regionType - The type of the region to retrieve the attribute for.
 * @param defaultValue - The default value to return if the attribute is missing.
 * @param getNodeAttribute - A function to retrieve the attribute from a body node.
 * @returns {T} The attribute of the specified body node or default.
 */
export declare const getPageRegionAttributeByPageNum: <T>(state: EditorState, pageNum: number, regionType: PageRegion, defaultValue: T, getNodeAttribute: (node: PMNode) => Nullable<T>) => T;
//# sourceMappingURL=getAttributes.d.ts.map