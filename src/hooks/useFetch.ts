import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {  Dispatch } from 'redux';
import { ModalSearchAction } from '../modules/reducers/modal/modalSearchReducer';
import { Action } from '../modules/reducers/types/api';


interface IUiFetch {
    endPoint: string;
    successCB:(res: any, dispatch: Dispatch<Action|ModalSearchAction>) => void;
    errorCB: (error: any, dispatch: Dispatch<Action|ModalSearchAction>) => void;
    initiated?: (dispatch: Dispatch<Action>) => void | null;
    moreOptions?: any;
}

export default function useFetch(props: IUiFetch) {
    const { endPoint, initiated, successCB, errorCB, moreOptions = {} } = props;
    const dispatch = useDispatch();
    initiated && initiated(dispatch);
    useEffect(() => {
        fetcher(endPoint);
    }, []);
    const fetcher = useCallback(async (endPoint: string) => {
        let uri = 'https://api.unsplash.com' + endPoint;
        try {
            const options = {
                headers: { Authorization: 'Client-ID -o4zNQeBWlwGgjmdBAKxUU_WPlUZBU5a6vKApWMbbSI' },
                ...moreOptions,
            }
            let response = await fetch(uri, options);
            let res = await response.json();
            successCB(res, dispatch);
        } catch (error) {
            errorCB(error, dispatch);
        }
    }, [initiated, successCB, errorCB, endPoint, moreOptions]);

    return fetcher;
}



