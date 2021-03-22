import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import {select, Store} from '@ngrx/store';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { DataType } from 'src/app/models/table/data-type.enum';
import { GetTableData } from 'src/app/store/table/table.actions';
import {takeUntil} from 'rxjs/operators';
import { State } from '@app/store/table/table.state';
import { TableStoreSelectors } from '@app/store/table';
import { JSONDataResponse } from '@app/models/table/json-data-response.model';
import { DataResponse } from '@app/models/table/data-response.model';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 12, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 13, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 14, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 15, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 16, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 17, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 18, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 19, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 20, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 21, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 22, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 23, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 24, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 25, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 26, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 27, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 28, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 29, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 30, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-page-table',
  templateUrl: './page-table.component.html',
  styleUrls: ['./page-table.component.scss']
})
export class PageTableComponent implements OnInit {

  readonly unsubscribe = new Subject<void>();

  color: ThemePalette = 'primary';

  displayedColumns: string[] = [
    '_id',
    // 'type',
    // 'published',
    // 'picture'
  ];

  tableDataResp$: Observable<JSONDataResponse> = this.store.pipe(
    select(TableStoreSelectors.getAppState),
    takeUntil(this.unsubscribe)
  );

  constructor(private store: Store<State>) {
  }


  ngOnInit() {
    this.clickData();

    this.tableDataResp$.subscribe((data)=> {
      console.log(data);
    })
  }

  clickData() {
    const type =  DataType.BLUE;
    this.getData('search', type, true);
  }

  getData( searchQuery: string, type: DataType, isDraft: boolean ) {
    this.store.dispatch(new GetTableData({searchQuery, type, isDraft}))
  }

  Logging( data: any) {
    console.log('Data', data);
  }
}
