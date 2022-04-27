import SelectImageModal from "../../../components/Modal/SelectImageModal";
import { ModalConstants } from "../../constants/modal/modalConstants";
import { ModalAction, ModalState } from "../types/modal";

const initialState = {
    modalVisibility: false,
    modalContent: <SelectImageModal />,
    modalData: [],
}

function modalReducer(state: ModalState = initialState, action: ModalAction) {

    switch (action.type) {
        case ModalConstants.SET_MODAL_VISIBILITY:
            return {
                ...state,
                modalVisibility: !state.modalVisibility,
            };

        case ModalConstants.SET_MODAL_CONTENT:
            return {
                ...state,
                modalContent: action.payload.content,
                modalData: action.payload.data,
            };

        case ModalConstants.DEFAULT:
            return {
                ...initialState
            };
        default:
            return state;
    }
}

export default modalReducer;