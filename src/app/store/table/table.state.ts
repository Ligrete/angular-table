import { DataResponse } from "@app/models/table/data-response.model";
import { JSONDataResponse } from "src/app/models/table/json-data-response.model";

export interface State {
    tableResponse: JSONDataResponse;
}

export const initialState: State = {
    tableResponse: null
};