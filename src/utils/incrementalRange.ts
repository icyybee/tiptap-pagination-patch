/**
 * Returns the changed range between two documents using ProseMirror's findDiffStart and findDiffEnd.
 * Returns { from, to } in the new document, or null if no change.
 */
import { EditorState } from "@tiptap/pm/state";

export function getChangedRange(prevState: EditorState, nextState: EditorState): { from: number; to: number } | null {
    const prevDoc = prevState.doc;
    const nextDoc = nextState.doc;
    const start = prevDoc.content.findDiffStart(nextDoc.content);
    if (start == null) return null;
    const end = prevDoc.content.findDiffEnd(nextDoc.content);
    if (!end) return null;
    // end is { a, b } where a is end in prevDoc, b is end in nextDoc
    return { from: start, to: end.b };
}
