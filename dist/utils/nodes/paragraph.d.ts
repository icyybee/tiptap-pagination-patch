/**
 * @file /src/utils/paragraph.ts
 * @name Paragraph
 * @description Utility functions for paragraphs.
 */
import { Node as PMNode, ResolvedPos } from "@tiptap/pm/model";
import { EditorView } from "@tiptap/pm/view";
import { Nullable } from "../../types/record";
import { NullableNodePos } from "../../types/node";
import { ParagraphLineInfo } from "../../types/paragraph";
/**
 * Check if the given node is a paragraph node.
 *
 * @param node - The node to check.
 * @returns {boolean} True if the node is a paragraph node, false otherwise.
 */
export declare const isParagraphNode: (node: Nullable<PMNode>) => boolean;
/**
 * Get the type of the node at the specified position.
 *
 * @param $pos - The resolved position in the document.
 * @returns The type of the node at the specified position.
 */
export declare const isPositionWithinParagraph: ($pos: ResolvedPos) => boolean;
/**
 * Get the start of the paragraph position.
 *
 * @param doc - The document node.
 * @param pos - The resolved position in the document or the absolute position of the node.
 * @returns {number} The start position of the paragraph.
 */
export declare const getStartOfParagraphPosition: (doc: PMNode, pos: ResolvedPos | number) => number;
/**
 * Get the end of the paragraph position.
 *
 * @param doc - The document node.
 * @param pos - The resolved position in the document or the absolute position of the node.
 * @returns {number} The end position of the paragraph.
 */
export declare const getEndOfParagraphPosition: (doc: PMNode, $pos: ResolvedPos | number) => number;
/**
 * Get the previous paragraph node.
 *
 * @param doc - The document node.
 * @param pos - The position in the document.
 * @returns {NullableNodePos} The previous paragraph node or null if not found and position.
 */
export declare const getPreviousParagraph: (doc: PMNode, pos: number) => NullableNodePos;
/**
 * Get the next paragraph node.
 *
 * @param doc - The document node.
 * @param pos - The position in the document.
 * @returns {NullableNodePos} The next paragraph node or null if not found and position.
 */
export declare const getNextParagraph: (doc: PMNode, pos: number) => NullableNodePos;
/**
 * Determine if the resolved position is at the start of a paragraph node.
 *
 * @param doc - The document node.
 * @param $pos - The resolved position in the document.
 * @returns {boolean} True if the position is at the start of a paragraph node, false otherwise.
 */
export declare const isAtStartOfParagraph: (doc: PMNode, $pos: ResolvedPos | number) => boolean;
/**
 * Determine if the resolved position is at the end of a paragraph node.
 *
 * @param doc - The document node.
 * @param $pos - The resolved position in the document.
 * @returns {boolean} True if the position is at the end of a paragraph node, false otherwise.
 */
export declare const isAtEndOfParagraph: (doc: PMNode, $pos: ResolvedPos | number) => boolean;
/**
 * Determine if the resolved position is at the start or end of a paragraph node.
 *
 * @param doc - The document node.
 * @param $pos - The resolved position in the document.
 * @returns {boolean} True if the position is at the start or end of a paragraph node, false otherwise.
 */
export declare const isAtStartOrEndOfParagraph: (doc: PMNode, $pos: ResolvedPos | number) => boolean;
/**
 * Determine if the previous paragraph is empty.
 *
 * @param doc - The document node.
 * @param $pos - The resolved position in the document or the absolute position of the node.
 * @returns {boolean} True if the previous paragraph is empty or does not exist, false otherwise.
 */
export declare const isPreviousParagraphEmpty: (doc: PMNode, $pos: ResolvedPos | number) => boolean;
/**
 * Determine if the next paragraph is empty.
 *
 * @param doc - The document node.
 * @param $pos - The resolved position in the document or the absolute position of the node.
 * @returns {boolean} True if the next paragraph is empty or does not exist, false otherwise.
 */
