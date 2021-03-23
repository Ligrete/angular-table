import { DataIsDraft } from '@app/models/table/data-is-draft.enum';
import { DataResponse } from '@app/models/table/data-response.model';
import {Action} from '@ngrx/store';
import { DataType } from 'src/app/models/table/data-type.enum';
import { JSONDataResponse } from 'src/app/models/table/json-data-response.model';


export enum ActionTypes {
  GetTableData = '[Table Data] Get TableData',
  GetTableDataSuccess = '[Table Data] Get TableData Success',
}

export class GetTableData implements Action {
    public readonly type = ActionTypes.GetTableData;
  
    constructor(public payload: { searchQuery: string, type: DataType, isDraft: DataIsDraft}) {
    }
  }
  
  export class GetTableDataSuccess implements Action {
    public readonly type = ActionTypes.GetTableDataSuccess;
  
    constructor(public payload: { tableResponse: JSONDataResponse }) {
    }
  }
  

export type Actions =
    | GetTableData
    | GetTableDataSuccess;
