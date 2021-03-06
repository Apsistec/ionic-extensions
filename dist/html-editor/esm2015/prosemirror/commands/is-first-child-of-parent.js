import { GapCursor } from "prosemirror-gapcursor";
export const isFirstChildOfParent = (state) => {
    const { $from } = state.selection;
    return $from.depth > 1
        ? (state.selection instanceof GapCursor &&
            $from.parentOffset === 0) ||
            $from.index($from.depth - 1) === 0
        : true;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtZmlyc3QtY2hpbGQtb2YtcGFyZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvLm1tb25zL2lvbmljLWV4dGVuc2lvbnMvaHRtbC1lZGl0b3IvIiwic291cmNlcyI6WyJwcm9zZW1pcnJvci9jb21tYW5kcy9pcy1maXJzdC1jaGlsZC1vZi1wYXJlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBR2hELE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUFHLENBQUMsS0FBa0IsRUFBVyxFQUFFO0lBQ2hFLE1BQU0sRUFBQyxLQUFLLEVBQUMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO0lBQ2hDLE9BQU8sS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLFlBQVksU0FBUztZQUN2QyxLQUFLLENBQUMsWUFBWSxLQUFLLENBQUMsQ0FBQztZQUN6QixLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNsQyxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQ2YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtHYXBDdXJzb3J9IGZyb20gXCJwcm9zZW1pcnJvci1nYXBjdXJzb3JcIjtcbmltcG9ydCB7RWRpdG9yU3RhdGV9IGZyb20gXCJwcm9zZW1pcnJvci1zdGF0ZVwiO1xuXG5leHBvcnQgY29uc3QgaXNGaXJzdENoaWxkT2ZQYXJlbnQgPSAoc3RhdGU6IEVkaXRvclN0YXRlKTogYm9vbGVhbiA9PiB7XG4gICAgY29uc3QgeyRmcm9tfSA9IHN0YXRlLnNlbGVjdGlvbjtcbiAgICByZXR1cm4gJGZyb20uZGVwdGggPiAxXG4gICAgICAgID8gKHN0YXRlLnNlbGVjdGlvbiBpbnN0YW5jZW9mIEdhcEN1cnNvciAmJlxuICAgICAgICAkZnJvbS5wYXJlbnRPZmZzZXQgPT09IDApIHx8XG4gICAgICAgICRmcm9tLmluZGV4KCRmcm9tLmRlcHRoIC0gMSkgPT09IDBcbiAgICAgICAgOiB0cnVlO1xufTtcbiJdfQ==