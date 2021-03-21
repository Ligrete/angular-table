import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DataType } from 'src/app/models/table/data-type.enum';
import { GetTableData } from 'src/app/store/table/table.actions';



@Component({
  selector: 'app-page-table',
  templateUrl: './page-table.component.html',
  styleUrls: ['./page-table.component.scss']
})
export class PageTableComponent implements OnInit {

  count$: Observable<number>

  color: ThemePalette = 'primary';

  constructor(private store: Store<{ table: any }>) {
    this.count$ = store.select('table');
  }

  ngOnInit() {

    const type =  DataType.BLUE;
    this.getData('search', type, true);
  }

  getData( searchQuery: string, type: DataType, isDraft: boolean ) {
    this.store.dispatch(new GetTableData({searchQuery, type, isDraft}))
  }
}
