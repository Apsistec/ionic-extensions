/**
 * Checks if node is an empty paragraph.
 */
export function isEmptyParagraph(node) {
    return (!node ||
        (node.type.name === "paragraph" && !node.textContent && !node.childCount));
}
/**
 * Returns false if node contains only empty inline nodes and hardBreaks.
 */
export function hasVisibleContent(node) {
    var isInlineNodeHasVisibleContent = function (inlineNode) {
        return inlineNode.isText
            ? !!inlineNode.textContent.trim()
            : inlineNode.type.name !== "hardBreak";
    };
    if (node.isInline) {
        return isInlineNodeHasVisibleContent(node);
    }
    else if (node.isBlock && (node.isLeaf || node.isAtom)) {
        return true;
    }
    else if (!node.childCount) {
        return false;
    }
    for (var index = 0; index < node.childCount; index++) {
        var child = node.child(index);
        if (hasVisibleContent(child)) {
            return true;
        }
    }
    return false;
}
/**
 * Checks if a node has any content. Ignores node that only contain empty block nodes.
 */
export function isNodeEmpty(node) {
    if (node && node.textContent) {
        return false;
    }
    if (!node ||
        !node.childCount ||
        (node.childCount === 1 && isEmptyParagraph(node.firstChild))) {
        return true;
    }
    var block = [];
    var nonBlock = [];
    node.forEach(function (child) {
        child.isInline ? nonBlock.push(child) : block.push(child);
    });
    return (!nonBlock.length &&
        !block.filter(function (childNode) {
            return (!!childNode.childCount &&
                !(childNode.childCount === 1 && isEmptyParagraph(childNode.firstChild))) ||
                childNode.isAtom;
        }).length);
}
/**
 * Checks if a node looks like an empty document
 */
export function isEmptyDocument(node) {
    var nodeChild = node.content.firstChild;
    if (node.childCount !== 1 || !nodeChild) {
        return false;
    }
    return (nodeChild.type.name === "paragraph" &&
        !nodeChild.childCount &&
        nodeChild.nodeSize === 2 &&
        (!nodeChild.marks || nodeChild.marks.length === 0));
}
export var getStepRange = function (transaction) {
    var from = -1;
    var to = -1;
    transaction.steps.forEach(function (step) {
        step.getMap().forEach(function (_oldStart, _oldEnd, newStart, newEnd) {
            from = newStart < from || from === -1 ? newStart : from;
            to = newEnd < to || to === -1 ? newEnd : to;
        });
    });
    if (from !== -1) {
        return { from: from, to: to };
    }
    return null;
};
/**
 * Find the farthest node given a condition
 * @param predicate Function to check the node
 */
