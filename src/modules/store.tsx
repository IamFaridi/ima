import React from 'react';
import { Provider } from "react-redux"
import { legacy_createStore as createStore, combineReducers, Dispatch, Store } from 'redux'
import apiReducer, { } from './reducers/apiReducer';
import filterReducer from './reducers/filterReducer';
import modalReducer from './reducers/modal/modalReducer';
import modelSearchReducer from './reducers/modal/modalSearchReducer';
import searchReducer from './reducers/searchReducer';
import selectReducer from './reducers/selectReducer';


const rootReducer = combineReducers({
    api: apiReducer,
    filter:filterReducer,
    select:selectReducer,
    search:searchReducer,
    modal:modalReducer,
    modalSearch:modelSearchReducer
})

export type RootState = ReturnType<typeof rootReducer>

const store: Store<RootState> & {
    dispatch: Dispatch
} = createStore(rootReducer);

export default function GlobalStore({children}: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}