import { getListLiftTarget } from "../utils/get-list-lift-target";
// The function will list paragraphs in selection out to level 1 below root list.
export function liftSelectionList(state, tr) {
    const { from, to } = state.selection;
    const { paragraph } = state.schema.nodes;
    const listCol = [];
    tr.doc.nodesBetween(from, to, (node, pos) => {
        if (node.type === paragraph) {
            listCol.push({ node, pos });
        }
    });
    for (let i = listCol.length - 1; i >= 0; i--) {
        const paragraph = listCol[i];
        const start = tr.doc.resolve(tr.mapping.map(paragraph.pos));
        if (start.depth > 0) {
            let end;
            if (paragraph.node.textContent && paragraph.node.textContent.length > 0) {
                end = tr.doc.resolve(tr.mapping.map(paragraph.pos + paragraph.node.textContent.length));
            }
            else {
                end = tr.doc.resolve(tr.mapping.map(paragraph.pos + 1));
            }
            const range = start.blockRange(end);
            if (range) {
                tr.lift(range, getListLiftTarget(state.schema, start));
            }
        }
    }
    return tr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlmdC1zZWxlY3Rpb24tbGlzdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjby5tbW9ucy9pb25pYy1leHRlbnNpb25zL2h0bWwtZWRpdG9yLyIsInNvdXJjZXMiOlsicHJvc2VtaXJyb3IvbGlzdC90cmFuc2Zvcm1zL2xpZnQtc2VsZWN0aW9uLWxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFFaEUsaUZBQWlGO0FBQ2pGLE1BQU0sVUFBVSxpQkFBaUIsQ0FDN0IsS0FBa0IsRUFDbEIsRUFBZTtJQUVmLE1BQU0sRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFDLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQztJQUNuQyxNQUFNLEVBQUMsU0FBUyxFQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDdkMsTUFBTSxPQUFPLEdBQVUsRUFBRSxDQUFDO0lBQzFCLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUU7UUFDeEMsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUN6QixPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUM7U0FDN0I7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUNILEtBQUssSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUMxQyxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0IsTUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDNUQsSUFBSSxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRTtZQUNqQixJQUFJLEdBQUcsQ0FBQztZQUNSLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDckUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUNoQixFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUNwRSxDQUFDO2FBQ0w7aUJBQU07Z0JBQ0gsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMzRDtZQUNELE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDcEMsSUFBSSxLQUFLLEVBQUU7Z0JBQ1AsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsaUJBQWlCLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQzFEO1NBQ0o7S0FDSjtJQUNELE9BQU8sRUFBRSxDQUFDO0FBQ2QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RWRpdG9yU3RhdGUsIFRyYW5zYWN0aW9ufSBmcm9tIFwicHJvc2VtaXJyb3Itc3RhdGVcIjtcbmltcG9ydCB7Z2V0TGlzdExpZnRUYXJnZXR9IGZyb20gXCIuLi91dGlscy9nZXQtbGlzdC1saWZ0LXRhcmdldFwiO1xuXG4vLyBUaGUgZnVuY3Rpb24gd2lsbCBsaXN0IHBhcmFncmFwaHMgaW4gc2VsZWN0aW9uIG91dCB0byBsZXZlbCAxIGJlbG93IHJvb3QgbGlzdC5cbmV4cG9ydCBmdW5jdGlvbiBsaWZ0U2VsZWN0aW9uTGlzdChcbiAgICBzdGF0ZTogRWRpdG9yU3RhdGUsXG4gICAgdHI6IFRyYW5zYWN0aW9uLFxuKTogVHJhbnNhY3Rpb24ge1xuICAgIGNvbnN0IHtmcm9tLCB0b30gPSBzdGF0ZS5zZWxlY3Rpb247XG4gICAgY29uc3Qge3BhcmFncmFwaH0gPSBzdGF0ZS5zY2hlbWEubm9kZXM7XG4gICAgY29uc3QgbGlzdENvbDogYW55W10gPSBbXTtcbiAgICB0ci5kb2Mubm9kZXNCZXR3ZWVuKGZyb20sIHRvLCAobm9kZSwgcG9zKSA9PiB7XG4gICAgICAgIGlmIChub2RlLnR5cGUgPT09IHBhcmFncmFwaCkge1xuICAgICAgICAgICAgbGlzdENvbC5wdXNoKHtub2RlLCBwb3N9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGZvciAobGV0IGkgPSBsaXN0Q29sLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGNvbnN0IHBhcmFncmFwaCA9IGxpc3RDb2xbaV07XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gdHIuZG9jLnJlc29sdmUodHIubWFwcGluZy5tYXAocGFyYWdyYXBoLnBvcykpO1xuICAgICAgICBpZiAoc3RhcnQuZGVwdGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgZW5kO1xuICAgICAgICAgICAgaWYgKHBhcmFncmFwaC5ub2RlLnRleHRDb250ZW50ICYmIHBhcmFncmFwaC5ub2RlLnRleHRDb250ZW50Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBlbmQgPSB0ci5kb2MucmVzb2x2ZShcbiAgICAgICAgICAgICAgICAgICAgdHIubWFwcGluZy5tYXAocGFyYWdyYXBoLnBvcyArIHBhcmFncmFwaC5ub2RlLnRleHRDb250ZW50Lmxlbmd0aCksXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZW5kID0gdHIuZG9jLnJlc29sdmUodHIubWFwcGluZy5tYXAocGFyYWdyYXBoLnBvcyArIDEpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJhbmdlID0gc3RhcnQuYmxvY2tSYW5nZShlbmQpO1xuICAgICAgICAgICAgaWYgKHJhbmdlKSB7XG4gICAgICAgICAgICAgICAgdHIubGlmdChyYW5nZSwgZ2V0TGlzdExpZnRUYXJnZXQoc3RhdGUuc2NoZW1hLCBzdGFydCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cjtcbn1cbiJdfQ==