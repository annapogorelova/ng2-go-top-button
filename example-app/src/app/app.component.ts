import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'example-app';
  imageSources = [];

  constructor() {
    for (let i = 0; i < 100; i++) {
      this.imageSources.push('http://placehold.it/200x200');
    }
  }

}
