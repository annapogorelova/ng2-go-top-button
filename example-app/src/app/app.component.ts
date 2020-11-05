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
  customStyles = {
    'border-radius': '10px',
    right: '2px',
    color: 'red',
    border: '5px solid',
    'line-height': '20px',
    width: '50px'
  };

  customClassNames = 'custom-go-top-button';

  JSON = JSON;
  stylingMode = 'none';

  constructor() {
    for (let i = 0; i < 100; i++) {
      this.imageSources.push('http://placehold.it/200x200');
    }
  }

}
