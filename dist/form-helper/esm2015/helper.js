import * as tslib_1 from "tslib";
import { ContentChildren, Directive, ElementRef, Input, Optional, QueryList } from "@angular/core";
import { FormControlName, FormGroupDirective, NgForm } from "@angular/forms";
import { scrollIntoView } from "@co.mmons/ionic-extensions/scroll";
let FormHelper = class FormHelper {
    constructor(element, ngForm, formGroupDirective) {
        this.element = element;
        this.ngForm = ngForm;
        this.formGroupDirective = formGroupDirective;
    }
    get readonly() {
        return this.element.nativeElement.hasAttribute("readonly");
    }
    set readonly(readonly) {
        if (readonly) {
            this.element.nativeElement.setAttribute("readonly", "");
        }
        else {
            this.element.nativeElement.removeAttribute("readonly");
        }
    }
    markAsReadonly() {
        this.readonly = true;
    }
    get busy() {
        return this.element.nativeElement.hasAttribute("busy");
    }
    set busy(busy) {
        if (busy) {
            this.element.nativeElement.setAttribute("busy", "");
        }
        else {
            this.element.nativeElement.removeAttribute("busy");
        }
    }
    markAsBusy() {
        this.busy = true;
    }
    formControlName(name) {
        for (let a of this.contentControls.toArray()) {
            if (a.name == name) {
                return a;
            }
        }
    }
    get formGroup() {
        return this.formGroupDirective ? this.formGroupDirective.form : undefined;
    }
    validateAll(markAs = "touched") {
        if (!this.formGroupDirective) {
            return;
        }
        for (let controlName in this.formGroup.controls) {
            let control = this.formGroup.controls[controlName];
            if (markAs == "touched") {
                control.markAsTouched();
            }
            if (markAs == "dirty") {
                control.markAsDirty();
            }
            control.updateValueAndValidity();
        }
        for (let control of this.contentControls.toArray()) {
            if (!control.valid) {
                this.focusImpl(control);
                break;
            }
        }
    }
    focusImpl(control, scroll = true) {
        if (typeof control == "string" && this.formGroupDirective) {
            for (let c of this.formGroupDirective.directives) {
                if (c.name == control) {
                    control = c;
                    break;
                }
            }
        }
        let element;
        if (control instanceof FormControlName) {
            control = control.valueAccessor;
        }
        if (control["el"] instanceof ElementRef) {
            element = control["el"].nativeElement;
        }
        if (control["_elementRef"] instanceof ElementRef) {
            element = control["_elementRef"].nativeElement;
        }
        // element to focus
        if (element) {
            if (element["setFocus"]) {
                element["setFocus"]();
            }
            else {
                let focusable = element;
                let realInput = (element.shadowRoot && element.shadowRoot.querySelector(".native-input")) || element.querySelector(".native-input");
                if (realInput) {
                    focusable = realInput;
                }
                focusable.focus();
            }
        }
        if (scroll && element) {
            scrollIntoView(element.closest("ion-item") || element);
        }
    }
    focus(formControlName, scrollIntoView = true) {
        this.focusImpl(formControlName, scrollIntoView);
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], FormHelper.prototype, "readonly", null);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], FormHelper.prototype, "busy", null);
tslib_1.__decorate([
    ContentChildren(FormControlName, { descendants: true }),
    tslib_1.__metadata("design:type", QueryList)
], FormHelper.prototype, "contentControls", void 0);
FormHelper = tslib_1.__decorate([
    Directive({
        selector: "[ionx-form-helper], [ionxFormHelper]",
        exportAs: "ionxFormHelper"
    }),
    tslib_1.__param(1, Optional()), tslib_1.__param(2, Optional()),
    tslib_1.__metadata("design:paramtypes", [ElementRef, NgForm, FormGroupDirective])
], FormHelper);
export { FormHelper };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvLm1tb25zL2lvbmljLWV4dGVuc2lvbnMvZm9ybS1oZWxwZXIvIiwic291cmNlcyI6WyJoZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxlQUFlLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNqRyxPQUFPLEVBQUMsZUFBZSxFQUFhLGtCQUFrQixFQUFFLE1BQU0sRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3RGLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQU1qRSxJQUFhLFVBQVUsR0FBdkIsTUFBYSxVQUFVO0lBRW5CLFlBQTRCLE9BQW1CLEVBQThCLE1BQWMsRUFBK0Isa0JBQXNDO1FBQXBJLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBOEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUErQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO0lBQ2hLLENBQUM7SUFHRCxJQUFXLFFBQVE7UUFDZixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsSUFBVyxRQUFRLENBQUMsUUFBaUI7UUFDakMsSUFBSSxRQUFRLEVBQUU7WUFDVixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQzNEO2FBQU07WUFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDMUQ7SUFDTCxDQUFDO0lBRU0sY0FBYztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUN6QixDQUFDO0lBR0QsSUFBVyxJQUFJO1FBQ1gsT0FBTyxJQUFJLENBQUMsT0FBTyxD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QUFNO2dCQUVILElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQztnQkFFeEIsSUFBSSxTQUFTLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDcEksSUFBSSxTQUFTLEVBQUU7b0JBQ1gsU0FBUyxHQUFHLFNBQXdCLENBQUM7aUJBQ3hDO2dCQUVELFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNyQjtTQUNKO1FBRUQsSUFBSSxNQUFNLElBQUksT0FBTyxFQUFFO1lBQ25CLGNBQWMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBZ0IsSUFBSSxPQUFPLENBQUMsQ0FBQztTQUN6RTtJQUNMLENBQUM7SUFFTSxLQUFLLENBQUMsZUFBdUIsRUFBRSxpQkFBMEIsSUFBSTtRQUNoRSxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUNwRCxDQUFDO0NBQ0osQ0FBQTtBQWpJRztJQURDLEtBQUssRUFBRTs7OzBDQUdQO0FBZUQ7SUFEQyxLQUFLLEVBQUU7OztzQ0FHUDtBQWVEO0lBREMsZUFBZSxDQUFDLGVBQWUsRUFBRSxFQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUMsQ0FBQztzQ0FDbEIsU0FBUzttREFBa0I7QUF4Q3RELFVBQVU7SUFKdEIsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLHNDQUFzQztRQUNoRCxRQUFRLEVBQUUsZ0JBQWdCO0tBQzdCLENBQUM7SUFHb0QsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBa0MsbUJBQUEsUUFBUSxFQUFFLENBQUE7NkNBQW5FLFVBQVUsRUFBc0MsTUFBTSxFQUFtRCxrQkFBa0I7R0FGdkosVUFBVSxDQXVJdEI7U0F2SVksVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29udGVudENoaWxkcmVuLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPcHRpb25hbCwgUXVlcnlMaXN0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtGb3JtQ29udHJvbE5hbWUsIEZvcm1Hcm91cCwgRm9ybUdyb3VwRGlyZWN0aXZlLCBOZ0Zvcm19IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtzY3JvbGxJbnRvVmlld30gZnJvbSBcIkBjby5tbW9ucy9pb25pYy1leHRlbnNpb25zL3Njcm9sbFwiO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogXCJbaW9ueC1mb3JtLWhlbHBlcl0sIFtpb254Rm9ybUhlbHBlcl1cIixcbiAgICBleHBvcnRBczogXCJpb254Rm9ybUhlbHBlclwiXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1IZWxwZXIge1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IGVsZW1lbnQ6IEVsZW1lbnRSZWYsIEBPcHRpb25hbCgpIHB1YmxpYyByZWFkb25seSBuZ0Zvcm06IE5nRm9ybSwgQE9wdGlvbmFsKCkgcHJpdmF0ZSByZWFkb25seSBmb3JtR3JvdXBEaXJlY3RpdmU6IEZvcm1Hcm91cERpcmVjdGl2ZSkge1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGdldCByZWFkb25seSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50Lmhhc0F0dHJpYnV0ZShcInJlYWRvbmx5XCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgcmVhZG9ubHkocmVhZG9ubHk6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHJlYWRvbmx5KSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJyZWFkb25seVwiLCBcIlwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcInJlYWRvbmx5XCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG1hcmtBc1JlYWRvbmx5KCkge1xuICAgICAgICB0aGlzLnJlYWRvbmx5ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBnZXQgYnVzeSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50Lmhhc0F0dHJpYnV0ZShcImJ1c3lcIik7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBidXN5KGJ1c3k6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKGJ1c3kpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZShcImJ1c3lcIiwgXCJcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJidXN5XCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG1hcmtBc0J1c3koKSB7XG4gICAgICAgIHRoaXMuYnVzeSA9IHRydWU7XG4gICAgfVxuXG4gICAgQENvbnRlbnRDaGlsZHJlbihGb3JtQ29udHJvbE5hbWUsIHtkZXNjZW5kYW50czogdHJ1ZX0pXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGNvbnRlbnRDb250cm9sczogUXVlcnlMaXN0PEZvcm1Db250cm9sTmFtZT47XG5cbiAgICBwdWJsaWMgZm9ybUNvbnRyb2xOYW1lKG5hbWU6IHN0cmluZyk6IEZvcm1Db250cm9sTmFtZSB7XG5cbiAgICAgICAgZm9yIChsZXQgYSBvZiB0aGlzLmNvbnRlbnRDb250cm9scy50b0FycmF5KCkpIHtcbiAgICAgICAgICAgIGlmIChhLm5hbWUgPT0gbmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBmb3JtR3JvdXAoKTogRm9ybUdyb3VwIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybUdyb3VwRGlyZWN0aXZlID8gdGhpcy5mb3JtR3JvdXBEaXJlY3RpdmUuZm9ybSA6IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgdmFsaWRhdGVBbGwobWFya0FzOiBcInRvdWNoZWRcIiB8IFwiZGlydHlcIiA9IFwidG91Y2hlZFwiKSB7XG5cbiAgICAgICAgaWYgKCF0aGlzLmZvcm1Hcm91cERpcmVjdGl2ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgY29udHJvbE5hbWUgaW4gdGhpcy5mb3JtR3JvdXAuY29udHJvbHMpIHtcbiAgICAgICAgICAgIGxldCBjb250cm9sID0gdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbY29udHJvbE5hbWVdO1xuXG4gICAgICAgICAgICBpZiAobWFya0FzID09IFwidG91Y2hlZFwiKSB7XG4gICAgICAgICAgICAgICAgY29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtYXJrQXMgPT0gXCJkaXJ0eVwiKSB7XG4gICAgICAgICAgICAgICAgY29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGNvbnRyb2wgb2YgdGhpcy5jb250ZW50Q29udHJvbHMudG9BcnJheSgpKSB7XG4gICAgICAgICAgICBpZiAoIWNvbnRyb2wudmFsaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzSW1wbChjb250cm9sKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZm9jdXNJbXBsKGNvbnRyb2w6IHN0cmluZyB8IGFueSwgc2Nyb2xsOiBib29sZWFuID0gdHJ1ZSkge1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29udHJvbCA9PSBcInN0cmluZ1wiICYmIHRoaXMuZm9ybUdyb3VwRGlyZWN0aXZlKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBjIG9mIHRoaXMuZm9ybUdyb3VwRGlyZWN0aXZlLmRpcmVjdGl2ZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoYy5uYW1lID09IGNvbnRyb2wpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbCA9IGM7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBlbGVtZW50OiBIVE1MRWxlbWVudDtcblxuICAgICAgICBpZiAoY29udHJvbCBpbnN0YW5jZW9mIEZvcm1Db250cm9sTmFtZSkge1xuICAgICAgICAgICAgY29udHJvbCA9IGNvbnRyb2wudmFsdWVBY2Nlc3NvcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250cm9sW1wiZWxcIl0gaW5zdGFuY2VvZiBFbGVtZW50UmVmKSB7XG4gICAgICAgICAgICBlbGVtZW50ID0gY29udHJvbFtcImVsXCJdLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udHJvbFtcIl9lbGVtZW50UmVmXCJdIGluc3RhbmNlb2YgRWxlbWVudFJlZikge1xuICAgICAgICAgICAgZWxlbWVudCA9IGNvbnRyb2xbXCJfZWxlbWVudFJlZlwiXS5uYXRpdmVFbGVtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZWxlbWVudCB0byBmb2N1c1xuICAgICAgICBpZiAoZWxlbWVudCkge1xuXG4gICAgICAgICAgICBpZiAoZWxlbWVudFtcInNldEZvY3VzXCJdKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudFtcInNldEZvY3VzXCJdKCk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgZm9jdXNhYmxlID0gZWxlbWVudDtcblxuICAgICAgICAgICAgICAgIGxldCByZWFsSW5wdXQgPSAoZWxlbWVudC5zaGFkb3dSb290ICYmIGVsZW1lbnQuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLm5hdGl2ZS1pbnB1dFwiKSkgfHwgZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdGl2ZS1pbnB1dFwiKTtcbiAgICAgICAgICAgICAgICBpZiAocmVhbElucHV0KSB7XG4gICAgICAgICAgICAgICAgICAgIGZvY3VzYWJsZSA9IHJlYWxJbnB1dCBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb2N1c2FibGUuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzY3JvbGwgJiYgZWxlbWVudCkge1xuICAgICAgICAgICAgc2Nyb2xsSW50b1ZpZXcoZWxlbWVudC5jbG9zZXN0KFwiaW9uLWl0ZW1cIikgYXMgSFRNTEVsZW1lbnQgfHwgZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZm9jdXMoZm9ybUNvbnRyb2xOYW1lOiBzdHJpbmcsIHNjcm9sbEludG9WaWV3OiBib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmZvY3VzSW1wbChmb3JtQ29udHJvbE5hbWUsIHNjcm9sbEludG9WaWV3KTtcbiAgICB9XG59XG4iXX0=