import {LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule, registerLocaleData} from '@angular/common';
import {httpInterceptorProviders} from "./interceptors";
import {HeaderComponent} from "./components/header/header.component";
import {RouterModule} from "@angular/router";
import * as fr from '@angular/common/locales/fr';


@NgModule({
    declarations: [
        HeaderComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
    ],
    exports: [
        HeaderComponent,
    ],
    providers: [
        httpInterceptorProviders,
        {provide: LOCALE_ID, useValue: 'fr-FR'}
    ]
})
export class CoreModule {
    constructor() {
        registerLocaleData(fr.default);
    }
}
