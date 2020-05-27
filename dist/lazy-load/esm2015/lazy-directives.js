var LazyDirectives_1;
import { __awaiter, __decorate, __param } from "tslib";
import { ContentChildren, Directive, ElementRef, forwardRef, Inject, Input, Optional, QueryList, Renderer2 } from "@angular/core";
import { sleep } from "@co.mmons/js-utils/core";
import { Loader } from "./lazy-load";
let LazyLoadContainer = class LazyLoadContainer {
    constructor(element) {
        this.element = element;
    }
    revalidate() {
        if (this.loader) {
            this.loader.update();
            let rect = this.element.nativeElement.getBoundingClientRect();
            if (rect.width == 0 || rect.height == 0) {
                //setTimeout(() => this.revalidate(), 200);
            }
            //console.log(this.children);
            //window.dispatchEvent(new Event("resize"));
        }
    }
    ngOnInit() {
        this.init();
    }
    ngAfterContentInit() {
        this.children.changes.subscribe(() => this.revalidate());
        if (this.children.length > 0) {
            this.revalidate();
        }
    }
    ngOnDestroy() {
        if (this.loader) {
            this.loader.destroy();
        }
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            const options = Object.assign({
                selector: ".ionx-lazy-load",
                container: this.element.nativeElement
            }, this.options);
            if (this.element.nativeElement.tagName.toLowerCase() === "ion-content") {
                for (let i = 0; i < 40; i++) {
                    options.scroll = this.element.nativeElement.shadowRoot && this.element.nativeElement.shadowRoot.querySelector(".inner-scroll");
                    if (!options.scroll) {
                        yield sleep(50);
                    }
                    else {
                        break;
                    }
                }
            }
            this.loader = new Loader(options);
        });
    }
};
LazyLoadContainer.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input("ionx-lazy-load-container")
], LazyLoadContainer.prototype, "options", void 0);
__decorate([
    ContentChildren(forwardRef(() => LazyDirectives), { descendants: true })
], LazyLoadContainer.prototype, "children", void 0);
LazyLoadContainer = __decorate([
    Directive({
        selector: "[ionx-lazy-load-container]"
    })
], LazyLoadContainer);
export { LazyLoadContainer };
let LazyDirectives = LazyDirectives_1 = class LazyDirectives {
    constructor(element, renderer, container) {
        this.element = element;
        this.renderer = renderer;
        this.container = container;
    }
    set src(value) {
        this._src = value;
        this.reset();
    }
    set alternate(value) {
        this._alternate = value;
        this.reset();
    }
    reset() {
        if (this._src) {
            this.renderer.addClass(this.element.nativeElement, "ionx-lazy-load");
            this.renderer.setAttribute(this.element.nativeElement, "data-original", this._src);
        }
        if (this._alternate) {
            this.renderer.setAttribute(this.element.nativeElement, "data-alternate", this._alternate);
        }
    }
    revalidate() {
        // children.length > 1 because this is also included in children query
        if (this.container && this.children.length > 1) {
            this.container.revalidate();
        }
    }
    ngAfterContentInit() {
        this.children.changes.subscribe(() => this.revalidate());
        this.revalidate();
    }
};
LazyDirectives.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: LazyLoadContainer, decorators: [{ type: Optional }, { type: Inject, args: [forwardRef(() => LazyLoadContainer),] }] }
];
__decorate([
    ContentChildren(LazyDirectives_1, { descendants: true })
], LazyDirectives.prototype, "children", void 0);
__decorate([
    Input("ionx-lazy-load")
], LazyDirectives.prototype, "src", null);
__decorate([
    Input("ionx-lazy-load-alternate")
], LazyDirectives.prototype, "alternate", null);
LazyDirectives = LazyDirectives_1 = __decorate([
    Directive({
        selector: "[ionx-lazy-load]"
    }),
    __param(2, Optional()), __param(2, Inject(forwardRef(() => LazyLoadContainer)))
], LazyDirectives);
export { LazyDirectives };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eS1kaXJlY3RpdmVzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvLm1tb25zL2lvbmljLWV4dGVuc2lvbnMvbGF6eS1sb2FkLyIsInNvdXJjZXMiOlsibGF6eS1kaXJlY3RpdmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFDLGVBQWUsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2hJLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUM5QyxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBTW5DLElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0lBRTdCLFlBQW9CLE9BQWdDO1FBQWhDLFlBQU8sR0FBUCxPQUFPLENBQXlCO0lBQ3BELENBQUM7SUFPRCxVQUFVO1FBRVQsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBRWhCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7WUFFckIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUM5RCxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO2dCQUN4QywyQ0FBMkM7YUFDM0M7WUFDRCw2QkFBNkI7WUFFN0IsNENBQTRDO1NBQzVDO0lBQ0YsQ0FBQztJQUtELFFBQVE7UUFDUCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDYixDQUFDO0lBRUQsa0JBQWtCO1FBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztRQUN6RCxJQUFJLElB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LENBQUM7SUFFTyxVQUFVO1FBRWpCLHNFQUFzRTtRQUN0RSxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQy9DLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDNUI7SUFDRixDQUFDO0lBRUQsa0JBQWtCO1FBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDbkIsQ0FBQztDQUVELENBQUE7O1lBL0M0QixVQUFVO1lBQW9CLFNBQVM7WUFBK0UsaUJBQWlCLHVCQUE3RixRQUFRLFlBQUksTUFBTSxTQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQzs7QUFJNUg7SUFEQyxlQUFlLENBQUMsZ0JBQWMsRUFBRSxFQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUMsQ0FBQztnREFDakI7QUFPcEM7SUFEQyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7eUNBSXZCO0FBR0Q7SUFEQyxLQUFLLENBQUMsMEJBQTBCLENBQUM7K0NBSWpDO0FBdEJXLGNBQWM7SUFIMUIsU0FBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLGtCQUFrQjtLQUM1QixDQUFDO0lBR3FFLFdBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxXQUFBLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFBO0dBRmpILGNBQWMsQ0FpRDFCO1NBakRZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbnRlbnRDaGlsZHJlbiwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBmb3J3YXJkUmVmLCBJbmplY3QsIElucHV0LCBPcHRpb25hbCwgUXVlcnlMaXN0LCBSZW5kZXJlcjJ9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge3NsZWVwfSBmcm9tIFwiQGNvLm1tb25zL2pzLXV0aWxzL2NvcmVcIjtcbmltcG9ydCB7TG9hZGVyfSBmcm9tIFwiLi9sYXp5LWxvYWRcIjtcbmltcG9ydCB7TGF6eUxvYWRPcHRpb25zfSBmcm9tIFwiLi9sYXp5LWxvYWQtb3B0aW9uc1wiO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6IFwiW2lvbngtbGF6eS1sb2FkLWNvbnRhaW5lcl1cIlxufSlcbmV4cG9ydCBjbGFzcyBMYXp5TG9hZENvbnRhaW5lciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50Pikge1xuXHR9XG5cblx0QElucHV0KFwiaW9ueC1sYXp5LWxvYWQtY29udGFpbmVyXCIpXG5cdG9wdGlvbnM/OiBMYXp5TG9hZE9wdGlvbnM7XG5cblx0cHJpdmF0ZSBsb2FkZXI6IExvYWRlcjtcblxuXHRyZXZhbGlkYXRlKCkge1xuXG5cdFx0aWYgKHRoaXMubG9hZGVyKSB7XG5cblx0XHRcdHRoaXMubG9hZGVyLnVwZGF0ZSgpO1xuXG5cdFx0XHRsZXQgcmVjdCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0aWYgKHJlY3Qud2lkdGggPT0gMCB8fCByZWN0LmhlaWdodCA9PSAwKSB7XG5cdFx0XHRcdC8vc2V0VGltZW91dCgoKSA9PiB0aGlzLnJldmFsaWRhdGUoKSwgMjAwKTtcblx0XHRcdH1cblx0XHRcdC8vY29uc29sZS5sb2codGhpcy5jaGlsZHJlbik7XG5cblx0XHRcdC8vd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwicmVzaXplXCIpKTtcblx0XHR9XG5cdH1cblxuXHRAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gTGF6eURpcmVjdGl2ZXMpLCB7ZGVzY2VuZGFudHM6IHRydWV9KVxuXHRjaGlsZHJlbjogUXVlcnlMaXN0PExhenlEaXJlY3RpdmVzPjtcblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLmluaXQoKTtcblx0fVxuXG5cdG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcblx0XHR0aGlzLmNoaWxkcmVuLmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHRoaXMucmV2YWxpZGF0ZSgpKTtcblx0XHRpZiAodGhpcy5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG5cdFx0XHR0aGlzLnJldmFsaWRhdGUoKTtcblx0XHR9XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHRpZiAodGhpcy5sb2FkZXIpIHtcblx0XHRcdHRoaXMubG9hZGVyLmRlc3Ryb3koKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGFzeW5jIGluaXQoKSB7XG5cblx0XHRjb25zdCBvcHRpb25zOiBMYXp5TG9hZE9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcblx0XHRcdHNlbGVjdG9yOiBcIi5pb254LWxhenktbG9hZFwiLFxuXHRcdFx0Y29udGFpbmVyOiB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudFxuXHRcdH0sIHRoaXMub3B0aW9ucyk7XG5cblx0XHRpZiAodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcImlvbi1jb250ZW50XCIpIHtcblxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCA0MDsgaSsrKSB7XG5cdFx0XHRcdG9wdGlvbnMuc2Nyb2xsID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2hhZG93Um9vdCAmJiB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIuaW5uZXItc2Nyb2xsXCIpO1xuXG5cdFx0XHRcdGlmICghb3B0aW9ucy5zY3JvbGwpIHtcblx0XHRcdFx0XHRhd2FpdCBzbGVlcCg1MCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLmxvYWRlciA9IG5ldyBMb2FkZXIob3B0aW9ucyk7XG5cdH1cblxufVxuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6IFwiW2lvbngtbGF6eS1sb2FkXVwiXG59KVxuZXhwb3J0IGNsYXNzIExhenlEaXJlY3RpdmVzIHtcblxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBAT3B0aW9uYWwoKSBASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gTGF6eUxvYWRDb250YWluZXIpKSBwcml2YXRlIGNvbnRhaW5lcj86IExhenlMb2FkQ29udGFpbmVyKSB7XG5cdH1cblxuXHRAQ29udGVudENoaWxkcmVuKExhenlEaXJlY3RpdmVzLCB7ZGVzY2VuZGFudHM6IHRydWV9KVxuXHRjaGlsZHJlbjogUXVlcnlMaXN0PExhenlEaXJlY3RpdmVzPjtcblxuXHRwcml2YXRlIF9zcmM6IHN0cmluZztcblxuXHRwcml2YXRlIF9hbHRlcm5hdGU6IHN0cmluZztcblxuXHRASW5wdXQoXCJpb254LWxhenktbG9hZFwiKVxuXHRwdWJsaWMgc2V0IHNyYyh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5fc3JjID0gdmFsdWU7XG5cdFx0dGhpcy5yZXNldCgpO1xuXHR9XG5cblx0QElucHV0KFwiaW9ueC1sYXp5LWxvYWQtYWx0ZXJuYXRlXCIpXG5cdHB1YmxpYyBzZXQgYWx0ZXJuYXRlKHZhbHVlOiBzdHJpbmcpIHtcblx0XHR0aGlzLl9hbHRlcm5hdGUgPSB2YWx1ZTtcblx0XHR0aGlzLnJlc2V0KCk7XG5cdH1cblxuXHRwcml2YXRlIHJlc2V0KCkge1xuXG5cdFx0aWYgKHRoaXMuX3NyYykge1xuXHRcdFx0dGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgXCJpb254LWxhenktbG9hZFwiKTtcblx0XHRcdHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCBcImRhdGEtb3JpZ2luYWxcIiwgdGhpcy5fc3JjKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5fYWx0ZXJuYXRlKSB7XG5cdFx0XHR0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgXCJkYXRhLWFsdGVybmF0ZVwiLCB0aGlzLl9hbHRlcm5hdGUpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgcmV2YWxpZGF0ZSgpIHtcblxuXHRcdC8vIGNoaWxkcmVuLmxlbmd0aCA+IDEgYmVjYXVzZSB0aGlzIGlzIGFsc28gaW5jbHVkZWQgaW4gY2hpbGRyZW4gcXVlcnlcblx0XHRpZiAodGhpcy5jb250YWluZXIgJiYgdGhpcy5jaGlsZHJlbi5sZW5ndGggPiAxKSB7XG5cdFx0XHR0aGlzLmNvbnRhaW5lci5yZXZhbGlkYXRlKCk7XG5cdFx0fVxuXHR9XG5cblx0bmdBZnRlckNvbnRlbnRJbml0KCkge1xuXHRcdHRoaXMuY2hpbGRyZW4uY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZXZhbGlkYXRlKCkpO1xuXHRcdHRoaXMucmV2YWxpZGF0ZSgpO1xuXHR9XG5cbn1cbiJdfQ==