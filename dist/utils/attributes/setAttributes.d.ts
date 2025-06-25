/**
 * @file /src/utils/attributes/setAttributes.ts
 * @name SetAttributes
 * @description Utility functions for setting node attributes.
 */
import { Node as PMNode } from "@tiptap/pm/model";
import { Transaction } from "@tiptap/pm/state";
/**
 * Set a node attribute to the given value.
 *
 * @param tr - The transaction to apply the change to.
 * @param pos - The position of the node to set the attribute for.
 * @param node - The node to set the attribute for.
 * @param attr - The attribute to set.
 * @param value - The value to set the attribute to.
 * @returns {boolean} True if the attribute was changed, false otherwise.
 */
export declare const setNodeAttribute: (tr: Transaction, pos: number, node: PMNode, attr: string, value: any) => boolean;
/**
 * Set a node attribute to the given value for the nodes of the type handled by the setNodeTypeAttribute callback.
 *
 * @param tr - The transaction to apply the change to.
 * @param attr - The attribute to set.
 * @param value - The value to set the attribute to.
 * @param setNodesTypeAttribute - The callback to set the attribute for a node of the type handled by the callback.
 * @returns {boolean} True if any attribute was changed, false otherwise.
 */
export declare const setNodesTypeAttribute: <V>(tr: Transaction, attr: string, value: V, setNodesTypeAttribute: (tr: Transaction, pos: number, node: PMNode, attr: string, value: V) => boolean) => boolean;
//# sourceMappingURL=setAttributes.d.ts.map