export declare const isNextParagraphEmpty: (doc: PMNode, $pos: ResolvedPos | number) => boolean;
/**
 * Get the paragraph node position.
 *
 * @param doc - The document node.
 * @param pos - The resolved position in the document or the absolute position of the node.
 * @returns {number} The position of the paragraph node.
 */
export declare const getThisParagraphNodePosition: (doc: PMNode, pos: ResolvedPos | number) => number;
/**
 * Get the paragraph node position and the paragraph node itself.
 *
 * @param doc - The document node.
 * @param pos - The resolved position in the document or the absolute position of the node.
 * @returns {NullableNodePos} The position and the node or null if not found of the paragraph.
 */
export declare const getParagraphNodeAndPosition: (doc: PMNode, pos: ResolvedPos | number) => NullableNodePos;
/**
 * Gets the previous page's past body paragraph and position, if any, before the given position.
 * @param doc - The current document.
 * @param pos - Any position within the current page's body
 * @returns {NullableNodePos} The previous page body's last paragraph and position, if any.
 */
export declare const getLastParagraphInPreviousPageBodyBeforePos: (doc: PMNode, pos: ResolvedPos | number) => NullableNodePos;
/**
 * Gets the next page's first body paragraph and positiom, if any, after the given position.
 * @param doc - The current document.
 * @param pos - Any position within the current page's body
 * @returns {NullableNodePos} The next page body's first paragraph and position, if any.
 */
export declare const getFirstParagraphInNextPageBodyAfterPos: (doc: PMNode, pos: ResolvedPos | number) => NullableNodePos;
/**
 * Measure the width of the text up to a given offset in a paragraph.
 *
 * @param pDOMNode - The paragraph DOM node.
 * @param offset - The offset within the paragraph.
 * @param lineNumber - The line number within the paragraph.
 * @param lineBreakOffsets - The offsets where line breaks occur.
 * @returns {number} The width of the text up to the offset.
 */
export declare const getTextWidthUpToOffsetInLine: (pDOMNode: HTMLElement, offset: number, lineNumber: number, lineBreakOffsets: number[]) => number;
export declare const getOffsetForDistanceInLine: (view: EditorView, pos: ResolvedPos | number, lineNumber: number, targetDistance: number) => number;
/**
 * Measure the widths of each line in a paragraph.
 *
 * @param pDOMNode - The paragraph DOM node.
 * @returns {number[]} An array of line widths.
 */
export declare const measureParagraphLineWidths: (pDOMNode: HTMLElement) => number[];
/**
 * Given a paragraph position and position within said paragraph, return the number of
 * lines in the paragraph and the line number of the position.
 *
 * @param view - The editor view.
 * @param pos - The [resolved] position in the document.
 * @returns {ParagraphLineInfo} The number of lines in the paragraph and the
 * line number of the position (0-indexed).
 */
export declare const getParagraphLineInfo: (view: EditorView, pos: ResolvedPos | number) => ParagraphLineInfo;
/**
 * Checks if the position is at the first line of the paragraph.
 *
 * @param view - The editor view.
 * @param $pos - The [resolved] position in the document.
 * @returns {boolean} True if the position is at the first line of the paragraph, false otherwise.
 */
export declare const isPosAtFirstLineOfParagraph: (view: EditorView, $pos: ResolvedPos | number) => {
    isAtFirstLine: boolean;
} & ParagraphLineInfo;
/**
 * Checks if the position is at the last line of the paragraph.
 *
 * @param view - The editor view.
 * @param $pos - The [resolved] position in the document.
 * @returns {boolean} True if the position is at the last line of the paragraph, false otherwise.
 */
export declare const isPosAtLastLineOfParagraph: (view: EditorView, $pos: ResolvedPos | number) => {
    isAtLastLine: boolean;
} & ParagraphLineInfo;
//# sourceMappingURL=paragraph.d.ts.map