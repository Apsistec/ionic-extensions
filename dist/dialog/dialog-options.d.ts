import { Type } from "@angular/core";
import { TypeAndProps } from "./type-and-props";
import { ModalOptions } from "@ionic/core";
import { DialogButton } from "./dialog-button";
declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export interface DialogOptions extends Omit<ModalOptions, "componentProps" | "component"> {
    message?: string | Type<any> | TypeAndProps<any>;
    header?: string;
    buttons?: DialogButton[];
    body?: Type<any> | TypeAndProps<any>;
}
export {};
