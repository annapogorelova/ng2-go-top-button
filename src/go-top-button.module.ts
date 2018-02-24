import {GoTopButton, SafeHtmlPipe} from './go-top-button.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [CommonModule],
    declarations: [GoTopButton, SafeHtmlPipe],
    exports: [GoTopButton]
})

export class GoTopButtonModule {
}