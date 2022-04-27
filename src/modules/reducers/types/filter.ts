import { FilterConstants } from "../../constants/filterConstant"

export type FilterAction = {
    type: FilterConstants.SET_ACTIVE_FILTER,
    payload: any
}
export type FilterState = {
    activeFilter: any,
}