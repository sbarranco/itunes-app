import React, { createContext, useReducer } from 'react';
import { IState, IAction } from './interfaces';

const initialState:IState = {
    albums: [],
    bookMarks: []
}

export const Store = createContext<IState | any >(initialState);

function reducer(state: IState, action: IAction) {
    switch (action.type) {
        case 'FETCH_DATA':
            return {...state, albums: action.payload }
        case 'ADD_MARK':
            return {...state, bookMarks: [...state.bookMarks, action.payload] }
        case 'REMOVE_MARK':
            return {...state, bookMarks: action.payload }    
        default:
            return state
    }
}

export function StoreProvider(props:any): JSX.Element {
    const [ state, dispatch ] = useReducer(reducer, initialState)
    return <Store.Provider value={{state, dispatch}}>{props.children}</Store.Provider>
}