export function findCutBefore($pos) {
    // parent is non-isolating, so we can look across this boundary
    if (!$pos.parent.type.spec.isolating) {
        // search up the tree from the pos"s *parent*
        for (let i = $pos.depth - 1; i >= 0; i--) {
            // starting from the inner most node"s parent, find out
            // if we"re not its first child
            if ($pos.index(i) > 0) {
                return $pos.doc.resolve($pos.before(i + 1));
            }
            if ($pos.node(i).type.spec.isolating) {
                break;
            }
        }
    }
    return null;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZC1jdXQtYmVmb3JlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvLm1tb25zL2lvbmljLWV4dGVuc2lvbnMvaHRtbC1lZGl0b3IvIiwic291cmNlcyI6WyJwcm9zZW1pcnJvci91dGlscy9maW5kLWN1dC1iZWZvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUEsTUFBTSxVQUFVLGFBQWEsQ0FBQyxJQUFpQjtJQUUzQywrREFBK0Q7SUFDL0QsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7UUFDbEMsNkNBQTZDO1FBQzdDLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN0Qyx1REFBdUQ7WUFDdkQsK0JBQStCO1lBQy9CLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ25CLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMvQztZQUVELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDbEMsTUFBTTthQUNUO1NBQ0o7S0FDSjtJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL2dpdGh1Yi5jb20vUHJvc2VNaXJyb3IvcHJvc2VtaXJyb3ItY29tbWFuZHMvYmxvYi9tYXN0ZXIvc3JjL2NvbW1hbmRzLmpzI0w5MFxuLy8gS2VlcCBnb2luZyBsZWZ0IHVwIHRoZSB0cmVlLCB3aXRob3V0IGdvaW5nIGFjcm9zcyBpc29sYXRpbmcgYm91bmRhcmllcywgdW50aWwgd2Vcbi8vIGNhbiBnbyBhbG9uZyB0aGUgdHJlZSBhdCB0aGF0IHNhbWUgbGV2ZWxcbi8vXG4vLyBZb3UgY2FuIHRoaW5rIG9mIHRoaXMgYXMsIGlmIHlvdSBjb3VsZCBjb25zdHJ1Y3QgZWFjaCBkb2N1bWVudCBsaWtlIHdlIGRvIGluIHRoZSB0ZXN0cyxcbi8vIHJldHVybiB0aGUgcG9zaXRpb24gb2YgdGhlIGZpcnN0ICkgYmFja3dhcmRzIGZyb20gdGhlIGN1cnJlbnQgc2VsZWN0aW9uLlxuaW1wb3J0IHtSZXNvbHZlZFBvc30gZnJvbSBcInByb3NlbWlycm9yLW1vZGVsXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kQ3V0QmVmb3JlKCRwb3M6IFJlc29sdmVkUG9zKTogUmVzb2x2ZWRQb3MgfCBudWxsIHtcblxuICAgIC8vIHBhcmVudCBpcyBub24taXNvbGF0aW5nLCBzbyB3ZSBjYW4gbG9vayBhY3Jvc3MgdGhpcyBib3VuZGFyeVxuICAgIGlmICghJHBvcy5wYXJlbnQudHlwZS5zcGVjLmlzb2xhdGluZykge1xuICAgICAgICAvLyBzZWFyY2ggdXAgdGhlIHRyZWUgZnJvbSB0aGUgcG9zXCJzICpwYXJlbnQqXG4gICAgICAgIGZvciAobGV0IGkgPSAkcG9zLmRlcHRoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIC8vIHN0YXJ0aW5nIGZyb20gdGhlIGlubmVyIG1vc3Qgbm9kZVwicyBwYXJlbnQsIGZpbmQgb3V0XG4gICAgICAgICAgICAvLyBpZiB3ZVwicmUgbm90IGl0cyBmaXJzdCBjaGlsZFxuICAgICAgICAgICAgaWYgKCRwb3MuaW5kZXgoaSkgPiAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICRwb3MuZG9jLnJlc29sdmUoJHBvcy5iZWZvcmUoaSArIDEpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCRwb3Mubm9kZShpKS50eXBlLnNwZWMuaXNvbGF0aW5nKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbn1cbiJdfQ==