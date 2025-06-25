/**
 * @file /src/utils/positionCondition.ts
 * @name PositionCondition
 * @description Utility functions for position conditions.
 */
import { ResolvedPos } from "@tiptap/pm/model";
export declare const isAtStartOfNode: ($pos: ResolvedPos, startOfNodePos: number, startOfParagraphPos: number, checkExactStart: boolean) => boolean;
/**
 * Check if the given position is exactly at the end of the node.
 *
 * @param $pos - The resolved position in the document or the absolute position of the node.
 * @param endOfNodePos - The position of the end of the node.
 * @param endOfParagraphPos - The position of the end of the paragraph.
 * @param checkExactEnd - Whether the position must be at the exact end of the node.
 * @returns {boolean} True if the condition is met, false otherwise.
 */
export declare const isAtEndOfNode: ($pos: ResolvedPos, endOfNodePos: number, endOfParagraphPos: number, checkExactEnd: boolean) => boolean;
//# sourceMappingURL=positionCondition.d.ts.map