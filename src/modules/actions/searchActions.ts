import { SearchConstant } from "../constants/searchConstant";
import { SearchAction } from "../reducers/types/search";

export function searchText(data: string): SearchAction {
    return {
        type: SearchConstant.SEARCHING_TEXT,
        payload: data
    }
}