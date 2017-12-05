var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, ViewEncapsulation, ElementRef, Renderer, Optional, Input } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { Select as IonSelect, ModalController, App, Config, Item, Form, DeepLinker } from "ionic-angular";
import { SelectModal } from "./select-modal";
var Select = /** @class */ (function (_super) {
    __extends(Select, _super);
    function Select(app, form, config, elementRef, renderer, item, deepLinker, modalController) {
        var _this = _super.call(this, app, form, config, elementRef, renderer, item, deepLinker) || this;
        _this.modalController = modalController;
        return _this;
    }
    Select_1 = Select;
    Select.prototype.open = function (ev) {
        var _this = this;
        if (this.interface == "modal") {
            var options = { cssClass: "ionx-select-modal" };
            var values_1 = this.getValues();
            var data = {};
            data.multiple = this.multiple === true || this.multiple === "true" ? true : false;
            data.title = (this.selectOptions ? this.selectOptions.title : undefined) || this._item.getLabelText();
            data.ordered = this.ordered;
            data.options = this._options.map(function (input) {
                var selectionIndex = -1;
                for (var i = 0; i < values_1.length; i++) {
                    if (_this._compareWith(values_1[i], input.value)) {
                        selectionIndex = i;
                        break;
                    }
                }
                return {
                    label: input.text,
                    value: input.value,
                    checked: input.selected,
                    checkedTimestamp: selectionIndex,
                    disabled: input.disabled
                };
            });
            var overlay = this.modalController.create(SelectModal, data, options);
            overlay.onDidDismiss(function (values) {
                if (values) {
                    _this.value = values;
                }
            });
            if (ev) {
                Object.defineProperty(ev, 'target', { value: ev.currentTarget });
            }
            overlay.present({ updateUrl: false });
        }
        else {
            _super.prototype.open.call(this, ev);
        }
    };
    Select.prototype._updateText = function () {
        this._texts.length = 0;
        if (this._options) {
            var values = this.getValues();
            var options = this._options.toArray();
            OPTIONS: for (var _i = 0, options_1 = options; _i < options_1.length; _i++) {
                var option = options_1[_i];
                for (var _a = 0, values_2 = values; _a < values_2.length; _a++) {
                    var value = values_2[_a];
                    if (this._compareWith(value, option.value)) {
                        option.selected = true;
                        continue OPTIONS;
                    }
                }
                option.selected = false;
            }
            VALUES: for (var _b = 0, values_3 = values; _b < values_3.length; _b++) {
                var value = values_3[_b];
                for (var _c = 0, options_2 = options; _c < options_2.length; _c++) {
                    var option = options_2[_c];
                    if (this._compareWith(value, option.value)) {
                        this._texts.push(option.text);
                        continue VALUES;
                    }
                }
            }
        }
        this._text = this._texts.join(', ');
    };
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], Select.prototype, "readonly", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], Select.prototype, "ordered", void 0);
    Select = Select_1 = __decorate([
        Component({
            selector: "ionx-select",
            template: '<div *ngIf="!_text" class="select-placeholder select-text">{{placeholder}}</div>' +
                '<div *ngIf="_text" class="select-text">{{selectedText || _text}}</div>' +
                '<div class="select-icon">' +
                '<div class="select-icon-inner"></div>' +
                '</div>' +
                '<button aria-haspopup="true" ' +
                'type="button" ' +
                '[id]="id" ' +
                'ion-button="item-cover" ' +
                '[attr.aria-labelledby]="_labelId" ' +
                '[attr.aria-disabled]="_disabled" ' +
                'class="item-cover">' +
                '</button>',
            host: {
                '[class.select-disabled]': '_disabled || readonly',
                '[class.select-readonly]': 'readonly',
                '[attr.multiple]': 'multiple ? true : null'
            },
            providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: Select_1, multi: true }],
            encapsulation: ViewEncapsulation.None,
        }),
        __param(5, Optional()),
        __metadata("design:paramtypes", [App,
            Form,
            Config,
            ElementRef,
            Renderer,
            Item,
            DeepLinker,
            ModalController])
    ], Select);
    return Select;
    var Select_1;
}(IonSelect));
export { Select };
//# sourceMappingURL=select.js.map