/**
 * @file /src/utils/pageRegion/pageRegion.ts
 * @name PageRegion
 * @description Utility functions for creating custom page regions in the editor.
 */
import { Node as PMNode } from "@tiptap/pm/model";
import { HeaderNodeAttributes, FooterNodeAttributes, HeaderFooter } from "../../../types/pageRegions";
import { Nullable } from "../../../types/record";
import { XMarginConfig } from "../../../types/page";
/**
 * Determines if the given node is a header node.
 *
 * @param node - The node to check.
 * @returns {boolean} True if the node is a header node, false otherwise.
 */
export declare const isHeaderFooterNode: (node: PMNode) => boolean;
/**
 * Get the type of the header or footer node.
 *
 * @param headerFooterNode - The header or footer node to retrieve the type for.
 * @returns {Nullable<HeaderFooter>} The type of the specified header or footer node or null if not found.
 */
export declare const getHeaderFooterNodeType: (headerFooterNode: PMNode) => Nullable<HeaderFooter>;
/**
 * Get the x margins from a header or footer node.
 *
 * @param headerFooterNode - The header or footer node.
 * @returns {Nullable<XMarginConfig>} The x margins of the specified header or footer.
 */
export declare const getHeaderFooterNodeXMargins: (headerFooterNode: PMNode) => Nullable<XMarginConfig>;
/**
 * Get the page end offset of the header or footer node.
 *
 * @param headerFooterNode - The header or footer node to retrieve the page end offset for.
 * @returns {Nullable<number>} The page end offset of the specified header or footer node or null if not found.
 */
export declare const getHeaderFooterNodePageEndOffset: (headerFooterNode: PMNode) => Nullable<number>;
/**
 * Get the height of the header or footer node.
 *
 * @param headerFooterNode - The header or footer node to retrieve the height for.
 * @returns {Nullable<number>} The height of the specified header or footer node or null if not found.
 */
export declare const getHeaderFooterNodeHeight: (headerFooterNode: PMNode) => Nullable<number>;
/**
 * Retrieves the header node attributes, filling in any missing attributes with the default values.
 * @param headerFooterNode - The header or footer node to retrieve the attributes for.
 * @returns {HeaderNodeAttributes} The attributes of the specified header.
 */
export declare const getHeaderNodeAttributes: (headerFooterNode: PMNode) => HeaderNodeAttributes;
/**
 * Retrieves the footer node attributes, filling in any missing attributes with the default values.
 * @param headerFooterNode - The header or footer node to retrieve the attributes for.
 * @returns {FooterNodeAttributes} The attributes of the specified footer.
 */
export declare const getFooterNodeAttributes: (headerFooterNode: PMNode) => FooterNodeAttributes;
//# sourceMappingURL=headerFooter.d.ts.map