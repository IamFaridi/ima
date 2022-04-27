import  { ReactNode } from "react";
import { ModalConstants } from "../../constants/modal/modalConstants";
import { ModalAction } from "../../reducers/types/modal";

export function setModalVisiblity():ModalAction {
    return {
        type: ModalConstants.SET_MODAL_VISIBILITY,
    }
}

type ModalProps = {
    content: ReactNode,
    data: any,
}

export function setModalContent({content,data}:ModalProps):ModalAction {
    return {
        type: ModalConstants.SET_MODAL_CONTENT,
        payload: {content,data},
    }
}

export function setToDefault():ModalAction {
    return {
        type: ModalConstants.DEFAULT
    }
}