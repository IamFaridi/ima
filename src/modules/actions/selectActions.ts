import { SelectConstants } from "../constants/selectConstants";
import { SelectAction, SelectOnePayload } from "../reducers/types/select";

export function selectAll(data:string[]): SelectAction {

    return {
        type: SelectConstants.SELECT_ALL,
        payload: data,
    }
}
export function unSelectAll(): SelectAction {
    return {
        type: SelectConstants.UNSELECT_ALL,
    }
}
export function selectOne({id,isAllSelected}:SelectOnePayload): SelectAction {
    return {
        type: SelectConstants.SELECT_ONE,
        payload: {id,isAllSelected},
    }
}
export function unSelectOne(id: string): SelectAction {
    return {
        type: SelectConstants.UNSELECT_ONE,
        payload: id,
    }
}