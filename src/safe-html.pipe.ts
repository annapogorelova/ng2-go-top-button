import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {Pipe} from '@angular/core';

@Pipe({name: 'safeHtml'})
export class Safe {
    constructor(private sanitizer:DomSanitizer){}

    transform(style) {
        return this.sanitizer.bypassSecurityTrustHtml(style);
    }
}