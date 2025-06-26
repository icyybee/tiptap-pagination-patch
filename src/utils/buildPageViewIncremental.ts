import { buildPageView } from "./buildPageView";
import { Editor } from "@tiptap/core";
import { EditorView } from "@tiptap/pm/view";
import { PaginationOptions } from "../PaginationExtension";
import { getChangedRange } from "./incrementalRange";
import { EditorState } from "@tiptap/pm/state";

/**
 * Incremental version of buildPageView. For small changes, skip pagination entirely.
 * For larger changes, use full rebuild. This eliminates freezing on keystrokes.
 */
export const buildPageViewIncremental = (editor: Editor, view: EditorView, options: PaginationOptions, prevState?: EditorState): void => {
    if (!prevState) {
        buildPageView(editor, view, options);
        return;
    }

    const changedRange = getChangedRange(prevState, view.state);
    if (!changedRange) {
        // No change detected, skip pagination entirely
        return;
    }

    const changeSize = changedRange.to - changedRange.from;

    // For very small changes (like single character typing), skip pagination
    if (changeSize <= 10) {
        console.log("Skipping pagination for small change:", changeSize, "characters");
        return;
    }

    // For medium changes, use full rebuild
    if (changeSize <= 2000) {
        console.log("Using full rebuild for medium change:", changeSize, "characters");
        buildPageView(editor, view, options);
        return;
    }

    // For large changes, use full rebuild
    console.log("Using full rebuild for large change:", changeSize, "characters");
    buildPageView(editor, view, options);
};
