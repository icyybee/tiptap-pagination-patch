import { isNodeEmpty as isNodeEmpty$1, Extension, Node as Node$1, mergeAttributes } from '@tiptap/core';
import { keymap } from '@tiptap/pm/keymap';
import { Selection, TextSelection, Plugin, PluginKey } from '@tiptap/pm/state';
import { ySyncPluginKey } from 'y-prosemirror';
import { DOMSerializer } from '@tiptap/pm/model';

/**
 * @file /src/constants/paperSize.ts
 * @name PaperSize
 * @description Constants for the paper sizes
 */
const DEFAULT_PAPER_SIZE = "A4";
const aPaperSizes = {
  A0: {
    width: 841,
    height: 1189
  },
  A1: {
    width: 594,
    height: 841
  },
  A2: {
    width: 420,
    height: 594
  },
  A3: {
    width: 297,
    height: 420
  },
  A4: {
    width: 210,
    height: 297
  },
  A5: {
    width: 148,
    height: 210
  },
  A6: {
    width: 105,
    height: 148
  },
  A7: {
    width: 74,
    height: 105
  },
  A8: {
    width: 52,
    height: 74
  },
  A9: {
    width: 37,
    height: 52
  },
  A10: {
    width: 26,
    height: 37
  },
  A11: {
    width: 18,
    height: 26
  },
  A12: {
    width: 13,
    height: 18
  },
  A13: {
    width: 9,
    height: 13
  },
  "2A0": {
    width: 1189,
    height: 1682
  },
  "4A0": {
    width: 1682,
    height: 2378
  },
  "A0+": {
    width: 914,
    height: 1292
  },
  "A1+": {
    width: 609,
    height: 914
  },
  "A3+": {
    width: 329,
    height: 483
  }
};
const bPaperSizes = {
  B0: {
    width: 1000,
    height: 1414
  },
  B1: {
    width: 707,
    height: 1000
  },
  B2: {
    width: 500,
    height: 707
  },
  B3: {
    width: 353,
    height: 500
  },
  B4: {
    width: 250,
    height: 353
  },
  B5: {
    width: 176,
    height: 250
  },
  B6: {
    width: 125,
    height: 176
  },
  B7: {
    width: 88,
    height: 125
  },
  B8: {
    width: 62,
    height: 88
  },
  B9: {
    width: 44,
    height: 62
  },
  B10: {
    width: 31,
    height: 44
  },
  B11: {
    width: 22,
    height: 31
  },
  B12: {
    width: 15,
    height: 22
  },
  B13: {
    width: 11,
    height: 15
  },
  "B0+": {
    width: 1118,
    height: 1580
  },
  "B1+": {
    width: 720,
    height: 1020
  },
  "B2+": {
    width: 520,
    height: 720
  }
};
const cPaperSizes = {
  C0: {
    width: 917,
    height: 1297
  },
  C1: {
    width: 648,
    height: 917
  },
  C2: {
    width: 458,
    height: 648
  },
  C3: {
    width: 324,
    height: 458
  },
  C4: {
    width: 229,
    height: 324
  },
  C5: {
    width: 162,
    height: 229
  },
  C6: {
    width: 114,
    height: 162
  },
  C7: {
    width: 81,
    height: 114
  },
  C8: {
    width: 57,
    height: 81
  },
  C9: {
    width: 40,
    height: 57
  },
  C10: {
    width: 28,
    height: 40
  }
};
const usPaperSizes = {
  Letter: {
    width: 216,
    height: 279
  },
  Legal: {
    width: 216,
    height: 356
  },
  Tabloid: {
    width: 279,
    height: 432
  },
  Ledger: {
    width: 432,
    height: 279
  },
  "Junior Legal": {
    width: 127,
    height: 203
  },
  "Half Letter": {
    width: 140,
    height: 216
  },
  "Government Letter": {
    width: 203,
    height: 267
  },
  "Government Legal": {
    width: 216,
    height: 330
  },
  "ANSI A": {
    width: 216,
    height: 279
  },
  "ANSI B": {
    width: 279,
    height: 432
  },
  "ANSI C": {
    width: 432,
    height: 559
  },
  "ANSI D": {
    width: 559,
    height: 864
  },
  "ANSI E": {
    width: 864,
    height: 1118
  },
  "Arch A": {
    width: 229,
    height: 305
  },
  "Arch B": {
    width: 305,
    height: 457
  },
  "Arch C": {
    width: 457,
    height: 610
  },
  "Arch D": {
    width: 610,
    height: 914
  },
  "Arch E": {
    width: 914,
    height: 1219
  },
  "Arch E1": {
    width: 762,
    height: 1067
  },
  "Arch E2": {
    width: 660,
    height: 965
  },
  "Arch E3": {
    width: 686,
    height: 991
  }
};
const paperDimensions = {
  ...aPaperSizes,
  ...bPaperSizes,
  ...cPaperSizes,
  ...usPaperSizes
};
const paperSizes = Object.keys(paperDimensions);

/**
 * @file /src/constants/paperColours.ts
 * @name PaperColours
 * @description Constants for paper colours in the editor.
 */
const LIGHT_PAPER_COLOUR = "#fff";
const DARK_PAPER_COLOUR = "#222";
const DEFAULT_PAPER_COLOUR = LIGHT_PAPER_COLOUR;

/**
 * @file /src/constants/pageMargins.ts
 * @name PageMargins
 * @description Constants for page margins in the editor.
 */
/**
 * Common margin configurations for different margin sizes.
 */
const commonMarginConfigs = {
  normal: {
    top: 25.4,
    right: 25.4,
    bottom: 25.4,
    left: 25.4
  },
  narrow: {
    top: 12.7,
    right: 12.7,
    bottom: 12.7,
    left: 12.7
  },
  moderate: {
    top: 25.4,
    right: 19.1,
    bottom: 25.4,
    left: 19.1
  },
  wide: {
    top: 25.4,
    right: 50.8,
    bottom: 25.4,
    left: 50.8
  }
};
/**
 * The common margin name for the default margin configuration.
 */
const DEFAULT_PAGE_MARGIN_NAME = "normal";
/**
 * Standard margins are 1 inch or 25.4mm on all sides.
 */
const DEFAULT_PAGE_MARGIN_CONFIG = commonMarginConfigs[DEFAULT_PAGE_MARGIN_NAME];
/**
 * Default x margin configuration.
 */
const DEFAULT_X_MARGIN_CONFIG = {
  left: DEFAULT_PAGE_MARGIN_CONFIG.left,
  right: DEFAULT_PAGE_MARGIN_CONFIG.right
};

/**
 * @file /src/utils/string.ts
 * @name String
 * @description Utility functions for string manipulation.
 */
/**
 * Converts a string to title case.
 *
 * @param str - The input string to convert.
 * @returns {string} The string in title case.
 */
const titleCase = str => {
  return str.replace(/\b\w/g, char => char.toUpperCase());
};

/**
 * @file /src/constants/pageMargins.ts
 * @name PageMargins
 * @description Constants for page margins in the editor.
 */
const paperOrientations = ["portrait", "landscape"];
/**
 * A mapped version of the paper orientations where the oreintation is the key
 * and the label is the title cased version of the orientation. E.g. can be used
 * in a select input.
 */
const paperOrientationsSelect = paperOrientations.map(orientation => ({
  orientation,
  label: titleCase(orientation)
}));
const DEFAULT_PAPER_ORIENTATION = "portrait";

/**
 * @file /src/constants/pageBorders.ts
 * @name PageBorders
 * @description Constants for page borders in the editor.
 */
const DEFAULT_PAGE_BORDER_CONFIG = {
  top: 1,
  right: 1,
  bottom: 1,
  left: 1
};

/**
 * @file /src/constants/page.ts
 * @name Page
 * @description Constants for page nodes in the editor.
 */
const PAGE_NODE_NAME = "page";
const PAGE_NODE_ATTR_KEYS = {
  paperSize: "paperSize",
  paperColour: "paperColour",
  paperOrientation: "paperOrientation",
  pageBorders: "pageBorders"
};
const PAGE_ATTRIBUTES = {
  paperSize: {
    default: DEFAULT_PAPER_SIZE
  },
  paperColour: {
    default: DEFAULT_PAPER_COLOUR
  },
  paperOrientation: {
    default: DEFAULT_PAPER_ORIENTATION
  },
  pageBorders: {
    default: DEFAULT_PAGE_BORDER_CONFIG
  }
};
// ====== Page Gap ======
const DEFAULT_PAGE_GAP = 12;

/**
 * @file /src/constants/pagination.ts
 * @name Pagination
 * @description Pagination constants.
 */
const PAGINATION_EXTENSION_NAME = "pagination";
const MIN_PARAGRAPH_HEIGHT = 40;

/**
 * @file /src/constants/pageAmendment.ts
 * @name PageAmendment
 * @description Constants for page amendment in the editor.
 */
const DEFAULT_PAGE_AMENDMENT_CONFIG = {
  enableFooter: true,
  enableHeader: true
};

/**
 * @file /src/constants/body.ts
 * @name Body
 * @description Constants for body node in the editor.
 */
const BODY_NODE_NAME = "body";
/**
 * Lookup keys for body node attributes.
 */
const BODY_NODE_ATTR_KEYS = {
  pageMargins: "pageMargins"
};
/**
 * The default body node attributes.
 */
const BODY_DEFAULT_ATTRIBUTES = {
  pageMargins: DEFAULT_PAGE_MARGIN_CONFIG
};
/**
 * The body node attributes.
 */
const BODY_ATTRIBUTES = {
  pageMargins: {
    default: DEFAULT_PAGE_MARGIN_CONFIG
  }
};

/**
 * @file /src/utils/object.ts
 * @name Object
 * @description Utility functions for object manipulation.
 */
/**
 * Determines if a string needs to be JSON parsed.
 *
 * @param value - The value to check.
 * @returns {boolean} True if the value needs to be parsed, false otherwise.
 */
const needsParsing = value => {
  if (typeof value !== "string" || value.trim() === "") {
    return false; // Exclude non-strings or empty strings
  }
  // Normalize to avoid trailing/leading spaces affecting checks
  const normalized = value.trim();
  // Check for JSON-like structures
  return normalized.startsWith("{") ||
  // Object
  normalized.startsWith("[") ||
  // Array
  normalized.startsWith('"') ||
  // Quoted string
  normalized.startsWith("'") ||
  // Single-quoted string
  normalized.startsWith("`") ||
  // Template string
  normalized === "null" ||
  // Null value
  normalized === "true" ||
  // Boolean true
  normalized === "false" ||
  // Boolean false
  !isNaN(normalized) // Numeric strings like "123" or "0.5"
  ;
};
/**
 * Wrap JSON.parse. Checks if the value needs to be parsed before attempting to parse it.
 * Handles errors by returning the original value if it cannot be parsed.
 *
 * @param value - The value to parse.
 * @returns - The parsed value or the original value if it does not need to be parsed.
 */
const wrapJSONParse = value => {
  if (!needsParsing(value)) {
    return value;
  }
  try {
    return JSON.parse(value);
  } catch (e) {
    return value;
  }
};

/**
 * @file /src/utils/attributes/getAttributes.ts
 * @name GetAttributes
 * @description Utility functions for getting node attributes.
 */
/**
 * Check if the node has the specified attribute.
 *
 * @param node - The node to check.
 * @param attr - The attribute to check for.
 * @returns {boolean} True if the node has the specified attribute, false otherwise.
 */
const nodeHasAttribute = (node, attr) => {
  const {
    attrs
  } = node;
  return attr in attrs && attrs[attr] !== undefined && attrs[attr] !== null;
};
/**
 * A function used to compute the attributes for the node or mark
 * created by this rule. Can also be used to describe further
 * conditions the DOM element or style must match.
 *
 * @param nodeTagAttribute - The attribute of the node tag.
 * @param preventNestedNodes - True if nested nodes should be prevented, false otherwise.
 * @returns {Attrs | false | null} When it returns `false`, the rule won't match.
 * When it returns null or undefined, that is interpreted as an empty/default set of
 * attributes.
 */
const parseHTMLNodeGetAttrs = (nodeTagAttribute, preventNestedNodes) => node => {
  const parent = node.parentElement;
  {
    if (parent && parent.hasAttribute(nodeTagAttribute)) {
      return false;
    }
  }
  const attrs = Array.from(node.attributes);
  return attrs.reduce((acc, attribute) => {
    const {
      name,
      value
    } = attribute;
    if (name in acc) {
      return acc;
    }
    return {
      ...acc,
      [name]: wrapJSONParse(value)
    };
  }, {});
};

/**
 * @file /src/utils/node.ts
 * @name Node
 * @description Utility functions for creating custom nodes in the editor.
 */
/**
 * Get the type of the node at the specified position.
 *
 * @param $pos - The resolved position in the document.
 * @returns {ResolvedPos} The type of the node at the specified position.
 */
const getPositionNodeType = $pos => {
  return $pos.parent.type.name;
};
/**
 * Retrieves the size of a ProseMirror node if it is defined, otherwise returns 0.
 *
 * @param node - The ProseMirror node which may be undefined.
 * @returns The size of the node if it is defined, otherwise 0.
 */
const getMaybeNodeSize = node => {
  return node?.nodeSize ?? 0;
};
/**
 * Check if the node type matches the specified type.
 *
 * @param node - The node to check.
 * @param type - The type of the node to match. Can be string or an array of strings.
 * @returns {boolean} True if the node type matches, false otherwise.
 */
const doesNodeTypeMatch = (node, type) => {
  if (!node) {
    return false;
  }
  const nodeTypeName = node.type.name;
  if (Array.isArray(type)) {
    return type.includes(nodeTypeName);
  }
  return nodeTypeName === type;
};
/**
 * Get the parent node position of the specified type.
 *
 * @param doc - The document node.
 * @param $pos - The resolved position in the document or the absolute position of the node.
 * @param type - The type of the node to search for. Can be string or an array of strings.
 * @returns {ResolvedPos} The position of the parent node of the specified type.
 */
const getParentNodePosOfType = (doc, $pos, type) => {
  // Base case: If the position is a number, resolve it
  if (typeof $pos !== "number") {
    const thisNode = doc.nodeAt($pos.pos);
    if (thisNode) {
      if (doesNodeTypeMatch(thisNode, type)) {
        return $pos;
      }
    }
    if ($pos.pos === 0) {
      // We have not found the node of the specified type
      console.error(`Could not find node of type ${type}`);
      return $pos;
    }
    try {
      return getParentNodePosOfType(doc, $pos.before(), type);
    } catch (error) {
      return getParentNodePosOfType(doc, doc.resolve($pos.pos - 1), type);
    }
  }
  const thisPos = doc.resolve($pos);
  // Base case: If the node at the position is of the specified type, return the position
  if (doesNodeTypeMatch(doc.nodeAt($pos), type)) {
    return thisPos;
  }
  if ($pos === 0) {
    // We have not found the node of the specified type
    console.error(`Could not find node of type ${type}`);
    return thisPos;
  }
  // Recursive case: Move one level up and check again
  const prevPos = thisPos.before();
  return getParentNodePosOfType(doc, prevPos, type);
};
/**
 * Append the new node to the existing node and replace the existing node with the new node.
 *
 * @param tr - The current transaction.
 * @param pos - The position to replace the node at.
 * @param existingNode - The existing node to replace.
 * @param newNode - The new node to append and replace with.
 * @returns {void}
 */
const appendAndReplaceNode = (tr, pos, existingNode, newNode) => {
  const newContent = existingNode.content.append(newNode.content);
  tr.replaceWith(pos, pos + existingNode.nodeSize - 1, newContent);
};
/**
 * Delete the node at the specified position.
 *
 * @param tr - The current transaction.
 * @param pos - The position of the node to delete.
 * @param node - The node to delete.
 * @returns {void}
 */
const deleteNode = (tr, pos, node) => {
  tr.delete(pos, pos + node.nodeSize);
};
/**
 * Check if the node is empty.
 *
 * @param node - The node to check.
 * @returns {boolean} True if the node is empty, false otherwise.
 */
const isNodeEmpty = node => {
  return node.content.size === 0;
};
/**
 * A rule that matches a node based on the specified tag and attribute.
 *
 * @param baseElement - The base element to match.
 * @param nodeTagAttribute - The attribute of the node tag.
 * @param preventNestedNodes - True if nested nodes should be prevented, false otherwise.
 * @returns {TagParseRule} The rule that matches the node based on the specified tag and attribute.
 */
const parseHTMLNode = (baseElement, nodeTagAttribute, preventNestedNodes) => ({
  tag: `${baseElement}[${nodeTagAttribute}]`,
  getAttrs: parseHTMLNodeGetAttrs(nodeTagAttribute)
});
/**
 * Check if the given node is atomic.
 *
 * @param node - The node to check.
 * @returns {boolean} True if the node is a text node, false otherwise.
 */
const isAtomNode = (view, node) => {
  const pos = view.posAtDOM(node, 0);
  const pmNode = view.state.doc.nodeAt(pos);
  return !!(pmNode && pmNode.type.spec.atom);
};

/**
 * @file /src/utils/math.ts
 * @name Math
 * @description Utility functions for mathematical operations.
 */
/**
 * Checks if a value is within a specified range inclusive of the bounds.
 *
 * @param value - The value to check.
 * @param min - The minimum value of the range.
 * @param max - The maximum value of the range.
 * @returns True if the value is within the range, false otherwise.
 */
const inRange = (value, min, max) => {
  return value >= min && value <= max;
};
/**
 * Calculates the hypotenuse of a right triangle given the lengths of the other two sides.
 *
 * @param a - The length of side A.
 * @param b - The length of side B.
 * @returns The length of the hypotenuse.
 */
const pythagoreanTheorem = (a, b) => {
  return Math.sqrt(a ** 2 + b ** 2);
};
/**
 * Generic binary search function.
 *
 * @param arr - The sorted array to search.
 * @param target - The target value to search for.
 * @param compare - A comparison function that returns:
 *                  - A negative number if `target` < element at current index
 *                  - Zero if `target` === element at current index
 *                  - A positive number if `target` > element at current index
 * @returns {number} - The index of the target element, or null if not found.
 */
const binarySearch = (arr, target, compare) => {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const comparison = compare(target, arr[mid]);
    if (comparison === 0) {
      return mid; // Found the target
    }
    if (comparison < 0) {
      high = mid - 1; // Search in the left half
    } else {
      low = mid + 1; // Search in the right half
    }
  }
  return high;
};
/**
 * Find the index of the closest element in an array to a target value.
 *
 * @param arr - The array to search.
 * @param target - The target value to find the closest element to.
 * @returns The index of the closest element in the array.
 */
