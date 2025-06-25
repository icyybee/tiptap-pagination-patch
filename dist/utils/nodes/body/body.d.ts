/**
 * @file /src/utils/pageRegion/body.ts
 * @name Body
 * @description Utility functions for body in the editor.
 */
import { Node as PMNode } from "@tiptap/pm/model";
import { Nullable } from "../../../types/record";
import { BodyNodeAttributes } from "../../../types/body";
import { MarginConfig } from "../../../types/page";
/**
 * Check if the given node is a body node.
 *
 * @param node - The node to check.
 * @returns {boolean} True if the node is a body node, false otherwise.
 */
export declare const isBodyNode: (node: Nullable<PMNode>) => boolean;
/**
 * Retrieves the body node attributes, filling in any missing attributes with the default values.
 * @param bodyNode - The body node to retrieve the attributes for.
 * @returns {BodyNodeAttributes} The attributes of the specified body.
 */
export declare const getBodyNodeAttributes: (bodyNode: PMNode) => BodyNodeAttributes;
/**
 * Get the page margins from a body node.
 *
 * @param bodyNode - The body node to get the page margins from.
 * @returns {Nullable<MarginConfig>} The page margins of the specified page.
 */
export declare const getBodyNodeMargins: (bodyNode: PMNode) => Nullable<MarginConfig>;
//# sourceMappingURL=body.d.ts.map