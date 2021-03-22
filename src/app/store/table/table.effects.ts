import {Injectable} from '@angular/core';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap, withLatestFrom} from 'rxjs/operators';
import {
  ActionTypes,
  GetTableData,
  GetTableDataSuccess,
} from './table.actions';
import {Action, Store} from '@ngrx/store';
import { State } from './table.state';
import { TableService } from 'src/app/services/table/table.service';
import { JSONDataResponse } from 'src/app/models/table/json-data-response.model';
import { Observable } from 'rxjs/internal/Observable';
@Injectable()
export class TableEffects {

  loadComments$ = createEffect(() =>  this.actions$.pipe(
    ofType<GetTableData>(ActionTypes.GetTableData),
    switchMap((action) => this.tableService
      .getDataAPI(
        action.payload.searchQuery,
        action.payload.type,
        action.payload.isDraft)
      .pipe(
        map((tableResponse: any) =>
          new GetTableDataSuccess({tableResponse}),
        ))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private tableService: TableService,
  ) {}
}

