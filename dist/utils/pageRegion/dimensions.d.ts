/**
 * @file /src/utils/pageRegion/Dimensions.ts
 * @name Dimensions
 * @description Utility functions for body dimensions.
 */
import { Node as PMNode } from "@tiptap/pm/model";
import { PaperDimensions } from "../../types/paper";
/**
 * Calculates the dimensions in millimetres of a header or footer node based on its paper size.
 *
 * @param pageNode - The page node containing the header or footer node.
 * @param headerFooterNode - The header or footer node to calculate the dimensions for.
 * @returns {PaperDimensions} The dimensions of the header or footer node.
 */
export declare const calculateHeaderFooterDimensions: (pageNode: PMNode, headerFooterNode: PMNode) => PaperDimensions;
/**
 * Calculates the dimensions in millimetres of a body node based on its paper size
 * and orientation.
 *
 * @param pageNode - The page node containing the body node.
 * @param bodyNode - The body node to calculate the dimensions for.
 * @returns {PaperDimensions} The dimensions of the body node.
 */
export declare const calculateBodyDimensions: (pageNode: PMNode, bodyNode: PMNode) => PaperDimensions;
//# sourceMappingURL=dimensions.d.ts.map