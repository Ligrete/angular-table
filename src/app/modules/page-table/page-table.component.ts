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
import { FormBuilder, Validators } from '@angular/forms';
import { DataIsDraft } from '@app/models/table/data-is-draft.enum';


interface Types {
  value: string;
}
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
    'tags',
    'isDraft'
  ];

  typesList: Types[] = [
    {value: DataType.ALL},
    {value: DataType.GREEN},
    {value: DataType.RED},
    {value: DataType.BLUE}
  ];

  isDraftList: Types[] = [
    {value: DataIsDraft.ALL},
    {value: DataIsDraft.FALSE},
    {value: DataIsDraft.TRUE},
  ];

  selected = DataType.ALL;

  tableDataResp$: Observable<JSONDataResponse> = this.store.pipe(
    select(TableStoreSelectors.selectTableList),
    takeUntil(this.unsubscribe)
  );

  form = this.fb.group({
    searchQuery: [''],
    Type: [DataType.ALL],
    isDraft: [DataIsDraft.ALL],
  });

  constructor(
    private store: Store<State>,
    private fb: FormBuilder
  ) {
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        this.userAgentMobile = true;
      }else{
        this.userAgentMobile = false;
      }
  }


  ngOnInit() {
    this.clickData();
  }

  clickData() {    
    const searchQuery : string = this.form.get('searchQuery').value;
    const isDraft : DataIsDraft = this.form.get('isDraft').value;
    const Type : DataType = this.form.get('Type').value;
    this.getData(searchQuery, Type, isDraft);
    console.log(`${searchQuery}, ${Type}, ${isDraft}`);
    
  }

  getData( searchQuery: string, type: DataType, isDraft: DataIsDraft ) {
    this.store.dispatch(new GetTableData({searchQuery, type, isDraft}))
  }

  clickReset() {
    this.form.setValue({
      searchQuery: [''],
      Type: [DataType.ALL],
      isDraft: [DataIsDraft.ALL],
    });
    this.getData('', DataType.ALL, DataIsDraft.ALL);
    // this.clickData();
  }
}