const findClosestIndex = (arr, target) => {
  let lo = 0,
    hi = arr.length - 1;
  let closestIndex = -1;
  let closestDistance = Infinity;
  while (lo <= hi) {
    let mid = lo + Math.floor((hi - lo) / 2);
    const currentDistance = Math.abs(arr[mid] - target);
    // Update closestIndex if mid is closer to target
    if (currentDistance < closestDistance) {
      closestDistance = currentDistance;
      closestIndex = mid;
      // In case of a tie, prefer the larger value
    } else if (currentDistance === closestDistance) {
      closestIndex = Math.max(closestIndex, mid);
    }
    if (arr[mid] === target) {
      return mid; // If we find an exact match
    } else if (arr[mid] < target) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return closestIndex;
};

/**
 * @file /src/components/TipTap/utils/selection.ts
 * @name Selection
 * @description Utility functions for working with selections in the editor.
 */
/**
 * Check if the editor is currently highlighting text.
 *
 * @param state - The current editor state.
 * @returns True if text is currently highlighted, false otherwise.
 */
const isHighlighting = state => {
  const {
    from,
    to
  } = state.selection;
  return from !== to;
};
/**
 * Get the resolved position in the document.
 *
 * @param state - The current editor state.
 * @returns The resolved position in the document.
 */
const getResolvedPosition = state => {
  const {
    from
  } = state.selection;
  const $pos = state.doc.resolve(from);
  return $pos;
};
/**
 * Set the selection at the specified anchor and head positions. If head is not provided,
 * it will be set to the anchor position.
 *
 * @param tr - The current transaction.
 * @param anchor - The anchor position.
 * @param head - The head position.
 * @returns The updated transaction.
 */
const setSelectionAtPos = (tr, anchor, head) => {
  const selection = TextSelection.create(tr.doc, anchor, anchor);
  return setSelection(tr, selection);
};
/**
 * Set the selection to the specified selection object.
 *
 * @param tr - The current transaction.
 * @param selection - The selection object.
 * @returns The updated transaction.
 */
const setSelection = (tr, selection) => {
  console.log("setting selection to", selection.$anchor.pos, "-", selection.$head.pos);
  return tr.setSelection(selection);
};
/**
 * Set the selection at the end of the document.
 *
 * @param tr - The current transaction.
 * @returns The updated transaction.
 */
const setSelectionAtEndOfDocument = tr => {
  return setSelectionAtPos(tr, tr.doc.content.size);
};
/**
 * Set the selection to the start of the paragraph.
 *
 * @param tr - The current transaction.
 * @param paragraphPos - The position of the paragraph in the document.
 * @param paragraphNode - The paragraph node.
 * @returns {void}
 */
const setSelectionToStartOfParagraph = (tr, paragraphPos, paragraphNode) => {
  if (isNodeEmpty(paragraphNode)) {
    const selection = moveToThisTextBlock(tr, paragraphPos, 1);
    setSelection(tr, selection);
  } else {
    const paragraphStartPos = tr.doc.resolve(paragraphPos + 1);
    moveToNearestTextSelection(tr, paragraphStartPos, 1);
  }
};
/**
 * Set the selection to the paragraph with an optional offset.
 *
 * @param tr - The current transaction.
 * @param paragraphPos - The position of the paragraph in the document.
 * @param paragraphNode - The paragraph node.
 * @param offsetInNode - The offset in the paragraph node. Default is 0.
 * @returns {void}
 */
const setSelectionToParagraph = (tr, paragraphPos, paragraphNode, offsetInNode = 0) => {
  if (isNodeEmpty(paragraphNode)) {
    // Node will not have a text selection so move to the start of the paragraph
    setSelectionToStartOfParagraph(tr, paragraphPos, paragraphNode);
  } else {
    if (!inRange(offsetInNode, 0, paragraphNode.nodeSize - 1)) {
      console.warn("Cannot set selection: Invalid offset in node. Node is of size", paragraphNode.nodeSize);
      return;
    }
    const paragraphPosWithOffset = paragraphPos + offsetInNode;
    const $pos = tr.doc.resolve(paragraphPosWithOffset);
    moveToNearestTextSelection(tr, $pos, 1);
  }
};
/**
 * Set the selection to the end of the paragraph.
 *
 * @param tr - The current transaction.
 * @param paragraphPos - The position of the paragraph in the document.
 * @param paragraphNode - The paragraph node.
 * @returns {void}
 */
const setSelectionToEndOfParagraph = (tr, paragraphPos, paragraphNode) => {
  if (isNodeEmpty(paragraphNode)) {
    // Node will not have a text selection so move to the start=end of the paragraph
    setSelectionToStartOfParagraph(tr, paragraphPos, paragraphNode);
  } else {
    const paragraphEndPos = tr.doc.resolve(paragraphPos + paragraphNode.nodeSize - 1);
    moveToNearestTextSelection(tr, paragraphEndPos, -1);
  }
};
/**
 * Move the cursor to the previous text block.
 *
 * @param tr - The current transaction.
 * @param $pos - The resolved position in the document.
 * @returns {Selection} The new selection.
 */
const moveToPreviousTextBlock = (tr, $pos) => {
  if (typeof $pos === "number") {
    return moveToPreviousTextBlock(tr, tr.doc.resolve($pos));
  }
  const prevPos = $pos.pos - 1;
  const prevResPos = tr.doc.resolve(prevPos);
  const searchDirection = -1;
  const selection = Selection.near(prevResPos, searchDirection);
  return selection;
};
/**
 * Caps the offset in the node to the length of the node.
 *
 * @param tr - The current transaction.
 * @param $pos - The resolved position in the document.
 * @param offsetInNode - The offset in the node.
 * @returns {number} The capped offset in the node.
 */
const capOffsetInNode = (tr, $pos, offsetInNode) => {
  const thisNode = tr.doc.nodeAt($pos.pos);
  if (!thisNode) {
    console.warn(`Unable to resolve node at position ${$pos.pos}. Capping offset to 0`);
    return offsetInNode;
  }
  return Math.min(offsetInNode, thisNode.nodeSize - 1);
};
/**
 * Move the cursor to the current text block.
 *
 * @param tr - The current transaction.
 * @param $pos - The resolved position in the document.
 * @param bias - The search direction. Default is 1 (forward).
 * @param offsetInNode - The offset in the node. Default is 0. Will cap at the length of the node.
 * @returns {Selection} The new selection.
 */
const moveToThisTextBlock = (tr, $pos, bias = 1, offsetInNode = 0) => {
  if (typeof $pos === "number") {
    $pos = tr.doc.resolve($pos);
  }
  const adjustedOffset = capOffsetInNode(tr, $pos, offsetInNode);
  const offsetPos = $pos.pos + adjustedOffset;
  const $offsetPos = tr.doc.resolve(offsetPos);
  const selection = Selection.near($offsetPos, bias);
  return selection;
};
/**
 * Move the cursor to the next text block.
 *
 * @param tr - The current transaction.
 * @param $pos - The resolved position in the document.
 * @returns {Selection} The new selection.
 */
const moveToNextTextBlock = (tr, $pos) => {
  if (typeof $pos === "number") {
    return moveToNextTextBlock(tr, tr.doc.resolve($pos));
  }
  const nextPos = $pos.pos + 1;
  const nextResPos = tr.doc.resolve(nextPos);
  const searchDirection = 1;
  const selection = Selection.near(nextResPos, searchDirection);
  return selection;
};
/**
 * Move the cursor to the nearest text selection.
 *
 * @param tr - The current transaction.
 * @param $pos - The resolved position in the document.
 * @param bias - The search direction.
 * @returns {void} The new selection.
 */
const moveToNearestTextSelection = (tr, $pos, bias = 1) => {
  const textSelection = getNearestTextSelection($pos, bias);
  setSelection(tr, textSelection);
};
/**
 * Get the nearest text selection to the given position.
 *
 * @param $pos - The resolved position in the document.
 * @param bias - The search direction.
 * @returns {Selection} The nearest text selection.
 */
const getNearestTextSelection = ($pos, bias = 1) => {
  return TextSelection.near($pos, bias);
};
/**
 * Move the cursor to the nearest valid cursor position.
 *
 * @param tr - The current transaction.
 * @param $pos - The resolved position in the document.
 * @returns {Selection} The new selection.
 */
const moveToNearestValidCursorPosition = $pos => {
  const selection = Selection.findFrom($pos, 1, true) || Selection.findFrom($pos, -1, true);
  return selection;
};

/**
 * @file /src/utils/nodes/document.ts
 * @name Document
 * @description Utility functions for the document node.
 */
/**
 * Check if the given position is at the start of the document.
 *
 * @param doc - The document node.
 * @param $pos - The resolved position in the document or the absolute position of the node.
 * @param allowTextBlock - Whether to allow text blocks at the start of the document. Default is false.
 * @returns {boolean} True if the position is at the start of the document, false otherwise.
 */
const isPosAtStartOfDocument = (doc, $pos, allowTextBlock) => {
  if (typeof $pos === "number") {
    return isPosAtStartOfDocument(doc, doc.resolve($pos));
  }
  const maxPos = 1;
  return $pos.pos <= maxPos;
};
/**
 * Check if the given position is at the end of the document.
 *
 * @param doc - The document node.
 * @param $pos - The resolved position in the document or the absolute position of the node.
 * @returns {boolean} True if the position is at the end of the document, false otherwise.
 */
const isPosAtEndOfDocument = (doc, $pos) => {
  if (typeof $pos === "number") {
    return isPosAtEndOfDocument(doc, doc.resolve($pos));
  }
  return $pos.pos >= doc.nodeSize - 2;
};

/**
 * @file /src/utils/pageRegion/body.ts
 * @name Body
 * @description Utility functions for body in the editor.
 */
/**
 * Check if the given node is a body node.
 *
 * @param node - The node to check.
 * @returns {boolean} True if the node is a body node, false otherwise.
 */
const isBodyNode = node => {
  if (!node) {
    console.warn("No node provided");
    return false;
  }
  return node.type.name === BODY_NODE_NAME;
};
/**
 * Retrieves the body node attributes, filling in any missing attributes with the default values.
 * @param bodyNode - The body node to retrieve the attributes for.
 * @returns {BodyNodeAttributes} The attributes of the specified body.
 */
const getBodyNodeAttributes = bodyNode => {
  const {
    attrs
  } = bodyNode;
  return {
    ...BODY_DEFAULT_ATTRIBUTES,
    ...attrs
  };
};
/**
 * Get the page margins from a body node.
 *
 * @param bodyNode - The body node to get the page margins from.
 * @returns {Nullable<MarginConfig>} The page margins of the specified page.
 */
const getBodyNodeMargins = bodyNode => {
  const {
    attrs
  } = bodyNode;
  return attrs[BODY_NODE_ATTR_KEYS.pageMargins];
};

/**
 * @file /src/constants/pageRegions.ts
 * @name PageRegions
 * @description Constants for page regions in the editor.
 */
const HEADER_FOOTER_NODE_NAME = "header-footer";
/**
 * Key for the header footer node attributes.
 */
const HEADER_FOOTER_NODE_ATTR_KEYS = {
  type: "type",
  pageEndOffset: "pageEndOffset",
  height: "height",
  xMargins: "xMargins"
};
/**
 * Default attributes for header and footer nodes.
 */
const HEADER_FOOTER_DEFAULT_ATTRIBUTES = {
  height: 10,
  xMargins: {
    left: 25.4,
    right: 25.4
  },
  pageEndOffset: 10
};
/**
 * Default attributes for header nodes
 */
const HEADER_DEFAULT_ATTRIBUTES = {
  type: "header",
  ...HEADER_FOOTER_DEFAULT_ATTRIBUTES
};
/**
 * Default attributes for footer nodes
 */
const FOOTER_DEFAULT_ATTRIBUTES = {
  type: "footer",
  ...HEADER_FOOTER_DEFAULT_ATTRIBUTES
};
/**
 * The header/footer node attributes.
 */
const HEADER_FOOTER_ATTRIBUTES = Object.fromEntries(Object.entries(HEADER_DEFAULT_ATTRIBUTES).map(([key, value]) => [key, {
  default: value
}]));

/**
 * @file /src/utils/page.ts
 * @name Page
 * @description Utility functions for page nodes in the editor.
 */
/**
 * Check if the given node is a page node.
 *
 * @param node - The node to check.
 * @returns {boolean} True if the node is a page node, false otherwise.
 */
const isPageNode = node => {
  if (!node) {
    console.warn("No node provided");
    return false;
  }
  return node.type.name === PAGE_NODE_NAME;
};
/**
 * Check if the document has page nodes.
 *
 * @param state - The editor state.
 * @returns {boolean} True if the document has page nodes, false otherwise.
 */
const doesDocHavePageNodes = state => {
  const {
    schema
  } = state;
  const pageType = schema.nodes.page;
  let hasPageNodes = false;
  state.doc.forEach(node => {
    if (node.type === pageType) {
      hasPageNodes = true;
      return false;
    }
  });
  return hasPageNodes;
};
/**
 * Collect page nodes and their positions in the document.
 *
 * @param doc - The document node.
 * @returns {NodePosArray} A map of page positions to page nodes.
 */
const collectPageNodes = doc => {
  const pageNodes = [];
  doc.forEach((node, offset) => {
    if (isPageNode(node)) {
      pageNodes.push({
        node,
        pos: offset
      });
    }
  });
  return pageNodes;
};
/**
 * Given a position in the document, get the child node of the page node at that position.
 * I.e. that will be a header/footer node or a body node.
 * @param doc - The document node.
 * @param $pos - The resolved position in the document.
 * @returns {NullableNodePos} The child node position of the page node at the given position.
 */
const getPageChildNodePosFromPosition = (doc, $pos) => {
  if (typeof $pos === "number") {
    return getPageChildNodePosFromPosition(doc, doc.resolve($pos));
  }
  const pageChildPos = getParentNodePosOfType(doc, $pos, [BODY_NODE_NAME, HEADER_FOOTER_NODE_NAME]);
  const pageChildNode = doc.nodeAt(pageChildPos.pos);
  if (!pageChildNode) {
    console.warn("No page child node found");
    return {
      pos: -1,
      node: pageChildNode
    };
  }
  return {
    pos: pageChildPos.pos,
    node: pageChildNode
  };
};

/**
 * @file /src/utils/nodes/page/pageRange.ts
 * @name PageRange
 * @description Utility functions for page ranges.
 */
/**
 * Get the page number of the given node.
 *
 * @param node - The node to get the page number for.
 * @returns {Nullable<number>} The page number of the node or null if the node is not a page node.
 */
const getNumPagesInDoc = doc => {
  return doc.childCount;
};
/**
 * Get the last page number in the document (0-indexed).
 * @param doc - The current document.
 * @returns {number} The last page number in the document (0-indexed).
 */
const getLastPageNum = doc => {
  return getNumPagesInDoc(doc) - 1;
};
/**
 * Handles cases where the given page number is out of range.
 * Logs a warning and falls back to the last page number.
 *
 * @param state - The current editor state.
 * @param pageNum - The page number to validate.
 * @param fallbackFn - A function to determine the fallback value based on the last page number.
 * @returns {T} The result of the fallback function.
 */
const handleOutOfRangePageNum = (state, pageNum, fallbackFn) => {
  console.warn("Page number:", pageNum, "is out of range for the document. Using last page.");
  const lastPageNum = getLastPageNum(state.doc);
  return fallbackFn(state, lastPageNum);
};
/**
 * Check if the page number is in range for the document.
 *
 * @param doc - The current document.
 * @param pageNum - The page number to check (0-indexed).
 * @returns {boolean} True if the page number is in range, false otherwise.
 */
const isPageNumInRange = (doc, pageNum) => {
  const lastPageNum = getLastPageNum(doc);
  return inRange(pageNum, 0, lastPageNum);
};

/**
 * @file /src/utils/nodes/page/pagePosition.ts
 * @name PagePosition
 * @description Utility functions for page position nodes.
 */
/**
 * Get the page node (parent of the current node) position.
 * @param doc - The document node.
 * @param pos - The resolved position in the document or the absolute position of the node.
 * @returns {number} The position of the page node.
 */
const getThisPageNodePosition = (doc, pos) => {
  return getParentNodePosOfType(doc, pos, PAGE_NODE_NAME).pos;
};
/**
 * Get the page node position and the page node itself.
 *
 * @param doc - The document node.
 * @param pos - The resolved position in the document or the absolute position of the node.
 * @returns {NullableNodePos} The position and the node of the page.
 */
const getPageNodeAndPosition = (doc, pos) => {
  if (typeof pos === "number") {
    return getPageNodeAndPosition(doc, doc.resolve(pos));
  }
  const pagePos = getThisPageNodePosition(doc, pos);
  const pageNode = doc.nodeAt(pagePos);
  if (!isPageNode(pageNode)) {
    console.warn("No page node found");
    return {
      pos: -1,
      node: pageNode
    };
  }
  return {
    pos: pagePos,
    node: pageNode
  };
};
/**
 * Get the child of the page node at the specified position.
 *
 * @param doc - The document node.
 * @param pos - The resolved position in the document or the absolute position of the node.
 * @returns {DirectChild} The child of the page node at the specified position.
 */
const getPageChild = (doc, pos) => {
  if (typeof pos !== "number") {
    return getPageChild(doc, pos.pos);
  }
  return doc.childAfter(pos);
};
/**
 * Gets the page node of the page before the page at the specified position.
 *
 * @param doc - The document node.
 * @param pos - Any position in the current page.
 * @returns {NullableNodePos} The page node of the page before the current page.
 */
const getPageBeforePos = (doc, pos) => {
  const thisPageChild = getPageChild(doc, pos);
  const thisPageNode = thisPageChild.node;
  if (!thisPageNode || !isPageNode(thisPageNode)) {
    console.warn("No page node found");
    return {
      node: null,
      pos: -1
    };
  }
  const pageNum = thisPageChild.index;
  const prevPageNum = pageNum - 1;
  if (!isPageNumInRange(doc, prevPageNum)) {
    return {
      node: null,
      pos: -1
    };
  }
  const prevPagePos = thisPageChild.offset - 1;
  return getPageNodeAndPosition(doc, prevPagePos);
};
/**
 * Gets the page node of the page after the page at the specified position.
 *
 * @param doc - The document node.
 * @param pos - Any position in the current page.
 * @returns {NullableNodePos} The page node of the page after the current page.
 */
const getPageAfterPos = (doc, pos) => {
  const thisPageChild = getPageChild(doc, pos);
  const thisPageNode = thisPageChild.node;
  if (!thisPageNode || !isPageNode(thisPageNode)) {
    console.warn("No page node found");
    return {
      node: null,
      pos: -1
    };
  }
  const pageNum = thisPageChild.index;
  const nextPageNum = pageNum + 1;
  if (!isPageNumInRange(doc, nextPageNum)) {
    return {
      node: null,
      pos: -1
    };
  }
  const nextPagePos = thisPageChild.offset + thisPageNode.nodeSize;
  return getPageNodeAndPosition(doc, nextPagePos);
};

/**
 * @file /src/utils/pageRegion/pageRegion.ts
 * @name PageRegion
 * @description Utility functions for creating custom page regions in the editor.
 */
/**
 * Determines if the given node is a header node.
 *
 * @param node - The node to check.
 * @returns {boolean} True if the node is a header node, false otherwise.
 */
const isHeaderFooterNode = node => {
  return node.type.name === HEADER_FOOTER_NODE_NAME;
};
/**
 * Get the type of the header or footer node.
 *
 * @param headerFooterNode - The header or footer node to retrieve the type for.
 * @returns {Nullable<HeaderFooter>} The type of the specified header or footer node or null if not found.
 */
const getHeaderFooterNodeType = headerFooterNode => {
  const {
    attrs
  } = headerFooterNode;
  return attrs[HEADER_FOOTER_NODE_ATTR_KEYS.type];
};
/**
 * Get the x margins from a header or footer node.
 *
 * @param headerFooterNode - The header or footer node.
 * @returns {Nullable<XMarginConfig>} The x margins of the specified header or footer.
 */
const getHeaderFooterNodeXMargins = headerFooterNode => {
  const {
    attrs
  } = headerFooterNode;
  return attrs[HEADER_FOOTER_NODE_ATTR_KEYS.xMargins];
};
/**
 * Get the page end offset of the header or footer node.
 *
 * @param headerFooterNode - The header or footer node to retrieve the page end offset for.
 * @returns {Nullable<number>} The page end offset of the specified header or footer node or null if not found.
 */
const getHeaderFooterNodePageEndOffset = headerFooterNode => {
  const {
    attrs
  } = headerFooterNode;
  return attrs[HEADER_FOOTER_NODE_ATTR_KEYS.pageEndOffset];
};
/**
 * Get the height of the header or footer node.
 *
 * @param headerFooterNode - The header or footer node to retrieve the height for.
 * @returns {Nullable<number>} The height of the specified header or footer node or null if not found.
 */
const getHeaderFooterNodeHeight = headerFooterNode => {
  const {
    attrs
  } = headerFooterNode;
  return attrs[HEADER_FOOTER_NODE_ATTR_KEYS.height];
};
/**
 * Retrieves the header node attributes, filling in any missing attributes with the default values.
 * @param headerFooterNode - The header or footer node to retrieve the attributes for.
 * @returns {HeaderNodeAttributes} The attributes of the specified header.
 */
const getHeaderNodeAttributes = headerFooterNode => {
  const {
    attrs
  } = headerFooterNode;
  const mergedAttrs = {
    ...HEADER_DEFAULT_ATTRIBUTES,
    ...attrs
  };
  if (mergedAttrs.type !== "header") {
    console.warn("Header node attributes are not of type 'header'");
  }
  return mergedAttrs;
};
/**
 * Retrieves the footer node attributes, filling in any missing attributes with the default values.
 * @param headerFooterNode - The header or footer node to retrieve the attributes for.
 * @returns {FooterNodeAttributes} The attributes of the specified footer.
 */
const getFooterNodeAttributes = headerFooterNode => {
  const {
    attrs
  } = headerFooterNode;
  const mergedAttrs = {
    ...FOOTER_DEFAULT_ATTRIBUTES,
    ...attrs
  };
  if (mergedAttrs.type !== "footer") {
    console.warn("Footer node attributes are not of type 'footer'");
  }
  return mergedAttrs;
};

/**
 * @file /src/utils/nodes/page/pageNumber.ts
 * @name PageNumber
 * @description Utility functions for page numbers
 */
/**
 * Get the page node by page number.
 *
 * @param doc - The current document.
 * @param pageNum - The page number to find the page node for (0-indexed).
 * @returns {Nullable<PMNode>} The page node of the specified page or null
 * if the page could not be found.
 */
const getPageNodeByPageNum = (doc, pageNum) => {
  if (!isPageNumInRange(doc, pageNum)) {
    console.warn("Page number:", pageNum, "is out of range for the document");
    return null;
  }
  const pageNode = doc.child(pageNum);
  if (!isPageNode(pageNode)) {
    console.error("Unexpected! Doc child num:", pageNum, "is not a page node!");
    return null;
  }
  return pageNode;
};
/**
 * Get the page node and position by page number.
 *
 * @param doc - The current document.
 * @param pageNum - The page number to find the page node for (0-indexed).
 * @returns {Nullable<NodePos>} The page node position of the specified page or null
 * if the page could not be found.
 */
const getPageNodePosByPageNum = (doc, pageNum) => {
  if (!isPageNumInRange(doc, pageNum)) {
    console.warn("Page number:", pageNum, "is out of range for the document");
    return null;
  }
  const pageNodes = collectPageNodes(doc);
  return pageNodes[pageNum];
};
/**
 * Get the page number of the resolved position.
 *
 * @param doc - The document node.
 * @param $pos - The resolved position in the document.
 * @param zeroIndexed - Whether to return the page number as zero-indexed. Default is true.
 * @returns {number} The page number of the resolved position.
 */
const getPageNumber = (doc, $pos, zeroIndexed = true) => {
  if (typeof $pos === "number") {
    return getPageNumber(doc, doc.resolve($pos));
  }
  const {
    pos: pagePos
  } = getPageNodeAndPosition(doc, $pos);
  if (pagePos < 0) {
    console.log("Unable to find page node");
    return -1;
  }
  const pageNodes = collectPageNodes(doc);
  const pageNode = pageNodes.findIndex(node => node.pos === pagePos);
  return pageNode + (zeroIndexed ? 0 : 1);
};
/**
 * Retrieves a specific attribute of a given page number.
 * Falls back to defaults if the page number is invalid or the attribute is missing.
 *
 * @param state - The editor state.
 * @param pageNum - The page number to retrieve the attribute for.
 * @param defaultValue - The default value to return if the attribute is missing.
 * @param getNodeAttribute - A function to extract the attribute from the page node.
 * @returns {T} The attribute of the specified page or default.
 */
const getPageAttributeByPageNum = (state, pageNum, defaultValue, getNodeAttribute) => {
  if (!doesDocHavePageNodes(state)) {
    return defaultValue;
  }
  const {
    doc
  } = state;
  if (!isPageNumInRange(doc, pageNum)) {
    return handleOutOfRangePageNum(state, pageNum, (s, p) => getPageAttributeByPageNum(s, p, defaultValue, getNodeAttribute));
  }
  const pageNode = getPageNodeByPageNum(doc, pageNum);
  if (!pageNode) {
    return defaultValue;
  }
  return getNodeAttribute(pageNode) ?? defaultValue;
};

/**
 * @file /src/utils/pageRegion/getAttributes.ts
 * @name GetAttributes
 * @description Utility functions for getting page region attributes.
 */
/**
 * Get the page region node of the current page by the page region type.
 *
 * @param pageNode - The page node to search for the neighbouring page region.
 * @param regionType - The type of the page region to search for.
 * @returns {Nullable<PMNode>} The neighbouring page region node or null if not found.
 */
const getPageRegionNode = (pageNode, regionType) => {
  let pageRegionNode = null;
  pageNode.forEach(node => {
    if (isHeaderFooterNode(node)) {
      if (getHeaderFooterNodeType(node) === regionType) {
        pageRegionNode = node;
      }
    } else if (isBodyNode(node)) {
      if (node.type.name === regionType) {
        pageRegionNode = node;
      }
    }
  });
  return pageRegionNode;
};
/**
 * Get the page region node and position of the current page by the page region type.
 *
 * @param pagePos - The position of the page node to search for the neighbouring page region.
 * @param pageNode - The page node to search for the neighbouring page region.
 * @param regionType - The type of the page region to search for.
 * @returns {NullableNodePos} The neighbouring page region node and position or null if not found.
 */
const getPageRegionNodeAndPos = (pagePos, pageNode, regionType) => {
  let pageRegionNode = null;
  let pos = pagePos;
  if (!pageNode) {
    return {
      node: null,
      pos: -1
    };
  }
  pageNode.forEach((node, offset) => {
    if (!pageRegionNode) {
      if (isHeaderFooterNode(node)) {
        if (getHeaderFooterNodeType(node) === regionType) {
          pageRegionNode = node;
          pos += offset + 1;
        }
      } else if (isBodyNode(node)) {
        if (node.type.name === regionType) {
          pageRegionNode = node;
          pos += offset + 1;
        }
      }
    }
  });
  return {
    node: pageRegionNode,
    pos: pageRegionNode ? pos : -1
  };
};
/**
 * Retrieves a specific attribute of a the body node of specified type of a given page number.
 * Falls back to the default value if the page number is invalid or the attribute is missing.
 *
 * @param state - The editor state.
 * @param pageNum - The page number to retrieve the attribute for.
 * @param regionType - The type of the region to retrieve the attribute for.
 * @param defaultValue - The default value to return if the attribute is missing.
 * @param getNodeAttribute - A function to retrieve the attribute from a body node.
 * @returns {T} The attribute of the specified body node or default.
 */
const getPageRegionAttributeByPageNum = (state, pageNum, regionType, defaultValue, getNodeAttribute) => {
  if (!doesDocHavePageNodes(state)) {
    return defaultValue;
  }
  const {
    doc
  } = state;
  if (!isPageNumInRange(doc, pageNum)) {
    return handleOutOfRangePageNum(state, pageNum, (s, p) => getPageRegionAttributeByPageNum(s, p, regionType, defaultValue, getNodeAttribute));
  }
  const pageNode = getPageNodeByPageNum(doc, pageNum);
  if (!pageNode) {
    return defaultValue;
  }
  const pageRegionNode = getPageRegionNode(pageNode, regionType);
  if (!pageRegionNode) {
    return defaultValue;
  }
  return getNodeAttribute(pageRegionNode) ?? defaultValue;
};

/**
 * @file /src/utils/nodes/body/bodyPosition.ts
 * @name BodyPosition
 * @description Utility functions for the body position node.
 */
/**
 * Get the body node (parent of the current node) position.
 * @param doc - The document node.
 * @param pos - The resolved position in the document or the absolute position of the node.
 * @returns {number} The position of the body node.
 */
const getThisBodyNodePosition = (doc, pos) => {
  return getParentNodePosOfType(doc, pos, BODY_NODE_NAME).pos;
};
/**
 * Get the body node position and the body node itself.
 *
 * @param doc - The document node.
 * @param pos - The resolved position in the document or the absolute position of the node.
 * @returns {bodyPos: number, bodyNode: Node} The position and the node of the body.
 */
const getBodyNodeAndPosition = (doc, pos) => {
  if (typeof pos === "number") {
    return getBodyNodeAndPosition(doc, doc.resolve(pos));
  }
  const bodyPos = getThisBodyNodePosition(doc, pos);
  const bodyNode = doc.nodeAt(bodyPos);
  if (!isBodyNode(bodyNode)) {
    console.warn("No body node found");
    return {
      bodyPos: -1,
      bodyNode
    };
  }
  return {
    bodyPos,
    bodyNode
  };
};
/**
 * Get the start of the body position.
 *
 * @param doc - The document node.
 * @param pos - The resolved position in the document or the absolute position of the node.
 * @returns {number} The start position of the body.
 */
const getStartOfBodyPosition = (doc, pos) => {
  if (typeof pos === "number") {
    return getStartOfBodyPosition(doc, doc.resolve(pos));
  }
  const {
    bodyPos
  } = getBodyNodeAndPosition(doc, pos);
  return bodyPos;
};
/**
 * Get the end of the body position.
 *
 * @param doc - The document node.
 * @param pos - The resolved position in the document or the absolute position of the node.
 * @returns {number} The end position of the body.
 */
const getEndOfBodyPosition = (doc, pos) => {
  if (typeof pos === "number") {
    return getEndOfBodyPosition(doc, doc.resolve(pos));
  }
  const {
    bodyPos,
    bodyNode
  } = getBodyNodeAndPosition(doc, pos);
  if (!bodyNode) {
    return bodyPos;
  }
  return bodyPos + bodyNode.content.size;
};
/**
 * Gets the previous page's body and positiom, if any, after the given position.
 * @param doc - The current document.
 * @param pos - Any position within the current page's body
 * @returns {NullableNodePos} The previous page's body and position, if any.
 */
const getBodyBeforePos = (doc, pos) => {
  const previousPage = getPageBeforePos(doc, pos);
  if (!previousPage.node) {
    return previousPage;
  }
  const {
    node: previousPageNode,
    pos: previousPagePos
  } = previousPage;
  return getPageRegionNodeAndPos(previousPagePos, previousPageNode, BODY_NODE_NAME);
};
/**
 * Gets the next page's body and positiom, if any, after the given position.
 * @param doc - The current document.
 * @param pos - Any position within the current page's body
 * @returns {NullableNodePos} The next page's body and position, if any.
 */
const getBodyAfterPos = (doc, pos) => {
  const nextPage = getPageAfterPos(doc, pos);
  if (!nextPage.node) {
    return nextPage;
  }
  const {
    node: nextPageNode,
    pos: nextPagePos
  } = nextPage;
  return getPageRegionNodeAndPos(nextPagePos, nextPageNode, BODY_NODE_NAME);
};

/**
 * @file /src/utils/nodes/text.ts
 * @name Text
 * @description Utility functions for text nodes.
 */
/**
 * Check if the given node is a text node.
 *
 * @param node - The node to check.
 * @returns {boolean} True if the node is a text node, false otherwise.
 */
const isTextNode = node => {
  if (!node) {
    console.warn("No node provided");
    return false;
  }
  return node.type.name === "text";
};
/**
 * Check if the given position is at the start of the text node.
 *
 * @param doc - The document node.
 * @param $pos - The resolved position in the document or the absolute position of the node.
 * @returns {boolean} True if the position is at the start of the text node, false otherwise.
 */
const isAtStartOfTextNode = (doc, $pos) => {
  if (typeof $pos === "number") {
    return isAtStartOfTextNode(doc, doc.resolve($pos));
  }
  const {
    pos: textPos,
    node: textNode
  } = getTextNodeAndPosition(doc, $pos);
  if (!textNode) {
    return false;
  }
  return $pos.pos === textPos;
};
/**
 * Check if the given position is at the end of the text node.
 *
 * @param doc - The document node.
 * @param $pos - The resolved position in the document or the absolute position of the node.
 * @returns {boolean} True if the position is at the end of the text node, false otherwise.
 */
const isAtEndOfTextNode = (doc, $pos) => {
  if (typeof $pos === "number") {
    return isAtEndOfTextNode(doc, doc.resolve($pos));
  }
  const {
    pos: textPos,
    node: textNode
  } = getTextNodeAndPosition(doc, $pos);
  if (!textNode) {
    return false;
  }
  return $pos.pos + 1 === textPos + textNode.nodeSize;
};
/**
 * Get the position of the text node.
 *
 * @param doc - The document node.
 * @param pos - The resolved position in the document or the absolute position of the node.
 * @returns {number} The position of the text node.
 */
const getThisTextNodePosition = (doc, pos) => {
  return getParentNodePosOfType(doc, pos, "text").pos;
};
/**
 * Get the text node and the position of the text node.
 *
 * @param doc - The document node.
 * @param pos - The resolved position in the document or the absolute position of the node.
 * @returns {NullableNodePos} The text node and the position of the text node.
 */
const getTextNodeAndPosition = (doc, pos) => {
  if (typeof pos === "number") {
    return getTextNodeAndPosition(doc, doc.resolve(pos));
  }
  const textPos = getThisTextNodePosition(doc, pos);
  const textNode = doc.nodeAt(textPos);
  if (!isTextNode(textNode)) {
    console.warn("No text node found");
    return {
      pos: -1,
      node: textNode
    };
  }
  return {
    pos: textPos,
    node: textNode
  };
};
/**
 * Measure the width and height of a text node.
 *
 * @param text - The text content of the node.
 * @param computedStyles - The computed styles of the node.
 * @returns {DOMRect} The bounding rectangle of the text node.
 */
const measureText = (text, computedStyles) => {
  const span = document.createElement("span");
  span.textContent = text;
  span.style.position = "absolute";
  span.style.visibility = "hidden";
  span.style.whiteSpace = "nowrap";
  span.style.font = computedStyles.font;
  span.style.letterSpacing = computedStyles.letterSpacing;
  span.style.wordSpacing = computedStyles.wordSpacing;
  span.style.lineHeight = computedStyles.lineHeight;
  document.body.appendChild(span);
  const clientBoundingRect = span.getBoundingClientRect();
  document.body.removeChild(span);
  return clientBoundingRect;
};
/**
 * Measure the cumulative width of each character in a text node.
 *
 * @param textContent - The text content of the node.
 * @param computedStyles - The computed styles of the node.
 * @returns {number[]} The cumulative width of each character in the text node.
 */
const measureCumulativeTextWidths = (textContent, computedStyles) => {
  const cumulativeWidths = [];
  let cumulativeWidth = 0;
  for (let i = 0; i < textContent.length; i++) {
    const char = textContent[i];
    const {
      width
    } = measureText(char, computedStyles);
    cumulativeWidth += width;
    cumulativeWidths.push(cumulativeWidth);
  }
  return cumulativeWidths;
};

/**
 * @file /src/utils/nodes/hardBreak.ts
 * @name HardBreak
 * @description Utility functions for hard breaks.
 */
/**
 * Check if the given node is a hard break node.
 *
 * @param node - The node to check.
 * @returns {boolean} True if the node is a hard break node, false otherwise.
 */
const isHardBreakNode = node => {
  return node.type.name === "hardBreak";
};
/**
 * Check if the given position is at the start of the hard break node.
 *
 * @param doc - The document node.
 * @param $pos - The resolved position in the document or the absolute position of the node.
 * @returns {boolean} True if the position is at the start of the hard break node, false otherwise.
 */
const isAtHardBreak = (doc, $pos) => {
  if (typeof $pos === "number") {
    return isAtHardBreak(doc, doc.resolve($pos));
  }
  const node = doc.nodeAt($pos.pos);
  if (!node) {
    return false;
  }
  return isHardBreakNode(node);
};

/**
 * @file /src/utils/paragraph.ts
 * @name Paragraph
 * @description Utility functions for paragraphs.
 */
/**
 * Check if the given node is a paragraph node.
 *
 * @param node - The node to check.
 * @returns {boolean} True if the node is a paragraph node, false otherwise.
 */
const isParagraphNode = node => {
  if (!node) {
    console.warn("No node provided");
    return false;
  }
  return node.type.name === "paragraph";
};
/**
 * Get the type of the node at the specified position.
 *
 * @param $pos - The resolved position in the document.
 * @returns The type of the node at the specified position.
 */
const isPositionWithinParagraph = $pos => {
  return getPositionNodeType($pos) === "paragraph";
};
/**
 * Get the start of the paragraph position.
 *
 * @param doc - The document node.
 * @param pos - The resolved position in the document or the absolute position of the node.
 * @returns {number} The start position of the paragraph.
 */
const getStartOfParagraphPosition = (doc, pos) => {
  if (typeof pos === "number") {
    return getStartOfParagraphPosition(doc, doc.resolve(pos));
  }
  const {
    pos: paragraphPos
  } = getParagraphNodeAndPosition(doc, pos);
  return paragraphPos;
};
/**
 * Get the end of the paragraph position.
 *
 * @param doc - The document node.
 * @param pos - The resolved position in the document or the absolute position of the node.
 * @returns {number} The end position of the paragraph.
 */
const getEndOfParagraphPosition = (doc, $pos) => {
  if (typeof $pos === "number") {
    return getEndOfParagraphPosition(doc, doc.resolve($pos));
  }
  const {
    pos: paragraphPos,
    node: paragraphNode
  } = getParagraphNodeAndPosition(doc, $pos);
  if (!paragraphNode) {
    return paragraphPos;
  }
  return paragraphPos + paragraphNode.content.size;
};
/**
 * Get the previous paragraph node.
 *
 * @param doc - The document node.
 * @param pos - The position in the document.
 * @returns {NullableNodePos} The previous paragraph node or null if not found and position.
 */
const getPreviousParagraph = (doc, pos) => {
  let prevParagraphPos = pos;
  let prevParagraphNode = null;
  while (prevParagraphNode === null && prevParagraphPos > 0) {
    prevParagraphPos -= 1;
    const node = doc.nodeAt(prevParagraphPos);
    if (!node) {
      continue;
    }
    if (isParagraphNode(node)) {
      prevParagraphNode = node;
      prevParagraphPos = prevParagraphPos;
    }
  }
  if (!prevParagraphNode) {
    prevParagraphPos = -1;
  }
  return {
    pos: prevParagraphPos,
    node: prevParagraphNode
  };
};
/**
 * Get the next paragraph node.
 *
 * @param doc - The document node.
 * @param pos - The position in the document.
 * @returns {NullableNodePos} The next paragraph node or null if not found and position.
 */
const getNextParagraph = (doc, pos) => {
  const documentLength = doc.content.size;
  let nextParagraphPos = pos;
  let nextParagraphNode = null;
  while (nextParagraphNode === null && nextParagraphPos < documentLength) {
    nextParagraphPos += 1;
    const node = doc.nodeAt(nextParagraphPos);
    if (!node) {
      continue;
    }
    if (isParagraphNode(node)) {
      nextParagraphNode = node;
      nextParagraphPos = nextParagraphPos;
    }
  }
  if (!nextParagraphNode) {
    nextParagraphPos = -1;
  }
  return {
    pos: nextParagraphPos,
    node: nextParagraphNode
  };
};
/**
 * Determine if the resolved position is at the start of a paragraph node.
 *
 * @param doc - The document node.
 * @param $pos - The resolved position in the document.
 * @returns {boolean} True if the position is at the start of a paragraph node, false otherwise.
 */
const isAtStartOfParagraph = (doc, $pos) => {
  if (typeof $pos === "number") {
    return isAtStartOfParagraph(doc, doc.resolve($pos));
  }
  const {
    pos: paragraphPos,
    node: paragraphNode
  } = getParagraphNodeAndPosition(doc, $pos);
  if (!paragraphNode) {
    return false;
  }
  // We allow for the cursor to be at the start of the paragraph node or the start of the first text child node.
  return inRange($pos.pos, paragraphPos, paragraphPos + 1);
};
/**
 * Determine if the resolved position is at the end of a paragraph node.
 *
 * @param doc - The document node.
 * @param $pos - The resolved position in the document.
 * @returns {boolean} True if the position is at the end of a paragraph node, false otherwise.
 */
const isAtEndOfParagraph = (doc, $pos) => {
  if (typeof $pos === "number") {
    return isAtEndOfParagraph(doc, doc.resolve($pos));
  }
  const {
    pos: paragraphPos,
    node: paragraphNode
  } = getParagraphNodeAndPosition(doc, $pos);
  if (!paragraphNode) {
    return false;
  }
  return $pos.pos + 1 === paragraphPos + paragraphNode.nodeSize;
};
/**
 * Determine if the resolved position is at the start or end of a paragraph node.
 *
 * @param doc - The document node.
 * @param $pos - The resolved position in the document.
 * @returns {boolean} True if the position is at the start or end of a paragraph node, false otherwise.
 */
const isAtStartOrEndOfParagraph = (doc, $pos) => {
  return isAtStartOfParagraph(doc, $pos) || isAtEndOfParagraph(doc, $pos);
};
/**
 * Get the paragraph node position.
 *
 * @param doc - The document node.
 * @param pos - The resolved position in the document or the absolute position of the node.
 * @returns {number} The position of the paragraph node.
 */
const getThisParagraphNodePosition = (doc, pos) => {
  return getParentNodePosOfType(doc, pos, "paragraph").pos;
};
/**
 * Get the paragraph node position and the paragraph node itself.
 *
 * @param doc - The document node.
 * @param pos - The resolved position in the document or the absolute position of the node.
 * @returns {NullableNodePos} The position and the node or null if not found of the paragraph.
 */
const getParagraphNodeAndPosition = (doc, pos) => {
  if (typeof pos === "number") {
    return getParagraphNodeAndPosition(doc, doc.resolve(pos));
  }
  if (isPosAtStartOfDocument(doc, pos)) {
    return getNextParagraph(doc, pos.pos);
  } else if (isPosAtEndOfDocument(doc, pos)) {
    return getPreviousParagraph(doc, pos.pos);
  }
  const paragraphPos = getThisParagraphNodePosition(doc, pos);
  const paragraphNode = doc.nodeAt(paragraphPos);
  if (!isParagraphNode(paragraphNode)) {
    console.warn("No paragraph node found");
    return {
      pos: -1,
      node: paragraphNode
    };
  }
  return {
    pos: paragraphPos,
    node: paragraphNode
  };
};
/**
 * Gets the previous page's past body paragraph and position, if any, before the given position.
 * @param doc - The current document.
 * @param pos - Any position within the current page's body
 * @returns {NullableNodePos} The previous page body's last paragraph and position, if any.
 */
const getLastParagraphInPreviousPageBodyBeforePos = (doc, pos) => {
  const previousPageBody = getBodyBeforePos(doc, pos);
  if (!previousPageBody.node) {
    return previousPageBody;
  }
  const endOfPrevPgBodyPos = getEndOfBodyPosition(doc, previousPageBody.pos);
  return getPreviousParagraph(doc, endOfPrevPgBodyPos);
};
/**
 * Gets the next page's first body paragraph and positiom, if any, after the given position.
 * @param doc - The current document.
 * @param pos - Any position within the current page's body
 * @returns {NullableNodePos} The next page body's first paragraph and position, if any.
 */
const getFirstParagraphInNextPageBodyAfterPos = (doc, pos) => {
  const nextPageBody = getBodyAfterPos(doc, pos);
  if (!nextPageBody.node) {
    return nextPageBody;
  }
  return getNextParagraph(doc, nextPageBody.pos);
};
/**
 * Get the paragraph DOM node.
 *
 * @param view - The editor view.
 * @param paragraphPos - The position of the paragraph in the document.
 * @returns {Node} The paragraph DOM node.
 */
const getParagraphDOMNode = (view, paragraphPos) => {
  // DOM nodes are offsetted by 1 for some reason.
  const paragraphTextPos = paragraphPos + 1;
  return view.domAtPos(paragraphTextPos).node ?? null;
};
/**
 * Measure the widths of each character in a paragraph.
 *
 * @param pDOMNode - The paragraph DOM node.
 * @returns {number[]} An array of character widths.
 */
const measureTextWidths = pDOMNode => {
  const charWidths = [];
  const textContent = pDOMNode.textContent || "";
  const computedStyles = getComputedStyle(pDOMNode);
  for (let i = 0; i < textContent.length; i++) {
    const char = textContent[i];
    const {
      width
    } = measureText(char, computedStyles);
    charWidths.push(width);
  }
  return charWidths;
};
/**
 * Measure the width of the text up to a given offset in a paragraph.
 *
 * @param pDOMNode - The paragraph DOM node.
 * @param offset - The offset within the paragraph.
 * @param lineNumber - The line number within the paragraph.
 * @param lineBreakOffsets - The offsets where line breaks occur.
 * @returns {number} The width of the text up to the offset.
 */
const getTextWidthUpToOffsetInLine = (pDOMNode, offset, lineNumber, lineBreakOffsets) => {
  const textUpToOffset = pDOMNode.textContent?.slice(lineBreakOffsets[lineNumber], offset) || "";
  const computedStyles = getComputedStyle(pDOMNode);
  const {
    width
  } = measureText(textUpToOffset, computedStyles);
  return width;
};
/**
 * Get the offset within a line given the offset in the paragraph and line number.
 *
 * @param offset - The offset within the paragraph.
 * @param lineNumber - The line number within the paragraph.
 * @param lineBreakOffsets - The offsets where line breaks occur.
 * @returns {number} The offset within the line.
 */
const getOffsetInLine = (offset, lineNumber, lineBreakOffsets) => {
  if (lineNumber === 0) {
    return offset;
  }
  return offset - lineBreakOffsets[lineNumber];
};
const getOffsetForDistanceInLine = (view, pos, lineNumber, targetDistance) => {
  const pDOMNode = getPDOMNodeFromPos(view, pos);
  if (!pDOMNode) return 0;
  const lineBreakOffsets = getParagraphLineBreakOffsets(view, pDOMNode);
  const thisLineOffset = lineBreakOffsets[lineNumber];
  const nextLineOffset = lineBreakOffsets[lineNumber + 1];
  const textContent = pDOMNode.textContent?.slice(thisLineOffset, nextLineOffset) || "";
  const computedStyles = getComputedStyle(pDOMNode);
  const charWidths = measureCumulativeTextWidths(textContent, computedStyles);
  const closestIndex = findClosestIndex(charWidths, targetDistance);
  return thisLineOffset + closestIndex + 1;
};
/**
 * Measure the widths of each line in a paragraph.
 *
 * @param pDOMNode - The paragraph DOM node.
 * @returns {number[]} An array of line widths.
 */
const measureParagraphLineWidths = pDOMNode => {
  const range = document.createRange();
  range.selectNodeContents(pDOMNode);
  const rects = range.getClientRects();
  const lines = [];
  let currentLineWidths = [];
  let cumulativeLineLeft = rects[0]?.left || 0;
  let cumulativeLineTop = rects[0]?.top || 0;
  let prevLineRight = 0;
  const addNewLine = width => {
    lines.push(currentLineWidths.reduce((acc, width) => acc + width, 0));
    if (width) {
      currentLineWidths = [width];
    }
  };
  Array.from(rects).forEach((rect, index) => {
    if (index === 0) {
      // First line
      currentLineWidths.push(rect.width);
    } else {
      if (rect.left === prevLineRight) {
        // Next element in line
        currentLineWidths.push(rect.width);
      } else if (rect.left === cumulativeLineLeft && rect.top > cumulativeLineTop) {
        // New Line
        addNewLine(rect.width);
      } else if (rect.left >= cumulativeLineLeft) ; else {
        // New Line
        addNewLine(rect.width);
      }
    }
    cumulativeLineLeft = rect.left;
    cumulativeLineTop = rect.top;
    prevLineRight = rect.right;
  });
  if (currentLineWidths.length > 0) {
    // Add the last line
    addNewLine();
  }
  return lines;
};
/**
 * Get offsets where explicit and soft line breaks occur in a paragraph.
 *
 * @param pDOMNode - The paragraph DOM node.
 * @returns {number[]} An array of offsets where line breaks occur.
 */
const getParagraphLineBreakOffsets = (view, pDOMNode) => {
  const charWidths = measureTextWidths(pDOMNode);
  const lineWidths = measureParagraphLineWidths(pDOMNode);
  let offsets = [0];
  let cumulativeWidth = 0;
  let rectIndex = 0;
  let charIndex = 0;
  const sumTextNodes = node => {
    const isBr = node.nodeType === Node.ELEMENT_NODE && node.tagName === "BR";
    if (isBr && offsets[offsets.length - 1] !== charIndex) {
      offsets.push(charIndex);
      rectIndex++;
      cumulativeWidth = 0;
    } else if (isAtomNode(view, node)) {
      // Atom nodes are treated as a single character
      charIndex += 1;
    } else if (node.nodeType === Node.TEXT_NODE) {
      const nodeTextContent = node.textContent || "";
      for (let i = 0; i < nodeTextContent.length; i++) {
        charIndex += 1;
        cumulativeWidth += charWidths[charIndex] || 0;
        if (cumulativeWidth > lineWidths[rectIndex]) {
          offsets.push(charIndex);
          rectIndex++;
          cumulativeWidth = 0;
        }
      }
    } else {
      // Recursively call for nested elements
      const nestedChildren = node.childNodes;
      Array.from(nestedChildren).forEach(childNode => {
        sumTextNodes(childNode);
      });
    }
  };
  sumTextNodes(pDOMNode);
  return offsets;
};
/**
 * Get the line number for a given position within a paragraph using binary search.
 *
 * @param lineBreakOffsets - The offsets where line breaks occur.
 * @param offset - The position within the paragraph.
 * @returns {number} The line number of the position (0-indexed).
 */
const getLineNumberForPosition = (lineBreakOffsets, offset) => {
  const compareOffsets = (a, b) => a - b;
  return binarySearch(lineBreakOffsets, offset, compareOffsets);
};
const getPDOMNodeFromPos = (view, pos) => {
  if (typeof pos !== "number") {
    pos = pos.pos;
  }
  const paragraphPos = getThisParagraphNodePosition(view.state.doc, pos);
  return getParagraphDOMNode(view, paragraphPos);
};
/**
 * Helper function to calculate the total length of text content in an element.
 * It will recursively sum the lengths of all text nodes within the element.
 *
 * @param elementNode - The DOM element node (e.g., <code>, <span>).
 * @returns {number} - The total length of text content inside the element.
 */
const getTextLengthFromElement = (view, elementNode, end) => {
  let totalLength = 0;
  // Traverse all child nodes and sum the lengths of text nodes
  Array.from(elementNode.childNodes).slice(0, end).forEach(childNode => {
    if (childNode.nodeType === Node.TEXT_NODE) {
      totalLength += childNode.length;
    } else if (childNode.nodeType === Node.ELEMENT_NODE) {
      if (isAtomNode(view, childNode)) {
        // Atom nodes are treated as a single character
        totalLength += 1;
      } else {
        // Recursively call for nested elements
        totalLength += getTextLengthFromElement(view, childNode);
      }
    }
  });
  return totalLength;
};
/**
 * Calculate the paragraph end offset based on the position. Used to correct
 * getting the right DOM node when the position is at the start or end of a paragraph / text node.
 * @param view - The editor view.
 * @param pos - The [resolved] position in the document.
 * @returns {number} The paragraph end offset.
 */
const calculateParagraphEndOffset = (view, pos) => {
  const {
    doc
  } = view.state;
  if (isAtStartOfParagraph(doc, pos) || isAtStartOfTextNode(doc, pos)) {
    return 1;
  } else if (isAtEndOfParagraph(doc, pos) || isAtEndOfTextNode(doc, pos) || isAtHardBreak(doc, pos)) {
    return -1;
  } else {
    return 0;
  }
};
/**
 * Given a paragraph position and position within said paragraph, return the number of
 * lines in the paragraph and the line number of the position.
 *
 * @param view - The editor view.
 * @param pos - The [resolved] position in the document.
 * @returns {ParagraphLineInfo} The number of lines in the paragraph and the
 * line number of the position (0-indexed).
 */
const getParagraphLineInfo = (view, pos) => {
  if (typeof pos !== "number") {
    pos = pos.pos;
  }
  const returnDefaultLineInfo = () => ({
    lineCount: 0,
    lineBreakOffsets: [0],
    lineNumber: 0,
    offsetInLine: 0,
    offsetDistance: 0
  });
  const pDOMNode = getPDOMNodeFromPos(view, pos);
  if (!pDOMNode) return returnDefaultLineInfo();
  const lineBreakOffsets = getParagraphLineBreakOffsets(view, pDOMNode);
  const lineCount = lineBreakOffsets.length;
  const paragraphEndOffset = calculateParagraphEndOffset(view, pos);
  let {
    offset
  } = view.domAtPos(pos + paragraphEndOffset);
  const {
    node: paragraphNode,
    offset: paragraphOffset
  } = view.domAtPos(pos - offset + paragraphEndOffset);
  const previousOffset = getTextLengthFromElement(view, paragraphNode, paragraphOffset);
  offset += previousOffset;
  const lineNumber = getLineNumberForPosition(lineBreakOffsets, offset);
  offset -= paragraphEndOffset;
  const offsetInLine = getOffsetInLine(offset, lineNumber, lineBreakOffsets);
  const offsetDistance = getTextWidthUpToOffsetInLine(pDOMNode, offset, lineNumber, lineBreakOffsets);
  return {
    lineCount,
    lineBreakOffsets,
    lineNumber,
    offsetInLine,
    offsetDistance
  };
};
/**
 * Checks if the position is at the first line of the paragraph.
 *
 * @param view - The editor view.
 * @param $pos - The [resolved] position in the document.
 * @returns {boolean} True if the position is at the first line of the paragraph, false otherwise.
 */
const isPosAtFirstLineOfParagraph = (view, $pos) => {
  const {
    lineNumber,
    ...otherLineInfo
  } = getParagraphLineInfo(view, $pos);
  const isAtFirstLine = lineNumber === 0;
  return {
    isAtFirstLine,
    lineNumber,
    ...otherLineInfo
  };
};
/**
 * Checks if the position is at the last line of the paragraph.
 *
 * @param view - The editor view.
 * @param $pos - The [resolved] position in the document.
 * @returns {boolean} True if the position is at the last line of the paragraph, false otherwise.
 */
const isPosAtLastLineOfParagraph = (view, $pos) => {
  const {
    lineCount,
    lineNumber,
    ...otherLineInfo
  } = getParagraphLineInfo(view, $pos);
  const isAtLastLine = lineNumber + 1 === lineCount;
  return {
    isAtLastLine,
    lineCount,
    lineNumber,
    ...otherLineInfo
  };
};

/**
 * @file /src/utils/nodes/headerFooter/headerFooterPosition.ts
 * @name HeaderFooterPosition
 * @description Utility functions for header and footer positions.
 */
/**
 * Get the header or footer node (parent of the current node) position.
 * @param doc - The document node.
 * @param pos - The resolved position in the document or the absolute position of the node.
 * @returns {number} The position of the header or footer node.
 */
const getThisPageAmendmentNodePosition = (doc, pos) => {
  return getParentNodePosOfType(doc, pos, HEADER_FOOTER_NODE_NAME).pos;
};
/**
 * Get the header or footer node position and the header or footer node itself.
 *
 * @param doc - The document node.
 * @param pos - The resolved position in the document or the absolute position of the node.
 * @returns {pageAmendmentPos: number, pageAmendmentNode: Node} The position and the node of the header or footer.
 */
const getPageAmendmentNodeAndPosition = (doc, pos) => {
  if (typeof pos === "number") {
    return getPageAmendmentNodeAndPosition(doc, doc.resolve(pos));
  }
  const pageAmendmentPos = getThisPageAmendmentNodePosition(doc, pos);
  const pageAmendmentNode = doc.nodeAt(pageAmendmentPos);
  return {
    pageAmendmentPos,
    pageAmendmentNode
  };
};
/**
 * Get the start of the header or footer position.
 *
 * @param doc - The document node.
 * @param pos - The resolved position in the document or the absolute position of the node.
 * @returns {number} The start position of the header or footer.
 */
const getStartOfPageAmendmentPosition = (doc, pos) => {
  if (typeof pos === "number") {
    return getStartOfPageAmendmentPosition(doc, doc.resolve(pos));
  }
  const {
    pageAmendmentPos
  } = getPageAmendmentNodeAndPosition(doc, pos);
  return pageAmendmentPos;
};
/**
 * Get the end of the header or footer position.
 *
 * @param doc - The document node.
 * @param pos - The resolved position in the document or the absolute position of the node.
 * @returns {number} The end position of the header or footer.
 */
const getEndOfPageAmendmentPosition = (doc, pos) => {
  if (typeof pos === "number") {
    return getEndOfPageAmendmentPosition(doc, doc.resolve(pos));
  }
  const {
    pageAmendmentPos,
    pageAmendmentNode
  } = getPageAmendmentNodeAndPosition(doc, pos);
  if (!pageAmendmentNode) {
    return pageAmendmentPos;
  }
  return pageAmendmentPos + pageAmendmentNode.content.size;
};

/**
 * @file /src/utils/pagination.ts
 * @name Pagination
 * @description Utility functions for paginating the editor content.
 */
/**
 * Get the start of the page amendment and paragraph positions.
 *
 * @param doc - The document node.
 * @param pos - The resolved position in the document or the absolute position of the node.
 * @returns {startOfPageAmendmentPos: number, startOfParagraphPos: number} The start positions of the
 * page amendment and paragraph.
 */
const getStartOfPageAmendmentAndParagraphPosition = (doc, pos) => {
  const startOfParagraphPos = getStartOfParagraphPosition(doc, pos);
  const startOfPageAmendmentPos = getStartOfPageAmendmentPosition(doc, pos);
  return {
    startOfPageAmendmentPos,
    startOfParagraphPos
  };
};
/**
 * Get the end of the page amendment and paragraph positions.
 *
 * @param doc - The document node.
 * @param pos - The resolved position in the document or the absolute position of the node.
 * @returns {endOfPageAmendmentPos: number, endOfParagraphPos: number} The end positions of the
 * page amendment and paragraph.
 */
const getEndOfPageAmendmentAndParagraphPosition = (doc, $pos) => {
  const endOfParagraphPos = getEndOfParagraphPosition(doc, $pos);
  const endOfPageAmendmentPos = getEndOfPageAmendmentPosition(doc, $pos);
  return {
    endOfPageAmendmentPos,
    endOfParagraphPos
  };
};
/**
 * Get the start of the body and paragraph positions.
 *
 * @param doc - The document node.
 * @param pos - The resolved position in the document or the absolute position of the node.
 * @returns {startOfBodyPos: number, startOfParagraphPos: number} The start positions of the body and paragraph.
 */
const getStartOfBodyAndParagraphPosition = (doc, pos) => {
  const startOfParagraphPos = getStartOfParagraphPosition(doc, pos);
  const startOfBodyPos = getStartOfBodyPosition(doc, pos);
  return {
    startOfBodyPos,
    startOfParagraphPos
  };
};
/**
 * Get the end of the body and paragraph positions.
 *
 * @param doc - The document node.
 * @param pos - The resolved position in the document or the absolute position of the node.
 * @returns {endOfBodyPos: number, endOfParagraphPos: number} The end positions of the body and paragraph.
 */
const getEndOfBodyAndParagraphPosition = (doc, $pos) => {
  const endOfParagraphPos = getEndOfParagraphPosition(doc, $pos);
  const endOfBodyPos = getEndOfBodyPosition(doc, $pos);
  return {
    endOfBodyPos,
    endOfParagraphPos
  };
};
/**
 * Collect the node types for pagination.
 *
 * @param schema - The schema of the editor.
 * @returns {PaginationNodeTypes} The node types for pagination.
 * @throws {Error} Throws an error if the page, body, or header/footer node types are not found in the schema.
 */
const getPaginationNodeTypes = schema => {
  const {
    nodes
  } = schema;
  const pageNodeType = nodes[PAGE_NODE_NAME];
  const headerFooterNodeType = nodes[HEADER_FOOTER_NODE_NAME];
  const bodyNodeType = nodes[BODY_NODE_NAME];
  const paragraphNodeType = nodes.paragraph;
  if (!pageNodeType || !bodyNodeType) {
    throw new Error("Page or body node type not found in schema");
  }
  return {
    pageNodeType,
    headerFooterNodeType,
    bodyNodeType,
    paragraphNodeType
  };
};

/**
 * @file /src/utils/positionCondition.ts
 * @name PositionCondition
 * @description Utility functions for position conditions.
 */
const isAtStartOfNode = ($pos, startOfNodePos, startOfParagraphPos, checkExactStart) => {
  // Determine the condition to check
  // First position of paragraph will always be 1 more than the body position
  const isFirstParagraph = startOfNodePos + 1 === startOfParagraphPos;
  if (!isFirstParagraph) return false;
  if (checkExactStart) {
    // Check if position is exactly at the start of the body
    // First position of text will always be 1 more than the first paragraph position
    const isPosAtStartOfParagraph = startOfParagraphPos + 1 === $pos.pos;
    return isPosAtStartOfParagraph;
  }
  return true;
};
/**
 * Check if the given position is exactly at the end of the node.
 *
 * @param $pos - The resolved position in the document or the absolute position of the node.
 * @param endOfNodePos - The position of the end of the node.
 * @param endOfParagraphPos - The position of the end of the paragraph.
 * @param checkExactEnd - Whether the position must be at the exact end of the node.
 * @returns {boolean} True if the condition is met, false otherwise.
 */
const isAtEndOfNode = ($pos, endOfNodePos, endOfParagraphPos, checkExactEnd) => {
  const isLastParagraph = endOfParagraphPos + 1 === endOfNodePos;
  if (!isLastParagraph) return false;
  if (checkExactEnd) {
    // Check if position is exactly at the end of the node
    // Last position of text will always be 1 less than the end of the last paragraph position
    const isPosAtEndOfParagraph = endOfParagraphPos + 1 === $pos.pos;
    return isPosAtEndOfParagraph;
  }
  return true;
};

/**
 * @file /src/utils/nodes/body/bodyCondition.ts
 * @name BodyCondition
 * @description Utility functions for body conditions.
 */
/**
 * Check if the given position is within the body.
 *
 * @param doc - The document node.
 * @param $pos - The resolved position in the document or the absolute position of the node.
 * @returns {boolean} True if the position is within the body, false otherwise.
 */
const isPosInBody = (doc, $pos) => {
  if (typeof $pos === "number") {
    return isPosInBody(doc, doc.resolve($pos));
  }
  const {
    node: pageChildNode
  } = getPageChildNodePosFromPosition(doc, $pos);
  if (!pageChildNode) return false;
  return isBodyNode(pageChildNode);
};
/**
 * Check if the given position is exactly at the start of the first child of the body.
 *
 * @param doc - The document node.
 * @param $pos - The resolved position in the document or the absolute position of the node.
 * @returns {boolean} True if the condition is met, false otherwise.
 */
const isPosAtStartOfBody = (doc, $pos) => {
  return isPosMatchingStartOfBodyCondition(doc, $pos, true);
};
/**
 * Check if the given position is within the first paragraph child of the body.
 *
 * @param doc - The document node.
 * @param pos - The resolved position in the document or the absolute position of the node.
 * @returns {boolean} True if the position is at the start of the body, false otherwise.
 */
const isPosAtFirstChildOfBody = (doc, $pos) => {
  return isPosMatchingStartOfBodyCondition(doc, $pos, false);
};
/**
 * Check if the given position is exactly at the end of the body.
 *
 * @param doc - The document node.
 * @param pos - The resolved position in the document or the absolute position of the node.
 * @returns {boolean} True if the position is at the end of the body, false otherwise.
 */
const isPosAtEndOfBody = (doc, $pos) => {
  return isPosMatchingEndOfBodyCondition(doc, $pos, true);
};
/**
 * Check if the given position is at the end of the last paragraph child of the body.
 *
 * @param doc - The document node.
 * @param pos - The resolved position in the document or the absolute position of the node.
 * @returns {boolean} True if the position is at the end of the body, false otherwise.
 */
const isPosAtLastChildOfBody = (doc, $pos) => {
  return isPosMatchingEndOfBodyCondition(doc, $pos, false);
};
/**
 * Checks if the given position is at the start of the first page's body.
 * @param doc - The document node.
 * @param $pos - The resolved position in the document or the absolute position of the node.
 * @param checkExactStart - Whether the position must be at the exact start of the body.
 * @returns {boolean} True if the position is at the start of the first page's body, false otherwise.
 */
const isPosAtStartOfDocumentBody = (doc, $pos, checkExactStart) => {
  if (typeof $pos === "number") {
    return isPosAtStartOfDocumentBody(doc, doc.resolve($pos), checkExactStart);
  }
  const pageNumber = getPageNumber(doc, $pos);
  if (!isPosMatchingStartOfBodyCondition(doc, $pos, checkExactStart)) return false;
  return pageNumber === 0;
};
/**
 * Check if the given position is at the start of the document.
 *
 * @param doc - The document node.
 * @param pos - The resolved position in the document or the absolute position of the node.
 * @param checkExactStart - Whether the position must be at the exact start of the body.
 * @returns {boolean} True if the position is at the start of the document, false otherwise.
 */
const isPosMatchingStartOfBodyCondition = (doc, $pos, checkExactStart) => {
  // Resolve position if given as a number
  if (typeof $pos === "number") {
    return isPosMatchingStartOfBodyCondition(doc, doc.resolve($pos), checkExactStart);
  }
  if (!isPosInBody(doc, $pos)) {
    return false;
  }
  // Check if we are at the start of the document
  if (isPosAtStartOfDocument(doc, $pos)) {
    return true;
  }
  // Ensure that the position is within a valid block (paragraph)
  if (!isPositionWithinParagraph($pos)) {
    return false;
  }
  // Get positions for paragraph and body
  const {
    startOfBodyPos,
    startOfParagraphPos
  } = getStartOfBodyAndParagraphPosition(doc, $pos);
  if (startOfBodyPos < 0) {
    console.warn("Invalid body position");
    return false;
  }
  if (startOfParagraphPos < 0) {
    console.warn("Invalid paragraph position");
    return false;
  }
  return isAtStartOfNode($pos, startOfBodyPos, startOfParagraphPos, checkExactStart);
};
/**
 * Check if the given position is at the end of the body or the last child of the body.
 *
 * @param doc - The document node.
 * @param $pos - The resolved position in the document or the absolute position of the node.
 * @param checkExactEnd - Whether to check for the exact end of the body (true) or the last child of the body (false).
 * @returns {boolean} True if the condition is met, false otherwise.
 */
const isPosMatchingEndOfBodyCondition = (doc, $pos, checkExactEnd) => {
  // Resolve position if given as a number
  if (typeof $pos === "number") {
    return isPosMatchingEndOfBodyCondition(doc, doc.resolve($pos), checkExactEnd);
  }
  if (!isPosInBody(doc, $pos)) {
    return false;
  }
  // Check if we are at the end of the document
  if (isPosAtEndOfDocument(doc, $pos)) {
    return true;
  }
  // Ensure that the position is within a valid block (paragraph)
  if (!isPositionWithinParagraph($pos)) {
    return false;
  }
  // Get positions for paragraph and body
  const {
    endOfParagraphPos,
    endOfBodyPos
  } = getEndOfBodyAndParagraphPosition(doc, $pos);
  if (endOfParagraphPos < 0) {
    console.warn("Invalid end of paragraph position");
    return false;
  }
  if (endOfBodyPos < 0) {
    console.warn("Invalid end of body position");
    return false;
  }
  return isAtEndOfNode($pos, endOfBodyPos, endOfParagraphPos, checkExactEnd);
};

/**
 * @file /src/utils/nodes/headerFooter/headerFooterCondition.ts
 * @name HeaderFooterCondition
 * @description Utility functions for header and footer conditions.
 */
/**
 * Check if the given position is within a header or footer.
 *
 * @param doc - The document node.
 * @param $pos - The resolved position in the document or the absolute position of the node.
 */
const isPosInPageAmendment = (doc, $pos) => {
  if (typeof $pos === "number") {
    $pos = doc.resolve($pos);
  }
  const {
    node: pageChildNode
  } = getPageChildNodePosFromPosition(doc, $pos);
  if (!pageChildNode) return false;
  return isHeaderFooterNode(pageChildNode);
};
/**
 * Check if the given position is at the start of a header or footer.
 *
 * @param doc - The document node.
 * @param $pos - The resolved position in the document or the absolute position of the node.
 * @returns {boolean} True if the position is at the start of a header or footer, false otherwise.
 */
const isPosAtStartOfPageAmendment = (doc, $pos) => {
  return isPosMatchingStartOfPageAmendmentCondition(doc, $pos, true);
};
/**
 * Check if the given position is at the first child of a header or footer.
 *
 * @param doc - The document node.
 * @param $pos - The resolved position in the document or the absolute position of the node.
 * @returns {boolean} True if the position is at the first child of the header or footer, false otherwise.
 */
const isPosAtFirstChildOfPageAmendment = (doc, $pos) => {
  return isPosMatchingStartOfPageAmendmentCondition(doc, $pos, false);
};
/**
 * Check if the given position is at the end of a header or footer.
 *
 * @param doc - The document node.
 * @param $pos - The resolved position in the document or the absolute position of the node.
 * @returns {boolean} True if the position is at the end of a header or footer, false otherwise.
 */
const isPosAtEndOfPageAmendment = (doc, $pos) => {
  return isPosMatchingEndOfPageAmendmentCondition(doc, $pos, true);
};
/**
 * Check if the given position is at the last child of a header or footer.
 *
 * @param doc - The document node.
 * @param $pos - The resolved position in the document or the absolute position of the node.
 * @returns {boolean} True if the position is at the last child of the header or footer, false otherwise.
 */
const isPosAtLastChildOfPageAmendment = (doc, $pos) => {
  return isPosMatchingEndOfPageAmendmentCondition(doc, $pos, false);
};
/**
 * Check if the given position is at the start of the first page's header or footer.
 * @param doc - The document node.
 * @param $pos - The resolved position in the document or the absolute position of the node.
 * @param checkExactStart - Whether the position must be at the exact start of the header or footer.
 * @returns {boolean} True if the position is at the start of the first page's header or footer, false otherwise.
 */
const isPosMatchingStartOfPageAmendmentCondition = (doc, $pos, checkExactStart) => {
  if (typeof $pos === "number") {
    $pos = doc.resolve($pos);
  }
  if (!isPosInPageAmendment(doc, $pos)) {
    return false;
  }
  // Ensure that the position is within a valid block (paragraph)
  if (!isPositionWithinParagraph($pos)) {
    return false;
  }
  const {
    startOfPageAmendmentPos,
    startOfParagraphPos
  } = getStartOfPageAmendmentAndParagraphPosition(doc, $pos);
  if (startOfPageAmendmentPos < 0) {
    console.warn("Invalid page amendment position");
    return false;
  }
  if (startOfParagraphPos < 0) {
    console.warn("Invalid paragraph position");
    return false;
  }
  return isAtStartOfNode($pos, startOfPageAmendmentPos, startOfParagraphPos, checkExactStart);
};
/**
 * Check if the given position is at the end of the last page's header or footer.
 * @param doc - The document node.
 * @param $pos - The resolved position in the document or the absolute position of the node.
 * @param checkExactEnd - Whether the position must be at the exact end of the header or footer.
 * @returns {boolean} True if the position is at the end of the last page's header or footer, false otherwise.
 */
const isPosMatchingEndOfPageAmendmentCondition = (doc, $pos, checkExactEnd) => {
  if (typeof $pos === "number") {
    $pos = doc.resolve($pos);
  }
  if (!isPosInPageAmendment(doc, $pos)) {
    return false;
  }
  // Ensure that the position is within a valid block (paragraph)
  if (!isPositionWithinParagraph($pos)) {
    return false;
  }
  const {
    endOfPageAmendmentPos,
    endOfParagraphPos
  } = getEndOfPageAmendmentAndParagraphPosition(doc, $pos);
  if (endOfPageAmendmentPos < 0) {
    console.warn("Invalid page amendment position");
    return false;
  }
  if (endOfParagraphPos < 0) {
    console.warn("Invalid paragraph position");
    return false;
  }
  return isAtEndOfNode($pos, endOfPageAmendmentPos, endOfParagraphPos, checkExactEnd);
};

/**
 * @file /src/Plugins/Keymap.ts
 * @name Keymap
 * @description Custom plugin for handling keymaps for page navigation.
 */
const KeymapPlugin = keymap({
  ArrowLeft: (state, dispatch) => {
    if (!dispatch) {
      console.warn("No dispatch function provided");
      return false;
    }
    if (isHighlighting(state)) {
      return false;
    }
    const {
      doc,
      tr
    } = state;
    const $pos = getResolvedPosition(state);
    if (isPosAtStartOfPageAmendment(doc, $pos)) {
      // Handle to prevent cursor moving out of the page amendment
      return true;
    }
    if (!isPosAtStartOfBody(doc, $pos)) {
      return false;
    }
    console.log("At start of page body");
    const thisPos = $pos.pos;
    const expectedTextNodePos = thisPos - 1;
    const thisTextNode = doc.nodeAt(expectedTextNodePos);
    if (!thisTextNode) {
      console.warn("No node found at position", expectedTextNodePos);
      return false;
    }
    const {
      pos: paragraphPos,
      node: paragraphNode
    } = getParagraphNodeAndPosition(doc, $pos);
    if (!paragraphNode) {
      console.warn("No current paragraph node found");
      return false;
    }
    if (!isParagraphNode(thisTextNode) && !isTextNode(thisTextNode)) {
      console.warn("Unexpected node type found at position", expectedTextNodePos);
      return false;
    }
    const {
      pos: previousParagraphPos,
      node: previousParagraphNode
    } = getLastParagraphInPreviousPageBodyBeforePos(doc, paragraphPos);
    if (!previousParagraphNode) {
      // Handle to prevent cursor moving to header
      return true;
    }
    setSelectionToEndOfParagraph(tr, previousParagraphPos, previousParagraphNode);
    dispatch(tr);
    return true;
  },
  ArrowRight: (state, dispatch) => {
    if (!dispatch) {
      console.warn("No dispatch function provided");
      return false;
    }
    if (isHighlighting(state)) {
      return false;
    }
    const {
      doc,
      tr
    } = state;
    const $pos = getResolvedPosition(state);
    if (isPosAtEndOfPageAmendment(doc, $pos)) {
      // Handle to prevent cursor moving out of the page amendment
      return true;
    }
    if (!isPosAtEndOfBody(doc, $pos)) {
      return false;
    }
    console.log("At end of page body");
    const thisPos = $pos.pos;
    const expectedTextNodePos = thisPos - 1;
    const thisTextNode = doc.nodeAt(expectedTextNodePos);
    if (!thisTextNode) {
      console.warn("No node found at position", expectedTextNodePos);
      return false;
    }
    const {
      pos: paragraphPos,
      node: paragraphNode
    } = getParagraphNodeAndPosition(doc, $pos);
    if (!paragraphNode) {
      console.warn("No current paragraph node found");
      return false;
    }
    if (!isParagraphNode(thisTextNode) && !isTextNode(thisTextNode)) {
      console.warn("Unexpected node type found at position", expectedTextNodePos);
      return false;
    }
    const {
      pos: nextParagraphPos,
      node: nextParagraphNode
    } = getFirstParagraphInNextPageBodyAfterPos(doc, paragraphPos);
    if (!nextParagraphNode) {
      // Handle to prevent cursor moving to footer
      return true;
    }
    const newSelection = moveToThisTextBlock(tr, nextParagraphPos);
    setSelection(tr, newSelection);
    dispatch(tr);
    return true;
  },
  ArrowUp: (state, dispatch, view) => {
    if (!dispatch) {
      console.warn("No dispatch function provided");
      return false;
    }
    if (!view) {
      console.warn("No view provided");
      return false;
    }
    if (isHighlighting(state)) {
      return false;
    }
    const {
      doc,
      tr
    } = state;
    const $pos = getResolvedPosition(state);
    if (isPosAtFirstChildOfPageAmendment(doc, $pos)) {
      // Handle to prevent cursor moving out of the page amendment
      return true;
    }
    if (!isPosAtFirstChildOfBody(doc, $pos)) {
      return false;
    }
    console.log("In first child of page body");
    const thisPos = $pos.pos;
    const {
      isAtFirstLine,
      offsetDistance
    } = isPosAtFirstLineOfParagraph(view, $pos);
    if (!isAtFirstLine) {
      return false;
    }
    const expectedTextNodePos = thisPos - 1;
    const thisTextNode = doc.nodeAt(expectedTextNodePos);
    if (!thisTextNode) {
      console.warn("No node found at position", expectedTextNodePos);
      return false;
    }
    const {
      pos: paragraphPos,
      node: paragraphNode
    } = getParagraphNodeAndPosition(doc, $pos);
    if (!paragraphNode) {
      console.warn("No current paragraph node found");
      return false;
    }
    if (!isParagraphNode(thisTextNode) && !isTextNode(thisTextNode)) {
      console.warn("Unexpected node type found at position", expectedTextNodePos);
      return false;
    }
    const {
      pos: previousParagraphPos,
      node: previousParagraphNode
    } = getLastParagraphInPreviousPageBodyBeforePos(doc, paragraphPos);
    if (!previousParagraphNode) {
      if (!isPosAtStartOfBody(doc, $pos)) {
        // Move to the start of the current paragraph
        setSelectionToStartOfParagraph(tr, paragraphPos, paragraphNode);
        dispatch(tr);
      }
      return true;
    }
    const {
      lineCount: prevParLineCount
    } = getParagraphLineInfo(view, previousParagraphPos);
    const prevParagraphLastLineNum = prevParLineCount - 1;
    const cursorOffset = getOffsetForDistanceInLine(view, previousParagraphPos, prevParagraphLastLineNum, offsetDistance) + 1;
    setSelectionToParagraph(tr, previousParagraphPos, previousParagraphNode, cursorOffset);
    dispatch(tr);
    return true;
  },
  ArrowDown: (state, dispatch, view) => {
    if (!dispatch) {
      console.warn("No dispatch function provided");
      return false;
    }
    if (!view) {
      console.warn("No view provided");
      return false;
    }
    if (isHighlighting(state)) {
      return false;
    }
    const {
      doc,
      tr
    } = state;
    const $pos = getResolvedPosition(state);
    if (isPosAtLastChildOfPageAmendment(doc, $pos)) {
      // Handle to prevent cursor moving out of the page amendment
      return true;
    }
    if (!isPosAtLastChildOfBody(doc, $pos)) {
      return false;
    }
    console.log("In last child of page body");
    const thisPos = $pos.pos;
    const {
      isAtLastLine,
      offsetDistance
    } = isPosAtLastLineOfParagraph(view, $pos);
    if (!isAtLastLine) {
      return false;
    }
    const expectedTextNodePos = thisPos - 1;
    const thisTextNode = doc.nodeAt(expectedTextNodePos);
    if (!thisTextNode) {
      console.warn("No node found at position", expectedTextNodePos);
      return false;
    }
    const {
      pos: paragraphPos,
      node: paragraphNode
    } = getParagraphNodeAndPosition(doc, $pos);
    if (!paragraphNode) {
      console.warn("No current paragraph node found");
      return false;
    }
    if (!isParagraphNode(thisTextNode) && !isTextNode(thisTextNode)) {
      console.warn("Unexpected node type found at position", expectedTextNodePos);
      return false;
    }
    const {
      pos: nextParagraphPos,
      node: nextParagraphNode
    } = getFirstParagraphInNextPageBodyAfterPos(doc, paragraphPos);
    if (!nextParagraphNode) {
      if (!isPosAtEndOfBody(doc, $pos)) {
        // Move to the end of the current paragraph
        setSelectionToEndOfParagraph(tr, paragraphPos, paragraphNode);
        dispatch(tr);
      }
      return true;
    }
    const cursorOffset = getOffsetForDistanceInLine(view, nextParagraphPos, 0, offsetDistance) + 1;
    const newSelection = moveToThisTextBlock(tr, nextParagraphPos, undefined, cursorOffset);
    setSelection(tr, newSelection);
    dispatch(tr);
    return true;
  },
  Enter: (state, dispatch) => {
    if (!dispatch) {
      console.warn("No dispatch function provided");
      return false;
    }
    if (isHighlighting(state)) {
      return false;
    }
    const {
      doc,
      tr,
      schema,
      selection
    } = state;
    const {
      from
    } = selection;
    const $pos = getResolvedPosition(state);
    // Ensure that the position is within a valid block (paragraph)
    if (!isPositionWithinParagraph($pos)) {
      console.warn("Not inside a paragraph node");
      return false;
    }
    const {
      node: paragraphNode
    } = getParagraphNodeAndPosition(doc, $pos);
    if (!paragraphNode) {
      console.warn("No current paragraph node found");
      return false;
    }
    // Create a new empty paragraph node
    const newParagraph = schema.nodes.paragraph.create();
    console.log("Inserting new paragraph at position", from);
    if (isNodeEmpty$1(paragraphNode)) {
      tr.insert(from, newParagraph);
    } else {
      if (isAtStartOrEndOfParagraph(doc, $pos)) {
        tr.replaceSelectionWith(newParagraph);
      } else {
        const remainingContent = paragraphNode.content.cut($pos.parentOffset);
        const newContentParagraph = schema.nodes.paragraph.create({}, remainingContent);
        tr.replaceWith($pos.pos, $pos.pos + remainingContent.size, newContentParagraph);
      }
    }
    const newSelection = moveToNextTextBlock(tr, from);
    setSelection(tr, newSelection);
    dispatch(tr);
    return true;
  },
  Backspace: (state, dispatch) => {
    if (!dispatch) {
      console.warn("No dispatch function provided");
      return false;
    }
    if (isHighlighting(state)) {
      return false;
    }
    const {
      doc,
      tr,
      schema
    } = state;
    const $pos = getResolvedPosition(state);
    if (isPosAtStartOfPageAmendment(doc, $pos)) {
      // Handle to prevent cursor moving out of the page amendment
      return true;
    }
    // Ensure that the position is within a valid block (paragraph)
    if (!isPositionWithinParagraph($pos)) {
      return false;
    }
    const thisPos = $pos.pos;
    if (isPosAtEndOfBody(doc, $pos)) {
      const {
        pos: paragraphPos,
        node: paragraphNode
      } = getParagraphNodeAndPosition(doc, $pos);
      if (!paragraphNode) {
        console.warn("No current paragraph node found");
        return false;
      }
      if (isNodeEmpty$1(paragraphNode)) {
        deleteNode(tr, paragraphPos, paragraphNode);
        const selection = moveToPreviousTextBlock(tr, paragraphPos);
        setSelection(tr, selection);
      } else {
        // Remove the last character from the current paragraph
        const newContent = paragraphNode.content.cut(0, paragraphNode.content.size - 1);
        const newParagraph = schema.nodes.paragraph.create({}, newContent);
        tr.replaceWith(paragraphPos, paragraphPos + paragraphNode.nodeSize, newParagraph);
        setSelectionAtPos(tr, thisPos - 1);
      }
    } else if (isPosAtStartOfDocumentBody(doc, $pos, true)) {
      // Prevent deleting the first page node
      return true;
    } else if (!isPosAtStartOfBody(doc, $pos)) {
      return false;
    } else {
      const {
        node: thisPageNode,
        pos: thisPagePos
      } = getPageNodeAndPosition(doc, $pos);
      if (!thisPageNode) {
        console.warn("No current page node found");
        return false;
      }
      if (!isPosAtStartOfBody(doc, thisPos)) {
        return false;
      }
      const prevPageChild = doc.childBefore(thisPagePos);
      const prevPageNode = prevPageChild.node;
      // Confirm that the previous node is a page node
      if (!prevPageNode) {
        // Start of document
        console.log("No previous page node found");
        return false;
      }
      if (!isPageNode(prevPageNode)) {
        console.warn("Previous node is not a page node");
        return false;
      }
      // Append the content of the current paragraph to the end of the previous paragraph
      const {
        pos: paragraphPos,
        node: paragraphNode
      } = getParagraphNodeAndPosition(doc, $pos);
      if (!paragraphNode) {
        console.warn("No current paragraph node found");
        return false;
      }
      const {
        pos: previousParagraphPos,
        node: previousParagraphNode
      } = getLastParagraphInPreviousPageBodyBeforePos(doc, paragraphPos);
      if (!previousParagraphNode) {
        // Handle to prevent cursor moving to header
        return true;
      }
      if (!isNodeEmpty$1(previousParagraphNode) || !isNodeEmpty$1(paragraphNode)) {
        deleteNode(tr, paragraphPos, paragraphNode);
      }
      appendAndReplaceNode(tr, previousParagraphPos, previousParagraphNode, paragraphNode);
      // Set the selection to the end of the previous paragraph
      setSelectionToEndOfParagraph(tr, previousParagraphPos, previousParagraphNode);
    }
    dispatch(tr);
    return true;
  },
  Delete: (state, dispatch) => {
    if (!dispatch) {
      console.warn("No dispatch function provided");
      return false;
    }
    if (isHighlighting(state)) {
      return false;
    }
    const {
      doc,
      tr
    } = state;
    const $pos = getResolvedPosition(state);
    if (isPosAtEndOfPageAmendment(doc, $pos)) {
      // Handle to prevent cursor moving out of the page amendment
      return true;
    }
    // Ensure that the position is within a valid block (paragraph)
    if (!isPositionWithinParagraph($pos)) {
      console.warn("Not inside a paragraph node");
      return false;
    }
    if (!isPosAtEndOfBody(doc, $pos)) {
      return false;
    }
    // We need to remove the current paragraph node and prepend any
    // content to the next paragraph node (which will now be at the
    // end of the current page)
    const thisPos = $pos.pos;
    const expectedTextNodePos = thisPos - 1;
    const thisTextNode = doc.nodeAt(expectedTextNodePos);
    if (!thisTextNode) {
      console.warn("No node found at position", expectedTextNodePos);
      return false;
    }
    const {
      pos: paragraphPos,
      node: paragraphNode
    } = getParagraphNodeAndPosition(doc, $pos);
    if (!paragraphNode) {
      console.warn("No current paragraph node found");
      return false;
    }
    if (!isParagraphNode(thisTextNode) && !isTextNode(thisTextNode)) {
      console.warn("Unexpected node type found at position", expectedTextNodePos);
      return false;
    }
    const {
      pos: nextParagraphPos,
      node: nextParagraphNode
    } = getFirstParagraphInNextPageBodyAfterPos(doc, paragraphPos);
    if (!nextParagraphNode) {
      // Handle to prevent cursor moving to footer
      return true;
    }
    const thisNodeEmpty = isNodeEmpty$1(paragraphNode);
    const nextNodeEmpty = isNodeEmpty$1(nextParagraphNode);
    if (!nextNodeEmpty) {
      deleteNode(tr, nextParagraphPos, nextParagraphNode);
    }
    appendAndReplaceNode(tr, paragraphPos, paragraphNode, nextParagraphNode);
    if (thisNodeEmpty) {
      const $newPos = tr.doc.resolve(thisPos);
      if (nextNodeEmpty) {
        moveToNextTextBlock(tr, $newPos);
      } else {
        moveToNearestTextSelection(tr, $newPos);
      }
    } else {
      setSelectionAtPos(tr, thisPos);
    }
    dispatch(tr);
    return true;
  }
});

/**
 * @file /src/constants/sizing.ts
 * @name Sizing
 * @description Constants for sizing and measurements.
 */
const MM_PER_INCH = 25.4;
const STANDARD_PIXELS_PER_INCH = 96;

/**
 * @file /src/utils/window.ts
 * @name Window
 * @description Utility functions for interacting with the window object.
 */
/**
 * Calculates the DPI of the window.
 * @returns The DPI of the window.
 */
const calculateWindowDPI = () => {
  const ratio = pythagoreanTheorem(window.screen.width, window.screen.height) / pythagoreanTheorem(window.screen.availWidth, window.screen.availHeight);
  const dpi = ratio * STANDARD_PIXELS_PER_INCH;
  return dpi;
};
/**
 * Converts millimeters to pixels.
 *
 * @param mm - The length in millimeters.
 * @returns The length in pixels.
 */
const mmToPixels = mm => {
  const dpi = calculateWindowDPI();
  const inches = mm / MM_PER_INCH;
  return inches * dpi;
};

/**
 * Set a node attribute to the given value.
 *
 * @param tr - The transaction to apply the change to.
 * @param pos - The position of the node to set the attribute for.
 * @param node - The node to set the attribute for.
 * @param attr - The attribute to set.
 * @param value - The value to set the attribute to.
 * @returns {boolean} True if the attribute was changed, false otherwise.
 */
const setNodeAttribute = (tr, pos, node, attr, value) => {
  const nodeAttr = node.attrs[attr];
  const isDifferent = nodeAttr !== value;
  if (isDifferent) {
    tr.setNodeAttribute(pos, attr, value);
  }
  return isDifferent;
};
/**
 * Set a node attribute to the given value for the nodes of the type handled by the setNodeTypeAttribute callback.
 *
 * @param tr - The transaction to apply the change to.
 * @param attr - The attribute to set.
 * @param value - The value to set the attribute to.
 * @param setNodesTypeAttribute - The callback to set the attribute for a node of the type handled by the callback.
 * @returns {boolean} True if any attribute was changed, false otherwise.
 */
const setNodesTypeAttribute = (tr, attr, value, setNodesTypeAttribute) => {
  const {
    doc
  } = tr;
  const transactions = [];
  doc.forEach((node, pos) => {
    transactions.push(setNodesTypeAttribute(tr, pos, node, attr, value));
  });
  return transactions.some(changed => changed);
};

/**
 * @file /src/utils/setPageAttributes.ts
 * @name SetPageAttributes
 * @description Utility functions for setting page attributes.
 */
/**
 * Set a page node attribute to the given value for all page nodes in the document.
 *
 * @param tr - The transaction to apply the change to.
 * @param attr - The attribute to set.
 * @param value - The value to set the attribute to.
 * @returns {boolean} True if any attribute was changed, false otherwise.
 */
const setPageNodesAttribute = (tr, attr, value) => {
  return setNodesTypeAttribute(tr, attr, value, setPageNodeAttribute);
};
/**
 * Set a page node attribute to the given value.
 *
 * @param tr - The transaction to apply the change to.
 * @param pos - The position of the node to set the attribute for.
 * @param node - The node to set the attribute for.
 * @param attr - The attribute to set.
 * @param value - The value to set the attribute to.
 * @returns {boolean} True if the attribute was changed, false otherwise.
 */
const setPageNodeAttribute = (tr, pos, node, attr, value) => {
  if (!isPageNode(node)) {
    return false;
  }
  return setNodeAttribute(tr, pos, node, attr, value);
};
/**
 * Set a body node attribute to the given value for all body nodes in the document.
 *
 * @param tr - The transaction to apply the change to.
 * @param attr - The attribute to set.
 * @param value - The value to set the attribute to.
 * @returns {boolean} True if any attribute was changed, false otherwise.
 */
const setBodyNodesAttribute = (tr, attr, value) => {
  return setNodesTypeAttribute(tr, attr, value, setBodyNodeAttribute);
};
/**
 * Set a body node attribute to the given value.
 *
 * @param tr - The transaction to apply the change to.
 * @param pagePos - The position of the node to set the attribute for.
 * @param pageNode - The page node (parent of the body nody).
 * @param attr - The attribute to set.
 * @param value - The value to set the attribute to.
 * @returns {boolean} True if the attribute was changed, false otherwise.
 */
const setBodyNodeAttribute = (tr, pagePos, pageNode, attr, value) => {
  if (!isPageNode(pageNode)) {
    return false;
  }
  const {
    node: bodyNode,
    pos: bodyPos
  } = getPageRegionNodeAndPos(pagePos, pageNode, "body");
  if (!bodyNode || !isBodyNode(bodyNode)) {
    return false;
  }
  return setNodeAttribute(tr, bodyPos, bodyNode, attr, value);
};

/**
 * @file /src/utils/extension.ts
 * @name Extension
 * @description Utility functions for extensions
 */
/**
 * Finds an extension by its name in the editor's extension manager.
 *
 * @param editor - The editor instance containing the extension manager.
 * @param extensionName - The name of the extension to find.
 * @returns The extension if found, otherwise undefined.
 */
const findExtension = (editor, extensionName) => editor.extensionManager.extensions.find(ext => ext.name === extensionName);

/**
 * @file /src/utils/options.ts
 * @name Options
 * @description Utility functions for retrieving extension options.
 */
/**
 * Retrieves the options for a specified extension in the editor.
 *
 * @param editor - The editor instance containing the extensions.
 * @param extensionName - The name of the extension whose options are to be retrieved.
 * @returns The options of the specified extension, or undefined if the extension is not found.
 */
const getExtensionOptions = (editor, extensionName) => {
  const extension = findExtension(editor, extensionName);
  return extension?.options;
};
/**
 * Retrieves the options for the pagination extension in the editor.
 *
 * @param editor - The editor instance containing the extensions.
 * @returns The options of the pagination extension, or undefined if the extension is not found.
 * @throws An error if the pagination extension is not found in the editor.
 */
const getPaginationExtensionOptions = editor => {
  const options = getExtensionOptions(editor, PAGINATION_EXTENSION_NAME);
  if (!options) {
    throw new Error("Pagination extension not found in the editor.");
  }
  return options;
};

/**
 * @file /src/utils/paperOrientation.ts
 * @name PaperOrientation
 * @description Utility functions for paper orientations.
 */
/**
 * Get the paper orientation of a particular page node in the document.
 *
 * @param pageNode - The page node to find the paper orientation for
 * @returns {Nullable<PaperOrientation>} The paper orientation of the specified page or null
 * if the paper orientation is not set.
 */
const getPageNodePaperOrientation = pageNode => {
  const {
    attrs
  } = pageNode;
  return attrs[PAGE_NODE_ATTR_KEYS.paperOrientation];
};
/**
 * Retrieves the paper orientation of a specific page using the editor instance.
 * Falls back to the default paper orientation if the page number is invalid.
 *
 * @param editor - The current editor instance.
 * @param pageNum - The page number to retrieve the paper orientation for.
 * @returns {PaperOrientation} The paper orientation of the specified page or default.
 */
const getPageNumPaperOrientation = (editor, pageNum) => getPageAttributeByPageNum(editor.state, pageNum, getPaginationExtensionOptions(editor).defaultPaperOrientation, getPageNodePaperOrientation);
/**
 * Set the paper orientation of a page node to the given value.
 *
 * @param tr - The transaction to apply the change to.
 * @param dispatch - The dispatch function to apply the transaction.
 * @param pagePos - The position of the page node to set the paper colour for.
 * @param pageNode - The page node to set the paper colour for.
 * @param paperOrientation - The paper orientation to set.
 * @returns {boolean} True if the paper colour was set, false otherwise.
 */
const setPageNodePosPaperOrientation = (tr, dispatch, pagePos, pageNode, paperOrientation) => {
  if (!dispatch) return false;
  if (!isPageNode(pageNode)) {
    console.error("Unexpected! Node at pos:", pagePos, "is not a page node!");
    return false;
  }
  if (getPageNodePaperOrientation(pageNode) === paperOrientation) {
    // Paper colour is already set
    return false;
  }
  setPageNodeAttribute(tr, pagePos, pageNode, PAGE_NODE_ATTR_KEYS.paperOrientation, paperOrientation);
  dispatch(tr);
  return true;
};

/**
 * @file /src/utils/paperSize.ts
 * @name PaperSize
 * @description Utility functions for paper sizes.
 */
/**
 * Check if the given paper size is valid.
 *
 * @param paperSize - The paper size to check.
 * @returns {boolean} True if the paper size is valid, false otherwise.
 */
const isValidPaperSize = paperSize => {
  return paperSize in paperDimensions;
};
/**
 * Given a paper size, return the dimensions of the paper in millimeters.
 *
 * @param paperSize - The paper size
 * @param orientation - The orientation of the paper
 * @returns {PaperDimensions} - The dimensions of the paper
 */
const getPaperDimensions = (paperSize, orientation) => {
  if (!isValidPaperSize(paperSize)) {
    paperSize = DEFAULT_PAPER_SIZE;
  }
  const dimensions = paperDimensions[paperSize];
  if (orientation === "landscape") {
    return flipDimensions(dimensions);
  } else {
    return dimensions;
  }
};
/**
 * Gets the paper dimensions of a page node.
 *
 * @param pageNode - The page node to get the paper dimensions from
 * @returns {PaperDimensions} - The dimensions of the paper
 */
const getPaperDimensionsFromPageNode = pageNode => {
  const paperSize = getPageNodePaperSize(pageNode) ?? DEFAULT_PAPER_SIZE;
  const paperOrientation = getPageNodePaperOrientation(pageNode) ?? DEFAULT_PAPER_ORIENTATION;
  return getPaperDimensions(paperSize, paperOrientation);
};
/**
 * Flips the width and height of a given set of dimensions.
 *
 * @param dimensions - The dimensions to flip.
 * @returns {PaperDimensions} The flipped dimensions.
 */
const flipDimensions = dimensions => {
  return {
    width: dimensions.height,
    height: dimensions.width
  };
};
/**
 * Calculates the pixel width and height of a given paper size.
 *
 * @param pageNodeAttributes - The attributes of the page node.
 * @param bodyNodeAttributes - The attributes of the body node.
 * @returns {PageContentPixelDimensions} The height and width of the page in pixels.
 */
const calculatePageContentPixelDimensions = (pageNodeAttributes, bodyNodeAttributes) => {
  const {
    paperSize,
    paperOrientation,
    pageBorders
  } = pageNodeAttributes;
  const {
    width: paperWidth,
    height: paperHeight
  } = getPaperDimensions(paperSize, paperOrientation);
  const {
    top: marginTop,
    left: marginLeft,
    right: marginRight,
    bottom: marginBottom
  } = bodyNodeAttributes.pageMargins;
  const verticalMargins = marginTop + marginBottom;
  const horizontalMargins = marginLeft + marginRight;
  const {
    top: borderTop,
    right: borderRight,
    bottom: borderBottom,
    left: borderLeft
  } = pageBorders;
  const verticalBorders = borderTop + borderBottom;
  const horizontalBorders = borderLeft + borderRight;
  const bodyHeight = mmToPixels(paperHeight - verticalMargins) - verticalBorders;
  const bodyWidth = mmToPixels(paperWidth - horizontalMargins) - horizontalBorders;
  return {
    bodyHeight,
    bodyWidth
  };
};
/**
 * Check if a page node has a paper size attribute.
 *
 * @param pageNode - The page node to check.
 * @returns {boolean} True if the page node has a paper size attribute, false otherwise.
 */
const pageNodeHasPageSize = pageNode => {
  return nodeHasAttribute(pageNode, PAGE_NODE_ATTR_KEYS.paperSize);
};
/**
 * Get the paper size of a particular page node in the document.
 *
 * @param pageNode - The page node to find the paper size for
 * @returns {Nullable<PaperSize>} The paper size of the specified page or null
 * if the paper size is not set.
 */
const getPageNodePaperSize = pageNode => {
  const {
    attrs
  } = pageNode;
  return attrs[PAGE_NODE_ATTR_KEYS.paperSize];
};
/**
 * Retrieves the paper size of a specific page using the editor instance.
 * Falls back to the default paper size if the page number is invalid.
 *
 * @param editor - The current editor instance.
 * @param pageNum - The page number to retrieve the paper size for.
 * @returns {PaperSize} The paper size of the specified page or default.
 */
const getPageNumPaperSize = (editor, pageNum) => getPageAttributeByPageNum(editor.state, pageNum, getPaginationExtensionOptions(editor).defaultPaperSize, getPageNodePaperSize);
/**
 * Set the paper size for a page node at the specified position.
 *
 * @param tr - The transaction to apply the change to.
 * @param dispatch - The dispatch function to apply the transaction.
 * @param pagePos - The position of the page node to set the paper size for.
 * @param paperSize - The paper size to set.
 * @returns {boolean} True if the paper size was set, false otherwise.
 */
const setPagePaperSize = (tr, dispatch, pagePos, paperSize) => {
  const pageNode = tr.doc.nodeAt(pagePos);
  if (!pageNode) {
    console.error("No node found at pos:", pagePos);
    return false;
  }
  return setPageNodePosPaperSize(tr, dispatch, pagePos, pageNode, paperSize);
};
/**
 * Helper to set the paper size for a page node at the specified position.
 *
 * @param tr - The transaction to apply the change to.
 * @param dispatch - The dispatch function to apply the transaction.
 * @param pagePos - The position of the page node to set the paper size for.
 * @param pageNode - The page node to set the paper size for.
 * @param paperSize - The paper size to set.
 * @returns {boolean} True if the paper size was set, false otherwise.
 */
const setPageNodePosPaperSize = (tr, dispatch, pagePos, pageNode, paperSize) => {
  if (!dispatch) return false;
  if (!isValidPaperSize(paperSize)) {
    console.warn(`Invalid paper size: ${paperSize}`);
    return false;
  }
  if (!isPageNode(pageNode)) {
    console.error("Unexpected! Node at pos:", pagePos, "is not a page node!");
    return false;
  }
  if (getPageNodePaperSize(pageNode) === paperSize) {
    // Paper size is already set
    return false;
  }
  setPageNodeAttribute(tr, pagePos, pageNode, PAGE_NODE_ATTR_KEYS.paperSize, paperSize);
  dispatch(tr);
  return true;
};

/**
 * @file /src/constants/theme.ts
 * @name Theme
 * @description Constants related to the theme
 */
const DARK_THEME = "Dark";
const LIGHT_THEME = "Light";

/**
 * @file /src/utils/colour.ts
 * @name Colour
 * @description Utility functions for working with colours.
 */
/**
 * Checks if the given paper colour is a valid colour format.
 *
 * This function validates the paper colour by checking if it is in
 * hexadecimal, RGB, or RGBA format.
 *
 * @param paperColour - The colour string to validate.
 * @returns `true` if the colour is valid, otherwise `false`.
 */
const isValidColour = paperColour => {
  return isHex(paperColour) || isRGB(paperColour) || isRGBA(paperColour);
};
/**
 * Checks if a given string is a valid hexadecimal color code.
 *
 * A valid hexadecimal color code starts with a '#' followed by either
 * 3 or 6 hexadecimal characters (0-9, A-F, a-f).
 *
 * @param colour - The string to be checked.
 * @returns `true` if the string is a valid hexadecimal color code, otherwise `false`.
 */
const isHex = colour => {
  const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  return hexRegex.test(colour);
};
/**
 * Checks if a given string is in the RGB color format.
 *
 * The RGB color format is defined as `rgb(r, g, b)` where `r`, `g`, and `b` are integers
 * between 0 and 255 inclusive.
 *
 * @param colour - The string to check.
 * @returns `true` if the string is in the RGB color format, otherwise `false`.
 */
const isRGB = colour => {
  const rgbRegex = /^rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)$/;
  return rgbRegex.test(colour);
};
/**
 * Checks if the given colour string is in the RGBA format.
 *
 * The RGBA format is expected to be in the form: `rgba(r, g, b, a)`
 * where `r`, `g`, and `b` are integers between 0 and 255, and `a` is a float between 0 and 1.
 *
 * @param colour - The colour string to check.
 * @returns `true` if the colour string is in the RGBA format, otherwise `false`.
 */
