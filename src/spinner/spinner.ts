import {Component, Input} from "@angular/core";

@Component({
    selector: "ionx-spinner",
    template: `<ion-backdrop *ngIf="backdropVisible"></ion-backdrop><ion-spinner [color]="color"></ion-spinner>`
})
export class Spinner {

    @Input()
    backdropVisible: boolean = false;

    @Input()
    fill: boolean = false;

    @Input()
    color: string;

}