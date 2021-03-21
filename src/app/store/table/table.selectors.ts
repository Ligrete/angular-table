import {createSelector} from '@ngrx/store';
import {State} from './table.state';

export const getAccountsState = (state: State) => state;

export const getDataResponseState = createSelector(
  getAccountsState,
  (state: State) => state.tableResponse
);