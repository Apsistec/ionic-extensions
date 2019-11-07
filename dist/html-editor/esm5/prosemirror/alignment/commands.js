import { toggleBlockMark } from "../commands/toogle-block-mark";
/**
 * Iterates over the commands one after the other,
 * passes the tr through and dispatches the cumulated transaction
 */
export var cascadeCommands = function (cmds) { return function (state, dispatch) {
    var baseTr = state.tr;
    var shouldDispatch = false;
    var onDispatchAction = function (tr) {
        tr.steps.forEach(function (st) {
            baseTr.step(st);
        });
        shouldDispatch = true;
    };
    cmds.forEach(function (cmd) {
        cmd(state, onDispatchAction);
    });
    if (dispatch && shouldDispatch) {
        dispatch(baseTr);
        return true;
    }
    return false;
}; };
export var isAlignable = function (align) { return function (state, dispatch) {
    var _a = state.schema, _b = _a.nodes, paragraph = _b.paragraph, heading = _b.heading, alignment = _a.marks.alignment;
    return toggleBlockMark(alignment, function () { return (!align ? undefined : align === "left" ? false : { align: align }); }, [paragraph, heading])(state, dispatch);
}; };
export var changeAlignment = function (align) { return function (state, dispatch) {
    var _a = state.schema, _b = _a.nodes, paragraph = _b.paragraph, heading = _b.heading, alignment = _a.marks.alignment;
    return toggleBlockMark(alignment, function () { return (!align ? undefined : align === "left" ? false : { align: align }); }, [paragraph, heading])(state, dispatch);
}; };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY28ubW1vbnMvaW9uaWMtZXh0ZW5zaW9ucy9odG1sLWVkaXRvci8iLCJzb3VyY2VzIjpbInByb3NlbWlycm9yL2FsaWdubWVudC9jb21tYW5kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFHOUQ7OztHQUdHO0FBQ0gsTUFBTSxDQUFDLElBQU0sZUFBZSxHQUFHLFVBQUMsSUFBb0IsSUFBSyxPQUFBLFVBQ3JELEtBQWtCLEVBQ2xCLFFBQTBCO0lBRW5CLElBQUEsaUJBQVUsQ0FBVTtJQUMzQixJQUFJLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFFM0IsSUFBTSxnQkFBZ0IsR0FBRyxVQUFDLEVBQWU7UUFDckMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxFQUFFO1lBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztRQUNILGNBQWMsR0FBRyxJQUFJLENBQUM7SUFDMUIsQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUc7UUFDWixHQUFHLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDakMsQ0FBQyxDQUFDLENBQUM7SUFFSCxJQUFJLFFBQVEsSUFBSSxjQUFjLEVBQUU7UUFDNUIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pCLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNqQixDQUFDLEVBdkJ3RCxDQXVCeEQsQ0FBQztBQUVGLE1BQU0sQ0FBQyxJQUFNLFdBQVcsR0FBRyxVQUFDLEtBQXNCLElBQWMsT0FBQSxVQUFDLEtBQUssRUFBRSxRQUFRO0lBRXRFLElBQUEsaUJBR1UsRUFGWixhQUEyQixFQUFuQix3QkFBUyxFQUFFLG9CQUFPLEVBQ2xCLDhCQUNJLENBQUM7SUFFakIsT0FBTyxlQUFlLENBQ2xCLFNBQVMsRUFDVCxjQUFNLE9BQUEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUMsS0FBSyxPQUFBLEVBQUMsQ0FBQyxFQUF6RCxDQUF5RCxFQUMvRCxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FDdkIsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDdkIsQ0FBQyxFQVorRCxDQVkvRCxDQUFDO0FBRUYsTUFBTSxDQUFDLElBQU0sZUFBZSxHQUFHLFVBQUMsS0FBc0IsSUFBYyxPQUFBLFVBQUMsS0FBSyxFQUFFLFFBQVE7SUFFMUUsSUFBQSxpQkFHVSxFQUZaLGFBQTJCLEVBQW5CLHdCQUFTLEVBQUUsb0JBQU8sRUFDbEIsOEJBQ0ksQ0FBQztJQUVqQixPQUFPLGVBQWUsQ0FBQyxTQUFTLEVBQzVCLGNBQU0sT0FBQSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBQyxLQUFLLE9BQUEsRUFBQyxDQUFDLEVBQXpELENBQXlELEVBQy9ELENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUN2QixDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztBQUN2QixDQUFDLEVBWG1FLENBV25FLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0VkaXRvclN0YXRlLCBUcmFuc2FjdGlvbn0gZnJvbSBcInByb3NlbWlycm9yLXN0YXRlXCI7XG5pbXBvcnQge0NvbW1hbmQsIENvbW1hbmREaXNwYXRjaH0gZnJvbSBcIi4uL2NvbW1hbmRcIjtcbmltcG9ydCB7dG9nZ2xlQmxvY2tNYXJrfSBmcm9tIFwiLi4vY29tbWFuZHMvdG9vZ2xlLWJsb2NrLW1hcmtcIjtcbmltcG9ydCB7QWxpZ25tZW50U3RhdGV9IGZyb20gXCIuL2FsaWdubWVudC1zdGF0ZVwiO1xuXG4vKipcbiAqIEl0ZXJhdGVzIG92ZXIgdGhlIGNvbW1hbmRzIG9uZSBhZnRlciB0aGUgb3RoZXIsXG4gKiBwYXNzZXMgdGhlIHRyIHRocm91Z2ggYW5kIGRpc3BhdGNoZXMgdGhlIGN1bXVsYXRlZCB0cmFuc2FjdGlvblxuICovXG5leHBvcnQgY29uc3QgY2FzY2FkZUNvbW1hbmRzID0gKGNtZHM6IEFycmF5PENvbW1hbmQ+KSA9PiAoXG4gICAgc3RhdGU6IEVkaXRvclN0YXRlLFxuICAgIGRpc3BhdGNoPzogQ29tbWFuZERpc3BhdGNoLFxuKSA9PiB7XG4gICAgY29uc3Qge3RyOiBiYXNlVHJ9ID0gc3RhdGU7XG4gICAgbGV0IHNob3VsZERpc3BhdGNoID0gZmFsc2U7XG5cbiAgICBjb25zdCBvbkRpc3BhdGNoQWN0aW9uID0gKHRyOiBUcmFuc2FjdGlvbikgPT4ge1xuICAgICAgICB0ci5zdGVwcy5mb3JFYWNoKHN0ID0+IHtcbiAgICAgICAgICAgIGJhc2VUci5zdGVwKHN0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNob3VsZERpc3BhdGNoID0gdHJ1ZTtcbiAgICB9O1xuXG4gICAgY21kcy5mb3JFYWNoKGNtZCA9PiB7XG4gICAgICAgIGNtZChzdGF0ZSwgb25EaXNwYXRjaEFjdGlvbik7XG4gICAgfSk7XG5cbiAgICBpZiAoZGlzcGF0Y2ggJiYgc2hvdWxkRGlzcGF0Y2gpIHtcbiAgICAgICAgZGlzcGF0Y2goYmFzZVRyKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc0FsaWduYWJsZSA9IChhbGlnbj86IEFsaWdubWVudFN0YXRlKTogQ29tbWFuZCA9PiAoc3RhdGUsIGRpc3BhdGNoKSA9PiB7XG5cbiAgICBjb25zdCB7XG4gICAgICAgIG5vZGVzOiB7cGFyYWdyYXBoLCBoZWFkaW5nfSxcbiAgICAgICAgbWFya3M6IHthbGlnbm1lbnR9LFxuICAgIH0gPSBzdGF0ZS5zY2hlbWE7XG5cbiAgICByZXR1cm4gdG9nZ2xlQmxvY2tNYXJrKFxuICAgICAgICBhbGlnbm1lbnQsXG4gICAgICAgICgpID0+ICghYWxpZ24gPyB1bmRlZmluZWQgOiBhbGlnbiA9PT0gXCJsZWZ0XCIgPyBmYWxzZSA6IHthbGlnbn0pLFxuICAgICAgICBbcGFyYWdyYXBoLCBoZWFkaW5nXSxcbiAgICApKHN0YXRlLCBkaXNwYXRjaCk7XG59O1xuXG5leHBvcnQgY29uc3QgY2hhbmdlQWxpZ25tZW50ID0gKGFsaWduPzogQWxpZ25tZW50U3RhdGUpOiBDb21tYW5kID0+IChzdGF0ZSwgZGlzcGF0Y2gpID0+IHtcblxuICAgIGNvbnN0IHtcbiAgICAgICAgbm9kZXM6IHtwYXJhZ3JhcGgsIGhlYWRpbmd9LFxuICAgICAgICBtYXJrczoge2FsaWdubWVudH1cbiAgICB9ID0gc3RhdGUuc2NoZW1hO1xuXG4gICAgcmV0dXJuIHRvZ2dsZUJsb2NrTWFyayhhbGlnbm1lbnQsXG4gICAgICAgICgpID0+ICghYWxpZ24gPyB1bmRlZmluZWQgOiBhbGlnbiA9PT0gXCJsZWZ0XCIgPyBmYWxzZSA6IHthbGlnbn0pLFxuICAgICAgICBbcGFyYWdyYXBoLCBoZWFkaW5nXSxcbiAgICApKHN0YXRlLCBkaXNwYXRjaCk7XG59O1xuIl19