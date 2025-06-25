/**
 * @file /src/utils/options.ts
 * @name Options
 * @description Utility functions for retrieving extension options.
 */
import { Editor } from "@tiptap/core";
import { Undefinable } from "../types/record";
import { PaginationOptions } from "../PaginationExtension";
/**
 * Retrieves the options for a specified extension in the editor.
 *
 * @param editor - The editor instance containing the extensions.
 * @param extensionName - The name of the extension whose options are to be retrieved.
 * @returns The options of the specified extension, or undefined if the extension is not found.
 */
export declare const getExtensionOptions: (editor: Editor, extensionName: string) => Undefinable<Record<string, any>>;
/**
 * Retrieves the options for the pagination extension in the editor.
 *
 * @param editor - The editor instance containing the extensions.
 * @returns The options of the pagination extension, or undefined if the extension is not found.
 * @throws An error if the pagination extension is not found in the editor.
 */
export declare const getPaginationExtensionOptions: (editor: Editor) => PaginationOptions;
//# sourceMappingURL=options.d.ts.map