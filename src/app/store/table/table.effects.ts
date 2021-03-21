import {Injectable} from '@angular/core';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap, withLatestFrom} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {
  ActionTypes,
  GetTableData,
  GetTableDataFailure,
  GetTableDataSuccess,
} from './table.actions';
import {select, Store} from '@ngrx/store';
import { DataResponse } from 'src/app/models/table/data-response.model';
import { State } from './table.state';
import { TableService } from 'src/app/services/table/table.service';
import { Observable } from 'rxjs';

/**
 * Provides Accounts Store Effects.
 */
@Injectable()
export class AccountsEffects {

  /**
   * @action 
   * @return
   */
  getTable$ = createEffect(() => this.actions$.pipe(
    ofType<GetTableData>(ActionTypes.GetTableData),
    switchMap((action) => this.tableService
      .getData(
        action.payload.searchQuery,
        action.payload.type,
        action.payload.isDraft)
      .pipe(
        map((tableResponse: DataResponse) =>
          new GetTableDataSuccess({tableResponse})
        ))
    ))
  );

  constructor(
    private actions$: Actions,
    private store: Store<State>,
    private tableService: TableService,
  ) {
  }
}

