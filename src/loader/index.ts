import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {IntlModule} from "@co.mmons/angular-intl";
import {IonicModule} from "@ionic/angular";
import {LoaderController} from "./loader-controller";
import {Loader} from "./loader";

export {Loader} from "./loader";

@NgModule({
    declarations: [Loader],
    imports: [IntlModule, IonicModule, CommonModule],
    entryComponents: [Loader],
    providers: [LoaderController]
})
export class LoaderModule {
}