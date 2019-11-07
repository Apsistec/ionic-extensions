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
    const isInlineNodeHasVisibleContent = (inlineNode) => {
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
    for (let index = 0; index < node.childCount; index++) {
        const child = node.child(index);
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
    const block = [];
    const nonBlock = [];
    node.forEach(child => {
        child.isInline ? nonBlock.push(child) : block.push(child);
    });
    return (!nonBlock.length &&
        !block.filter(childNode => (!!childNode.childCount &&
            !(childNode.childCount === 1 && isEmptyParagraph(childNode.firstChild))) ||
            childNode.isAtom).length);
}
/**
 * Checks if a node looks like an empty document
 */
export function isEmptyDocument(node) {
    const nodeChild = node.content.firstChild;
    if (node.childCount !== 1 || !nodeChild) {
        return false;
    }
    return (nodeChild.type.name === "paragraph" &&
        !nodeChild.childCount &&
        nodeChild.nodeSize === 2 &&
        (!nodeChild.marks || nodeChild.marks.length === 0));
}
export const getStepRange = (transaction) => {
    let from = -1;
    let to = -1;
    transaction.steps.forEach(step => {
        step.getMap().forEach((_oldStart, _oldEnd, newStart, newEnd) => {
            from = newStart < from || from === -1 ? newStart : from;
            to = newEnd < to || to === -1 ? newEnd : to;
        });
    });
    if (from !== -1) {
        return { from, to };
    }
    return null;
};
/**
 * Find the farthest node given a condition
 * @param predicate Function to check the node
 */
export const findFarthestParentNode = (predicate) => (selection) => {
    const { $from } = selection;
    let candidate = null;
    for (let i = $from.depth; i > 0; i--) {
        const node = $from.node(i);
        if (predicate(node)) {
            candidate = {
                pos: i > 0 ? $from.before(i) : 0,
                start: $from.start(i),
                depth: i,
                node,
            };
        }
    }
    return candidate;
};
export const isSelectionEndOfParagraph = (state) => state.selection.$to.parent.type === state.schema.nodes.paragraph &&
    state.selection.$to.pos === state.doc.resolve(state.selection.$to.pos).end();
export function nodesBetweenChanged(tr, f, startPos) {
    const stepRange = getStepRange(tr);
    if (!stepRange) {
        return;
    }
    tr.doc.nodesBetween(stepRange.from, stepRange.to, f, startPos);
}
export function getNodesCount(node) {
    const count = {};
    node.nodesBetween(0, node.nodeSize - 2, node => {
        count[node.type.name] = (count[node.type.name] || 0) + 1;
    });
    return count;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jdW1lbnQtdXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY28ubW1vbnMvaW9uaWMtZXh0ZW5zaW9ucy9odG1sLWVkaXRvci8iLCJzb3VyY2VzIjpbInByb3NlbWlycm9yL2RvY3VtZW50LXV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBOztHQUVHO0FBQ0gsTUFBTSxVQUFVLGdCQUFnQixDQUFDLElBQWtCO0lBQy9DLE9BQU8sQ0FDSCxDQUFDLElBQUk7UUFDTCxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLFdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQzVFLENBQUM7QUFDTixDQUFDO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLFVBQVUsaUJBQWlCLENBQUMsSUFBVTtJQUN4QyxNQUFNLDZCQUE2QixHQUFHLENBQUMsVUFBZ0IsRUFBRSxFQUFFO1FBQ3ZELE9BQU8sVUFBVSxDQUFDLE1BQU07WUFDcEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRTtZQUNqQyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssV0FBVyxDQUFDO0lBQy9DLENBQUMsQ0FBQztJQUVGLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtRQUNmLE9BQU8sNkJBQTZCLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDOUM7U0FBTSxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNyRCxPQUFPLElBQUksQ0FBQztLQUNmO1NBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7UUFDekIsT0FBTyxLQUFLLENBQUM7S0FDaEI7SUFFRCxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUs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QUcsQ0FBQyxHQUFHLEtBQUssS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7QUFFakYsTUFBTSxVQUFVLG1CQUFtQixDQUMvQixFQUFlLEVBQ2YsQ0FLc0MsRUFDdEMsUUFBaUI7SUFFakIsTUFBTSxTQUFTLEdBQUcsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ25DLElBQUksQ0FBQyxTQUFTLEVBQUU7UUFDWixPQUFPO0tBQ1Y7SUFFRCxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ25FLENBQUM7QUFFRCxNQUFNLFVBQVUsYUFBYSxDQUFDLElBQVU7SUFDcEMsTUFBTSxLQUFLLEdBQTJCLEVBQUUsQ0FBQztJQUV6QyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRTtRQUMzQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM3RCxDQUFDLENBQUMsQ0FBQztJQUVILE9BQU8sS0FBSyxDQUFDO0FBQ2pCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05vZGV9IGZyb20gXCJwcm9zZW1pcnJvci1tb2RlbFwiO1xuaW1wb3J0IHtFZGl0b3JTdGF0ZSwgU2VsZWN0aW9uLCBUcmFuc2FjdGlvbn0gZnJvbSBcInByb3NlbWlycm9yLXN0YXRlXCI7XG5pbXBvcnQge0NvbnRlbnROb2RlV2l0aFBvc30gZnJvbSBcInByb3NlbWlycm9yLXV0aWxzXCI7XG5cbi8qKlxuICogQ2hlY2tzIGlmIG5vZGUgaXMgYW4gZW1wdHkgcGFyYWdyYXBoLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNFbXB0eVBhcmFncmFwaChub2RlPzogTm9kZSB8IG51bGwpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgICAhbm9kZSB8fFxuICAgICAgICAobm9kZS50eXBlLm5hbWUgPT09IFwicGFyYWdyYXBoXCIgJiYgIW5vZGUudGV4dENvbnRlbnQgJiYgIW5vZGUuY2hpbGRDb3VudClcbiAgICApO1xufVxuXG4vKipcbiAqIFJldHVybnMgZmFsc2UgaWYgbm9kZSBjb250YWlucyBvbmx5IGVtcHR5IGlubGluZSBub2RlcyBhbmQgaGFyZEJyZWFrcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhc1Zpc2libGVDb250ZW50KG5vZGU6IE5vZGUpOiBib29sZWFuIHtcbiAgICBjb25zdCBpc0lubGluZU5vZGVIYXNWaXNpYmxlQ29udGVudCA9IChpbmxpbmVOb2RlOiBOb2RlKSA9PiB7XG4gICAgICAgIHJldHVybiBpbmxpbmVOb2RlLmlzVGV4dFxuICAgICAgICAgICAgPyAhIWlubGluZU5vZGUudGV4dENvbnRlbnQudHJpbSgpXG4gICAgICAgICAgICA6IGlubGluZU5vZGUudHlwZS5uYW1lICE9PSBcImhhcmRCcmVha1wiO1xuICAgIH07XG5cbiAgICBpZiAobm9kZS5pc0lubGluZSkge1xuICAgICAgICByZXR1cm4gaXNJbmxpbmVOb2RlSGFzVmlzaWJsZUNvbnRlbnQobm9kZSk7XG4gICAgfSBlbHNlIGlmIChub2RlLmlzQmxvY2sgJiYgKG5vZGUuaXNMZWFmIHx8IG5vZGUuaXNBdG9tKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKCFub2RlLmNoaWxkQ291bnQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBub2RlLmNoaWxkQ291bnQ7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgY2hpbGQgPSBub2RlLmNoaWxkKGluZGV4KTtcblxuICAgICAgICBpZiAoaGFzVmlzaWJsZUNvbnRlbnQoY2hpbGQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBub2RlIGhhcyBhbnkgY29udGVudC4gSWdub3JlcyBub2RlIHRoYXQgb25seSBjb250YWluIGVtcHR5IGJsb2NrIG5vZGVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNOb2RlRW1wdHkobm9kZT86IE5vZGUpOiBib29sZWFuIHtcbiAgICBpZiAobm9kZSAmJiBub2RlLnRleHRDb250ZW50KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICAgICFub2RlIHx8XG4gICAgICAgICFub2RlLmNoaWxkQ291bnQgfHxcbiAgICAgICAgKG5vZGUuY2hpbGRDb3VudCA9PT0gMSAmJiBpc0VtcHR5UGFyYWdyYXBoKG5vZGUuZmlyc3RDaGlsZCkpXG4gICAgKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IGJsb2NrOiBOb2RlW10gPSBbXTtcbiAgICBjb25zdCBub25CbG9jazogTm9kZVtdID0gW107XG5cbiAgICBub2RlLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICBjaGlsZC5pc0lubGluZSA/IG5vbkJsb2NrLnB1c2goY2hpbGQpIDogYmxvY2sucHVzaChjaGlsZCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICAhbm9uQmxvY2subGVuZ3RoICYmXG4gICAgICAgICFibG9jay5maWx0ZXIoXG4gICAgICAgICAgICBjaGlsZE5vZGUgPT5cbiAgICAgICAgICAgICAgICAoISFjaGlsZE5vZGUuY2hpbGRDb3VudCAmJlxuICAgICAgICAgICAgICAgICAgICAhKFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGROb2RlLmNoaWxkQ291bnQgPT09IDEgJiYgaXNFbXB0eVBhcmFncmFwaChjaGlsZE5vZGUuZmlyc3RDaGlsZClcbiAgICAgICAgICAgICAgICAgICAgKSkgfHxcbiAgICAgICAgICAgICAgICBjaGlsZE5vZGUuaXNBdG9tLFxuICAgICAgICApLmxlbmd0aFxuICAgICk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbm9kZSBsb29rcyBsaWtlIGFuIGVtcHR5IGRvY3VtZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5RG9jdW1lbnQobm9kZTogTm9kZSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IG5vZGVDaGlsZCA9IG5vZGUuY29udGVudC5maXJzdENoaWxkO1xuXG4gICAgaWYgKG5vZGUuY2hpbGRDb3VudCAhPT0gMSB8fCAhbm9kZUNoaWxkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgbm9kZUNoaWxkLnR5cGUubmFtZSA9PT0gXCJwYXJhZ3JhcGhcIiAmJlxuICAgICAgICAhbm9kZUNoaWxkLmNoaWxkQ291bnQgJiZcbiAgICAgICAgbm9kZUNoaWxkLm5vZGVTaXplID09PSAyICYmXG4gICAgICAgICghbm9kZUNoaWxkLm1hcmtzIHx8IG5vZGVDaGlsZC5tYXJrcy5sZW5ndGggPT09IDApXG4gICAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0ZXBSYW5nZSA9IChcbiAgICB0cmFuc2FjdGlvbjogVHJhbnNhY3Rpb24sXG4pOiB7IGZyb206IG51bWJlcjsgdG86IG51bWJlciB9IHwgbnVsbCA9PiB7XG4gICAgbGV0IGZyb20gPSAtMTtcbiAgICBsZXQgdG8gPSAtMTtcblxuICAgIHRyYW5zYWN0aW9uLnN0ZXBzLmZvckVhY2goc3RlcCA9PiB7XG4gICAgICAgIHN0ZXAuZ2V0TWFwKCkuZm9yRWFjaCgoX29sZFN0YXJ0LCBfb2xkRW5kLCBuZXdTdGFydCwgbmV3RW5kKSA9PiB7XG4gICAgICAgICAgICBmcm9tID0gbmV3U3RhcnQgPCBmcm9tIHx8IGZyb20gPT09IC0xID8gbmV3U3RhcnQgOiBmcm9tO1xuICAgICAgICAgICAgdG8gPSBuZXdFbmQgPCB0byB8fCB0byA9PT0gLTEgPyBuZXdFbmQgOiB0bztcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBpZiAoZnJvbSAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIHsgZnJvbSwgdG8gfTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbn07XG5cbi8qKlxuICogRmluZCB0aGUgZmFydGhlc3Qgbm9kZSBnaXZlbiBhIGNvbmRpdGlvblxuICogQHBhcmFtIHByZWRpY2F0ZSBGdW5jdGlvbiB0byBjaGVjayB0aGUgbm9kZVxuICovXG5leHBvcnQgY29uc3QgZmluZEZhcnRoZXN0UGFyZW50Tm9kZSA9IChwcmVkaWNhdGU6IChub2RlOiBOb2RlKSA9PiBib29sZWFuKSA9PiAoXG4gICAgc2VsZWN0aW9uOiBTZWxlY3Rpb24sXG4pOiBDb250ZW50Tm9kZVdpdGhQb3MgfCBudWxsID0+IHtcbiAgICBjb25zdCB7ICRmcm9tIH0gPSBzZWxlY3Rpb247XG5cbiAgICBsZXQgY2FuZGlkYXRlOiBDb250ZW50Tm9kZVdpdGhQb3MgfCBudWxsID0gbnVsbDtcblxuICAgIGZvciAobGV0IGkgPSAkZnJvbS5kZXB0aDsgaSA+IDA7IGktLSkge1xuICAgICAgICBjb25zdCBub2RlID0gJGZyb20ubm9kZShpKTtcbiAgICAgICAgaWYgKHByZWRpY2F0ZShub2RlKSkge1xuICAgICAgICAgICAgY2FuZGlkYXRlID0ge1xuICAgICAgICAgICAgICAgIHBvczogaSA+IDAgPyAkZnJvbS5iZWZvcmUoaSkgOiAwLFxuICAgICAgICAgICAgICAgIHN0YXJ0OiAkZnJvbS5zdGFydChpKSxcbiAgICAgICAgICAgICAgICBkZXB0aDogaSxcbiAgICAgICAgICAgICAgICBub2RlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY2FuZGlkYXRlO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzU2VsZWN0aW9uRW5kT2ZQYXJhZ3JhcGggPSAoc3RhdGU6IEVkaXRvclN0YXRlKTogYm9vbGVhbiA9PlxuICAgIHN0YXRlLnNlbGVjdGlvbi4kdG8ucGFyZW50LnR5cGUgPT09IHN0YXRlLnNjaGVtYS5ub2Rlcy5wYXJhZ3JhcGggJiZcbiAgICBzdGF0ZS5zZWxlY3Rpb24uJHRvLnBvcyA9PT0gc3RhdGUuZG9jLnJlc29sdmUoc3RhdGUuc2VsZWN0aW9uLiR0by5wb3MpLmVuZCgpO1xuXG5leHBvcnQgZnVuY3Rpb24gbm9kZXNCZXR3ZWVuQ2hhbmdlZChcbiAgICB0cjogVHJhbnNhY3Rpb24sXG4gICAgZjogKFxuICAgICAgICBub2RlOiBOb2RlPGFueT4sXG4gICAgICAgIHBvczogbnVtYmVyLFxuICAgICAgICBwYXJlbnQ6IE5vZGU8YW55PixcbiAgICAgICAgaW5kZXg6IG51bWJlcixcbiAgICApID0+IGJvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkIHwgdm9pZCxcbiAgICBzdGFydFBvcz86IG51bWJlcixcbikge1xuICAgIGNvbnN0IHN0ZXBSYW5nZSA9IGdldFN0ZXBSYW5nZSh0cik7XG4gICAgaWYgKCFzdGVwUmFuZ2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyLmRvYy5ub2Rlc0JldHdlZW4oc3RlcFJhbmdlLmZyb20sIHN0ZXBSYW5nZS50bywgZiwgc3RhcnRQb3MpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Tm9kZXNDb3VudChub2RlOiBOb2RlKTogUmVjb3JkPHN0cmluZywgbnVtYmVyPiB7XG4gICAgY29uc3QgY291bnQ6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7fTtcblxuICAgIG5vZGUubm9kZXNCZXR3ZWVuKDAsIG5vZGUubm9kZVNpemUgLSAyLCBub2RlID0+IHtcbiAgICAgICAgY291bnRbbm9kZS50eXBlLm5hbWVdID0gKGNvdW50W25vZGUudHlwZS5uYW1lXSB8fCAwKSArIDE7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY291bnQ7XG59XG4iXX0=