const isRGBA = colour => {
  const rgbaRegex = /^rgba\((\d{1,3}), (\d{1,3}), (\d{1,3}), (0|1|0?\.\d+)\)$/;
  return rgbaRegex.test(colour);
};

/**
 * @file /src/utils/theme.ts
 * @name Theme
 * @description Utility functions for handling the theme of the application
 */
/**
 * Returns the preferred device theme based on the user's system settings.
 * @returns The preferred device theme (either DARK_THEME or LIGHT_THEME).
 */
const getDeviceTheme = () => {
  return window.matchMedia(`(prefers-color-scheme: ${DARK_THEME.toLowerCase()})`).matches ? DARK_THEME : LIGHT_THEME;
};

/**
 * @file /src/utils/paperColour.ts
 * @name PaperColour
 * @description Utility functions for paper colours.
 */
/**
 * Get the paper colour based on the device theme.
 *
 * @returns {string} The paper colour based on the device theme.
 */
const getDeviceThemePaperColour = () => {
  return getDeviceTheme() === DARK_THEME ? DARK_PAPER_COLOUR : LIGHT_PAPER_COLOUR;
};
/**
 * Retrieves the default paper colour based on the provided editor options.
 * If the `useDeviceThemeForPaperColour` option is enabled, it returns the device theme paper colour.
 * Otherwise, it returns the `defaultPaperColour` specified in the options.
 *
 * @param editor - The editor instance.
 * @returns The default paper colour as a string.
 */
