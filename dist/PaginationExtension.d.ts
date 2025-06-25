/**
 * @file /src/PaginationExtension.ts
 * @name Pagination
 * @description Custom pagination extension for the Tiptap editor.
 */
import { Extension } from "@tiptap/core";
import { PaperOrientation, PaperSize } from "./types/paper";
import { PageAmendmentOptions } from "./types/pageAmendment";
import { BorderConfig, MultiSide, MarginConfig } from "./types/page";
export interface PaginationOptions {
    /**
     * The default paper size for the document. Note this is only the default
     * so you can have settings in your editor which change the paper size.
     * This is only the setting for new documents.
     *
     * @default "A4"
     * @example "A3"
     */
    defaultPaperSize: PaperSize;
    /**
     * The default paper colour for the document. Note this is only the default
     * so you can have settings in your editor which change the paper colour.
     * This is only the setting for new documents.
     *
     * @default "#fff"
     * @example "#f0f0f0"
     */
    defaultPaperColour: string;
    /**
     * Whether to use the device theme to set the paper colour.
     * If enabled, the default paper colour will be ignored.
     *
     * @default false
     * @example true | false
     */
    useDeviceThemeForPaperColour: boolean;
    /**
     * The default paper orientation for the document. Note this is only the default
     * so you can have settings in your editor which change the paper orientation.
     * This is only the setting for new documents.
     *
     * @default "portrait"
     * @example "portrait" | "landscape"
     */
    defaultPaperOrientation: PaperOrientation;
    /**
     * The default margin configuration for the document. Note this is only the default
     * so you can have settings in your editor which change the margin configuration.
     * This is only the setting for new documents.
     *
     * @default { top: 25.4, right: 25.4, bottom: 25.4, left: 25.4 }
     * @example { top: 10, right: 10, bottom: 10, left: 10 }
     */
    defaultMarginConfig: MarginConfig;
    /**
     * The default border configuration for the document. This controls the thickness
     * of the borders on the page. Note this is only the default so you can have
     * settings in your editor which change the border configuration. This is only
     * the setting for new documents.
     *
     * @default { top: 1, right: 1, bottom: 1, left: 1 }
     * @example { top: 2, right: 2, bottom: 2, left: 2 }
     */
    defaultPageBorders: BorderConfig;
    /**
     * Options for page amendments (header and footer).
     *
     * @see {@link PageAmendmentOptions}
     * @example { enableHeader: true, enableFooter: false }
     */
    pageAmendmentOptions: PageAmendmentOptions;
}
declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        page: {
            /**
             * Set the paper size.
             *
             * @param paperSize The paper size
             * @example editor.commands.setDocumentPaperSize("A4")
             */
            setDocumentPaperSize: (paperSize: PaperSize) => ReturnType;
            /**
             * Set the default paper size.
             *
             * @example editor.commands.setDocumentDefaultPaperSize()
             */
            setDocumentDefaultPaperSize: () => ReturnType;
            /**
             * Set the paper size for a specific page.
             *
             * @param pageNum The page number (0-indexed)
             * @param paperSize The paper size
             * @example editor.commands.setPagePaperSize(0, "A4")
             */
            setPagePaperSize: (pageNum: number, paperSize: PaperSize) => ReturnType;
            /**
             * Checks the paper sizes are set for each page in the document.
             * Sets the default paper size if not set.
             *
             * @example editor.commands.checkPaperSizes()
             */
            checkPaperSizes: () => ReturnType;
            /**
             * Set the paper colour for the document.
             *
             * @param paperColour The paper colour
             * @example editor.commands.setDocumentPaperColour("#fff")
             */
            setDocumentPaperColour: (paperColour: string) => ReturnType;
            /**
             * Set the default paper colour.
             *
             * @example editor.commands.setDocumentDefaultPaperColour()
             */
            setDocumentDefaultPaperColour: () => ReturnType;
            /**
             * Set the paper colour for a specific page.
             *
             * @param pageNum The page number (0-indexed)
             * @param paperColour The paper colour
             * @example editor.commands.setPagePaperColour(0, "#fff")
             */
            setPagePaperColour: (pageNum: number, paperColour: string) => ReturnType;
            /**
             * Set the paper orientation for the document
             *
             * @param paperOrientation The paper orientation
             * @example editor.commands.setDocumentPaperOrientation("portrait") | editor.commands.setDocumentPaperOrientation("landscape")
             */
            setDocumentPaperOrientation: (paperOrientation: PaperOrientation) => ReturnType;
            /**
             * Set the default paper orientation for all pages in the document.
             *
             * @example editor.commands.setDocumentDefaultPaperOrientation()
             */
            setDocumentDefaultPaperOrientation: () => ReturnType;
            /**
             * Set the paper orientation for a specific page
             *
             * @param pageNum The page number (0-indexed)
             * @param paperOrientation The paper orientation
             * @example editor.commands.setPagePaperOrientation(0, "portrait") | editor.commands.setPagePaperOrientation(0, "landscape")
             */
            setPagePaperOrientation: (pageNum: number, paperOrientation: PaperOrientation) => ReturnType;
            /**
             * Set the page margins for the document.
             *
             * @param pageMargins The page margins (top, right, bottom, left)
             * @example editor.commands.setDocumentPageMargins({ top: 10, right: 15, bottom: 10, left: 15 })
             */
            setDocumentPageMargins: (pageMargins: MarginConfig) => ReturnType;
            /**
             * Set the default page margins.
             *
             * @example editor.commands.setDocumentDefaultPageMargins()
             */
            setDocumentDefaultPageMargins: () => ReturnType;
            /**
             * Set the page margins for a specific page.
             *
             * @param pageNum The page number (0-indexed)
             * @param pageMargins The page margins
             * @example editor.commands.setPagePageMargins(0, { top: 10, right: 15, bottom: 10, left: 15 })
             */
            setPagePageMargins: (pageNum: number, pageMargins: MarginConfig) => ReturnType;
            /**
             * Set a margin for the document on a specific side.
             *
             * @param margin The margin to set (top, right, bottom, left, x, y, all)
             * @param value The value to set the margin to
             * @example editor.commands.setDocumentPageMargin("top", 10)
             */
            setDocumentPageMargin: (margin: MultiSide, value: number) => ReturnType;
            /**
             * Set a margin for a specific page on a specific side.
             *
             * @param pageNum The page number (0-indexed)
             * @param margin The margin to set (top, right, bottom, left, x, y, all)
             * @param value The value to set the margin to
             * @example editor.commands.setPagePageMargin(0, "top", 10)
             */
            setPagePageMargin: (pageNum: number, margin: MultiSide, value: number) => ReturnType;
            /**
             * Set the page borders for the document.
             *
             * @param pageBorders The page borders (top, right, bottom, left)
             * @example editor.commands.setDocumentPageBorders({ top: 2, right: 2, bottom: 2, left: 2 })
             */
            setDocumentPageBorders: (pageBorders: BorderConfig) => ReturnType;
            /**
             * Set the default page borders.
             *
             * @example editor.commands.setDocumentDefaultPageBorders()
             */
            setDocumentDefaultPageBorders: () => ReturnType;
            /**
             * Set the page borders for a specific page.
             *
             * @param pageNum The page number (0-indexed)
             * @param pageBorders The page borders
             * @example editor.commands.setPageBorders(0, { top: 2, right: 2, bottom: 2, left: 2 })
             */
            setPageBorders: (pageNum: number, pageBorders: BorderConfig) => ReturnType;
            /**
             * Set a border for the document on a specific side.
             *
             * @param border The border to set (top, right, bottom, left, all)
             * @param value The value to set the border to
             */
            setDocumentPageBorder: (border: MultiSide, value: number) => ReturnType;
            /**
             * Set a border for a specific page on a specific side.
             *
             * @param pageNum The page number (0-indexed)
             * @param border The border to set (top, right, bottom, left, all)
             * @param value The value to set the border to
             */
            setPagePageBorder: (pageNum: number, border: MultiSide, value: number) => ReturnType;
        };
    }
}
declare const PaginationExtension: Extension<PaginationOptions, any>;
export default PaginationExtension;
//# sourceMappingURL=PaginationExtension.d.ts.map