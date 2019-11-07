import * as tslib_1 from "tslib";
import { Component, Input } from "@angular/core";
import { PopoverController } from "@ionic/angular";
import { toggleMark } from "prosemirror-commands";
import { FontSize } from "./font-sizes";
import { toggleInlineMark } from "./prosemirror/commands/toogle-inline-mark";
import { isMarkActive } from "./prosemirror/is-active";
import { schema } from "./prosemirror/schema";
import { findMarksInSelection } from "./prosemirror/utils/find-marks-in-selection";
var TextFormatMenu = /** @class */ (function () {
    function TextFormatMenu(popoverController) {
        this.popoverController = popoverController;
        this.FontSize = FontSize;
    }
    TextFormatMenu.prototype.toggle = function (name) {
        var _this = this;
        var command;
        if (name === "bold") {
            command = toggleMark(schema.marks.strong);
        }
        else if (name === "italic") {
            command = toggleMark(schema.marks.em);
        }
        else if (name === "underline") {
            command = toggleMark(schema.marks.underline);
        }
        if (command(this.editor.state)) {
            command(this.editor.state, function (tr) { return _this.editor.view.dispatch(tr); });
        }
        this.popoverController.dismiss();
    };
    TextFormatMenu.prototype.resetFontSize = function () {
        var _this = this;
        toggleMark(schema.marks.fontSize)(this.editor.state, function (tr) { return _this.editor.view.dispatch(tr); });
        this.popoverController.dismiss();
    };
    TextFormatMenu.prototype.toggleFontSize = function (size) {
        var _this = this;
        var command = toggleInlineMark(schema.marks.fontSize, { fontSize: size.size });
        if (command(this.editor.state)) {
            command(this.editor.state, function (tr) { return _this.editor.view.dispatch(tr); });
        }
        this.popoverController.dismiss();
    };
    TextFormatMenu.prototype.ngOnInit = function () {
        var e_1, _a, e_2, _b;
        this.boldActivated = isMarkActive(this.editor.state, schema.marks.strong);
        this.italicActivated = isMarkActive(this.editor.state, schema.marks.em);
        this.underlineActivated = isMarkActive(this.editor.state, schema.marks.underline);
        this.activeFontSize = undefined;
        try {
            MARKS: for (var _c = tslib_1.__values(findMarksInSelection(this.editor.state, schema.marks.fontSize)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var mark = _d.value;
                try {
                    for (var _e = tslib_1.__values(FontSize.sizes()), _f = _e.next(); !_f.done; _f = _e.next()) {
                        var size = _f.value;
                        if (size.size === mark.attrs.fontSize) {
                            // ups, mamy różne rozmiary w zaznaczeniu
                            if (this.activeFontSize && size !== this.activeFontSize) {
                                this.activeFontSize = undefined;
                                break MARKS;
                            }
                            this.activeFontSize = size;
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    TextFormatMenu.prototype.ionViewWillLeave = function () {
        this.editor.focus();
    };
    TextFormatMenu.ctorParameters = function () { return [
        { type: PopoverController }
    ]; };
    tslib_1.__decorate([
        Input()
    ], TextFormatMenu.prototype, "editor", void 0);
    TextFormatMenu = tslib_1.__decorate([
        Component({
            template: "\n        <ion-list lines=\"full\">\n            \n            <ion-item button=\"true\" detail=\"false\" (click)=\"toggle('bold')\">\n                <ion-label style=\"font-weight: bold\">{{\"@co.mmons/ionic-extensions/html-editor#textMenu/Bold\" | intlMessage}}</ion-label>\n                <ion-icon name=\"checkmark\" slot=\"end\" *ngIf=\"boldActivated\"></ion-icon>\n            </ion-item>\n\n            <ion-item button=\"true\" detail=\"false\" (click)=\"toggle('italic')\">\n                <ion-label style=\"font-style: italic\">{{\"@co.mmons/ionic-extensions/html-editor#textMenu/Italic\" | intlMessage}}</ion-label>\n                <ion-icon name=\"checkmark\" slot=\"end\" *ngIf=\"italicActivated\"></ion-icon>\n            </ion-item>\n\n            <ion-item button=\"true\" detail=\"false\" (click)=\"toggle('underline')\">\n                <ion-label style=\"text-decoration: underline\">{{\"@co.mmons/ionic-extensions/html-editor#textMenu/Underline\" | intlMessage}}</ion-label>\n                <ion-icon name=\"checkmark\" slot=\"end\" *ngIf=\"underlineActivated\"></ion-icon>\n            </ion-item>\n            \n            <ion-item-divider>\n                <ion-label>{{\"@co.mmons/ionic-extensions/html-editor#textMenu/fontSize/Text size\" | intlMessage}}</ion-label>\n            </ion-item-divider>\n\n            <ion-item button=\"true\" detail=\"false\" (click)=\"resetFontSize()\" *ngIf=\"activeFontSize\">\n                <ion-label>{{\"@co.mmons/ionic-extensions/html-editor#textMenu/fontSize/Default\" | intlMessage}}</ion-label>\n            </ion-item>\n\n            <ion-item button=\"true\" detail=\"false\" (click)=\"toggleFontSize(fontSize)\" *ngFor=\"let fontSize of FontSize.sizes()\">\n                <ion-label [style.fontSize]=\"fontSize.size\">{{fontSize.label | intlMessage}}</ion-label>\n                <ion-icon name=\"checkmark\" slot=\"end\" *ngIf=\"activeFontSize === fontSize\"></ion-icon>\n            </ion-item>\n\n        </ion-list>\n    ",
            styles: ["\n        :host { user-select: none; }\n        :host ion-list { margin: 0px; padding: 0px; }\n        :host ion-item:last-child { --border-width: 0px; }\n        :host ion-item-divider { --background: transparent; font-size: small }\n        :host ion-item-divider ion-label { margin-top: 20px; opacity: 0.8; }\n    "]
        })
    ], TextFormatMenu);
    return TextFormatMenu;
}());
export { TextFormatMenu };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1mb3JtYXQtbWVudS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjby5tbW9ucy9pb25pYy1leHRlbnNpb25zL2h0bWwtZWRpdG9yLyIsInNvdXJjZXMiOlsidGV4dC1mb3JtYXQtbWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDdkQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBRWhELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFFdEMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDM0UsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUM1QyxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQTRDakY7SUFJSSx3QkFBb0IsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFGL0MsYUFBUSxHQUFHLFFBQVEsQ0FBQztJQUc3QixDQUFDO0lBY0QsK0JBQU0sR0FBTixVQUFPLElBQVk7UUFBbkIsaUJBaUJDO1FBZkcsSUFBSSxPQUFnQixDQUFDO1FBRXJCLElBQUksSUFBSSxLQUFLLE1BQU0sRUFBRTtZQUNqQixPQUFPLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDN0M7YUFBTSxJQUFJLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDMUIsT0FBTyxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3pDO2FBQU0sSUFBSSxJQUFJLEtBQUssV0FBVyxFQUFFO1lBQzdC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QkFDOUI7cUJBQ0o7Ozs7Ozs7OzthQUNKOzs7Ozs7Ozs7SUFDTCxDQUFDO0lBRUQseUNBQWdCLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN4QixDQUFDOztnQkExRXNDLGlCQUFpQjs7SUFJeEQ7UUFEQyxLQUFLLEVBQUU7a0RBQ1c7SUFSVixjQUFjO1FBMUMxQixTQUFTLENBQUM7WUFRUCxRQUFRLEVBQUUsMDlEQWdDVDtxQkF2Q1EsK1RBTVI7U0FrQ0osQ0FBQztPQUNXLGNBQWMsQ0ErRTFCO0lBQUQscUJBQUM7Q0FBQSxBQS9FRCxJQStFQztTQS9FWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1BvcG92ZXJDb250cm9sbGVyfSBmcm9tIFwiQGlvbmljL2FuZ3VsYXJcIjtcbmltcG9ydCB7dG9nZ2xlTWFya30gZnJvbSBcInByb3NlbWlycm9yLWNvbW1hbmRzXCI7XG5pbXBvcnQge0h0bWxFZGl0b3J9IGZyb20gXCIuL2VkaXRvclwiO1xuaW1wb3J0IHtGb250U2l6ZX0gZnJvbSBcIi4vZm9udC1zaXplc1wiO1xuaW1wb3J0IHtDb21tYW5kfSBmcm9tIFwiLi9wcm9zZW1pcnJvci9jb21tYW5kXCI7XG5pbXBvcnQge3RvZ2dsZUlubGluZU1hcmt9IGZyb20gXCIuL3Byb3NlbWlycm9yL2NvbW1hbmRzL3Rvb2dsZS1pbmxpbmUtbWFya1wiO1xuaW1wb3J0IHtpc01hcmtBY3RpdmV9IGZyb20gXCIuL3Byb3NlbWlycm9yL2lzLWFjdGl2ZVwiO1xuaW1wb3J0IHtzY2hlbWF9IGZyb20gXCIuL3Byb3NlbWlycm9yL3NjaGVtYVwiO1xuaW1wb3J0IHtmaW5kTWFya3NJblNlbGVjdGlvbn0gZnJvbSBcIi4vcHJvc2VtaXJyb3IvdXRpbHMvZmluZC1tYXJrcy1pbi1zZWxlY3Rpb25cIjtcblxuQENvbXBvbmVudCh7XG4gICAgc3R5bGVzOiBbYFxuICAgICAgICA6aG9zdCB7IHVzZXItc2VsZWN0OiBub25lOyB9XG4gICAgICAgIDpob3N0IGlvbi1saXN0IHsgbWFyZ2luOiAwcHg7IHBhZGRpbmc6IDBweDsgfVxuICAgICAgICA6aG9zdCBpb24taXRlbTpsYXN0LWNoaWxkIHsgLS1ib3JkZXItd2lkdGg6IDBweDsgfVxuICAgICAgICA6aG9zdCBpb24taXRlbS1kaXZpZGVyIHsgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgZm9udC1zaXplOiBzbWFsbCB9XG4gICAgICAgIDpob3N0IGlvbi1pdGVtLWRpdmlkZXIgaW9uLWxhYmVsIHsgbWFyZ2luLXRvcDogMjBweDsgb3BhY2l0eTogMC44OyB9XG4gICAgYF0sXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGlvbi1saXN0IGxpbmVzPVwiZnVsbFwiPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8aW9uLWl0ZW0gYnV0dG9uPVwidHJ1ZVwiIGRldGFpbD1cImZhbHNlXCIgKGNsaWNrKT1cInRvZ2dsZSgnYm9sZCcpXCI+XG4gICAgICAgICAgICAgICAgPGlvbi1sYWJlbCBzdHlsZT1cImZvbnQtd2VpZ2h0OiBib2xkXCI+e3tcIkBjby5tbW9ucy9pb25pYy1leHRlbnNpb25zL2h0bWwtZWRpdG9yI3RleHRNZW51L0JvbGRcIiB8IGludGxNZXNzYWdlfX08L2lvbi1sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cImNoZWNrbWFya1wiIHNsb3Q9XCJlbmRcIiAqbmdJZj1cImJvbGRBY3RpdmF0ZWRcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgPC9pb24taXRlbT5cblxuICAgICAgICAgICAgPGlvbi1pdGVtIGJ1dHRvbj1cInRydWVcIiBkZXRhaWw9XCJmYWxzZVwiIChjbGljayk9XCJ0b2dnbGUoJ2l0YWxpYycpXCI+XG4gICAgICAgICAgICAgICAgPGlvbi1sYWJlbCBzdHlsZT1cImZvbnQtc3R5bGU6IGl0YWxpY1wiPnt7XCJAY28ubW1vbnMvaW9uaWMtZXh0ZW5zaW9ucy9odG1sLWVkaXRvciN0ZXh0TWVudS9JdGFsaWNcIiB8IGludGxNZXNzYWdlfX08L2lvbi1sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cImNoZWNrbWFya1wiIHNsb3Q9XCJlbmRcIiAqbmdJZj1cIml0YWxpY0FjdGl2YXRlZFwiPjwvaW9uLWljb24+XG4gICAgICAgICAgICA8L2lvbi1pdGVtPlxuXG4gICAgICAgICAgICA8aW9uLWl0ZW0gYnV0dG9uPVwidHJ1ZVwiIGRldGFpbD1cImZhbHNlXCIgKGNsaWNrKT1cInRvZ2dsZSgndW5kZXJsaW5lJylcIj5cbiAgICAgICAgICAgICAgICA8aW9uLWxhYmVsIHN0eWxlPVwidGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmVcIj57e1wiQGNvLm1tb25zL2lvbmljLWV4dGVuc2lvbnMvaHRtbC1lZGl0b3IjdGV4dE1lbnUvVW5kZXJsaW5lXCIgfCBpbnRsTWVzc2FnZX19PC9pb24tbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJjaGVja21hcmtcIiBzbG90PVwiZW5kXCIgKm5nSWY9XCJ1bmRlcmxpbmVBY3RpdmF0ZWRcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgPC9pb24taXRlbT5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGlvbi1pdGVtLWRpdmlkZXI+XG4gICAgICAgICAgICAgICAgPGlvbi1sYWJlbD57e1wiQGNvLm1tb25zL2lvbmljLWV4dGVuc2lvbnMvaHRtbC1lZGl0b3IjdGV4dE1lbnUvZm9udFNpemUvVGV4dCBzaXplXCIgfCBpbnRsTWVzc2FnZX19PC9pb24tbGFiZWw+XG4gICAgICAgICAgICA8L2lvbi1pdGVtLWRpdmlkZXI+XG5cbiAgICAgICAgICAgIDxpb24taXRlbSBidXR0b249XCJ0cnVlXCIgZGV0YWlsPVwiZmFsc2VcIiAoY2xpY2spPVwicmVzZXRGb250U2l6ZSgpXCIgKm5nSWY9XCJhY3RpdmVGb250U2l6ZVwiPlxuICAgICAgICAgICAgICAgIDxpb24tbGFiZWw+e3tcIkBjby5tbW9ucy9pb25pYy1leHRlbnNpb25zL2h0bWwtZWRpdG9yI3RleHRNZW51L2ZvbnRTaXplL0RlZmF1bHRcIiB8IGludGxNZXNzYWdlfX08L2lvbi1sYWJlbD5cbiAgICAgICAgICAgIDwvaW9uLWl0ZW0+XG5cbiAgICAgICAgICAgIDxpb24taXRlbSBidXR0b249XCJ0cnVlXCIgZGV0YWlsPVwiZmFsc2VcIiAoY2xpY2spPVwidG9nZ2xlRm9udFNpemUoZm9udFNpemUpXCIgKm5nRm9yPVwibGV0IGZvbnRTaXplIG9mIEZvbnRTaXplLnNpemVzKClcIj5cbiAgICAgICAgICAgICAgICA8aW9uLWxhYmVsIFtzdHlsZS5mb250U2l6ZV09XCJmb250U2l6ZS5zaXplXCI+e3tmb250U2l6ZS5sYWJlbCB8IGludGxNZXNzYWdlfX08L2lvbi1sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cImNoZWNrbWFya1wiIHNsb3Q9XCJlbmRcIiAqbmdJZj1cImFjdGl2ZUZvbnRTaXplID09PSBmb250U2l6ZVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgICA8L2lvbi1pdGVtPlxuXG4gICAgICAgIDwvaW9uLWxpc3Q+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBUZXh0Rm9ybWF0TWVudSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICByZWFkb25seSBGb250U2l6ZSA9IEZvbnRTaXplO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwb3BvdmVyQ29udHJvbGxlcjogUG9wb3ZlckNvbnRyb2xsZXIpIHtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIGVkaXRvcjogSHRtbEVkaXRvcjtcblxuICAgIGJvbGRBY3RpdmF0ZWQ6IGJvb2xlYW47XG5cbiAgICBpdGFsaWNBY3RpdmF0ZWQ6IGJvb2xlYW47XG5cbiAgICB1bmRlcmxpbmVBY3RpdmF0ZWQ6IGJvb2xlYW47XG5cbiAgICBhY3RpdmVGb250U2l6ZTogRm9udFNpemU7XG5cblxuICAgIHRvZ2dsZShuYW1lOiBzdHJpbmcpIHtcblxuICAgICAgICBsZXQgY29tbWFuZDogQ29tbWFuZDtcblxuICAgICAgICBpZiAobmFtZSA9PT0gXCJib2xkXCIpIHtcbiAgICAgICAgICAgIGNvbW1hbmQgPSB0b2dnbGVNYXJrKHNjaGVtYS5tYXJrcy5zdHJvbmcpO1xuICAgICAgICB9IGVsc2UgaWYgKG5hbWUgPT09IFwiaXRhbGljXCIpIHtcbiAgICAgICAgICAgIGNvbW1hbmQgPSB0b2dnbGVNYXJrKHNjaGVtYS5tYXJrcy5lbSk7XG4gICAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gXCJ1bmRlcmxpbmVcIikge1xuICAgICAgICAgICAgY29tbWFuZCA9IHRvZ2dsZU1hcmsoc2NoZW1hLm1hcmtzLnVuZGVybGluZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29tbWFuZCh0aGlzLmVkaXRvci5zdGF0ZSkpIHtcbiAgICAgICAgICAgIGNvbW1hbmQodGhpcy5lZGl0b3Iuc3RhdGUsICh0cikgPT4gdGhpcy5lZGl0b3Iudmlldy5kaXNwYXRjaCh0cikpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wb3BvdmVyQ29udHJvbGxlci5kaXNtaXNzKCk7XG4gICAgfVxuXG4gICAgcmVzZXRGb250U2l6ZSgpIHtcbiAgICAgICAgdG9nZ2xlTWFyayhzY2hlbWEubWFya3MuZm9udFNpemUpKHRoaXMuZWRpdG9yLnN0YXRlLCAodHIpID0+IHRoaXMuZWRpdG9yLnZpZXcuZGlzcGF0Y2godHIpKTtcbiAgICAgICAgdGhpcy5wb3BvdmVyQ29udHJvbGxlci5kaXNtaXNzKCk7XG4gICAgfVxuXG4gICAgdG9nZ2xlRm9udFNpemUoc2l6ZTogRm9udFNpemUpIHtcblxuICAgICAgICBjb25zdCBjb21tYW5kID0gdG9nZ2xlSW5saW5lTWFyayhzY2hlbWEubWFya3MuZm9udFNpemUsIHtmb250U2l6ZTogc2l6ZS5zaXplfSk7XG4gICAgICAgIGlmIChjb21tYW5kKHRoaXMuZWRpdG9yLnN0YXRlKSkge1xuICAgICAgICAgICAgY29tbWFuZCh0aGlzLmVkaXRvci5zdGF0ZSwgKHRyKSA9PiB0aGlzLmVkaXRvci52aWV3LmRpc3BhdGNoKHRyKSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBvcG92ZXJDb250cm9sbGVyLmRpc21pc3MoKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5ib2xkQWN0aXZhdGVkID0gaXNNYXJrQWN0aXZlKHRoaXMuZWRpdG9yLnN0YXRlLCBzY2hlbWEubWFya3Muc3Ryb25nKTtcbiAgICAgICAgdGhpcy5pdGFsaWNBY3RpdmF0ZWQgPSBpc01hcmtBY3RpdmUodGhpcy5lZGl0b3Iuc3RhdGUsIHNjaGVtYS5tYXJrcy5lbSk7XG4gICAgICAgIHRoaXMudW5kZXJsaW5lQWN0aXZhdGVkID0gaXNNYXJrQWN0aXZlKHRoaXMuZWRpdG9yLnN0YXRlLCBzY2hlbWEubWFya3MudW5kZXJsaW5lKTtcblxuICAgICAgICB0aGlzLmFjdGl2ZUZvbnRTaXplID0gdW5kZWZpbmVkO1xuICAgICAgICBNQVJLUzogZm9yIChjb25zdCBtYXJrIG9mIGZpbmRNYXJrc0luU2VsZWN0aW9uKHRoaXMuZWRpdG9yLnN0YXRlLCBzY2hlbWEubWFya3MuZm9udFNpemUpKSB7XG5cbiAgICAgICAgICAgIGZvciAoY29uc3Qgc2l6ZSBvZiBGb250U2l6ZS5zaXplcygpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNpemUuc2l6ZSA9PT0gbWFyay5hdHRycy5mb250U2l6ZSkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHVwcywgbWFteSByw7PFvG5lIHJvem1pYXJ5IHcgemF6bmFjemVuaXVcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlRm9udFNpemUgJiYgc2l6ZSAhPT0gdGhpcy5hY3RpdmVGb250U2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVGb250U2l6ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrIE1BUktTO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVGb250U2l6ZSA9IHNpemU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW9uVmlld1dpbGxMZWF2ZSgpIHtcbiAgICAgICAgdGhpcy5lZGl0b3IuZm9jdXMoKTtcbiAgICB9XG59XG4iXX0=