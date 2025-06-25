/**
 * @file /src/utils/extension.ts
 * @name Extension
 * @description Utility functions for extensions
 */
import { AnyExtension, Editor } from "@tiptap/core";
import { Undefinable } from "../types/record";
/**
 * Finds an extension by its name in the editor's extension manager.
 *
 * @param editor - The editor instance containing the extension manager.
 * @param extensionName - The name of the extension to find.
 * @returns The extension if found, otherwise undefined.
 */
export declare const findExtension: (editor: Editor, extensionName: string) => Undefinable<AnyExtension>;
//# sourceMappingURL=extension.d.ts.map