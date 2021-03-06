import { __decorate } from "tslib";
import { Component, ContentChild, Input } from "@angular/core";
import { IonToggle } from "@ionic/angular";
let ToggleLabels = class ToggleLabels {
    constructor() {
    }
    switchOn() {
        this.toggle.checked = true;
    }
    switchOff() {
        this.toggle.checked = false;
    }
};
__decorate([
    Input()
], ToggleLabels.prototype, "on", void 0);
__decorate([
    Input()
], ToggleLabels.prototype, "off", void 0);
__decorate([
    ContentChild(IonToggle, { static: false })
], ToggleLabels.prototype, "toggle", void 0);
ToggleLabels = __decorate([
    Component({
        selector: "ionx-toggle-labels",
        template: "<span ionx--off (click)=\"switchOff()\">\n    <ng-template [ngIf]=\"!!off\">{{off}}</ng-template>\n    <ng-content select=\"[slot=off]\"></ng-content>\n    </span>\n\n<ng-content select=\"ion-toggle\"></ng-content>\n\n<span ionx--on (click)=\"switchOn()\">\n    <ng-template [ngIf]=\"!!on\">{{on}}</ng-template>\n    <ng-content select=\"[slot=on]\"></ng-content>\n</span>\n",
        styles: [":host{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}:host ::ng-deep ion-toggle{-webkit-padding-start:2px;padding-inline-start:2px;-webkit-padding-end:2px;padding-inline-end:2px}:host [ionx--on]{cursor:pointer;margin-left:4px}:host [ionx--off]{cursor:pointer;margin-right:4px}:host-context(.item-label-stacked){align-self:flex-start}:host-context(.ios.item-label-stacked){margin-top:2px;margin-bottom:2px}"]
    })
], ToggleLabels);
export { ToggleLabels };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLWxhYmVscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjby5tbW9ucy9pb25pYy1leHRlbnNpb25zL3RvZ2dsZS1sYWJlbHMvIiwic291cmNlcyI6WyJ0b2dnbGUtbGFiZWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBT3pDLElBQWEsWUFBWSxHQUF6QixNQUFhLFlBQVk7SUFFckI7SUFDQSxDQUFDO0lBV0QsUUFBUTtRQUNKLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUMvQixDQUFDO0lBRUQsU0FBUztRQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDO0NBRUosQ0FBQTtBQWhCRztJQURDLEtBQUssRUFBRTt3Q0FDRztBQUdYO0lBREMsS0FBSyxFQUFFO3lDQUNJO0FBR1o7SUFEQyxZQUFZLENBQUMsU0FBUyxFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQyxDQUFDOzRDQUNmO0FBWmpCLFlBQVk7SUFMeEIsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLG9CQUFvQjtRQUM5QixrWUFBaUM7O0tBRXBDLENBQUM7R0FDVyxZQUFZLENBc0J4QjtTQXRCWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgSW5wdXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0lvblRvZ2dsZX0gZnJvbSBcIkBpb25pYy9hbmd1bGFyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImlvbngtdG9nZ2xlLWxhYmVsc1wiLFxuICAgIHRlbXBsYXRlVXJsOiBcInRvZ2dsZS1sYWJlbHMuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1widG9nZ2xlLWxhYmVscy5zY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIFRvZ2dsZUxhYmVscyB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIG9uOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKVxuICAgIG9mZjogc3RyaW5nO1xuXG4gICAgQENvbnRlbnRDaGlsZChJb25Ub2dnbGUsIHtzdGF0aWM6IGZhbHNlfSlcbiAgICBwcml2YXRlIHRvZ2dsZTogSW9uVG9nZ2xlO1xuXG4gICAgc3dpdGNoT24oKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlLmNoZWNrZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHN3aXRjaE9mZigpIHtcbiAgICAgICAgdGhpcy50b2dnbGUuY2hlY2tlZCA9IGZhbHNlO1xuICAgIH1cblxufVxuIl19