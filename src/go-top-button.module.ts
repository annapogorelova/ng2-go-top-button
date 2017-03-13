import {GoTopButton} from './go-top-button.component';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [CommonModule],
    declarations: [GoTopButton],
    exports: [GoTopButton],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class GoTopButtonModule {
}