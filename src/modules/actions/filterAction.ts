import { FilterConstants } from "../constants/filterConstant";
import { FilterAction } from "../reducers/types/filter";

export function setActiveFilter(filter: string):FilterAction {
    return {
        type: FilterConstants.SET_ACTIVE_FILTER,
        payload: filter
    }
}