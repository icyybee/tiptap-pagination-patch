/**
 * @file /src/utils/setPageAttributes.ts
 * @name SetPageAttributes
 * @description Utility functions for setting page attributes.
 */
import { Node as PMNode } from "@tiptap/pm/model";
import { Transaction } from "@tiptap/pm/state";
/**
 * Set a page node attribute to the given value for all page nodes in the document.
 *
 * @param tr - The transaction to apply the change to.
 * @param attr - The attribute to set.
 * @param value - The value to set the attribute to.
 * @returns {boolean} True if any attribute was changed, false otherwise.
 */
export declare const setPageNodesAttribute: (tr: Transaction, attr: string, value: any) => boolean;
/**
 * Set a page node attribute to the given value.
 *
 * @param tr - The transaction to apply the change to.
 * @param pos - The position of the node to set the attribute for.
 * @param node - The node to set the attribute for.
 * @param attr - The attribute to set.
 * @param value - The value to set the attribute to.
 * @returns {boolean} True if the attribute was changed, false otherwise.
 */
export declare const setPageNodeAttribute: (tr: Transaction, pos: number, node: PMNode, attr: string, value: any) => boolean;
/**
 * Set a body node attribute to the given value for all body nodes in the document.
 *
 * @param tr - The transaction to apply the change to.
 * @param attr - The attribute to set.
 * @param value - The value to set the attribute to.
 * @returns {boolean} True if any attribute was changed, false otherwise.
 */
export declare const setBodyNodesAttribute: (tr: Transaction, attr: string, value: any) => boolean;
/**
 * Set a body node attribute to the given value.
 *
 * @param tr - The transaction to apply the change to.
 * @param pagePos - The position of the node to set the attribute for.
 * @param pageNode - The page node (parent of the body nody).
 * @param attr - The attribute to set.
 * @param value - The value to set the attribute to.
 * @returns {boolean} True if the attribute was changed, false otherwise.
 */
export declare const setBodyNodeAttribute: <T>(tr: Transaction, pagePos: number, pageNode: PMNode, attr: string, value: T) => boolean;
//# sourceMappingURL=setPageAttributes.d.ts.map