export var findFarthestParentNode = function (predicate) { return function (selection) {
    var $from = selection.$from;
    var candidate = null;
    for (var i = $from.depth; i > 0; i--) {
        var node = $from.node(i);
        if (predicate(node)) {
            candidate = {
                pos: i > 0 ? $from.before(i) : 0,
                start: $from.start(i),
                depth: i,
                node: node,
            };
        }
    }
    return candidate;
}; };
export var isSelectionEndOfParagraph = function (state) {
    return state.selection.$to.parent.type === state.schema.nodes.paragraph &&
        state.selection.$to.pos === state.doc.resolve(state.selection.$to.pos).end();
};
export function nodesBetweenChanged(tr, f, startPos) {
    var stepRange = getStepRange(tr);
    if (!stepRange) {
        return;
    }
    tr.doc.nodesBetween(stepRange.from, stepRange.to, f, startPos);
}
export function getNodesCount(node) {
    var count = {};
    node.nodesBetween(0, node.nodeSize - 2, function (node) {
        count[node.type.name] = (count[node.type.name] || 0) + 1;
    });
    return count;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnQtdXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY28ubW1vbnMvaW9uaWMtZXh0ZW5zaW9ucy9odG1sLWVkaXRvci8iLCJzb3VyY2VzIjpbInByb3NlbWlycm9yL2RvY3VtZW50LXV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBOztHQUVHO0FBQ0gsTUFBTSxVQUFVLGdCQUFnQixDQUFDLElBQWtCO0lBQy9DLE9BQU8sQ0FDSCxDQUFDLElBQUk7UUFDTCxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLFdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQzVFLENBQUM7QUFDTixDQUFDO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLFVBQVUsaUJBQWlCLENBQUMsSUFBVTtJQUN4QyxJQUFNLDZCQUE2QixHQUFHLFVBQUMsVUFBZ0I7UUFDbkQsT0FBTyxVQUFVLENBQUMsTUFBTTtZQUNwQixDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFO1lBQ2pDLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxXQUFXLENBQUM7SUFDL0MsQ0FBQyxDQUFDO0lBRUYsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1FBQ2YsT0FBTyw2QkFBNkIsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM5QztTQUFNLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ3JELE9BQU8sSUFBSSxDQUFDO0tBQ2Y7U0FBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtRQUN6QixPQUFPLEtBQUssQ0FBQztLQUNoQjtJQUVELEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUss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T0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRTtBQUQ1RSxDQUM0RSxDQUFDO0FBRWpGLE1BQU0sVUFBVSxtQkFBbUIsQ0FDL0IsRUFBZSxFQUNmLENBS3NDLEVBQ3RDLFFBQWlCO0lBRWpCLElBQU0sU0FBUyxHQUFHLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNuQyxJQUFJLENBQUMsU0FBUyxFQUFFO1FBQ1osT0FBTztLQUNWO0lBRUQsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUNuRSxDQUFDO0FBRUQsTUFBTSxVQUFVLGFBQWEsQ0FBQyxJQUFVO0lBQ3BDLElBQU0sS0FBSyxHQUEyQixFQUFFLENBQUM7SUFFekMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEVBQUUsVUFBQSxJQUFJO1FBQ3hDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdELENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Tm9kZX0gZnJvbSBcInByb3NlbWlycm9yLW1vZGVsXCI7XG5pbXBvcnQge0VkaXRvclN0YXRlLCBTZWxlY3Rpb24sIFRyYW5zYWN0aW9ufSBmcm9tIFwicHJvc2VtaXJyb3Itc3RhdGVcIjtcbmltcG9ydCB7Q29udGVudE5vZGVXaXRoUG9zfSBmcm9tIFwicHJvc2VtaXJyb3ItdXRpbHNcIjtcblxuLyoqXG4gKiBDaGVja3MgaWYgbm9kZSBpcyBhbiBlbXB0eSBwYXJhZ3JhcGguXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5UGFyYWdyYXBoKG5vZGU/OiBOb2RlIHwgbnVsbCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICAgICFub2RlIHx8XG4gICAgICAgIChub2RlLnR5cGUubmFtZSA9PT0gXCJwYXJhZ3JhcGhcIiAmJiAhbm9kZS50ZXh0Q29udGVudCAmJiAhbm9kZS5jaGlsZENvdW50KVxuICAgICk7XG59XG5cbi8qKlxuICogUmV0dXJucyBmYWxzZSBpZiBub2RlIGNvbnRhaW5zIG9ubHkgZW1wdHkgaW5saW5lIG5vZGVzIGFuZCBoYXJkQnJlYWtzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaGFzVmlzaWJsZUNvbnRlbnQobm9kZTogTm9kZSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGlzSW5saW5lTm9kZUhhc1Zpc2libGVDb250ZW50ID0gKGlubGluZU5vZGU6IE5vZGUpID0+IHtcbiAgICAgICAgcmV0dXJuIGlubGluZU5vZGUuaXNUZXh0XG4gICAgICAgICAgICA/ICEhaW5saW5lTm9kZS50ZXh0Q29udGVudC50cmltKClcbiAgICAgICAgICAgIDogaW5saW5lTm9kZS50eXBlLm5hbWUgIT09IFwiaGFyZEJyZWFrXCI7XG4gICAgfTtcblxuICAgIGlmIChub2RlLmlzSW5saW5lKSB7XG4gICAgICAgIHJldHVybiBpc0lubGluZU5vZGVIYXNWaXNpYmxlQ29udGVudChub2RlKTtcbiAgICB9IGVsc2UgaWYgKG5vZGUuaXNCbG9jayAmJiAobm9kZS5pc0xlYWYgfHwgbm9kZS5pc0F0b20pKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAoIW5vZGUuY2hpbGRDb3VudCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG5vZGUuY2hpbGRDb3VudDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBjaGlsZCA9IG5vZGUuY2hpbGQoaW5kZXgpO1xuXG4gICAgICAgIGlmIChoYXNWaXNpYmxlQ29udGVudChjaGlsZCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIG5vZGUgaGFzIGFueSBjb250ZW50LiBJZ25vcmVzIG5vZGUgdGhhdCBvbmx5IGNvbnRhaW4gZW1wdHkgYmxvY2sgbm9kZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc05vZGVFbXB0eShub2RlPzogTm9kZSk6IGJvb2xlYW4ge1xuICAgIGlmIChub2RlICYmIG5vZGUudGV4dENvbnRlbnQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgICAgIW5vZGUgfHxcbiAgICAgICAgIW5vZGUuY2hpbGRDb3VudCB8fFxuICAgICAgICAobm9kZS5jaGlsZENvdW50ID09PSAxICYmIGlzRW1wdHlQYXJhZ3JhcGgobm9kZS5maXJzdENoaWxkKSlcbiAgICApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgYmxvY2s6IE5vZGVbXSA9IFtdO1xuICAgIGNvbnN0IG5vbkJsb2NrOiBOb2RlW10gPSBbXTtcblxuICAgIG5vZGUuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgIGNoaWxkLmlzSW5saW5lID8gbm9uQmxvY2sucHVzaChjaGlsZCkgOiBibG9jay5wdXNoKGNoaWxkKTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICAgICFub25CbG9jay5sZW5ndGggJiZcbiAgICAgICAgIWJsb2NrLmZpbHRlcihcbiAgICAgICAgICAgIGNoaWxkTm9kZSA9PlxuICAgICAgICAgICAgICAgICghIWNoaWxkTm9kZS5jaGlsZENvdW50ICYmXG4gICAgICAgICAgICAgICAgICAgICEoXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZE5vZGUuY2hpbGRDb3VudCA9PT0gMSAmJiBpc0VtcHR5UGFyYWdyYXBoKGNoaWxkTm9kZS5maXJzdENoaWxkKVxuICAgICAgICAgICAgICAgICAgICApKSB8fFxuICAgICAgICAgICAgICAgIGNoaWxkTm9kZS5pc0F0b20sXG4gICAgICAgICkubGVuZ3RoXG4gICAgKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBub2RlIGxvb2tzIGxpa2UgYW4gZW1wdHkgZG9jdW1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRW1wdHlEb2N1bWVudChub2RlOiBOb2RlKTogYm9vbGVhbiB7XG4gICAgY29uc3Qgbm9kZUNoaWxkID0gbm9kZS5jb250ZW50LmZpcnN0Q2hpbGQ7XG5cbiAgICBpZiAobm9kZS5jaGlsZENvdW50ICE9PSAxIHx8ICFub2RlQ2hpbGQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICBub2RlQ2hpbGQudHlwZS5uYW1lID09PSBcInBhcmFncmFwaFwiICYmXG4gICAgICAgICFub2RlQ2hpbGQuY2hpbGRDb3VudCAmJlxuICAgICAgICBub2RlQ2hpbGQubm9kZVNpemUgPT09IDIgJiZcbiAgICAgICAgKCFub2RlQ2hpbGQubWFya3MgfHwgbm9kZUNoaWxkLm1hcmtzLmxlbmd0aCA9PT0gMClcbiAgICApO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RlcFJhbmdlID0gKFxuICAgIHRyYW5zYWN0aW9uOiBUcmFuc2FjdGlvbixcbik6IHsgZnJvbTogbnVtYmVyOyB0bzogbnVtYmVyIH0gfCBudWxsID0+IHtcbiAgICBsZXQgZnJvbSA9IC0xO1xuICAgIGxldCB0byA9IC0xO1xuXG4gICAgdHJhbnNhY3Rpb24uc3RlcHMuZm9yRWFjaChzdGVwID0+IHtcbiAgICAgICAgc3RlcC5nZXRNYXAoKS5mb3JFYWNoKChfb2xkU3RhcnQsIF9vbGRFbmQsIG5ld1N0YXJ0LCBuZXdFbmQpID0+IHtcbiAgICAgICAgICAgIGZyb20gPSBuZXdTdGFydCA8IGZyb20gfHwgZnJvbSA9PT0gLTEgPyBuZXdTdGFydCA6IGZyb207XG4gICAgICAgICAgICB0byA9IG5ld0VuZCA8IHRvIHx8IHRvID09PSAtMSA/IG5ld0VuZCA6IHRvO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGlmIChmcm9tICE9PSAtMSkge1xuICAgICAgICByZXR1cm4geyBmcm9tLCB0byB9O1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xufTtcblxuLyoqXG4gKiBGaW5kIHRoZSBmYXJ0aGVzdCBub2RlIGdpdmVuIGEgY29uZGl0aW9uXG4gKiBAcGFyYW0gcHJlZGljYXRlIEZ1bmN0aW9uIHRvIGNoZWNrIHRoZSBub2RlXG4gKi9cbmV4cG9ydCBjb25zdCBmaW5kRmFydGhlc3RQYXJlbnROb2RlID0gKHByZWRpY2F0ZTogKG5vZGU6IE5vZGUpID0+IGJvb2xlYW4pID0+IChcbiAgICBzZWxlY3Rpb246IFNlbGVjdGlvbixcbik6IENvbnRlbnROb2RlV2l0aFBvcyB8IG51bGwgPT4ge1xuICAgIGNvbnN0IHsgJGZyb20gfSA9IHNlbGVjdGlvbjtcblxuICAgIGxldCBjYW5kaWRhdGU6IENvbnRlbnROb2RlV2l0aFBvcyB8IG51bGwgPSBudWxsO1xuXG4gICAgZm9yIChsZXQgaSA9ICRmcm9tLmRlcHRoOyBpID4gMDsgaS0tKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSAkZnJvbS5ub2RlKGkpO1xuICAgICAgICBpZiAocHJlZGljYXRlKG5vZGUpKSB7XG4gICAgICAgICAgICBjYW5kaWRhdGUgPSB7XG4gICAgICAgICAgICAgICAgcG9zOiBpID4gMCA/ICRmcm9tLmJlZm9yZShpKSA6IDAsXG4gICAgICAgICAgICAgICAgc3RhcnQ6ICRmcm9tLnN0YXJ0KGkpLFxuICAgICAgICAgICAgICAgIGRlcHRoOiBpLFxuICAgICAgICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjYW5kaWRhdGU7XG59O1xuXG5leHBvcnQgY29uc3QgaXNTZWxlY3Rpb25FbmRPZlBhcmFncmFwaCA9IChzdGF0ZTogRWRpdG9yU3RhdGUpOiBib29sZWFuID0+XG4gICAgc3RhdGUuc2VsZWN0aW9uLiR0by5wYXJlbnQudHlwZSA9PT0gc3RhdGUuc2NoZW1hLm5vZGVzLnBhcmFncmFwaCAmJlxuICAgIHN0YXRlLnNlbGVjdGlvbi4kdG8ucG9zID09PSBzdGF0ZS5kb2MucmVzb2x2ZShzdGF0ZS5zZWxlY3Rpb24uJHRvLnBvcykuZW5kKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBub2Rlc0JldHdlZW5DaGFuZ2VkKFxuICAgIHRyOiBUcmFuc2FjdGlvbixcbiAgICBmOiAoXG4gICAgICAgIG5vZGU6IE5vZGU8YW55PixcbiAgICAgICAgcG9zOiBudW1iZXIsXG4gICAgICAgIHBhcmVudDogTm9kZTxhbnk+LFxuICAgICAgICBpbmRleDogbnVtYmVyLFxuICAgICkgPT4gYm9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWQgfCB2b2lkLFxuICAgIHN0YXJ0UG9zPzogbnVtYmVyLFxuKSB7XG4gICAgY29uc3Qgc3RlcFJhbmdlID0gZ2V0U3RlcFJhbmdlKHRyKTtcbiAgICBpZiAoIXN0ZXBSYW5nZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHIuZG9jLm5vZGVzQmV0d2VlbihzdGVwUmFuZ2UuZnJvbSwgc3RlcFJhbmdlLnRvLCBmLCBzdGFydFBvcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROb2Rlc0NvdW50KG5vZGU6IE5vZGUpOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+IHtcbiAgICBjb25zdCBjb3VudDogUmVjb3JkPHN0cmluZywgbnVtYmVyPiA9IHt9O1xuXG4gICAgbm9kZS5ub2Rlc0JldHdlZW4oMCwgbm9kZS5ub2RlU2l6ZSAtIDIsIG5vZGUgPT4ge1xuICAgICAgICBjb3VudFtub2RlLnR5cGUubmFtZV0gPSAoY291bnRbbm9kZS50eXBlLm5hbWVdIHx8IDApICsgMTtcbiAgICB9KTtcblxuICAgIHJldHVybiBjb3VudDtcbn1cbiJdfQ==