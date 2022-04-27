import { SelectConstants } from "../constants/selectConstants";
import { SelectAction, SelectState } from "./types/select";


const initialState = {
    selected:[],
    isAllSelected: false,
};

function selectReducer(state:SelectState = initialState, action: SelectAction) {
    switch (action.type) {
        case SelectConstants.SELECT_ALL:
            return {
                ...state,
                selected: action.payload,
                isAllSelected: true,
            }

        case SelectConstants.SELECT_ONE:
            return {
                ...state,
                selected: [...state.selected, action.payload.id],
                isAllSelected:action.payload.isAllSelected,
            }


        case SelectConstants.UNSELECT_ONE:
            return {
                ...state,
                selected: state.selected.filter((item: string) => item !== action.payload),
                isAllSelected: false,
            };

        case SelectConstants.UNSELECT_ALL:
            return {
                ...state,
                selected: [],
                isAllSelected: false,
            };
        
        default:
            return state
    }
}

export default selectReducer;