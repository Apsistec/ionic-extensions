import { deepEqual } from "fast-equals";
export function findMarks(doc, from, to, markType, attrs) {
    var marks = [];
    doc.nodesBetween(from, to, function (node) {
        for (var i = 0; i < node.marks.length; i++) {
            if (node.marks[i].type === markType && (!attrs || deepEqual(node.marks[i].attrs, attrs))) {
                marks.push(node.marks[i]);
            }
        }
    });
    return marks;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZC1tYXJrcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjby5tbW9ucy9pb25pYy1leHRlbnNpb25zL2h0bWwtZWRpdG9yLyIsInNvdXJjZXMiOlsicHJvc2VtaXJyb3IvdXRpbHMvZmluZC1tYXJrcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBR3RDLE1BQU0sVUFBVSxTQUFTLENBQUMsR0FBUyxFQUFFLElBQVksRUFBRSxFQUFVLEVBQUUsUUFBa0IsRUFBRSxLQUE0QjtJQUUzRyxJQUFNLEtBQUssR0FBVyxFQUFFLENBQUM7SUFFekIsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQUEsSUFBSTtRQUUzQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDeEMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxRQUFRLElBQUksQ0FBQyxDQUFDLEtBQUssSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDdEYsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0I7U0FDSjtJQUVMLENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ZGVlcEVxdWFsfSBmcm9tIFwiZmFzdC1lcXVhbHNcIjtcbmltcG9ydCB7TWFyaywgTWFya1R5cGUsIE5vZGV9IGZyb20gXCJwcm9zZW1pcnJvci1tb2RlbFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZmluZE1hcmtzKGRvYzogTm9kZSwgZnJvbTogbnVtYmVyLCB0bzogbnVtYmVyLCBtYXJrVHlwZTogTWFya1R5cGUsIGF0dHJzPzoge1trZXk6IHN0cmluZ106IGFueX0pIHtcblxuICAgIGNvbnN0IG1hcmtzOiBNYXJrW10gPSBbXTtcblxuICAgIGRvYy5ub2Rlc0JldHdlZW4oZnJvbSwgdG8sIG5vZGUgPT4ge1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZS5tYXJrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKG5vZGUubWFya3NbaV0udHlwZSA9PT0gbWFya1R5cGUgJiYgKCFhdHRycyB8fCBkZWVwRXF1YWwobm9kZS5tYXJrc1tpXS5hdHRycywgYXR0cnMpKSkge1xuICAgICAgICAgICAgICAgIG1hcmtzLnB1c2gobm9kZS5tYXJrc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1hcmtzO1xufVxuIl19