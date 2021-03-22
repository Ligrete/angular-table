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

@Component({
  selector: 'app-page-table',
  templateUrl: './page-table.component.html',
  styleUrls: ['./page-table.component.scss']
})
export class PageTableComponent implements OnInit {

  readonly unsubscribe = new Subject<void>();

  userAgentMobile: boolean;

  color: ThemePalette = 'primary';

  panelOpenState = true;

  displayedColumns: string[] = [
    'picture',
    'name',
    'type',
    'published',
    'tags'
  ];

  tableDataResp$: Observable<JSONDataResponse> = this.store.pipe(
    select(TableStoreSelectors.selectTableList),
    takeUntil(this.unsubscribe)
  );

  constructor(private store: Store<State>) {
  }


  ngOnInit() {
    this.clickData();
    // this.tableDataResp$.subscribe((data)=> {
    //   console.log(data);
    // });

    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      this.userAgentMobile = true;
    }else{
      this.userAgentMobile = false;
    }
  }

  clickData() {
    const type =  DataType.BLUE;
    this.getData('search', type, true);
  }

  getData( searchQuery: string, type: DataType, isDraft: boolean ) {
    this.store.dispatch(new GetTableData({searchQuery, type, isDraft}))
  }
}
