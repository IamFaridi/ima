import { SearchConstant } from "../../constants/searchConstant"

export type SearchAction = {
    type: SearchConstant.SEARCHING_TEXT,
    payload: string,
}
export type SearchState ={
    searchQuery: string,
}