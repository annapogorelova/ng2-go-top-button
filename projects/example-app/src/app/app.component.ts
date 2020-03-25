import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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
