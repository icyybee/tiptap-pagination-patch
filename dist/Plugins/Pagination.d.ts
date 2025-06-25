/**
 * @file /src/Plugins/Pagination.ts
 * @name Pagination
 * @description Custom plugin for paginating the editor content.
 */
import { Editor } from "@tiptap/core";
import { Plugin } from "@tiptap/pm/state";
import { PaginationOptions } from "../PaginationExtension";
type PaginationPluginProps = {
    editor: Editor;
    options: PaginationOptions;
};
declare const PaginationPlugin: ({ editor, options }: PaginationPluginProps) => Plugin<any>;
export default PaginationPlugin;
//# sourceMappingURL=Pagination.d.ts.map