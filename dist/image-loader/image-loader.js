var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { Directive, Input, ElementRef } from "@angular/core";
import { ensureLazyImagesLoaded } from "../lazy-image/lazy-load";
var ImageLoader = /** @class */ (function () {
    function ImageLoader(element) {
        this.element = element;
    }
    Object.defineProperty(ImageLoader.prototype, "src", {
        get: function () {
            return this._src;
        },
        set: function (value) {
            var old = this._src;
            this._src = value;
            if (old != this._src) {
                this.reload();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageLoader.prototype, "src2", {
        set: function (value) {
            this.src = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageLoader.prototype, "alternate", {
        set: function (value) {
            var old = this._alternate;
            this._alternate = value;
            if (old != this._alternate) {
                this.reload();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageLoader.prototype, "alternate2", {
        set: function (value) {
            this.alternate = value;
        },
        enumerable: true,
        configurable: true
    });
    ImageLoader.prototype.reload = function () {
        if (!this.loading && this.initialized) {
            this.loaded = false;
            this.error = false;
            this.load();
        }
    };
    ImageLoader.prototype.load = function () {
        var _this = this;
        if (this.loaded || this.error || !this._src || this.loading) {
            return;
        }
        this.loading = true;
        var element = this.element.nativeElement;
        var img;
        // if host element is not <img>, we need to create tmp 
        if (element.tagName.toLowerCase() != "img") {
            img = this.tmpImg = new Image();
        }
        else {
            img = element;
        }
        img.onload = function () {
            if (img !== element) {
                element.style.backgroundImage = "url(" + img.src + ")";
            }
            img.onerror = undefined;
            img.onload = undefined;
            _this.tmpImg = undefined;
            _this.loaded = true;
            _this.loading = false;
            _this.error = false;
        };
        img.onerror = function () {
            if (_this._alternate && _this._alternate != img.src) {
                img.src = _this._alternate;
                return;
            }
            img.onerror = undefined;
            img.onload = undefined;
            _this.tmpImg = undefined;
            _this.loading = false;
            _this.loaded = false;
            _this.error = true;
        };
        img.src = this._src;
    };
    ImageLoader.prototype.ngAfterViewInit = function () {
        this.initialized = true;
        this.element.nativeElement.ionxImageLoader = this;
        this.load();
    };
    ImageLoader.prototype.ngOnDestroy = function () {
        if (this.element.nativeElement) {
            delete this.element.nativeElement.ionxImageLoader;
        }
    };
    __decorate([
        Input("src"),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ImageLoader.prototype, "src", null);
    __decorate([
        Input("ionx-image-loader"),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ImageLoader.prototype, "src2", null);
    __decorate([
        Input("alternate"),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ImageLoader.prototype, "alternate", null);
    __decorate([
        Input("ionx-image-loader-alternate"),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ImageLoader.prototype, "alternate2", null);
    ImageLoader = __decorate([
        Directive({
            selector: "[ionx-image-loader]",
            host: {
                "[attr.ionx-image-loader]": "true"
            }
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], ImageLoader);
    return ImageLoader;
}());
export { ImageLoader };
export function ensureImagesLoaded(root, options) {
    return __awaiter(this, void 0, void 0, function () {
        var images, i, image;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    images = root.querySelectorAll("[ionx-image-loader]");
                    for (i = 0; i < images.length; i++) {
                        image = images.item(i);
                        if (!image.ionxImageLoader || !image.ionxImageLoader.src || image.ionxImageLoader.loaded || (image.ionxImageLoader.error && (!options || !options.retryError))) {
                            continue;
                        }
                        image.ionxImageLoader.reload();
                    }
                    if (!(options && options.lazy)) return [3 /*break*/, 2];
                    return [4 /*yield*/, ensureLazyImagesLoaded(root, { retryError: options && options.retryError })];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    });
}
//# sourceMappingURL=image-loader.js.map