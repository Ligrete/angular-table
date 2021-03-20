import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';



@Component({
  selector: 'app-page-table',
  templateUrl: './page-table.component.html',
  styleUrls: ['./page-table.component.scss']
})
export class PageTableComponent implements OnInit {

 

  color: ThemePalette = 'primary';

  constructor() { }

  ngOnInit() {
  }

}
