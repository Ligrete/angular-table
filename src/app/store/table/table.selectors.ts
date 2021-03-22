import { createSelector } from '@ngrx/store';
import {State} from './table.state';

export const selectState = (state: any) => state.root;

export const selectTableList = createSelector(
  selectState,
  (state: State) => state.tableResponse
);
