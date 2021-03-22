import {State} from './table.state';

export const getAppState = (state: State) => state.tableResponse;

// export const getDataResponseState = createSelector(
//   getAppState,
//   (state: State) => state.tableResponse
// );
