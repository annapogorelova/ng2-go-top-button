import {GoTopButton} from './go-top-button.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Safe} from './safe-html.pipe';

@NgModule({
    imports: [CommonModule],
    declarations: [GoTopButton, Safe],
    exports: [GoTopButton]
})

export class GoTopButtonModule {
}