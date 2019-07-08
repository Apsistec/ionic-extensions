import {Injectable} from "@angular/core";
import {ModalController} from "@ionic/angular";
import {Dialog} from "./dialog";
import {DialogOptions} from "./dialog-options";

@Injectable()
export class DialogController {

    constructor(protected modalController: ModalController) {
    }

    async create(options: DialogOptions) {

        return this.modalController.create(Object.assign({}, options, {
            component: Dialog,
            componentProps: {
                header: options.header,
                message: options.message,
                buttons: options.buttons
            }
        }));
    }

}


