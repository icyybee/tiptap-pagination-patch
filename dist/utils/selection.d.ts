/**
 * @file /src/components/TipTap/utils/selection.ts
 * @name Selection
 * @description Utility functions for working with selections in the editor.
 */
import { Node as PMNode, ResolvedPos } from "@tiptap/pm/model";
import { EditorState, Selection, Transaction } from "@tiptap/pm/state";
import { Sign } from "../types/direction";
import { Nullable } from "../types/record";
/**
 * Check if the editor is currently highlighting text.
 *
 * @param state - The current editor state.
 * @returns True if text is currently highlighted, false otherwise.
 */
export declare const isHighlighting: (state: EditorState) => boolean;
/**
 * Get the resolved position in the document.
 *
 * @param state - The current editor state.
 * @returns The resolved position in the document.
 */
export declare const getResolvedPosition: (state: EditorState) => ResolvedPos;
/**
 * Set the selection at the specified anchor and head positions. If head is not provided,
 * it will be set to the anchor position.
 *
 * @param tr - The current transaction.
 * @param anchor - The anchor position.
 * @param head - The head position.
 * @returns The updated transaction.
 */
export declare const setSelectionAtPos: (tr: Transaction, anchor: number, head?: number) => Transaction;
/**
 * Set the selection to the specified selection object.
 *
 * @param tr - The current transaction.
 * @param selection - The selection object.
 * @returns The updated transaction.
 */
export declare const setSelection: <S extends Selection>(tr: Transaction, selection: S) => Transaction;
/**
 * Set the selection at the start of the document.
 *
 * @param tr - The current transaction.
 * @returns The updated transaction.
 */
export declare const setSelectionAtStartOfDocument: (tr: Transaction) => Transaction;
/**
 * Set the selection at the end of the document.
 *
 * @param tr - The current transaction.
 * @returns The updated transaction.
 */
export declare const setSelectionAtEndOfDocument: (tr: Transaction) => Transaction;
/**
 * Set the selection to the start of the paragraph.
 *
 * @param tr - The current transaction.
 * @param paragraphPos - The position of the paragraph in the document.
 * @param paragraphNode - The paragraph node.
 * @returns {void}
 */
export declare const setSelectionToStartOfParagraph: (tr: Transaction, paragraphPos: number, paragraphNode: PMNode) => void;
/**
 * Set the selection to the paragraph with an optional offset.
 *
 * @param tr - The current transaction.
 * @param paragraphPos - The position of the paragraph in the document.
 * @param paragraphNode - The paragraph node.
 * @param offsetInNode - The offset in the paragraph node. Default is 0.
 * @returns {void}
 */
export declare const setSelectionToParagraph: (tr: Transaction, paragraphPos: number, paragraphNode: PMNode, offsetInNode?: number) => void;
/**
 * Set the selection to the end of the paragraph.
 *
 * @param tr - The current transaction.
 * @param paragraphPos - The position of the paragraph in the document.
 * @param paragraphNode - The paragraph node.
 * @returns {void}
 */
export declare const setSelectionToEndOfParagraph: (tr: Transaction, paragraphPos: number, paragraphNode: PMNode) => void;
/**
 * Move the cursor to the previous text block.
 *
 * @param tr - The current transaction.
 * @param $pos - The resolved position in the document.
 * @returns {Selection} The new selection.
 */
export declare const moveToPreviousTextBlock: (tr: Transaction, $pos: ResolvedPos | number) => Selection;
/**
 * Move the cursor to the current text block.
 *
 * @param tr - The current transaction.
 * @param $pos - The resolved position in the document.
 * @param bias - The search direction. Default is 1 (forward).
 * @param offsetInNode - The offset in the node. Default is 0. Will cap at the length of the node.
 * @returns {Selection} The new selection.
 */
export declare const moveToThisTextBlock: (tr: Transaction, $pos: ResolvedPos | number, bias?: Sign, offsetInNode?: number) => Selection;
/**
 * Move the cursor to the next text block.
 *
 * @param tr - The current transaction.
 * @param $pos - The resolved position in the document.
 * @returns {Selection} The new selection.
 */
export declare const moveToNextTextBlock: (tr: Transaction, $pos: ResolvedPos | number) => Selection;
/**
 * Move the cursor to the nearest text selection.
 *
 * @param tr - The current transaction.
 * @param $pos - The resolved position in the document.
 * @param bias - The search direction.
 * @returns {void} The new selection.
 */
export declare const moveToNearestTextSelection: (tr: Transaction, $pos: ResolvedPos, bias?: Sign) => void;
/**
 * Get the nearest text selection to the given position.
 *
 * @param $pos - The resolved position in the document.
 * @param bias - The search direction.
 * @returns {Selection} The nearest text selection.
 */
export declare const getNearestTextSelection: ($pos: ResolvedPos, bias?: Sign) => Selection;
/**
 * Move the cursor to the nearest valid cursor position.
 *
 * @param tr - The current transaction.
 * @param $pos - The resolved position in the document.
 * @returns {Selection} The new selection.
 */
export declare const moveToNearestValidCursorPosition: ($pos: ResolvedPos) => Nullable<Selection>;
//# sourceMappingURL=selection.d.ts.map