const getDefaultPaperColour = editor => {
  const paginationOptions = getPaginationExtensionOptions(editor);
  if (paginationOptions.useDeviceThemeForPaperColour) {
    return getDeviceThemePaperColour();
  } else {
    return paginationOptions.defaultPaperColour;
  }
};
/**
 * Get the paper colour of a particular page node in the document.
 *
 * @param pageNode - The page node to find the paper colour for
 * @returns {Nullable<string>} The paper colour of the specified page or null
 * if the paper colour is not set.
 */
const getPageNodePaperColour = pageNode => {
  const {
    attrs
  } = pageNode;
  return attrs[PAGE_NODE_ATTR_KEYS.paperColour];
};
/**
 * Retrieves the paper color of a specific page using the editor instance.
 * Falls back to the default paper color if the page number is invalid.
 *
 * @param editor - The current editor instance.
 * @param pageNum - The page number to retrieve the paper color for.
 * @returns {string} The paper color of the specified page or default.
 */
const getPageNumPaperColour = (editor, pageNum) => {
  const defaultPaperColour = getDefaultPaperColour(editor);
  return getPageAttributeByPageNum(editor.state, pageNum, defaultPaperColour, getPageNodePaperColour);
};
/**
 * Set the paper colour for a page node at the specified position.
 *
 * @param tr - The transaction to apply the change to.
 * @param dispatch - The dispatch function to apply the transaction.
 * @param pagePos - The position of the page node to set the paper colour for.
 * @param pageNode - The page node to set the paper colour for.
 * @param paperColour - The paper colour to set.
 * @returns {boolean} True if the paper colour was set, false otherwise.
 */
