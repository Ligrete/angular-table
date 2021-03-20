import { Component, OnInit } from '@angular/core';

interface Types {
  value: string;
}

@Component({
  selector: 'app-ui-selector',
  templateUrl: './ui-selector.component.html',
  styleUrls: ['./ui-selector.component.scss']
})
export class UiSelectorComponent implements OnInit {

  types: Types[] = [
    {value: 'green'},
    {value: 'red'},
    {value: 'blue'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
