# Tiptap Pagination Extension (Patch Fork)

<h3 align="center">
    A patched Tiptap extension that allows for pagination (pages) inside your document editor.
</h3>

<br />

<p align="center">
  <a href="https://www.npmjs.com/package/@icyybee/tiptap-pagination-patch">
    <img
     alt="NPM URL"
     src="https://img.shields.io/badge/npm-tiptapPaginationPatch?logo=npm">
  </a>
  <img
     alt="version"
     src="https://img.shields.io/npm/v/@icyybee/tiptap-pagination-patch.svg">
</p>

---

## ✨ About This Fork

This package is a patched and optimized fork of [Kunal Ukey](https://github.com/helloukey)'s [`@kunalukey/tiptap-pagination-patch`](https://www.npmjs.com/package/@kunalukey/tiptap-pagination-patch).

> **Why this fork?**  
> The original implementation caused noticeable lag or freezing with large documents. This fork introduces performance improvements that optimize rendering and interaction for long documents — preventing the editor from hanging or slowing down during complex pagination scenarios.

It is maintained by [@icyybee (Beatrice Egumandi)](https://github.com/icyybee) to fix bugs and allow custom usage in production projects.

---

## Installation

```bash
npm install @icyybee/tiptap-pagination-patch
```

## Usage

```tsx
/**
 * @file /src/Tiptap/Editor.tsx
 * @name Editor
 * @description Example Tiptap editor with pagination plugin.
 */

import React from "react";
import { Stack } from "@mui/material";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import PaginationExtension, { PageNode, HeaderFooterNode, BodyNode } from "@icyybee/tiptap-pagination-patch";

type DispatchOrFunction<T> = Dispatch<T> | ((value: T) => void);

type EditorProps = {
    content: string;
    setContent: DispatchOrFunction<string>;
    editable?: boolean;
};

const Editor: React.FC<EditorProps> = ({ content, setContent, editable = true }) => {
    const extensions = [
        StarterKit,
         PaginationExtension.configure({ ... }), // See configuration options below.
          PageNode,
           HeaderFooterNode,
            BodyNode];

    const editor = useEditor({
        extensions,
        content,
        onUpdate({ editor }) {
            const editorContent = editor.getHTML();
            handleChange(editorContent);
        },
        editable,
        onSelectionUpdate({ editor }) {
            const { state } = editor;
            const { selection } = state;
            const { $from, $to } = selection;
            console.log("Selection updated:", $from.pos, $to.pos);
        },
    });

    // ====== Event Handlers ======

    /**
     * Handles change in text.
     *
     * @param value - new text value
     * @returns {void}
     */
    const handleChange = (value: string): void => {
        setContent(value);
    };

    // ====== Render ======

    return (
        <Stack direction="column" flexGrow={1} paddingX={2} overflow="auto">
            <EditorContent editor={editor} />
        </Stack>
    );
};

export default Editor;
```

# Configuration

This extension comes with a number of configuration options to tailor the editor to your usage. If specified, these configuration options should be placed with the `.configuration()` method when specifying the `PaginationExtension` in your extension array. See below example.

### `defaultPaperSize: PaperSize`

-   **Type**: `PaperSize`
-   **Description**: The default paper size for the document. This is only the default setting for new documents, and can be customized in the editor.
-   **Default**: `"A4"`
-   **Example**: `"A3"`

### `defaultPaperColour: string`

-   **Type**: `string`
-   **Description**: The default paper color for the document. This is only the default setting for new documents, and can be customized in the editor. Should be specified as hex code.
-   **Default**: `"#fff"`
-   **Example**: `"#f0f0f0"`

### `useDeviceThemeForPaperColour: boolean`

-   **Type**: `boolean`
-   **Description**: Whether to use the device theme to set the paper color. If enabled, the default paper color option will be ignored.
-   **Default**: `false`
-   **Example**: `true | false`

### `defaultPaperOrientation: PaperOrientation`

-   **Type**: `PaperOrientation`
-   **Description**: The default paper orientation for the document. This is only the default setting for new documents, and can be customized in the editor.
-   **Default**: `"portrait"`
-   **Example**: `"portrait" | "landscape"`

### `defaultMarginConfig: MarginConfig`

-   **Type**: `MarginConfig`
-   **Description**: The default margin configuration for the document. This is only the default setting for new documents, and can be customized in the editor. Margins are specified in millimetres (mm)
-   **Default**: `{ top: 25.4, right: 25.4, bottom: 25.4, left: 25.4 }`
-   **Example**: `{ top: 10, right: 10, bottom: 10, left: 10 }`

### `defaultPageBorders: BorderConfig`

-   **Type**: `BorderConfig`
-   **Description**: The default border configuration for the document. This controls the thickness of the borders on the page (in pixels). This is only the default setting for new documents, and can be customized in the editor.
-   **Default**: `{ top: 1, right: 1, bottom: 1, left: 1 }`
-   **Example**: `{ top: 2, right: 2, bottom: 2, left: 2 }`

### `pageAmendmentOptions: PageAmendmentOptions`

-   **Type**: `PageAmendmentOptions`
-   **Description**: Options for page amendments such as header and footer configurations.
-   **Example**: `{ enableHeader: true, enableFooter: false }`

## Example Configuration

You can specify as little or as much of the configuration as you like. For example:

```ts
import PaginationExtension from "@icyybee/tiptap-pagination-patch";

// Then in your extension array (within your component)

PaginationExtension.configure({
    defaultPaperSize: "A3",
    pageAmendmentOptions: {
        enableHeader: false,
        enableFooter: false,
    },
}),
```

# References

Improved from [clemente-xyz](https://github.com/clemente-xyz)'s comment [here](https://github.com/ueberdosis/tiptap/discussions/5719#discussioncomment-11352489) in TipTap discussion [#5719](https://github.com/ueberdosis/tiptap/discussions/5719).

# Maintainer

This patched fork is maintained by [Beatrice Egumandi (icyybee)](https://github.com/icyybee).
Bug fixes, improvements, and feature discussions are welcome via [Issues](https://github.com/icyybee/tiptap-pagination-patch/issues) or PRs.
