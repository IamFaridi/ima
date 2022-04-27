import { FetchedData } from "../../../helpers/api";
import { ModalSearchConstants } from "../../constants/modal/modalSearchConstants";
import { ModalSearchAction } from "../../reducers/modal/modalSearchReducer";

export function setModalSearchData(data: FetchedData[]):ModalSearchAction {
    return {
        type:   ModalSearchConstants.SET_DATA,
        payload: data
    }
}

export function unsetModalSearchData():ModalSearchAction {
    return {
        type: ModalSearchConstants.UNSET_DATA
    }
}

export function setModalSearchError(error: any):ModalSearchAction {
    return {
        type: ModalSearchConstants.SET_ERROR,
        payload: error
    }
}