import { DataIsDraft } from "./data-is-draft.enum";
import { DataType } from "./data-type.enum";

export class JSONDataResponse {
    _id: string;
    type: DataType;
    isDraft: boolean;
    picture: string;
    published: string;
    tags: string[];
    author: {
        first: string;
        last: string;
    }
    observers: {
        id: string;
        name: string;
    }[];
};