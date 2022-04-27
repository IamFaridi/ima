import { FilterConstants } from "../constants/filterConstant";
import { FilterAction, FilterState } from "./types/filter";
const initialState = {
    activeFilter: "Date",
};
function filterReducer(state: FilterState = initialState, action: FilterAction) {
    switch (action.type) {
        case FilterConstants.SET_ACTIVE_FILTER:
            return {
                ...state,
                activeFilter: action.payload,
            }
        default:
            return state
    }
}

export default filterReducer;