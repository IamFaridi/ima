import { setModalSearchData, setModalSearchError } from "../../modules/actions/modal/modalSearchAction";
import { ModalSearchAction } from "../../modules/reducers/modal/modalSearchReducer";
import { getData } from "..";
import { Dispatch } from "redux";
import { FetchedData } from "../api";

export function successCB(res: any, dispatch: Dispatch<ModalSearchAction>) {
    const {results} = res;
    const data:FetchedData[] = results.length && results.map(getData);
    dispatch(setModalSearchData(data));
}

export function errorCB(error: any,dispatch: (arg0: ModalSearchAction) => void) {
    dispatch(setModalSearchError(error));
}