import { SearchConstant } from "../constants/searchConstant";
import { SearchAction, SearchState } from "./types/search";
const initialState = {
    searchQuery: "",
};

function searchReducer(state:SearchState = initialState, action: SearchAction) {
    switch (action.type) {
        case SearchConstant.SEARCHING_TEXT:
            return {
                ...state,
                searchQuery: action.payload,
            };
        default:
            return state
    }
}

export default searchReducer;