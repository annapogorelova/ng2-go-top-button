import {GoTopButton} from './go-top-button.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
    imports: [CommonModule, BrowserAnimationsModule],
    declarations: [GoTopButton],
    exports: [GoTopButton]
})

export class GoTopButtonModule {
}