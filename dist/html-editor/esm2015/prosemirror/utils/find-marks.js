import { deepEqual } from "fast-equals";
export function findMarks(doc, from, to, markType, attrs) {
    const marks = [];
    doc.nodesBetween(from, to, node => {
        for (let i = 0; i < node.marks.length; i++) {
            if (node.marks[i].type === markType && (!attrs || deepEqual(node.marks[i].attrs, attrs))) {
                marks.push(node.marks[i]);
            }
        }
    });
    return marks;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZC1tYXJrcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjby5tbW9ucy9pb25pYy1leHRlbnNpb25zL2h0bWwtZWRpdG9yLyIsInNvdXJjZXMiOlsicHJvc2VtaXJyb3IvdXRpbHMvZmluZC1tYXJrcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBR3RDLE1BQU0sVUFBVSxTQUFTLENBQUMsR0FBUyxFQUFFLElBQVksRUFBRSxFQUFVLEVBQUUsUUFBa0IsRUFBRSxLQUE0QjtJQUUzRyxNQUFNLEtBQUssR0FBVyxFQUFFLENBQUM7SUFFekIsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO1FBRTlCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4QyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLFFBQVEsSUFBSSxDQUFDLENBQUMsS0FBSyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFFO2dCQUN0RixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM3QjtTQUNKO0lBRUwsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLEtBQUssQ0FBQztBQUNqQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtkZWVwRXF1YWx9IGZyb20gXCJmYXN0LWVxdWFsc1wiO1xuaW1wb3J0IHtNYXJrLCBNYXJrVHlwZSwgTm9kZX0gZnJvbSBcInByb3NlbWlycm9yLW1vZGVsXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kTWFya3MoZG9jOiBOb2RlLCBmcm9tOiBudW1iZXIsIHRvOiBudW1iZXIsIG1hcmtUeXBlOiBNYXJrVHlwZSwgYXR0cnM/OiB7W2tleTogc3RyaW5nXTogYW55fSkge1xuXG4gICAgY29uc3QgbWFya3M6IE1hcmtbXSA9IFtdO1xuXG4gICAgZG9jLm5vZGVzQmV0d2Vlbihmcm9tLCB0bywgbm9kZSA9PiB7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2RlLm1hcmtzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAobm9kZS5tYXJrc1tpXS50eXBlID09PSBtYXJrVHlwZSAmJiAoIWF0dHJzIHx8IGRlZXBFcXVhbChub2RlLm1hcmtzW2ldLmF0dHJzLCBhdHRycykpKSB7XG4gICAgICAgICAgICAgICAgbWFya3MucHVzaChub2RlLm1hcmtzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWFya3M7XG59XG4iXX0=