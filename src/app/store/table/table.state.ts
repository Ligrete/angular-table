import { JSONDataResponse } from "src/app/models/table/json-data-response.model";

export interface State {
    loaded: boolean;
    tableResponse: JSONDataResponse;
}

export const initialState: State = {
    loaded: false,
    tableResponse: null
};