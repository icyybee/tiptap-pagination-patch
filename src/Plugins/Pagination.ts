/**
 * @file /src/Plugins/Pagination.ts
 * @name Pagination
 * @description Custom plugin for paginating the editor content.
 */

import { Editor } from "@tiptap/core";
import { Plugin, PluginKey, EditorState } from "@tiptap/pm/state";
import { EditorView } from "@tiptap/pm/view";
import { buildPageView } from "../utils/buildPageView";
import { isNodeEmpty } from "../utils/nodes/node";
import { doesDocHavePageNodes } from "../utils/nodes/page/page";
import { PaginationOptions } from "../PaginationExtension";
import { ySyncPluginKey } from "y-prosemirror";
import { buildPageViewIncremental } from "../utils/buildPageViewIncremental";
import { getChangedRange } from "../utils/incrementalRange";

/**
 * Throttle function: ensures fn is only called once every wait ms.
 */
function throttle<T extends (...args: any[]) => void>(fn: T, wait: number): T {
    let lastTime = 0;
    let timeout: ReturnType<typeof setTimeout> | null = null;
    let lastArgs: any[] | null = null;

    return function (this: any, ...args: any[]) {
        const now = Date.now();
        if (now - lastTime >= wait) {
            lastTime = now;
            fn.apply(this, args);
        } else {
            lastArgs = args;
            if (timeout) clearTimeout(timeout);
            timeout = setTimeout(() => {
                lastTime = Date.now();
                fn.apply(this, lastArgs!);
                lastArgs = null;
            }, wait - (now - lastTime));
        }
    } as T;
}

type PaginationPluginProps = {
    editor: Editor;
    options: PaginationOptions;
};

const PaginationPlugin = ({ editor, options }: PaginationPluginProps) => {
    return new Plugin({
        key: new PluginKey("pagination"),
        view() {
            let isPaginating = false;
            let renderCount = 0;

            // Throttle buildPageView to only run once every 300ms (adjust as needed)
            const throttledBuildPageView = throttle((editor: Editor, view: EditorView, options: PaginationOptions) => {
                isPaginating = true;
                try {
                    const { state } = view;
                    const { tr } = state;
                    const range = getChangedRange(tr);
                    console.log("[Pagination] Incremental rebuild triggered");
                    if (range) {
                        console.log(`[Pagination] Incremental: Rebuilding pages ${range.from} to ${range.to}`);
                        buildPageViewIncremental(editor, view, options, range.from, range.to);
                    } else {
                        console.log("[Pagination] Fallback: Full pagination rebuild");
                        buildPageView(editor, view, options);
                    }
                } finally {
                    isPaginating = false;
                }
            }, 300);

            return {
                update(view: EditorView, prevState: EditorState) {
                    console.log("v1.0.2");
                    if (isPaginating) return;

                    const { state } = view;
                    const { doc, schema } = state;
                    const pageType = schema.nodes.page;
                    const ystate = ySyncPluginKey.getState(view.state);
                    if (ystate?.isChangeOrigin && renderCount > 5) return;

                    renderCount++;

                    if (!pageType) return;

                    const docChanged = !doc.eq(prevState.doc);
                    const initialLoad = isNodeEmpty(prevState.doc) && !isNodeEmpty(doc);
                    const hasPageNodes = doesDocHavePageNodes(state);

                    if (!docChanged && hasPageNodes && !initialLoad) return;

                    // Call throttled (not raw) buildPageView
                    throttledBuildPageView(editor, view, options);
                },
            };
        },
    });
};

export default PaginationPlugin;
