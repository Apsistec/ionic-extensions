import { AfterViewInit, ElementRef, OnChanges, SimpleChanges, Renderer2 } from "@angular/core";
import { NgControl, AbstractControl, ControlValueAccessor, ValidationErrors, Validator } from "@angular/forms";
import { IonicFormInput, Item } from "ionic-angular";
import "trix";
export declare class TrixEditor implements AfterViewInit, ControlValueAccessor, OnChanges, Validator, IonicFormInput {
    private element;
    private renderer;
    private formControl;
    private item;
    constructor(element: ElementRef, renderer: Renderer2, formControl: NgControl, item: Item);
    private editor;
    value: string;
    registerOnValidatorChange(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    ngOnChanges(changes: SimpleChanges): void;
    writeValue(currentValue: any): void;
    private controlOnChange;
    registerOnChange(fn: Function): void;
    private controlOnTouched;
    registerOnTouched(fn: Function): void;
    validate(c: AbstractControl): ValidationErrors;
    private editorChanged(event);
    initFocus(): void;
    private editorFocused(event);
    private editorBlured(event);
    private resetControlCss();
    private eventListeners;
    ngAfterViewInit(): void;
    ngAfterContentChecked(): void;
    ngOnDestroy(): void;
}
