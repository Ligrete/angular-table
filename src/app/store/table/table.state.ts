import { DataResponse } from "src/app/models/table/data-response.model";
import { JSONDataResponse } from "src/app/models/table/json-data.model";

export interface State {
    tableResponse: DataResponse;
}

export const initialState: State = {
    tableResponse: null
};