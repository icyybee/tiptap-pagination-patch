import { Transaction } from "@tiptap/pm/state";
import { Node as PMNode } from "@tiptap/pm/model";

/** Detects the changed range in a transaction */
export function getChangedRange(tr: Transaction): { from: number; to: number } | null {
    if (!tr.docChanged || tr.steps.length === 0) return null;
    let from = Infinity,
        to = -Infinity;
    tr.mapping.maps.forEach((map) => {
        map.forEach((_oldStart, _oldEnd, newStart, newEnd) => {
            if (newStart < from) from = newStart;
            if (newEnd > to) to = newEnd;
        });
    });
    if (from === Infinity) return null;
    return { from, to };
}

/** Maps a position to a page index in a doc where the top-level children are pages */
export function getPageOfPos(doc: PMNode, pos: number): number | null {
    let curr = 0;
    let result: number | null = null;
    doc.forEach((pageNode, _off, idx) => {
        if (pos >= curr && pos < curr + pageNode.nodeSize) result = idx;
        curr += pageNode.nodeSize;
    });
    return result;
}