const setPageNodePosPaperColour = (tr, dispatch, pagePos, pageNode, paperColour) => {
  if (!dispatch) return false;
  if (!isValidColour(paperColour)) {
    console.warn("Invalid paper colour:", paperColour);
    return false;
  }
  if (!isPageNode(pageNode)) {
    console.error("Unexpected! Node at pos:", pagePos, "is not a page node!");
    return false;
  }
  if (getPageNodePaperColour(pageNode) === paperColour) {
    // Paper colour is already set
    return false;
  }
  setPageNodeAttribute(tr, pagePos, pageNode, PAGE_NODE_ATTR_KEYS.paperColour, paperColour);
  dispatch(tr);
  return true;
};

/**
 * @file /src/utils/units.ts
 * @name Units
 * @description Utility functions for handling units of measurement.
 */
/**
 * Format a value as a millimetre string.
 *
 * @param value - The value to format.
 * @returns {string} The value formatted as a millimetre string.
 * @example mm(10) // "10mm"
 */
const mm = value => {
  return `${value}mm`;
};
/**
 * Format a value as a pixel string.
 *
 * @param value - The value to format.
 * @returns {string} The value formatted as a pixel string.
 * @example px(10) // "10px"
 */
const px = value => {
  return `${value}px`;
};

/**
 * @file /src/constants/pageSides.ts
 * @name PageSides
 * @description Constants for page sides in the editor.
 */
