import { DataType } from "./data-type.enum";

export class JSONDataResponse {
    _id: string;
    type: DataType;
    isDraft: boolean;
    picture: string;
    published: string;
    tags: string[];
    observers: {
        id: string;
        name: string;
    }[];
}[];