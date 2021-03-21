import { HttpErrorResponse } from '@angular/common/http';
import {Action} from '@ngrx/store';
import { DataResponse } from 'src/app/models/table/data-response.model';
import { DataType } from 'src/app/models/table/data-type.enum';
import { JSONDataResponse } from 'src/app/models/table/json-data.model';


export enum ActionTypes {
  GetTableData = '[Table Data] Get TableData',
  GetTableDataSuccess = '[Table Data] Get TableData Success',
  GetTableDataFailure = '[Table Data] Get TableData Failure',
}

export class GetTableData implements Action {
    public readonly type = ActionTypes.GetTableData;
  
    constructor(public payload: { searchQuery: string, type: DataType, isDraft: boolean}) {
    }
  }
  
  export class GetTableDataSuccess implements Action {
    public readonly type = ActionTypes.GetTableDataSuccess;
  
    constructor(public payload: { tableResponse: DataResponse }) {
    }
  }
  
  export class GetTableDataFailure implements Action {
    public readonly type = ActionTypes.GetTableDataFailure;
  
    constructor(public payload: { response: HttpErrorResponse }) {
    }
  }

export type Actions =
    | GetTableData
    | GetTableDataSuccess
    | GetTableDataFailure;
