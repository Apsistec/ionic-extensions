import { shallowEqual } from "fast-equals";
function markApplies(doc, from, to, type) {
    var applies = false;
    doc.nodesBetween(from, to, function (node, pos, parent) {
        if (applies) {
            return false;
        }
        applies = node.isInline && parent.type.allowsMarkType(type);
    });
    return applies;
}
// return true iff all nodes in range have the mark with the same attrs
function rangeHasMark(doc, from, to, type, attrs) {
    var hasMark = null;
    doc.nodesBetween(from, to, function (node) {
        for (var i = 0; i < node.marks.length; i++) {
            var markMatch = node.marks[i].type === type && (!attrs || shallowEqual(node.marks[i].attrs, attrs));
            hasMark = (markMatch && (hasMark === null || hasMark === true));
        }
        return hasMark;
    });
    return !!hasMark;
}
export function toggleInlineMark(markType, attrs) {
    return function (state, dispatch) {
        var _a = state.selection, empty = _a.empty, from = _a.from, to = _a.to, $from = _a.$from;
        if (!markApplies(state.doc, from, to, markType)) {
            console.log("not applies");
            return false;
        }
        if (dispatch) {
            if (empty) {
                var markInSet = markType.isInSet(state.storedMarks || $from.marks());
                if (markInSet && (!attrs || shallowEqual(markInSet.attrs, attrs))) {
                    dispatch(state.tr.removeStoredMark(markType));
                }
                else {
                    dispatch(state.tr.addStoredMark(markType.create(attrs)));
                }
            }
            else {
                if (rangeHasMark(state.doc, from, to, markType, attrs)) {
                    dispatch(state.tr.removeMark(from, to, markType).scrollIntoView());
                }
                else {
                    dispatch(state.tr.addMark(from, to, markType.create(attrs)).scrollIntoView());
                }
            }
        }
        return true;
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vZ2xlLWlubGluZS1tYXJrLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvLm1tb25zL2lvbmljLWV4dGVuc2lvbnMvaHRtbC1lZGl0b3IvIiwic291cmNlcyI6WyJwcm9zZW1pcnJvci9jb21tYW5kcy90b29nbGUtaW5saW5lLW1hcmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUl6QyxTQUFTLFdBQVcsQ0FBQyxHQUFTLEVBQUUsSUFBWSxFQUFFLEVBQVUsRUFBRSxJQUFjO0lBRXBFLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQztJQUVwQixHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU07UUFFekMsSUFBSSxPQUFPLEVBQUU7WUFDVCxPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUVELE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hFLENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxPQUFPLENBQUM7QUFDbkIsQ0FBQztBQUVELHVFQUF1RTtBQUN2RSxTQUFTLFlBQVksQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSztJQUU1QyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFFbkIsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQUEsSUFBSTtRQUUzQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDeEMsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFLLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDdEcsT0FBTyxHQUFHLENBQUMsU0FBUyxJQUFJLENBQUMsT0FBTyxLQUFLLElBQUksSUFBSSxPQUFPLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztTQUNuRTtRQUVELE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDO0FBQ3JCLENBQUM7QUFFRCxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsUUFBa0IsRUFBRSxLQUE0QjtJQUU3RSxPQUFPLFVBQVMsS0FBSyxFQUFFLFFBQVE7UUFFckIsSUFBQSxvQkFBNEMsRUFBMUMsZ0JBQUssRUFBRSxjQUFJLEVBQUUsVUFBRSxFQUFFLGdCQUF5QixDQUFDO1FBRW5ELElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFFBQVEsQ0FBQyxFQUFFO1lBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDM0IsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFFRCxJQUFJLFFBQVEsRUFBRTtZQUVWLElBQUksS0FBSyxFQUFFO2dCQUVQLElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsSUFBSSxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztnQkFFdkUsSUFBSSxTQUFTLElBQUksQ0FBQyxDQUFDLEtBQUssSUFBSSxZQUFZLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFFO29CQUMvRCxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2lCQUNqRDtxQkFBTTtvQkFDSCxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzVEO2FBRUo7aUJBQU07Z0JBRUgsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsRUFBRTtvQkFDcEQsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztpQkFDdEU7cUJBQU07b0JBQ0gsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7aUJBQ2pGO2FBQ0o7U0FDSjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUMsQ0FBQztBQUNOLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3NoYWxsb3dFcXVhbH0gZnJvbSBcImZhc3QtZXF1YWxzXCI7XG5pbXBvcnQge01hcmtUeXBlLCBOb2RlfSBmcm9tIFwicHJvc2VtaXJyb3ItbW9kZWxcIjtcbmltcG9ydCB7Q29tbWFuZH0gZnJvbSBcIi4uL2NvbW1hbmRcIjtcblxuZnVuY3Rpb24gbWFya0FwcGxpZXMoZG9jOiBOb2RlLCBmcm9tOiBudW1iZXIsIHRvOiBudW1iZXIsIHR5cGU6IE1hcmtUeXBlKSB7XG5cbiAgICBsZXQgYXBwbGllcyA9IGZhbHNlO1xuXG4gICAgZG9jLm5vZGVzQmV0d2Vlbihmcm9tLCB0bywgKG5vZGUsIHBvcywgcGFyZW50KSA9PiB7XG5cbiAgICAgICAgaWYgKGFwcGxpZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFwcGxpZXMgPSBub2RlLmlzSW5saW5lICYmIHBhcmVudC50eXBlLmFsbG93c01hcmtUeXBlKHR5cGUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGFwcGxpZXM7XG59XG5cbi8vIHJldHVybiB0cnVlIGlmZiBhbGwgbm9kZXMgaW4gcmFuZ2UgaGF2ZSB0aGUgbWFyayB3aXRoIHRoZSBzYW1lIGF0dHJzXG5mdW5jdGlvbiByYW5nZUhhc01hcmsoZG9jLCBmcm9tLCB0bywgdHlwZSwgYXR0cnMpIHtcblxuICAgIGxldCBoYXNNYXJrID0gbnVsbDtcblxuICAgIGRvYy5ub2Rlc0JldHdlZW4oZnJvbSwgdG8sIG5vZGUgPT4ge1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZS5tYXJrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgbWFya01hdGNoID0gbm9kZS5tYXJrc1tpXS50eXBlID09PSB0eXBlICYmICghYXR0cnMgfHwgc2hhbGxvd0VxdWFsKG5vZGUubWFya3NbaV0uYXR0cnMsIGF0dHJzKSk7XG4gICAgICAgICAgICBoYXNNYXJrID0gKG1hcmtNYXRjaCAmJiAoaGFzTWFyayA9PT0gbnVsbCB8fCBoYXNNYXJrID09PSB0cnVlKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaGFzTWFyaztcbiAgICB9KTtcblxuICAgIHJldHVybiAhIWhhc01hcms7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVJbmxpbmVNYXJrKG1hcmtUeXBlOiBNYXJrVHlwZSwgYXR0cnM/OiB7W2tleTogc3RyaW5nXTogYW55fSk6IENvbW1hbmQge1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKHN0YXRlLCBkaXNwYXRjaCkge1xuXG4gICAgICAgIGNvbnN0IHsgZW1wdHksIGZyb20sIHRvLCAkZnJvbSB9ID0gc3RhdGUuc2VsZWN0aW9uO1xuXG4gICAgICAgIGlmICghbWFya0FwcGxpZXMoc3RhdGUuZG9jLCBmcm9tLCB0bywgbWFya1R5cGUpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5vdCBhcHBsaWVzXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRpc3BhdGNoKSB7XG5cbiAgICAgICAgICAgIGlmIChlbXB0eSkge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgbWFya0luU2V0ID0gbWFya1R5cGUuaXNJblNldChzdGF0ZS5zdG9yZWRNYXJrcyB8fCAkZnJvbS5tYXJrcygpKTtcblxuICAgICAgICAgICAgICAgIGlmIChtYXJrSW5TZXQgJiYgKCFhdHRycyB8fCBzaGFsbG93RXF1YWwobWFya0luU2V0LmF0dHJzLCBhdHRycykpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHN0YXRlLnRyLnJlbW92ZVN0b3JlZE1hcmsobWFya1R5cGUpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChzdGF0ZS50ci5hZGRTdG9yZWRNYXJrKG1hcmtUeXBlLmNyZWF0ZShhdHRycykpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBpZiAocmFuZ2VIYXNNYXJrKHN0YXRlLmRvYywgZnJvbSwgdG8sIG1hcmtUeXBlLCBhdHRycykpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goc3RhdGUudHIucmVtb3ZlTWFyayhmcm9tLCB0bywgbWFya1R5cGUpLnNjcm9sbEludG9WaWV3KCkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHN0YXRlLnRyLmFkZE1hcmsoZnJvbSwgdG8sIG1hcmtUeXBlLmNyZWF0ZShhdHRycykpLnNjcm9sbEludG9WaWV3KCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG59XG5cbiJdfQ==