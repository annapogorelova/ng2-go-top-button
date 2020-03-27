import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'go to top button example app';
  values = [];

  constructor() {
    for (let i = 1; i <= 10; i++) {
      this.values.push(i);
    }
  }
}