const pageSides = ["top", "right", "bottom", "left"];

/**
 * @file /src/utils/setSideConfig.ts
 * @name SetSideConfig
 * @description Utility functions for setting side configuration (e.g. margins, borders) for page nodes.
 */
/**
 * Generic helper to set the side configuration of a document.
 *
 * @param attrKey - The key of the attribute to update.
 * @param isValidConfig - A function to validate the side configuration.
 * @param setNodesAttribute - A function to set the attribute nodes.
 * @returns
 */
const setDocumentSideConfig = (attrKey, isValidConfig, setNodesAttribute) => sideConfig => ({
  tr,
  dispatch
}) => {
  if (!dispatch) return false;
  if (!isValidConfig(sideConfig)) {
    console.warn("Invalid side config", sideConfig);
    return false;
  }
  setNodesAttribute(tr, attrKey, sideConfig);
  dispatch(tr);
  return true;
};
/**
 * Sets the side configuration of a node.
 *
 * @param setNodePosByPageNum - A function to get the position of a node by page number.
 * @param setGenericPageNodePosSideConfig - A function to set the side configuration of a node.
 * @param pageNum - The page number to set the side configuration for.
 * @param sideConfig - The side configuration to set.
 * @returns {boolean} True if the side configuration was set, false otherwise.
 */
const setPageSideConfig = (setNodePosByPageNum, setGenericPageNodePosSideConfig) => (pageNum, sideConfig) => ({
  tr,
  dispatch
}) => {
  const {
    doc
  } = tr;
  const pageNodePos = setNodePosByPageNum(doc, pageNum);
  if (!pageNodePos) {
    return false;
  }
  const {
    pos: pagePos,
    node: pageNode
  } = pageNodePos;
  return setGenericPageNodePosSideConfig(tr, dispatch, pagePos, pageNode, sideConfig);
};
/**
 * Set one side of the document side configuration.
 *
 * @param setDocumentSideConfig - A function to set the document side configuration.
 * @param isValueValid - A function to validate the value.
 * @param updateSideConfig - A function to update the side configuration of a page node.
 * @returns {boolean} True if the side value was set, false otherwise.
 */
const setDocumentSideValue = (setDocumentSideConfig, isValueValid, updateSideConfig) => (side, value) => ({
  tr,
  dispatch
}) => {
  if (!dispatch) return false;
  if (side === "all") {
    const sideConfig = {
      top: value,
      right: value,
      bottom: value,
      left: value
    };
    return setDocumentSideConfig(sideConfig);
  }
  if (!isValueValid(value)) {
    console.warn("Invalid margin value", value);
    return false;
  }
  const {
    doc
  } = tr;
  const transactions = [];
  doc.forEach((node, pos) => {
    transactions.push(updateSideConfig(tr, pos, node, side, value));
  });
  const success = transactions.some(changed => changed);
  if (success) {
    dispatch(tr);
  }
  return success;
};
/**
 * Set one side of the page side configuration.
 *
 * @param setPageSideConfig - A function to set the side configuration of a page node.
 * @param isValueValid - A function to validate the value.
 * @param updateSideConfig - A function to update the side configuration of a page node.
 * @param pageNum - The page number to set the side value for.
 * @param side - The side to set the value for.
 * @returns {boolean} True if the side value was set, false otherwise.
 */
const setPageSideValue = (setPageSideConfig, isValueValid, updateSideConfig) => (pageNum, side, value) => ({
  tr,
  dispatch
}) => {
  if (!dispatch) return false;
  if (side === "all") {
    const sideConfig = {
      top: value,
      right: value,
      bottom: value,
      left: value
    };
    return setPageSideConfig(pageNum, sideConfig);
  }
  if (!isValueValid(value)) {
    console.warn("Invalid side value", value);
    return false;
  }
  const {
    doc
  } = tr;
  const pageNodePos = getPageNodePosByPageNum(doc, pageNum);
  if (!pageNodePos) {
    return false;
  }
  const {
    pos: pagePos,
    node: pageNode
  } = pageNodePos;
  const success = updateSideConfig(tr, pagePos, pageNode, side, value);
  if (success) {
    dispatch(tr);
  }
  return success;
};
/**
 * Set the paper side configuration of a page node.
 *
 * @param tr - The transaction to apply the change to.
 * @param dispatch - The dispatch function to apply the transaction.
 * @param pagePos - The position of the page node to set the side config for.
 * @param pageNode - The page node to set the side config for.
 * @param configObj - The side config to set.
 * @param isValidConfig - A function to validate the side config.
 * @param getPageNodeSideConfig - A function to get the existing side config from the page node.
 * @param attrKey - The key of the attribute to update.
 * @returns {boolean} True if the side config were set, false otherwise.
 */
const setPageNodePosSideConfig = (tr, dispatch, pagePos, pageNode, configObj, isValidConfig, getPageNodeSideConfig, attrKey) => {
  if (!dispatch) return false;
  if (!isValidConfig(configObj)) {
    console.warn("Invalid side config:", configObj);
    return false;
  }
  if (!isPageNode(pageNode)) {
    console.error("Unexpected! Node at pos:", pagePos, "is not a page node!");
    return false;
  }
  if (getPageNodeSideConfig(pageNode) === configObj) {
    return false;
  }
  const success = setPageNodeAttribute(tr, pagePos, pageNode, attrKey, configObj);
  if (success) {
    dispatch(tr);
  }
  return success;
};
/**
 * Updates a page side configuration attribute. Does not dispatch the transaction.
 *
 * @param tr - The transaction to apply the change to.
 * @param pagePos - The position of the page node to update the attribute for.
 * @param pageNode - The page node to update the attribute for.
 * @param configObj - The configuration object to update.
 * @param value - The new value of the configuration object.
 * @param getExistingConfig - A function to get the existing configuration object from
 * the node. Can return null if the configuration object is missing or invalid.
 *
 * @param isValidConfig - A function to validate the configuration object.
 * @param defaultConfig - The default configuration object.
 * @param attrKey - The key of the attribute to update.
 * @returns {boolean} True if the attribute was updated, false otherwise.
 */
const updatePageSideConfig = (tr, pagePos, pageNode, configObj, value, getExistingConfig, isValidConfig, defaultConfig, attrKey) => {
  if (!isPageNode(pageNode)) {
    return false;
  }
  const existingConfig = getExistingConfig(pageNode);
  let updatedConfig = {
    ...defaultConfig
  };
  if (existingConfig && isValidConfig(existingConfig)) {
    updatedConfig = {
      ...existingConfig
    };
  } else {
    if (pageSides.includes(configObj)) {
      updatedConfig[configObj] = value;
    } else {
      switch (configObj) {
        case "x":
          updatedConfig.left = value;
          updatedConfig.right = value;
          break;
        case "y":
          updatedConfig.top = value;
          updatedConfig.bottom = value;
          break;
        default:
          console.error("Unhanded margin side", configObj);
      }
    }
  }
  return setPageNodeAttribute(tr, pagePos, pageNode, attrKey, updatedConfig);
};

/**
 * @file /src/utils/pageBorders.ts
 * @name PageBorders
 * @description Utility functions for handling page borders.
 */
