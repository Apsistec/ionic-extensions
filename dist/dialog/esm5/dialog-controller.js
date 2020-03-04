import { __awaiter, __decorate, __generator } from "tslib";
import { Injectable } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { createAnimation } from "@ionic/core/";
import { Dialog } from "./dialog";
/**
 * Md Modal Leave Animation
 */
function leaveAnimation(baseEl) {
    var baseAnimation = createAnimation();
    var backdropAnimation = createAnimation();
    var wrapperAnimation = createAnimation();
    var wrapperEl = baseEl.querySelector('.modal-wrapper');
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 'var(--backdrop-opacity)', 0.0);
    wrapperAnimation
        .addElement(wrapperEl)
        .keyframes([
        { offset: 0, opacity: 0.99, transform: 'translateY(0px)' },
        { offset: 1, opacity: 0, transform: 'translateY(40px)' }
    ]);
    return baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(0.47,0,0.745,0.715)')
        .duration(200)
        .addAnimation([backdropAnimation, wrapperAnimation]);
}
;
var DialogController = /** @class */ (function () {
    function DialogController(modalController) {
        this.modalController = modalController;
    }
    DialogController.prototype.create = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.modalController.create(Object.assign({}, options, {
                        component: Dialog,
                        componentProps: {
                            component: options.component,
                            header: options.header,
                            message: options.message,
                            buttons: options.buttons
                        },
                        leaveAnimation: leaveAnimation
                    }))];
            });
        });
    };
    /**
     * When `id` is not provided, it dismisses the top overlay.
     */
    DialogController.prototype.dismiss = function (data, role, id) {
        return this.modalController.dismiss(data, role, id);
    };
    DialogController.ctorParameters = function () { return [
        { type: ModalController }
    ]; };
    DialogController = __decorate([
        Injectable()
    ], DialogController);
    return DialogController;
}());
export { DialogController };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY28ubW1vbnMvaW9uaWMtZXh0ZW5zaW9ucy9kaWFsb2cvIiwic291cmNlcyI6WyJkaWFsb2ctY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0MsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUM3QyxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sVUFBVSxDQUFDO0FBR2hDOztHQUVHO0FBQ0gsU0FBUyxjQUFjLENBQUUsTUFBbUI7SUFDeEMsSUFBTSxhQUFhLEdBQUcsZUFBZSxFQUFFLENBQUM7SUFDeEMsSUFBTSxpQkFBaUIsR0FBRyxlQUFlLEVBQUUsQ0FBQztJQUM1QyxJQUFNLGdCQUFnQixHQUFHLGVBQWUsRUFBRSxDQUFDO0lBQzNDLElBQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUUsQ0FBQztJQUUxRCxpQkFBaUI7U0FDWixVQUFVLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUUsQ0FBQztTQUNqRCxNQUFNLENBQUMsU0FBUyxFQUFFLHlCQUF5QixFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBRXZELGdCQUFnQjtTQUNYLFVBQVUsQ0FBQyxTQUFTLENBQUM7U0FDckIsU0FBUyxDQUFDO1FBQ1AsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFO1FBQzFELEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBRTtLQUMzRCxDQUFDLENBQUM7SUFFUCxPQUFPLGFBQWE7U0FDZixVQUFVLENBQUMsTUFBTSxDQUFDO1NBQ2xCLE1BQU0sQ0FBQyxrQ0FBa0MsQ0FBQztTQUMxQyxRQUFRLENBQUMsR0FBRyxDQUFDO1NBQ2IsWUFBWSxDQUFDLENBQUMsaUJBQWlCLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0FBQzdELENBQUM7QUFBQSxDQUFDO0FBR0Y7SUFFSSwwQkFBc0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO0lBQ3RELENBQUM7SUFFSyxpQ0FBTSxHQUFaLFVBQWEsT0FBc0I7OztnQkFFL0Isc0JBQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFO3dCQUMxRCxTQUFTLEVBQUUsTUFBTTt3QkFDakIsY0FBYyxFQUFFOzRCQUNaLFNBQVMsRUFBRSxPQUFPLENBQUMsU0FBUzs0QkFDNUIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNOzRCQUN0QixPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU87NEJBQ3hCLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTzt5QkFDM0I7d0JBQ0QsY0FBYyxnQkFBQTtxQkFDakIsQ0FBQyxDQUFDLEVBQUM7OztLQUNQO0lBRUQ7O09BRUc7SUFDSCxrQ0FBTyxHQUFQLFVBQVEsSUFBVSxFQUFFLElBQWEsRUFBRSxFQUFXO1FBQzFDLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN4RCxDQUFDOztnQkF0QnNDLGVBQWU7O0lBRjdDLGdCQUFnQjtRQUQ1QixVQUFVLEVBQUU7T0FDQSxnQkFBZ0IsQ0EwQjVCO0lBQUQsdUJBQUM7Q0FBQSxBQTFCRCxJQTBCQztTQTFCWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge01vZGFsQ29udHJvbGxlcn0gZnJvbSBcIkBpb25pYy9hbmd1bGFyXCI7XG5pbXBvcnQge2NyZWF0ZUFuaW1hdGlvbn0gZnJvbSBcIkBpb25pYy9jb3JlL1wiO1xuaW1wb3J0IHtEaWFsb2d9IGZyb20gXCIuL2RpYWxvZ1wiO1xuaW1wb3J0IHtEaWFsb2dPcHRpb25zfSBmcm9tIFwiLi9kaWFsb2ctb3B0aW9uc1wiO1xuXG4vKipcbiAqIE1kIE1vZGFsIExlYXZlIEFuaW1hdGlvblxuICovXG5mdW5jdGlvbiBsZWF2ZUFuaW1hdGlvbiAoYmFzZUVsOiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0IGJhc2VBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgICBjb25zdCBiYWNrZHJvcEFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbigpO1xuICAgIGNvbnN0IHdyYXBwZXJBbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24oKTtcbiAgICBjb25zdCB3cmFwcGVyRWwgPSBiYXNlRWwucXVlcnlTZWxlY3RvcignLm1vZGFsLXdyYXBwZXInKSE7XG5cbiAgICBiYWNrZHJvcEFuaW1hdGlvblxuICAgICAgICAuYWRkRWxlbWVudChiYXNlRWwucXVlcnlTZWxlY3RvcignaW9uLWJhY2tkcm9wJykhKVxuICAgICAgICAuZnJvbVRvKCdvcGFjaXR5JywgJ3ZhcigtLWJhY2tkcm9wLW9wYWNpdHkpJywgMC4wKTtcblxuICAgIHdyYXBwZXJBbmltYXRpb25cbiAgICAgICAgLmFkZEVsZW1lbnQod3JhcHBlckVsKVxuICAgICAgICAua2V5ZnJhbWVzKFtcbiAgICAgICAgICAgIHsgb2Zmc2V0OiAwLCBvcGFjaXR5OiAwLjk5LCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDBweCknIH0sXG4gICAgICAgICAgICB7IG9mZnNldDogMSwgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSg0MHB4KScgfVxuICAgICAgICBdKTtcblxuICAgIHJldHVybiBiYXNlQW5pbWF0aW9uXG4gICAgICAgIC5hZGRFbGVtZW50KGJhc2VFbClcbiAgICAgICAgLmVhc2luZygnY3ViaWMtYmV6aWVyKDAuNDcsMCwwLjc0NSwwLjcxNSknKVxuICAgICAgICAuZHVyYXRpb24oMjAwKVxuICAgICAgICAuYWRkQW5pbWF0aW9uKFtiYWNrZHJvcEFuaW1hdGlvbiwgd3JhcHBlckFuaW1hdGlvbl0pO1xufTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERpYWxvZ0NvbnRyb2xsZXIge1xuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIG1vZGFsQ29udHJvbGxlcjogTW9kYWxDb250cm9sbGVyKSB7XG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlKG9wdGlvbnM6IERpYWxvZ09wdGlvbnMpIHtcblxuICAgICAgICByZXR1cm4gdGhpcy5tb2RhbENvbnRyb2xsZXIuY3JlYXRlKE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogRGlhbG9nLFxuICAgICAgICAgICAgY29tcG9uZW50UHJvcHM6IHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6IG9wdGlvbnMuY29tcG9uZW50LFxuICAgICAgICAgICAgICAgIGhlYWRlcjogb3B0aW9ucy5oZWFkZXIsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogb3B0aW9ucy5tZXNzYWdlLFxuICAgICAgICAgICAgICAgIGJ1dHRvbnM6IG9wdGlvbnMuYnV0dG9uc1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxlYXZlQW5pbWF0aW9uXG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXaGVuIGBpZGAgaXMgbm90IHByb3ZpZGVkLCBpdCBkaXNtaXNzZXMgdGhlIHRvcCBvdmVybGF5LlxuICAgICAqL1xuICAgIGRpc21pc3MoZGF0YT86IGFueSwgcm9sZT86IHN0cmluZywgaWQ/OiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kYWxDb250cm9sbGVyLmRpc21pc3MoZGF0YSwgcm9sZSwgaWQpO1xuICAgIH1cblxufVxuXG5cbiJdfQ==