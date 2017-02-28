import {GoTopButton} from './go-top-button.component';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
    imports: [BrowserModule],
    declarations: [GoTopButton],
    exports: [GoTopButton],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class GoTopButtonModule {
}