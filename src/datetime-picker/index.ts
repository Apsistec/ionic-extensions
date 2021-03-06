import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {MatchMediaModule} from "@co.mmons/angular-extensions/browser/match-media";
import {IntlModule} from "@co.mmons/angular-intl";
import {ButtonsModule} from "@co.mmons/ionic-extensions/buttons";
import {SelectModule} from "@co.mmons/ionic-extensions/select";
import {IonicModule} from "@ionic/angular";
import {DateTimePickerInput} from "./input";
import {DateTimePickerOverlay} from "./overlay";

export {DateTimePickerInput} from "./input";

@NgModule({
    declarations: [DateTimePickerInput, DateTimePickerOverlay],
    entryComponents: [DateTimePickerOverlay],
    exports: [DateTimePickerInput],
    imports: [CommonModule, FormsModule, IonicModule, IntlModule, SelectModule, ButtonsModule, MatchMediaModule]
})
export class DateTimePickerModule {
}
