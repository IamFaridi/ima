import { SelectConstants } from "../../constants/selectConstants";

interface SelectAll{
    type: SelectConstants.SELECT_ALL,
    payload: string[],
}

export interface SelectOnePayload{
    id: string,
    isAllSelected: boolean,
}
interface SelectOne{
    type: SelectConstants.SELECT_ONE,
    payload: SelectOnePayload,
}

interface UnSelectOne{
    type: SelectConstants.UNSELECT_ONE,
    payload: string,
}
interface UnSelectAll{
    type: SelectConstants.UNSELECT_ALL,
}


export type SelectAction = SelectAll | SelectOne | UnSelectOne | UnSelectAll;

export type SelectState ={
    selected: string[],
    isAllSelected: boolean,
}