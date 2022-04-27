import { ModalSearchConstants } from "../../constants/modal/modalSearchConstants";

interface SetData {
    type: ModalSearchConstants.SET_DATA,
    payload: any
}

interface UnsetData {
    type: ModalSearchConstants.UNSET_DATA,
};

interface SetError {
    type: ModalSearchConstants.SET_ERROR,
    payload: any
}

export type ModalSearchAction = SetData | UnsetData | SetError;

type State = {
    data: any,
    error: any,
}

const initialState: State = {
    data: [],
    error: ""
}

function modelSearchReducer(state: State = initialState, action: ModalSearchAction) {
    switch (action.type) {
        case ModalSearchConstants.SET_DATA:
            return {
                ...state,
                data: action.payload,
                error: ""
            }
        case ModalSearchConstants.UNSET_DATA:
            return {
                ...state,
                data: [],
                error: ""
            }

        case ModalSearchConstants.SET_ERROR:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state
    }
}

export default modelSearchReducer;