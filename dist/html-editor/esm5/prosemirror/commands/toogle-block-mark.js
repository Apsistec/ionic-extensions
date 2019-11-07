/**
 * Toggles block mark based on the return type of `getAttrs`.
 * This is similar to ProseMirror"s `getAttrs` from `AttributeSpec`
 * return `false` to remove the mark.
 * return `undefined for no-op.
 * return an `object` to update the mark.
 */
export var toggleBlockMark = function (markType, getAttrs, allowedBlocks) { return function (state, dispatch) {
    var markApplied = false;
    var tr = state.tr;
    var toggleBlockMarkOnRange = function (from, to, tr) {
        state.doc.nodesBetween(from, to, function (node, pos, parent) {
            if (!node.type.isBlock) {
                return false;
            }
            if ((!allowedBlocks || (Array.isArray(allowedBlocks) ? allowedBlocks.indexOf(node.type) > -1 : allowedBlocks(state.schema, node, parent))) &&
                parent.type.allowsMarkType(markType)) {
                var oldMarks = node.marks.filter(function (mark) { return mark.type === markType; });
                var prevAttrs = oldMarks.length ? oldMarks[0].attrs : undefined;
                var newAttrs = getAttrs(prevAttrs, node);
                if (newAttrs !== undefined) {
                    tr.setNodeMarkup(pos, node.type, node.attrs, node.marks
                        .filter(function (mark) { return !markType.excludes(mark.type); })
                        .concat(newAttrs === false ? [] : markType.create(newAttrs)));
                    markApplied = true;
                }
            }
            return;
        });
    };
    var _a = state.selection, from = _a.from, to = _a.to;
    toggleBlockMarkOnRange(from, to, tr);
    if (markApplied && tr.docChanged) {
        if (dispatch) {
            dispatch(tr.scrollIntoView());
        }
        return true;
    }
    return false;
}; };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vZ2xlLWJsb2NrLW1hcmsuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY28ubW1vbnMvaW9uaWMtZXh0ZW5zaW9ucy9odG1sLWVkaXRvci8iLCJzb3VyY2VzIjpbInByb3NlbWlycm9yL2NvbW1hbmRzL3Rvb2dsZS1ibG9jay1tYXJrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBOzs7Ozs7R0FNRztBQUNILE1BQU0sQ0FBQyxJQUFNLGVBQWUsR0FBRyxVQUMzQixRQUFrQixFQUNsQixRQUFtRSxFQUNuRSxhQUVpRSxJQUN2RCxPQUFBLFVBQUMsS0FBSyxFQUFFLFFBQVE7SUFDMUIsSUFBSSxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLElBQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUM7SUFFcEIsSUFBTSxzQkFBc0IsR0FBRyxVQUFDLElBQVksRUFBRSxFQUFVLEVBQUUsRUFBZTtRQUVyRSxLQUFLLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNO1lBRS9DLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDcEIsT0FBTyxLQUFLLENBQUM7YUFDaEI7WUFFRCxJQUNJLENBQUMsQ0FBQyxhQUFhLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ3RJLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUN0QztnQkFFRSxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUF0QixDQUFzQixDQUFDLENBQUM7Z0JBRW5FLElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFXLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztnQkFDekUsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFFM0MsSUFBSSxRQUFRLEtBQUssU0FBUyxFQUFFO29CQUV4QixFQUFFLENBQUMsYUFBYSxDQUNaLEdBQUcsRUFDSCxJQUFJLENBQUMsSUFBSSxFQUNULElBQUksQ0FBQyxLQUFLLEVBQ1YsSUFBSSxDQUFDLEtBQUs7eUJBQ0wsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBN0IsQ0FBNkIsQ0FBQzt5QkFDN0MsTUFBTSxDQUFDLFFBQVEsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUNuRSxDQUFDO29CQUVGLFdBQVcsR0FBRyxJQUFJLENBQUM7aUJBQ3RCO2FBQ0o7WUFFRCxPQUFPO1FBRVgsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUM7SUFFSSxJQUFBLG9CQUE0QixFQUEzQixjQUFJLEVBQUUsVUFBcUIsQ0FBQztJQUNuQyxzQkFBc0IsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRXJDLElBQUksV0FBVyxJQUFJLEVBQUUsQ0FBQyxVQUFVLEVBQUU7UUFDOUIsSUFBSSxRQUFRLEVBQUU7WUFDVixRQUFRLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7U0FDakM7UUFDRCxPQUFPLElBQUksQ0FBQztLQUNmO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQyxFQXJEYSxDQXFEYixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNYXJrVHlwZSwgTm9kZSBhcyBQTU5vZGUsIE5vZGVUeXBlLCBTY2hlbWF9IGZyb20gXCJwcm9zZW1pcnJvci1tb2RlbFwiO1xuaW1wb3J0IHtUcmFuc2FjdGlvbn0gZnJvbSBcInByb3NlbWlycm9yLXN0YXRlXCI7XG5pbXBvcnQge0NvbW1hbmR9IGZyb20gXCIuLi9jb21tYW5kXCI7XG5cbi8qKlxuICogVG9nZ2xlcyBibG9jayBtYXJrIGJhc2VkIG9uIHRoZSByZXR1cm4gdHlwZSBvZiBgZ2V0QXR0cnNgLlxuICogVGhpcyBpcyBzaW1pbGFyIHRvIFByb3NlTWlycm9yXCJzIGBnZXRBdHRyc2AgZnJvbSBgQXR0cmlidXRlU3BlY2BcbiAqIHJldHVybiBgZmFsc2VgIHRvIHJlbW92ZSB0aGUgbWFyay5cbiAqIHJldHVybiBgdW5kZWZpbmVkIGZvciBuby1vcC5cbiAqIHJldHVybiBhbiBgb2JqZWN0YCB0byB1cGRhdGUgdGhlIG1hcmsuXG4gKi9cbmV4cG9ydCBjb25zdCB0b2dnbGVCbG9ja01hcmsgPSA8VCA9IG9iamVjdD4oXG4gICAgbWFya1R5cGU6IE1hcmtUeXBlLFxuICAgIGdldEF0dHJzOiAoKHByZXZBdHRycz86IFQsIG5vZGU/OiBQTU5vZGUpID0+IFQgfCB1bmRlZmluZWQgfCBmYWxzZSksXG4gICAgYWxsb3dlZEJsb2Nrcz86XG4gICAgICAgIHwgQXJyYXk8Tm9kZVR5cGU+XG4gICAgICAgIHwgKChzY2hlbWE6IFNjaGVtYSwgbm9kZTogUE1Ob2RlLCBwYXJlbnQ6IFBNTm9kZSkgPT4gYm9vbGVhbiksXG4pOiBDb21tYW5kID0+IChzdGF0ZSwgZGlzcGF0Y2gpID0+IHtcbiAgICBsZXQgbWFya0FwcGxpZWQgPSBmYWxzZTtcbiAgICBjb25zdCB0ciA9IHN0YXRlLnRyO1xuXG4gICAgY29uc3QgdG9nZ2xlQmxvY2tNYXJrT25SYW5nZSA9IChmcm9tOiBudW1iZXIsIHRvOiBudW1iZXIsIHRyOiBUcmFuc2FjdGlvbikgPT4ge1xuXG4gICAgICAgIHN0YXRlLmRvYy5ub2Rlc0JldHdlZW4oZnJvbSwgdG8sIChub2RlLCBwb3MsIHBhcmVudCkgPT4ge1xuXG4gICAgICAgICAgICBpZiAoIW5vZGUudHlwZS5pc0Jsb2NrKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgKCFhbGxvd2VkQmxvY2tzIHx8IChBcnJheS5pc0FycmF5KGFsbG93ZWRCbG9ja3MpID8gYWxsb3dlZEJsb2Nrcy5pbmRleE9mKG5vZGUudHlwZSkgPiAtMSA6IGFsbG93ZWRCbG9ja3Moc3RhdGUuc2NoZW1hLCBub2RlLCBwYXJlbnQpKSkgJiZcbiAgICAgICAgICAgICAgICBwYXJlbnQudHlwZS5hbGxvd3NNYXJrVHlwZShtYXJrVHlwZSlcbiAgICAgICAgICAgICkge1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkTWFya3MgPSBub2RlLm1hcmtzLmZpbHRlcihtYXJrID0+IG1hcmsudHlwZSA9PT0gbWFya1R5cGUpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcHJldkF0dHJzID0gb2xkTWFya3MubGVuZ3RoID8gKG9sZE1hcmtzWzBdLmF0dHJzIGFzIFQpIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0F0dHJzID0gZ2V0QXR0cnMocHJldkF0dHJzLCBub2RlKTtcblxuICAgICAgICAgICAgICAgIGlmIChuZXdBdHRycyAhPT0gdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdHIuc2V0Tm9kZU1hcmt1cChcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuYXR0cnMsXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLm1hcmtzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihtYXJrID0+ICFtYXJrVHlwZS5leGNsdWRlcyhtYXJrLnR5cGUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQobmV3QXR0cnMgPT09IGZhbHNlID8gW10gOiBtYXJrVHlwZS5jcmVhdGUobmV3QXR0cnMpKSxcbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICBtYXJrQXBwbGllZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHtmcm9tLCB0b30gPSBzdGF0ZS5zZWxlY3Rpb247XG4gICAgdG9nZ2xlQmxvY2tNYXJrT25SYW5nZShmcm9tLCB0bywgdHIpO1xuXG4gICAgaWYgKG1hcmtBcHBsaWVkICYmIHRyLmRvY0NoYW5nZWQpIHtcbiAgICAgICAgaWYgKGRpc3BhdGNoKSB7XG4gICAgICAgICAgICBkaXNwYXRjaCh0ci5zY3JvbGxJbnRvVmlldygpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuIl19