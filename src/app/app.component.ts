import { Component } from '@angular/core';
import * as responseData from '@src/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-app-ivy';

  constructor() {
    console.log(JSON.parse(JSON.stringify(responseData)));
  }
  
}
