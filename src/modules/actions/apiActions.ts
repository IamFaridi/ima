import { Data, FetchedData } from "../../helpers/api";
import { ApiConstants } from "../constants/apiConstants";
import { Action } from "../reducers/types/api";

export function fetchingData(): Action {
    return {
        type: ApiConstants.FETCHING_DATA,
    }
}

export function fetchingDataSuccess(data: Data): Action {
    return {
        type: ApiConstants.FETCHING_DATA_SUCCESS,
        payload: data,
    }
}

export function fetchingDataFailure(error: any): Action {
    return {
        type: ApiConstants.FETCHING_DATA_FAILURE,
        payload: error,
    }
}


export function addData(data: FetchedData): Action {
    return {
        type: ApiConstants.ADD_DATA,
        payload: data,
    }
}

export function removeData(data: string[]): Action {
    return {
        type: ApiConstants.DELETE_DATA,
        payload: data,
    }
}

export function removeAllData(): Action {
    return {
        type: ApiConstants.DELETE_ALL_DATA,
    }
}