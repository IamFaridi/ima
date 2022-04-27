import { ApiConstants } from "../constants/apiConstants";
import { Action, ApiState } from "./types/api";

const initialState = {
    isFetching: false,
    data: [],
    error: null
};

function apiReducer(state: ApiState = initialState, action: Action) {
    switch (action.type) {
        case ApiConstants.FETCHING_DATA:
            return {
                ...state,
                isFetching: true
            }
        case ApiConstants.FETCHING_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload,
                error: null
            }
        case ApiConstants.FETCHING_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
                data: [],
            }
        case ApiConstants.ADD_DATA:
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        case ApiConstants.DELETE_DATA:
            return {
                ...state,
                data: state.data.filter((item: { id: string }) => !action.payload.includes(item.id)),
            }
        case ApiConstants.DELETE_ALL_DATA:
            return {
                ...state,
                data: []
            }
        default:
            return state
    }
}

export default apiReducer;