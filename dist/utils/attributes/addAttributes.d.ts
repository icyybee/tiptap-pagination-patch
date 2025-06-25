/**
 * @file /src/utils/attributes/addAttributes.ts
 * @name AddAttributes
 * @description Utility functions for adding node attributes.
 */
import { Attributes } from "@tiptap/core";
import { NodeAttributes } from "../../types/node";
/**
 * Add the specified attributes to the node.
 *
 * @param attributes - The attributes to add to the node.
 * @returns {Attributes} The attributes to add to the node.
 */
export declare const addNodeAttributes: <T extends Record<string, any>>(attributes: NodeAttributes<T>) => Attributes;
//# sourceMappingURL=addAttributes.d.ts.map