import {Fragment, NodeRange, Slice} from "prosemirror-model";
import {EditorState, Selection, TextSelection, Transaction,} from "prosemirror-state";
import {liftTarget, ReplaceAroundStep} from "prosemirror-transform";

function liftListItem(
    state: EditorState,
    selection: Selection,
    tr: Transaction,
): Transaction {
    const { $from, $to } = selection;
    const nodeType = state.schema.nodes.listItem;
    let range = $from.blockRange(
        $to,
        node =>
            !!node.childCount &&
            !!node.firstChild &&
            node.firstChild.type === nodeType,
    );
    if (
        !range ||
        range.depth < 2 ||
        $from.node(range.depth - 1).type !== nodeType
    ) {
        return tr;
    }
    const end = range.end;
    const endOfList = $to.end(range.depth);
    if (end < endOfList) {
        tr.step(
            new ReplaceAroundStep(
                end - 1,
                endOfList,
                end,
                endOfList,
                new Slice(
                    Fragment.from(nodeType.create(undefined, range.parent.copy())),
                    1,
                    0,
                ),
                1,
                true,
            ),
        );

        range = new NodeRange(
            tr.doc.resolve($from.pos),
            tr.doc.resolve(endOfList),
            range.depth,
        );
    }
    return tr.lift(range, liftTarget(range) as number).scrollIntoView();
}

export function liftFollowingList(
    state: EditorState,
    from: number,
    to: number,
    rootListDepth: number,
    tr: Transaction,
): Transaction {
    const { listItem } = state.schema.nodes;
    let lifted = false;
    tr.doc.nodesBetween(from, to, (node, pos) => {
        if (!lifted && node.type === listItem && pos > from) {
            lifted = true;
            let listDepth = rootListDepth + 3;
            while (listDepth > rootListDepth + 2) {
                const start = tr.doc.resolve(tr.mapping.map(pos));
                listDepth = start.depth;
                const end = tr.doc.resolve(
                    tr.mapping.map(pos + node.textContent.length),
                );
                const sel = new TextSelection(start, end);
                tr = liftListItem(state, sel, tr);
            }
        }
    });
    return tr;
}
