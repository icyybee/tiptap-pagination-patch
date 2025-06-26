import { EditorView } from "@tiptap/pm/view";
import { Editor } from "@tiptap/core";
import { PaginationOptions } from "../PaginationExtension";
import { Node as PMNode } from "@tiptap/pm/model";
import { getPageOfPos } from "./incrementalRange";

// Helper: Rebuild a single page node (you should adapt your buildNewDocument logic to only this page)
function rebuildPageNode(_editor: Editor, doc: PMNode, pageNum: number, _options: PaginationOptions, _view: EditorView): PMNode | null {
    // TODO: Implement: collect content for this page, measure, repaginate, return new page node
    // For now, just return the old node as a placeholder.
    return doc.maybeChild(pageNum) || null;
}

/**
 * Only rebuild pages affected by a change (by range).
 */
export function buildPageViewIncremental(
    editor: Editor,
    view: EditorView,
    options: PaginationOptions,
    changedFrom: number,
    changedTo: number
): void {
    const { state, dispatch } = view;
    const { doc } = state;

    const startPage = getPageOfPos(doc, changedFrom);
    const endPage = getPageOfPos(doc, changedTo);

    if (startPage === null || endPage === null) {
        // fallback to full rebuild
        // @ts-ignore
        import("./buildPageView").then(({ buildPageView }) => buildPageView(editor, view, options));
        return;
    }

    // Gather all page nodes
    const pages: PMNode[] = [];
    doc.forEach((pageNode) => pages.push(pageNode));

    // Only rebuild affected
    for (let i = startPage; i <= endPage; i++) {
        const newPage = rebuildPageNode(editor, doc, i, options, view);
        if (newPage) pages[i] = newPage;
    }

    // Patch doc if changed
    const { schema } = state;
    const newDoc = schema.topNodeType.create(null, pages);
    if (!newDoc.content.eq(doc.content)) {
        let tr = state.tr.replaceWith(0, doc.content.size, newDoc.content);
        tr.setMeta("pagination", true);
        dispatch(tr);
    }
}