/**
 * Checks if a (single) border is valid.
 * Borders must be non-negative and finite to be considered valid.
 *
 * @param border - The border to check.
 * @returns {boolean} True if the border is valid, false otherwise.
 */
const isBorderValid = border => {
  return border >= 0 && isFinite(border);
};
/**
 * Checks if the page borders are valid.
 * Borders must be non-negative and finite to be considered valid.
 *
 * @param pageBorder - The page borders to check.
 * @returns {boolean} True if the page borders are valid, false otherwise.
 */
const isValidPageBorders = pageBorder => {
  return Object.values(pageBorder).every(isBorderValid);
};
/**
 * Get the page borders from a page node.
 *
 * @param pageNode - The page node to get the page borders from.
 * @returns {Nullable<BorderConfig>} The page borders of the specified page.
 */
const getPageNodePageBorders = pageNode => {
  const {
    attrs
  } = pageNode;
  return attrs[PAGE_NODE_ATTR_KEYS.pageBorders];
};
/**
 * Converts a border config to a CSS string using px as the unit.
 *
 * @param pageBorders - The page borders to convert to a CSS string.
 * @returns {string} The CSS string representation of the page borders. Remember MDN says
 * order is (top, right, bottom, left). See https://developer.mozilla.org/en-US/docs/Web/CSS/border.
 */
const calculateShorthandPageBorders = pageBorders => {
  const {
    top,
    right,
    bottom,
    left
  } = pageBorders;
  const borders = [top, right, bottom, left].map(px).join(" ");
  return borders;
};
/**
 * Retrieves the page border config of a specific page using the editor instance.
 * Falls back to the default page border config if the page number is invalid.
 *
 * @param editor - The current editor instance.
 * @param pageNum - The page number to retrieve the page border config for.
 * @returns {BorderConfig} The page border config of the specified page or default.
 */
const getPageNumPageBorders = (editor, pageNum) => getPageAttributeByPageNum(editor.state, pageNum, getPaginationExtensionOptions(editor).defaultPageBorders, getPageNodePageBorders);
/**
 * Set the page borders of a page node.
 *
 * @param tr - The transaction to apply the change to.
 * @param dispatch - The dispatch function to apply the transaction.
 * @param pagePos - The position of the page node to set the page borders for.
 * @param pageNode - The page node to set the page borders for.
 * @param pageBorders - The page borders to set.
 * @returns {boolean} True if the page borders were set, false otherwise.
 */
const setPageNodePosPageBorders = (tr, dispatch, pagePos, pageNode, pageBorders) => {
  return setPageNodePosSideConfig(tr, dispatch, pagePos, pageNode, pageBorders, isValidPageBorders, getPageNodePageBorders, PAGE_NODE_ATTR_KEYS.pageBorders);
};
/**
 * Updates the border on the given page. Does not dispatch the transaction.
 *
 * @param tr - The transaction to apply the change to.
 * @param pagePos - The position of the page node to update the border for.
 * @param pageNode - The page node to update the border for.
 * @param border - The border to update.
 * @param value - The new value of the border.
 * @returns {boolean} True if the border was updated, false otherwise.
 */
const updatePageBorder = (tr, pagePos, pageNode, border, value) => {
  return updatePageSideConfig(tr, pagePos, pageNode, border, value, getPageNodePageBorders, isValidPageBorders, DEFAULT_PAGE_BORDER_CONFIG, PAGE_NODE_ATTR_KEYS.pageBorders);
};

/**
 * @file /src/utils/getPageAttributes.ts
 * @name GetPageAttributes
 * @description Utility functions for getting page attributes.
 */
/**
 * Retrieves page attributes from the editor state for a given page number.
 *
 * @param editor - The editor instance.
 * @param pageNum - The page number to retrieve the attributes for.
 * @returns {PageNodeAttributes} The attributes of the specified page.
 */
const getPageNodeAttributesByPageNum = (editor, pageNum) => {
  const paperSize = getPageNumPaperSize(editor, pageNum);
  const paperColour = getPageNumPaperColour(editor, pageNum);
  const paperOrientation = getPageNumPaperOrientation(editor, pageNum);
  const pageBorders = getPageNumPageBorders(editor, pageNum);
  return {
    paperSize,
    paperColour,
    paperOrientation,
    pageBorders
  };
};
/**
 * Retrieves the default page region node attributes.
 *
 * @returns {PageRegionNodeAttributesObject} The default attributes of the page regions.
 */
const getDefaultPageRegionNodeAttributes = () => {
  return {
    header: HEADER_DEFAULT_ATTRIBUTES,
    body: BODY_DEFAULT_ATTRIBUTES,
    footer: FOOTER_DEFAULT_ATTRIBUTES
  };
};
/**
 * Retrieves body attributes from the editor state.
 *
 * @param state - The current editor state.
 * @param pageNum - The page number to retrieve the attributes for.
 * @returns {PageNodeAttributes} The attributes of the specified page.
 */
const getPageRegionNodeAttributes = (state, pageNum) => {
  if (!doesDocHavePageNodes(state)) {
    return getDefaultPageRegionNodeAttributes();
  }
  const pageNode = getPageNodeByPageNum(state.doc, pageNum);
  if (!pageNode) {
    return getDefaultPageRegionNodeAttributes();
  }
  const headerNode = getPageRegionNode(pageNode, "header");
  const bodyNode = getPageRegionNode(pageNode, "body");
  const footerNode = getPageRegionNode(pageNode, "footer");
  const headerAttributes = headerNode ? getHeaderNodeAttributes(headerNode) : HEADER_DEFAULT_ATTRIBUTES;
  const bodyAttributes = bodyNode ? getBodyNodeAttributes(bodyNode) : BODY_DEFAULT_ATTRIBUTES;
  const footerAttributes = footerNode ? getFooterNodeAttributes(footerNode) : FOOTER_DEFAULT_ATTRIBUTES;
  return {
    body: bodyAttributes,
    header: headerAttributes,
    footer: footerAttributes
  };
};
/**
 * Retrieves the page node attributes and calculates the pixel dimensions of the page.
 *
 * @param editor - The editor instance.
 * @param pageNum - The page number to retrieve the attributes for.
 * @returns {PaginationNodeAttributes} The attributes of the page node,
 * body node and the pixel dimensions of the page.
 */
const getPaginationNodeAttributes = (editor, pageNum) => {
  const {
    state
  } = editor;
  const pageNodeAttributes = getPageNodeAttributesByPageNum(editor, pageNum);
  const pageRegionNodeAttributes = getPageRegionNodeAttributes(state, pageNum);
  const bodyPixelDimensions = calculatePageContentPixelDimensions(pageNodeAttributes, pageRegionNodeAttributes.body);
  return {
    pageNodeAttributes,
    pageRegionNodeAttributes,
    bodyPixelDimensions
  };
};

/**
 * @file /src/utils/buildPageView.ts
 * @name BuildPageView
 * @description Utility functions for building the page view.
 */
/**
 * Builds a new document with paginated content.
 *
 * @param view - The editor view.
 * @param options - The pagination options.
 * @returns {void}
 */
const buildPageView = (editor, view, options) => {
  const {
    state,
    dispatch
  } = view;
  const {
    doc
  } = state;
  try {
    const contentNodes = collectContentNodes(doc);
    const nodeHeights = measureNodeHeights(view, contentNodes);
    // Record the cursor's old position
    const {
      tr,
      selection
    } = state;
    const oldCursorPos = selection.from;
    const {
      newDoc,
      oldToNewPosMap
    } = buildNewDocument(editor, options, contentNodes, nodeHeights);
    // Compare the content of the documents
    if (!newDoc.content.eq(doc.content)) {
      tr.replaceWith(0, doc.content.size, newDoc.content);
      tr.setMeta("pagination", true);
      const newDocContentSize = newDoc.content.size;
      const newCursorPos = mapCursorPosition(contentNodes, oldCursorPos, oldToNewPosMap, newDocContentSize);
      paginationUpdateCursorPosition(tr, newCursorPos);
    }
    dispatch(tr);
  } catch (error) {
    console.error("Error updating page view. Details:", error);
  }
};
/**
 * Collect content nodes and their existing positions.
 *
 * @param doc - The document node.
 * @returns {NodePosArray} The content nodes and their positions.
 */
const collectContentNodes = doc => {
  const contentNodes = [];
  doc.forEach((pageNode, pageOffset) => {
    if (isPageNode(pageNode)) {
      pageNode.forEach((pageRegionNode, pageRegionOffset) => {
        // Offsets in forEach loop start from 0, however, the child nodes of any given node
        // have a starting offset of 1 (for the first child)
        const truePageRegionOffset = pageRegionOffset + 1;
        if (isHeaderFooterNode(pageRegionNode)) ; else if (isBodyNode(pageRegionNode)) {
          pageRegionNode.forEach((child, childOffset) => {
            // First child of body node (e.g. paragraph) has an offset of 1 more
            // than the body node itself.
            const trueChildOffset = childOffset + 1;
            contentNodes.push({
              node: child,
              pos: pageOffset + truePageRegionOffset + trueChildOffset
            });
          });
        } else {
          contentNodes.push({
            node: pageRegionNode,
            pos: pageOffset + truePageRegionOffset
          });
        }
      });
    } else {
      contentNodes.push({
        node: pageNode,
        pos: pageOffset + 1
      });
    }
  });
  return contentNodes;
};
/**
 * Calculates the margins of the element.
 *
 * @param element - The element to calculate margins for.
 * @returns {MarginConfig} The margins of the element.
 */
const calculateElementMargins = element => {
  const style = window.getComputedStyle(element);
  return {
    top: parseFloat(style.marginTop),
    right: parseFloat(style.marginRight),
    bottom: parseFloat(style.marginBottom),
    left: parseFloat(style.marginLeft)
  };
};
/**
 * Measure the heights of the content nodes.
 *
 * @param view - The editor view.
 * @param contentNodes - The content nodes and their positions.
 * @returns {number[]} The heights of the content nodes.
 */
const measureNodeHeights = (view, contentNodes) => {
  const paragraphType = view.state.schema.nodes.paragraph;
  const nodeHeights = contentNodes.map(({
    pos,
    node
  }) => {
    const domNode = view.nodeDOM(pos);
    if (domNode instanceof HTMLElement) {
      let {
        height
      } = domNode.getBoundingClientRect();
      const {
        top: marginTop
      } = calculateElementMargins(domNode);
      if (height === 0) {
        if (node.type === paragraphType || node.isTextblock) {
          // Assign a minimum height to empty paragraphs or textblocks
          height = MIN_PARAGRAPH_HEIGHT;
        }
      }
      // We use top margin only because there is overlap of margins between paragraphs
      return height + marginTop;
    }
    return MIN_PARAGRAPH_HEIGHT; // Default to minimum height if DOM element is not found
  });
  return nodeHeights;
};
/**
 * Build the new document and keep track of new positions.
 *
 * @param editor - The editor instance.
 * @param options - The pagination options.
 * @param contentNodes - The content nodes and their positions.
 * @param nodeHeights - The heights of the content nodes.
 * @returns {newDoc: PMNode, oldToNewPosMap: CursorMap} The new document and the mapping from old positions to new positions.
 */
const buildNewDocument = (editor, options, contentNodes, nodeHeights) => {
  const {
    schema,
    doc
  } = editor.state;
  const {
    pageAmendmentOptions
  } = options;
  const {
    pageNodeType: pageType,
    headerFooterNodeType: headerFooterType,
    bodyNodeType: bodyType,
    paragraphNodeType: paragraphType
  } = getPaginationNodeTypes(schema);
  let pageNum = 0;
  const pages = [];
  let existingPageNode = doc.maybeChild(pageNum);
  let {
    pageNodeAttributes,
    pageRegionNodeAttributes,
    bodyPixelDimensions
  } = getPaginationNodeAttributes(editor, pageNum);
  const constructHeaderFooter = pageRegionType => headerFooterAttrs => {
    if (!headerFooterType) return;
    if (existingPageNode) {
      const hfNode = getPageRegionNode(existingPageNode, pageRegionType);
      if (hfNode) return hfNode;
    }
    return headerFooterType.create(headerFooterAttrs, [paragraphType.create()]);
  };
  const constructHeader = headerFooterAttrs => pageAmendmentOptions.enableHeader ? constructHeaderFooter("header")(headerFooterAttrs) : undefined;
  const constructFooter = headerFooterAttrs => pageAmendmentOptions.enableFooter ? constructHeaderFooter("footer")(headerFooterAttrs) : undefined;
  const constructPageRegions = currentPageContent => {
    const {
      body: bodyAttrs,
      footer: footerAttrs
    } = pageRegionNodeAttributes;
    const pageBody = bodyType.create(bodyAttrs, currentPageContent);
    const pageFooter = constructFooter(footerAttrs);
    const regions = [currentPageHeader, pageBody, pageFooter].filter(Boolean);
    return regions;
  };
  const addPage = currentPageContent => {
    const pageNodeContents = constructPageRegions(currentPageContent);
    const pageNode = pageType.create(pageNodeAttributes, pageNodeContents);
    pages.push(pageNode);
    return pageNode;
  };
  let currentPageHeader = constructHeader(pageRegionNodeAttributes.header);
  let currentPageContent = [];
  let currentHeight = 0;
  const oldToNewPosMap = new Map();
  const pageOffset = 1;
  const bodyOffset = 1;
  let cumulativeNewDocPos = pageOffset + getMaybeNodeSize(currentPageHeader) + bodyOffset;
  // Grouping nodes for widow/orphan protection
  const groupedNodes = [];
  for (let i = 0; i < contentNodes.length;) {
    const curr = contentNodes[i];
    const next = contentNodes[i + 1];
    const nextNext = contentNodes[i + 2];
    const classOf = item => item?.node.attrs?.class;
    const isScene = classOf(curr) === "scene";
    const isCharacter = classOf(curr) === "character";
    const isParenthetical = classOf(next) === "parenthetical";
    const isDialogue = classOf(nextNext) === "dialogue";
    if (isScene && next && classOf(next) !== "scene") {
      // @ts-ignore
      groupedNodes.push([curr, next]);
      i += 2;
    } else if (isCharacter && isParenthetical && isDialogue) {
      // @ts-ignore
      groupedNodes.push([curr, next, nextNext]);
      i += 3;
    } else if (isCharacter && classOf(next) === "dialogue") {
      // @ts-ignore
      groupedNodes.push([curr, next]);
      i += 2;
    } else {
      // @ts-ignore
      groupedNodes.push([curr]);
      i += 1;
    }
  }
  // Pagination loop
  for (let g = 0; g < groupedNodes.length; g++) {
    const group = groupedNodes[g];
    const groupHeight = group.reduce((sum, item) => {
      // @ts-ignore
      const idx = contentNodes.findIndex(n => n.pos === item.pos);
      return sum + (idx !== -1 ? nodeHeights[idx] : MIN_PARAGRAPH_HEIGHT);
    }, 0);
    const classOf = item => item?.node.attrs?.class;
    // @ts-ignore
    const isSceneGroup = classOf(group[0]) === "scene";
    let nextGroup = groupedNodes[g + 1];
    const nextGroupHeight = nextGroup?.reduce((sum, item) => {
      // @ts-ignore
      const idx = contentNodes.findIndex(n => n.pos === item.pos);
      return sum + (idx !== -1 ? nodeHeights[idx] : MIN_PARAGRAPH_HEIGHT);
    }, 0) ?? 0;
    const notEnoughSpaceForScenePlusNext = isSceneGroup && nextGroup && currentHeight + groupHeight + nextGroupHeight > bodyPixelDimensions.bodyHeight;
    const isPageFull = currentHeight + groupHeight > bodyPixelDimensions.bodyHeight || notEnoughSpaceForScenePlusNext;
    if (isPageFull && currentPageContent.length > 0) {
      const pageNode = addPage(currentPageContent);
      cumulativeNewDocPos += pageNode.nodeSize - getMaybeNodeSize(currentPageHeader);
      currentPageContent = [];
      currentHeight = 0;
      existingPageNode = doc.maybeChild(++pageNum);
      if (isPageNumInRange(doc, pageNum)) {
        ({
          pageNodeAttributes,
          pageRegionNodeAttributes,
          bodyPixelDimensions
        } = getPaginationNodeAttributes(editor, pageNum));
      }
      currentPageHeader = constructHeader(pageRegionNodeAttributes.header);
      cumulativeNewDocPos += getMaybeNodeSize(currentPageHeader);
    }
    // @ts-ignore
    for (const {
      node,
      pos: oldPos
    } of group) {
      const offsetInPage = currentPageContent.reduce((sum, n) => sum + n.nodeSize, 0);
      const nodeStartPosInNewDoc = cumulativeNewDocPos + offsetInPage;
      oldToNewPosMap.set(oldPos, nodeStartPosInNewDoc);
      currentPageContent.push(node);
    }
    currentHeight += groupHeight;
  }
  if (currentPageContent.length > 0) {
    addPage(currentPageContent);
  }
  const newDoc = schema.topNodeType.create(null, pages);
  limitMappedCursorPositions(oldToNewPosMap, newDoc.content.size);
  return {
    newDoc,
    oldToNewPosMap
  };
};
/**
 * Limit mapped cursor positions to document size to prevent out of bounds errors
 * when setting the cursor position.
 *
 * @param oldToNewPosMap - The mapping from old positions to new positions.
 * @param docSize - The size of the new document.
 * @returns {void}
 */
const limitMappedCursorPositions = (oldToNewPosMap, docSize) => {
  oldToNewPosMap.forEach((newPos, oldPos) => {
    if (newPos > docSize) {
      oldToNewPosMap.set(oldPos, docSize);
    }
  });
};
/**
 * Map the cursor position from the old document to the new document.
 *
 * @param contentNodes - The content nodes and their positions.
 * @param oldCursorPos - The old cursor position.
 * @param oldToNewPosMap - The mapping from old positions to new positions.
 * @param newDocContentSize - The size of the new document. Serves as maximum limit for cursor position.
 * @returns {number} The new cursor position.
 */
const mapCursorPosition = (contentNodes, oldCursorPos, oldToNewPosMap, newDocContentSize) => {
  let newCursorPos = null;
  for (let i = 0; i < contentNodes.length; i++) {
    const {
      node,
      pos: oldNodePos
    } = contentNodes[i];
    const nodeSize = node.nodeSize;
    if (inRange(oldCursorPos, oldNodePos, oldNodePos + nodeSize)) {
      const offsetInNode = oldCursorPos - oldNodePos;
      const newNodePos = oldToNewPosMap.get(oldNodePos);
      if (newNodePos === undefined) {
        console.error("Unable to determine new node position from cursor map!");
        newCursorPos = 0;
      } else {
        newCursorPos = Math.min(newNodePos + offsetInNode, newDocContentSize - 1);
      }
      break;
    }
  }
  return newCursorPos;
};
/**
 * Check if the given position is at the start of a text block.
 *
 * @param doc - The document node.
 * @param $pos - The resolved position in the document.
 * @returns {boolean} True if the position is at the start of a text block, false otherwise.
 */
const isNodeBeforeAvailable = $pos => {
  return !!$pos.nodeBefore && (isTextNode($pos.nodeBefore) || isParagraphNode($pos.nodeBefore));
};
/**
 * Check if the given position is at the end of a text block.
 *
 * @param doc - The document node.
 * @param $pos - The resolved position in the document.
 * @returns {boolean} True if the position is at the end of a text block, false otherwise.
 */
const isNodeAfterAvailable = $pos => {
  return !!$pos.nodeAfter && (isTextNode($pos.nodeAfter) || isParagraphNode($pos.nodeAfter));
};
/**
 * Sets the cursor selection after creating the new document.
 *
 * @param tr - The current transaction.
 * @returns {void}
 */
const paginationUpdateCursorPosition = (tr, newCursorPos) => {
  if (newCursorPos !== null) {
    const $pos = tr.doc.resolve(newCursorPos);
    let selection;
    if ($pos.parent.isTextblock || isNodeBeforeAvailable($pos) || isNodeAfterAvailable($pos)) {
      selection = moveToThisTextBlock(tr, $pos);
    } else {
      selection = moveToNearestValidCursorPosition($pos);
    }
    if (selection) {
      setSelection(tr, selection);
    } else {
      // Fallback to a safe selection at the end of the document
      setSelectionAtEndOfDocument(tr);
    }
  } else {
    setSelectionAtEndOfDocument(tr);
  }
};

/**
 * @file /src/Plugins/Pagination.ts
 * @name Pagination
 * @description Custom plugin for paginating the editor content.
 */
/**
 * Throttle function: ensures fn is only called once every wait ms.
 */
function throttle(fn, wait) {
  let lastTime = 0;
  let timeout = null;
  let lastArgs = null;
  return function (...args) {
    const now = Date.now();
    if (now - lastTime >= wait) {
      lastTime = now;
      fn.apply(this, args);
    } else {
      lastArgs = args;
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        lastTime = Date.now();
        fn.apply(this, lastArgs);
        lastArgs = null;
      }, wait - (now - lastTime));
    }
  };
}
const PaginationPlugin = ({
  editor,
  options
}) => {
  return new Plugin({
    key: new PluginKey("pagination"),
    view() {
      let isPaginating = false;
      let renderCount = 0;
      // Throttle buildPageView to only run once every 300ms (adjust as needed)
      const throttledBuildPageView = throttle((editor, view, options) => {
        isPaginating = true;
        try {
          buildPageView(editor, view, options);
        } finally {
          isPaginating = false;
        }
      }, 300);
      return {
        update(view, prevState) {
          console.log("v2.1.9");
          if (isPaginating) return;
          const {
            state
          } = view;
          const {
            doc,
            schema
          } = state;
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
        }
      };
    }
  });
};

/**
 * @file /src/utils/pageRegion/pageMargins.ts
 * @name PageMargins
 * @description Utility functions for body margins
 */
/**
 * Checks if a (single) margin is valid.
 * Margins must be non-negative and finite to be considered valid.
 *
 * @param margin - The margin to check.
 * @returns {boolean} True if the margin is valid, false otherwise.
 */
const isMarginValid = margin => {
  return margin >= 0 && isFinite(margin);
};
/**
 * Checks if the page margins are valid.
 * Margins must be non-negative and finite to be considered valid.
 *
 * @param pageMargins - The page margins to check.
 * @returns {boolean} True if the page margins are valid, false otherwise.
 */
