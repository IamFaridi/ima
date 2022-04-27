import { ReactNode } from "react";
import { ModalConstants } from "../../constants/modal/modalConstants";

interface SetModalVisibility {
    type: ModalConstants.SET_MODAL_VISIBILITY;
}

interface ModalPayloadProp {
    content: ReactNode,
    data: any,
}

interface ModalContentAction {
    type: ModalConstants.SET_MODAL_CONTENT;
    payload: ModalPayloadProp;
};

interface ModalDefaultAction {
    type: ModalConstants.DEFAULT;
};
export type ModalAction = SetModalVisibility | ModalContentAction | ModalDefaultAction;


export type ModalState = {
    modalVisibility: boolean;
    modalContent: ReactNode;
    modalData: any;
}
