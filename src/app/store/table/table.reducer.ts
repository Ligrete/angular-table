import {Actions, ActionTypes} from './table.actions';
import {initialState, State} from './table.state';

export function reducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.GetTableData: {
      return {
        ...state,
        tableResponse: null
      };
    }
    case ActionTypes.GetTableDataSuccess: {
      let tableResponse = state.tableResponse;
      tableResponse = action.payload.tableResponse;

      return {
        ...state,
        tableResponse,
      };
    }
    case ActionTypes.GetTableDataFailure: {
      return {
        ...state,
        tableResponse: null
      };
    }

    default: {
      return state;
    }
  }
}
