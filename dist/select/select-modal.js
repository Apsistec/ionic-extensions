import { Component, ViewChild, ViewChildren } from "@angular/core";
import { NavParams, ViewController, Searchbar, Item, Content, Config } from "ionic-angular";
import { IntlService } from "@co.mmons/angular-intl";
var SelectModal = (function () {
    function SelectModal(navParams, intl, viewController, config) {
        this.navParams = navParams;
        this.intl = intl;
        this.viewController = viewController;
        this.multiple = false;
        this.multiple = this.navParams.get("multiple");
        this.title = this.navParams.get("title") || intl.message("commons-ionic-extensions#Choose...");
        this.ios = config.get("mode") == "ios";
        this.md = config.get("mode") == "md";
        this.wp = config.get("mode") == "wp";
    }
    SelectModal.prototype.optionClicked = function (option) {
        if (!option.checked) {
            return;
        }
        if (!this.multiple) {
            for (var _i = 0, _a = this.options; _i < _a.length; _i++) {
                var o = _a[_i];
                if (o.checked && o !== option) {
                    o.checked = false;
                }
            }
        }
    };
    SelectModal.prototype.okClicked = function () {
        var values = [];
        for (var _i = 0, _a = this.options; _i < _a.length; _i++) {
            var o = _a[_i];
            if (o.checked) {
                values.push(o.value);
            }
        }
        this.viewController.dismiss(values);
    };
    SelectModal.prototype.cancelClicked = function () {
        this.viewController.dismiss(undefined);
    };
    SelectModal.prototype.search = function (ev) {
        var query = this.searchbar.value ? this.searchbar.value.toString() : undefined;
        if (query) {
            query = query.trim().toLowerCase();
        }
        for (var _i = 0, _a = this.options; _i < _a.length; _i++) {
            var o = _a[_i];
            o.hidden = query && o.label.toLowerCase().indexOf(query) < 0;
        }
    };
    SelectModal.prototype.ngOnInit = function () {
    };
    SelectModal.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.items.changes.subscribe(function () { return _this.scrollToSelected(); });
    };
    SelectModal.prototype.ionViewDidEnter = function () {
        this.options = this.navParams.get("options");
    };
    SelectModal.prototype.scrollToSelected = function () {
        var items = this.items.toArray();
        var itemToScroll;
        for (var i = 0; i < items.length; i++) {
            if (items[i].getNativeElement().classList.contains("ionx-select-checked")) {
                if (i > 5) {
                    itemToScroll = items[i - 2].getNativeElement();
                }
                break;
            }
        }
        if (itemToScroll) {
            this.content.scrollTo(0, itemToScroll.offsetTop);
        }
    };
    SelectModal.decorators = [
        { type: Component, args: [{
                    selector: "ionx-select-modal",
                    template: "\n        <ion-header>\n            <ion-toolbar>\n                <ion-title>{{title}}</ion-title>\n\n                <ion-buttons left>\n                    <button ion-button icon-only (click)=\"cancelClicked()\">\n                        <ion-icon name=\"close\"></ion-icon>\n                    </button>\n                </ion-buttons>\n\n            </ion-toolbar>\n            <ion-toolbar>\n                <ion-searchbar ionx-flat cancelButtonText=\"{{'commons.cancel' | intlMessage}}\" placeholder=\"{{'commons#Search' | intlMessage}}\" (ionInput)=\"search($event)\"></ion-searchbar>\n            </ion-toolbar>\n        </ion-header>\n        <ion-content>\n            <ionx-spinner fill ion-fixed *ngIf=\"!options\"></ionx-spinner>\n            <ion-list>\n                <ng-template ngFor [ngForOf]=\"options\" let-option>\n                    <ion-item *ngIf=\"!option.hidden\" [class.ionx-select-checked]=\"option.checked\">\n                        <ion-label>{{option.label}}</ion-label>\n                        <ion-checkbox [(ngModel)]=\"option.checked\" (ionChange)=\"optionClicked(option)\"></ion-checkbox>\n                    </ion-item>\n                </ng-template>\n            </ion-list>\n        </ion-content>\n        <ion-footer>\n            <ion-toolbar>\n                <div class=\"ionx-select-overlay-buttons alert-button-group\">\n                    <button ion-button=\"alert-button\" clear (click)=\"cancelClicked()\">{{\"commons#Cancel\" | intlMessage}}</button>\n                    <button ion-button=\"alert-button\" clear (click)=\"okClicked()\">{{\"commons#OK\" | intlMessage}}</button>\n                </div>\n            </ion-toolbar>\n        </ion-footer>\n    ",
                    host: {
                        "[class.alert]": "true",
                        "[class.alert-ios]": "ios",
                        "[class.alert-wp]": "wp",
                        "[class.alert-md]": "md"
                    }
                },] },
    ];
    /** @nocollapse */
    SelectModal.ctorParameters = function () { return [
        { type: NavParams, },
        { type: IntlService, },
        { type: ViewController, },
        { type: Config, },
    ]; };
    SelectModal.propDecorators = {
        'content': [{ type: ViewChild, args: [Content,] },],
        'items': [{ type: ViewChildren, args: [Item,] },],
        'searchbar': [{ type: ViewChild, args: [Searchbar,] },],
    };
    return SelectModal;
}());
export { SelectModal };
//# sourceMappingURL=select-modal.js.map