const isValidPageMargins = pageMargins => {
  return Object.values(pageMargins).every(isMarginValid);
};
/**
 * Retrieves the page margin config of a specific body using the editor instance.
 * Falls back to the default page margin config if the page number is invalid.
 *
 * @param editor - The current editor instance.
 * @param pageNum - The page number to retrieve the page margin config for.
 * @returns {MarginConfig} The page margin config of the specified page or default.
 */
const getPageNumPageMargins = (editor, pageNum) => getPageRegionAttributeByPageNum(editor.state, pageNum, "body", getPaginationExtensionOptions(editor).defaultMarginConfig, getBodyNodeMargins);
/**
 * Calculate the effective DOM margins of the body node. Takes into account
 * what the margins should be to ensure the header and footer nodes are
 * visible on the page.
 *
 * @param bodyNode - The body node to calculate the margins for.
 * @returns {MarginConfig} The effective margins of the body node.
 */
const calculateBodyMargins = bodyNode => {
  // Copy the default margin config to avoid modifying the original.
  const {
    ...bodyMargins
  } = getBodyNodeMargins(bodyNode) ?? DEFAULT_PAGE_MARGIN_CONFIG;
  return bodyMargins;
};
/**
 * Converts a margin config to a CSS string using millimeters as the unit.
 *
 * @param pageMargins - The page margins to convert to a CSS string.
 * @returns {string} The CSS string representation of the page margins. As per MDN reference, the
 * order is (top, right, bottom, left). See {@link https://developer.mozilla.org/en-US/docs/Web/CSS/padding}.
 */
const calculateShorthandMargins = pageMargins => {
  const {
    top,
    right,
    bottom,
    left
  } = pageMargins;
  const padding = [top, right, bottom, left].map(mm).join(" ");
  return padding;
};
/**
 * Set the page margins of a body node.
 *
 * @param tr - The transaction to apply the change to.
 * @param dispatch - The dispatch function to apply the transaction.
 * @param pagePos - The position of the body node to set the page margins for.
 * @param bodyNode - The body node to set the page margins for.
 * @param pageMargins - The page margins to set.
 * @returns {boolean} True if the page margins were set, false otherwise.
 */
const setBodyNodePosPageMargins = (tr, dispatch, pagePos, bodyNode, pageMargins) => {
  return setPageNodePosSideConfig(tr, dispatch, pagePos, bodyNode, pageMargins, isValidPageMargins, getBodyNodeMargins, BODY_NODE_ATTR_KEYS.pageMargins);
};
/**
 * Updates the margin on the given page. Does not dispatch the transaction.
 *
 * @param tr - The transaction to apply the change to.
 * @param pagePos - The position of the body node to update the margin for.
 * @param bodyNode - The body node to update the margin for.
 * @param margin - The margin to update.
 * @param value - The new value of the margin.
 * @returns {boolean} True if the margin was updated, false otherwise.
 */
const updateBodyMargin = (tr, pagePos, bodyNode, margin, value) => {
  return updatePageSideConfig(tr, pagePos, bodyNode, margin, value, getBodyNodeMargins, isValidPageMargins, DEFAULT_PAGE_MARGIN_CONFIG, BODY_NODE_ATTR_KEYS.pageMargins);
};

/**
 * @file /src/PaginationExtension.ts
 * @name Pagination
 * @description Custom pagination extension for the Tiptap editor.
 */
const PaginationExtension = Extension.create({
  name: PAGINATION_EXTENSION_NAME,
  addOptions() {
    return {
      defaultPaperSize: DEFAULT_PAPER_SIZE,
      defaultPaperColour: DEFAULT_PAPER_COLOUR,
      useDeviceThemeForPaperColour: false,
      defaultPaperOrientation: DEFAULT_PAPER_ORIENTATION,
      defaultMarginConfig: DEFAULT_PAGE_MARGIN_CONFIG,
      defaultPageBorders: DEFAULT_PAGE_BORDER_CONFIG,
      pageAmendmentOptions: DEFAULT_PAGE_AMENDMENT_CONFIG
    };
  },
  onCreate() {
    this.editor.commands.checkPaperSizes();
  },
  addProseMirrorPlugins() {
    const {
      editor,
      options
    } = this;
    return [KeymapPlugin, PaginationPlugin({
      editor,
      options
    })];
  },
  addCommands() {
    return {
      setDocumentPaperSize: paperSize => ({
        tr,
        dispatch
      }) => {
        if (!dispatch) return false;
        if (!isValidPaperSize(paperSize)) {
          console.warn(`Invalid paper size: ${paperSize}`);
          return false;
        }
        setPageNodesAttribute(tr, PAGE_NODE_ATTR_KEYS.paperSize, paperSize);
        dispatch(tr);
        return true;
      },
      setDocumentDefaultPaperSize: () => ({
        commands
      }) => commands.setDocumentPaperSize(this.options.defaultPaperSize),
      setPagePaperSize: (pageNum, paperSize) => ({
        tr,
        dispatch
      }) => {
        const {
          doc
        } = tr;
        const pageNodePos = getPageNodePosByPageNum(doc, pageNum);
        if (!pageNodePos) {
          return false;
        }
        const {
          pos: pagePos,
          node: pageNode
        } = pageNodePos;
        return setPageNodePosPaperSize(tr, dispatch, pagePos, pageNode, paperSize);
      },
      checkPaperSizes: () => ({
        tr,
        dispatch
      }) => {
        const {
          doc
        } = tr;
        const paperSizeUpdates = [];
        doc.forEach((node, pos) => {
          if (isPageNode(node)) {
            if (!pageNodeHasPageSize(node)) {
              paperSizeUpdates.push(setPagePaperSize(tr, dispatch, pos, this.options.defaultPaperSize));
            }
          }
        });
        // If any page sizes were updated
        return paperSizeUpdates.some(update => update);
      },
      setDocumentPaperColour: paperColour => ({
        tr,
        dispatch
      }) => {
        if (!dispatch) return false;
        setPageNodesAttribute(tr, PAGE_NODE_ATTR_KEYS.paperColour, paperColour);
        dispatch(tr);
        return true;
      },
      setDocumentDefaultPaperColour: () => ({
        editor,
        commands
      }) => {
        const defaultPaperColour = getDefaultPaperColour(editor);
        return commands.setDocumentPaperColour(defaultPaperColour);
      },
      setPagePaperColour: (pageNum, paperColour) => ({
        tr,
        dispatch
      }) => {
        const {
          doc
        } = tr;
        const pageNodePos = getPageNodePosByPageNum(doc, pageNum);
        if (!pageNodePos) {
          return false;
        }
        const {
          pos: pagePos,
          node: pageNode
        } = pageNodePos;
        return setPageNodePosPaperColour(tr, dispatch, pagePos, pageNode, paperColour);
      },
      setDocumentPaperOrientation: paperOrientation => ({
        tr,
        dispatch
      }) => {
        if (!dispatch) return false;
        setPageNodesAttribute(tr, PAGE_NODE_ATTR_KEYS.paperOrientation, paperOrientation);
        dispatch(tr);
        return true;
      },
      setDocumentDefaultPaperOrientation: () => ({
        commands
      }) => commands.setDocumentPaperOrientation(this.options.defaultPaperOrientation),
      setPagePaperOrientation: (pageNum, paperOrientation) => ({
        tr,
        dispatch
      }) => {
        const {
          doc
        } = tr;
        const pageNodePos = getPageNodePosByPageNum(doc, pageNum);
        if (!pageNodePos) {
          return false;
        }
        const {
          pos: pagePos,
          node: pageNode
        } = pageNodePos;
        return setPageNodePosPaperOrientation(tr, dispatch, pagePos, pageNode, paperOrientation);
      },
      setDocumentPageMargins: setDocumentSideConfig(BODY_NODE_ATTR_KEYS.pageMargins, isValidPageMargins, setBodyNodesAttribute),
      setDocumentDefaultPageMargins: () => ({
        commands
      }) => commands.setDocumentPageMargins(this.options.defaultMarginConfig),
      setPagePageMargins: setPageSideConfig(getPageNodePosByPageNum, setBodyNodePosPageMargins),
      setDocumentPageMargin: (margin, value) => ({
        tr,
        dispatch,
        commands
      }) => setDocumentSideValue(commands.setDocumentPageMargins, isMarginValid, updateBodyMargin)(margin, value)({
        tr,
        dispatch
      }),
      setPagePageMargin: (pageNum, margin, value) => ({
        tr,
        dispatch,
        commands
      }) => setPageSideValue(commands.setPagePageMargins, isMarginValid, updateBodyMargin)(pageNum, margin, value)({
        tr,
        dispatch
      }),
      setDocumentPageBorders: setDocumentSideConfig(PAGE_NODE_ATTR_KEYS.pageBorders, isValidPageBorders, setPageNodesAttribute),
      setDocumentDefaultPageBorders: () => ({
        commands
      }) => commands.setDocumentPageBorders(this.options.defaultPageBorders),
      setPageBorders: setPageSideConfig(getPageNodePosByPageNum, setPageNodePosPageBorders),
      setDocumentPageBorder: (border, value) => ({
        tr,
        dispatch,
        commands
      }) => setDocumentSideValue(commands.setDocumentPageBorders, isBorderValid, updatePageBorder)(border, value)({
        tr,
        dispatch
      }),
      setPagePageBorder: (pageNum, border, value) => ({
        tr,
        dispatch,
        commands
      }) => setPageSideValue(commands.setPageBorders, isBorderValid, updatePageBorder)(pageNum, border, value)({
        tr,
        dispatch
      })
    };
  }
});

/**
 * @file /src/utils/clipboard.ts
 * @name Clipboard
 * @description Utility functions for clipboard operations.
 */
/**
 * Constructs a clipboard serialiser that serialises only the children of the nodes of the specified schema.
 *
 * @param schema - The schema to use for serialisation.
 * @returns {DOMSerializer} The constructed clipboard serialiser.
 */
const constructChildOnlyClipboardSerialiser = (schema, isNode) => {
  // Extend DOMSerializer to override serializeFragment
  const clipboardSerialiser = Object.create(DOMSerializer.fromSchema(schema));
  // Override serializeFragment
  clipboardSerialiser.serializeFragment = (fragment, options = {}, target = document.createDocumentFragment()) => {
    const serializer = DOMSerializer.fromSchema(schema);
    fragment.forEach(node => {
      if (isNode(node)) {
        // Serialize only the children of the page node
        serializer.serializeFragment(node.content, options, target);
      } else {
        // Serialize non-page nodes directly
        serializer.serializeNode(node, options);
      }
    });
    return target;
  };
  return clipboardSerialiser;
};
/**
 * Constructs a clipboard plugin with the specified key and serialiser.
 *
 * @param name - The plugin key.
 * @param serialiser - The serialiser to use for clipboard operations.
 * @returns {Plugin} The constructed clipboard plugin.
 */
const constructClipboardPlugin = (name, serialiser) => {
  return new Plugin({
    key: new PluginKey(name),
    props: {
      clipboardSerializer: serialiser
    }
  });
};
/**
 * Constructs a clipboard plugin that serialises only the children of the nodes of the specified schema.
 *
 * @param name - The plugin key.
 * @param schema - The schema to use for serialisation.
 * @param isNode - A function that returns true if the node is a page node.
 * @returns {Plugin} The constructed clipboard plugin.
 */
const constructChildOnlyClipboardPlugin = (name, schema, isNode) => {
  const clipboardSerialiser = constructChildOnlyClipboardSerialiser(schema, isNode);
  return constructClipboardPlugin(name, clipboardSerialiser);
};

/**
 * @file /src/utils/attributes/addAttributes.ts
 * @name AddAttributes
 * @description Utility functions for adding node attributes.
 */
/**
 * Add the specified attributes to the node.
 *
 * @param attributes - The attributes to add to the node.
 * @returns {Attributes} The attributes to add to the node.
 */
const addNodeAttributes = attributes => {
  return Object.entries(attributes).reduce((attributes, [key, config]) => ({
    ...attributes,
    [key]: {
      default: config.default,
      parseHTML: parseHTMLAttribute(key, config.default),
      renderHTML: renderHTMLAttribute(key)
    }
  }), {});
};
/**
 * Parse the HTML attribute of the element.
 *
 * @param element - The element to parse the attribute from.
 * @param attr - The attribute to parse.
 * @param fallback - The fallback value if the attribute is not found.
 * @returns {T} The parsed attribute value or the fallback value.
 */
const parseHTMLAttribute = (attr, fallback) => element => {
  const attrValue = element.getAttribute(attr);
  if (!attrValue) return fallback;
  try {
    return JSON.parse(attrValue);
  } catch (error) {
    return fallback;
  }
};
/**
 * Render the HTML attribute.
 *
 * @param attr - The attribute to render.
 * @param attributes - The attributes to render.
 * @returns {Object} The rendered attribute.
 */
const renderHTMLAttribute = attr => attributes => {
  const value = attributes[attr];
  return {
    [attr]: JSON.stringify(value)
  };
};

/**
 * @file /src/Nodes/Page.ts
 * @name Page
 * @description Custom node for creating a page in the editor.
 */
const baseElement$2 = "div";
const dataPageAttribute = "data-page";
const PageNode = Node$1.create({
  name: PAGE_NODE_NAME,
  group: "block",
  content: `block{1,3}`,
  // We must have a body section and can optionally have a header and footer
  defining: true,
  isolating: false,
  addOptions() {
    return {
      pageGap: DEFAULT_PAGE_GAP
    };
  },
  addAttributes() {
    return addNodeAttributes(PAGE_ATTRIBUTES);
  },
  parseHTML() {
    return [parseHTMLNode(baseElement$2, dataPageAttribute)];
  },
  renderHTML({
    HTMLAttributes
  }) {
    return [baseElement$2, mergeAttributes(HTMLAttributes, {
      [dataPageAttribute]: true,
      class: "page"
    }), 0];
  },
  addNodeView() {
    return props => {
      const {
        node
      } = props;
      const dom = document.createElement(baseElement$2);
      dom.setAttribute(dataPageAttribute, String(true));
      dom.classList.add(PAGE_NODE_NAME);
      const {
        width,
        height
      } = getPaperDimensionsFromPageNode(node);
      dom.style.width = mm(width);
      dom.style.height = mm(height);
      const pageBorders = getPageNodePageBorders(node) ?? DEFAULT_PAGE_BORDER_CONFIG;
      dom.style.borderWidth = calculateShorthandPageBorders(pageBorders);
      dom.style.borderStyle = "solid";
      dom.style.borderColor = "#ccc";
      const paperColour = getPageNodePaperColour(node) ?? DEFAULT_PAPER_COLOUR;
      dom.style.background = paperColour;
      dom.style.overflow = "hidden";
      dom.style.position = "relative";
      dom.style.marginTop = px(this.options.pageGap);
      dom.style.marginLeft = "auto";
      dom.style.marginRight = "auto";
      dom.style.boxSizing = "border-box";
      const contentDOM = document.createElement(baseElement$2);
      dom.appendChild(contentDOM);
      return {
        dom,
        contentDOM
      };
    };
  },
  addProseMirrorPlugins() {
    return [constructChildOnlyClipboardPlugin("pageClipboardPlugin", this.editor.schema, isPageNode)];
  }
});

/**
 * @file /src/utils/pageRegion/Dimensions.ts
 * @name Dimensions
 * @description Utility functions for body dimensions.
 */
/**
 * Calculates the dimensions in millimetres of a header or footer node based on its paper size.
 *
 * @param pageNode - The page node containing the header or footer node.
 * @param headerFooterNode - The header or footer node to calculate the dimensions for.
 * @returns {PaperDimensions} The dimensions of the header or footer node.
 */
const calculateHeaderFooterDimensions = (pageNode, headerFooterNode) => {
  const {
    width: pageWidth
  } = getPaperDimensionsFromPageNode(pageNode);
  const {
    left,
    right
  } = getHeaderFooterNodeXMargins(headerFooterNode) ?? DEFAULT_X_MARGIN_CONFIG;
  const width = pageWidth - (left + right);
  const height = getHeaderFooterNodeHeight(headerFooterNode) ?? HEADER_FOOTER_DEFAULT_ATTRIBUTES.height;
  return {
    width,
    height
  };
};
/**
 * Calculates the dimensions in millimetres of a body node based on its paper size
 * and orientation.
 *
 * @param pageNode - The page node containing the body node.
 * @param bodyNode - The body node to calculate the dimensions for.
 * @returns {PaperDimensions} The dimensions of the body node.
 */
const calculateBodyDimensions = (pageNode, bodyNode) => {
  const {
    width: pageWidth,
    height: pageHeight
  } = getPaperDimensionsFromPageNode(pageNode);
  const {
    bottom,
    left,
    right,
    top
  } = getBodyNodeMargins(bodyNode) ?? DEFAULT_PAGE_MARGIN_CONFIG;
  const width = pageWidth - (left + right);
  const height = pageHeight - (top + bottom);
  return {
    width,
    height
  };
};

/**
 * @file /src/Nodes/HeaderFooter.ts
 * @name HeaderFooter
 * @description The Header/Footer node for the editor.
 */
const baseElement$1 = "div";
const headerFooterAttribute = "data-page-header-footer";
const HeaderFooterNode = Node$1.create({
  name: HEADER_FOOTER_NODE_NAME,
  group: "block",
  content: "block+",
  defining: true,
  isolating: true,
  addAttributes() {
    return addNodeAttributes(HEADER_FOOTER_ATTRIBUTES);
  },
  parseHTML() {
    return [parseHTMLNode(baseElement$1, headerFooterAttribute)];
  },
  renderHTML({
    HTMLAttributes
  }) {
    return [baseElement$1, mergeAttributes(HTMLAttributes, {
      [headerFooterAttribute]: true,
      class: HEADER_FOOTER_NODE_NAME
    }), 0];
  },
  addNodeView() {
    return props => {
      const {
        editor,
        node,
        getPos
      } = props;
      const pos = getPos();
      const {
        node: pageNode
      } = getPageNodeAndPosition(editor.state.doc, pos);
      const pageRegionType = getHeaderFooterNodeType(node);
      if (!pageNode) {
        throw new Error(`Page node not found from ${pageRegionType ?? HEADER_FOOTER_NODE_NAME} node at position ${pos}`);
      }
      const dom = document.createElement(baseElement$1);
      dom.setAttribute(headerFooterAttribute, String(true));
      dom.classList.add(HEADER_FOOTER_NODE_NAME);
      const {
        width,
        height
      } = calculateHeaderFooterDimensions(pageNode, node);
      const endOffset = getHeaderFooterNodePageEndOffset(node) ?? FOOTER_DEFAULT_ATTRIBUTES.pageEndOffset;
      const xMargins = getHeaderFooterNodeXMargins(node) ?? FOOTER_DEFAULT_ATTRIBUTES.xMargins;
      dom.style.height = mm(height);
      dom.style.width = mm(width);
      dom.style.left = mm(xMargins.left);
      switch (pageRegionType) {
        case "header":
          dom.style.top = mm(endOffset);
          break;
        case "footer":
          dom.style.bottom = mm(endOffset);
          break;
      }
      dom.style.border = "1px solid #ccc";
      dom.style.overflow = "hidden";
      dom.style.position = "absolute";
      dom.style.boxSizing = "border-box";
      const contentDOM = document.createElement(baseElement$1);
      dom.appendChild(contentDOM);
      return {
        dom,
        contentDOM
      };
    };
  },
  addProseMirrorPlugins() {
    return [constructChildOnlyClipboardPlugin("headerChildOnlyClipboardPlugin", this.editor.schema, isHeaderFooterNode)];
  }
});

/**
 * @file /src/Nodes/Body.ts
 * @name Body
 * @description The Body node situated within a page.
 */
const baseElement = "div";
const bodyAttribute = "data-page-body";
const BodyNode = Node$1.create({
  name: BODY_NODE_NAME,
  group: "block",
  content: "block*",
  defining: true,
  isolating: false,
  addAttributes() {
    return addNodeAttributes(BODY_ATTRIBUTES);
  },
  parseHTML() {
    return [parseHTMLNode(baseElement, bodyAttribute)];
  },
  renderHTML({
    HTMLAttributes
  }) {
    return [baseElement, mergeAttributes(HTMLAttributes, {
      [bodyAttribute]: true,
      class: BODY_NODE_NAME
    }), 0];
  },
  addNodeView() {
    return props => {
      const {
        editor,
        node,
        getPos
      } = props;
      const pos = getPos();
      const {
        node: pageNode
      } = getPageNodeAndPosition(editor.state.doc, pos);
      if (!pageNode) {
        throw new Error(`Page node not found from body node at position ${pos}`);
      }
      const dom = document.createElement(baseElement);
      dom.setAttribute(bodyAttribute, String(true));
      dom.classList.add(BODY_NODE_NAME);
      const {
        width,
        height
      } = calculateBodyDimensions(pageNode, node);
      const calculatedMargins = calculateBodyMargins(node);
      dom.style.height = mm(height);
      dom.style.width = mm(width);
      dom.style.margin = calculateShorthandMargins(calculatedMargins);
      dom.style.border = "1px solid #ccc";
      dom.style.overflow = "hidden";
      dom.style.position = "relative";
      const contentDOM = document.createElement(baseElement);
      dom.appendChild(contentDOM);
      return {
        dom,
        contentDOM
      };
    };
  },
  addProseMirrorPlugins() {
    return [constructChildOnlyClipboardPlugin("bodyChildOnlyClipboardPlugin", this.editor.schema, isBodyNode)];
  }
});

/**
 * @file /src/index.ts
 * @name Index
 * @description Main entry point for the package
 */
// === Extensions ===

export { BodyNode, DARK_PAPER_COLOUR, DEFAULT_PAGE_AMENDMENT_CONFIG, DEFAULT_PAGE_BORDER_CONFIG, DEFAULT_PAGE_MARGIN_CONFIG, DEFAULT_PAGE_MARGIN_NAME, DEFAULT_PAPER_COLOUR, DEFAULT_PAPER_ORIENTATION, DEFAULT_PAPER_SIZE, HeaderFooterNode, LIGHT_PAPER_COLOUR, PageNode, commonMarginConfigs, PaginationExtension as default, doesDocHavePageNodes, getBodyNodeMargins, getPageNodePageBorders, getPageNodePaperColour, getPageNodePaperOrientation, getPageNodePaperSize, getPageNumPageBorders, getPageNumPageMargins, getPageNumPaperColour, getPageNumPaperOrientation, getPageNumPaperSize, getPageNumber, getThisPageNodePosition, isPageNode, pageSides, paperDimensions, paperOrientationsSelect, paperSizes };
//# sourceMappingURL=index.js.map
