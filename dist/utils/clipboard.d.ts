/**
 * @file /src/utils/clipboard.ts
 * @name Clipboard
 * @description Utility functions for clipboard operations.
 */
import { Node as PMNode, Schema } from "@tiptap/pm/model";
import { Plugin } from "@tiptap/pm/state";
/**
 * Constructs a clipboard plugin that serialises only the children of the nodes of the specified schema.
 *
 * @param name - The plugin key.
 * @param schema - The schema to use for serialisation.
 * @param isNode - A function that returns true if the node is a page node.
 * @returns {Plugin} The constructed clipboard plugin.
 */
export declare const constructChildOnlyClipboardPlugin: (name: string, schema: Schema, isNode: (node: PMNode) => boolean) => Plugin;
//# sourceMappingURL=clipboard.d.ts.map