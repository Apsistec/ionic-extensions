import { findMarks } from "./find-marks";
export function findMarksInSelection(state, markType, attrs) {
    var doc = state.doc;
    var _a = state.selection, from = _a.from, to = _a.to;
    return findMarks(doc, from, to, markType, attrs);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZC1tYXJrcy1pbi1zZWxlY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY28ubW1vbnMvaW9uaWMtZXh0ZW5zaW9ucy9odG1sLWVkaXRvci8iLCJzb3VyY2VzIjpbInByb3NlbWlycm9yL3V0aWxzL2ZpbmQtbWFya3MtaW4tc2VsZWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFJdkMsTUFBTSxVQUFVLG9CQUFvQixDQUFDLEtBQWtCLEVBQUUsUUFBa0IsRUFBRSxLQUE0QjtJQUNyRyxJQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ2hCLElBQUEsb0JBQTRCLEVBQTNCLGNBQUksRUFBRSxVQUFxQixDQUFDO0lBQ25DLE9BQU8sU0FBUyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNyRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtmaW5kTWFya3N9IGZyb20gXCIuL2ZpbmQtbWFya3NcIjtcbmltcG9ydCB7TWFya1R5cGV9IGZyb20gXCJwcm9zZW1pcnJvci1tb2RlbFwiO1xuaW1wb3J0IHtFZGl0b3JTdGF0ZX0gZnJvbSBcInByb3NlbWlycm9yLXN0YXRlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kTWFya3NJblNlbGVjdGlvbihzdGF0ZTogRWRpdG9yU3RhdGUsIG1hcmtUeXBlOiBNYXJrVHlwZSwgYXR0cnM/OiB7W2tleTogc3RyaW5nXTogYW55fSkge1xuICAgIGNvbnN0IGRvYyA9IHN0YXRlLmRvYztcbiAgICBjb25zdCB7ZnJvbSwgdG99ID0gc3RhdGUuc2VsZWN0aW9uO1xuICAgIHJldHVybiBmaW5kTWFya3MoZG9jLCBmcm9tLCB0bywgbWFya1R5cGUsIGF0dHJzKTtcbn1cbiJdfQ==