var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { IonicModule } from "ionic-angular";
import { AppVersion as InstalledAppVersion } from "@ionic-native/app-version";
import { IntlModule } from "@co.mmons/angular-intl";
import { AppVersion } from "./app-version";
export { AppVersion } from "./app-version";
var AppVersionModule = /** @class */ (function () {
    function AppVersionModule() {
    }
    AppVersionModule = __decorate([
        NgModule({
            imports: [BrowserModule, HttpClientModule, IntlModule, IonicModule],
            providers: [InstalledAppVersion, AppVersion]
        })
    ], AppVersionModule);
    return AppVersionModule;
}());
export { AppVersionModule };
//# sourceMappingURL=index.js.map