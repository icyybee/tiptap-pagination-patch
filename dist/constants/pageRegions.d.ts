/**
 * @file /src/constants/pageRegions.ts
 * @name PageRegions
 * @description Constants for page regions in the editor.
 */
import { NodeAttributes } from "../types/node";
import { FooterNodeAttributes, HeaderFooterNodeAttributes, HeaderNodeAttributes } from "../types/pageRegions";
export declare const HEADER_FOOTER_NODE_NAME: "header-footer";
/**
 * Key for the header footer node attributes.
 */
export declare const HEADER_FOOTER_NODE_ATTR_KEYS: {
    readonly type: "type";
    readonly pageEndOffset: "pageEndOffset";
    readonly height: "height";
    readonly xMargins: "xMargins";
};
/**
 * Default attributes for header and footer nodes.
 */
export declare const HEADER_FOOTER_DEFAULT_ATTRIBUTES: Omit<HeaderFooterNodeAttributes<unknown>, "type">;
/**
 * Default attributes for header nodes
 */
export declare const HEADER_DEFAULT_ATTRIBUTES: HeaderNodeAttributes;
/**
 * Default attributes for footer nodes
 */
export declare const FOOTER_DEFAULT_ATTRIBUTES: FooterNodeAttributes;
/**
 * The header/footer node attributes.
 */
export declare const HEADER_FOOTER_ATTRIBUTES: NodeAttributes<HeaderFooterNodeAttributes<unknown>>;
//# sourceMappingURL=pageRegions.d.ts.map