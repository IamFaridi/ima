import { fetchingData, fetchingDataFailure, fetchingDataSuccess } from "../modules/actions/apiActions";
import { getData } from ".";
import { Action } from "../modules/reducers/types/api";
import { Dispatch } from "redux";

export type FetchedData = {
    id: string;
    name: string;
    height: number;
    width: number;
    ratio: number;
    created_at: string;
    urls: {
        small: string;
        regular: string;
    };
}

export type Data = {
    data: FetchedData[];
}

export function successCB(res: any, dispatch: Dispatch<Action>) {
    const data:Data= res.length && res.map(getData)
    dispatch(fetchingDataSuccess(data));
}
export function errorCB(error: any,dispatch: Dispatch<Action>) {
    dispatch(fetchingDataFailure(error));
}
export function initiated(dispatch: Dispatch<Action>) {
    dispatch(fetchingData());
}