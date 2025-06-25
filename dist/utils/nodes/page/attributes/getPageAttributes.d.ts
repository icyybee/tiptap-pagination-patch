/**
 * @file /src/utils/getPageAttributes.ts
 * @name GetPageAttributes
 * @description Utility functions for getting page attributes.
 */
import { Node as PMNode } from "@tiptap/pm/model";
import { PageNodeAttributes } from "../../../../types/page";
import { PaginationNodeAttributes } from "../../../../types/pagination";
import { Editor } from "@tiptap/core";
/**
 * Retrieves the page node attributes from the editor state.
 *
 * @param pageNode - The page node to retrieve the attributes for.
 * @returns {PageNodeAttributes} The attributes of the specified page.
 */
export declare const getPageNodeAttributes: (pageNode: PMNode) => PageNodeAttributes;
/**
 * Retrieves the page node attributes and calculates the pixel dimensions of the page.
 *
 * @param editor - The editor instance.
 * @param pageNum - The page number to retrieve the attributes for.
 * @returns {PaginationNodeAttributes} The attributes of the page node,
 * body node and the pixel dimensions of the page.
 */
export declare const getPaginationNodeAttributes: (editor: Editor, pageNum: number) => PaginationNodeAttributes;
//# sourceMappingURL=getPageAttributes.d.ts.map