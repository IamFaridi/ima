import { ApiConstants } from "../../constants/apiConstants";

interface fetchingDataSuccessAction {
    type: ApiConstants.FETCHING_DATA_SUCCESS,
    payload: any
}
interface AddingDataAction {
    type: ApiConstants.ADD_DATA,
    payload: any
}

interface DeleteDataAction {
    type: ApiConstants.DELETE_DATA,
    payload: any
}

interface fetchingDataErrorAction {
    type: ApiConstants.FETCHING_DATA_FAILURE,
    payload: any
}

interface fetchingDataAction {
    type: ApiConstants.FETCHING_DATA,
}
interface DeleteAllDataAction {
    type: ApiConstants.DELETE_ALL_DATA,
}

export type Action = fetchingDataSuccessAction | fetchingDataErrorAction | fetchingDataAction | AddingDataAction | DeleteDataAction | DeleteAllDataAction;

export type ApiState = {
    isFetching: boolean,
    data: any,
    error: any
}