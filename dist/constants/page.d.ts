/**
 * @file /src/constants/page.ts
 * @name Page
 * @description Constants for page nodes in the editor.
 */
import { PageNodeAttributes } from "../types/page";
import { NodeAttributes } from "../types/node";
export declare const PAGE_NODE_NAME: "page";
export declare const PAGE_NODE_ATTR_KEYS: {
    readonly paperSize: "paperSize";
    readonly paperColour: "paperColour";
    readonly paperOrientation: "paperOrientation";
    readonly pageBorders: "pageBorders";
};
export declare const PAGE_ATTRIBUTES: NodeAttributes<PageNodeAttributes>;
export declare const DEFAULT_PAGE_GAP: number;
//# sourceMappingURL=page.d.ts.map