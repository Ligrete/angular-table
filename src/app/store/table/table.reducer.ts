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
      return {
        ...state,
        tableResponse: action.payload.tableResponse
      };
    }

    default: {
      return state;
    }
  }
}
