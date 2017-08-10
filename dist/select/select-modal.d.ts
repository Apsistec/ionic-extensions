import { QueryList } from "@angular/core";
import { NavParams, ViewController, Searchbar, Item, Content, Config } from "ionic-angular";
import { IntlService } from "@co.mmons/angular-intl";
export declare class SelectModal {
    private navParams;
    private intl;
    private viewController;
    constructor(navParams: NavParams, intl: IntlService, viewController: ViewController, config: Config);
    private ios;
    private md;
    private wp;
    private ordered;
    private reordered(indexes);
    content: Content;
    items: QueryList<Item>;
    multiple: boolean;
    title: any;
    options: any[];
    visibleOptionsCount: number;
    visibleCheckedOptionsCount: number;
    optionsChecked: any[];
    optionClicked(option: any): void;
    recalculateVisibleOptions(): void;
    okClicked(): void;
    cancelClicked(): void;
    searchbar: Searchbar;
    search(ev: any): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ionViewDidEnter(): void;
    private scrollToSelected();
}
