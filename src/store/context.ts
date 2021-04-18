import React from 'react';
import {SetRepoNameReducer, GetIssuesReducer} from './reducers';
import initialState from './state';
import {useCombineReducers} from '../utils/hooks/useCombineReducers';

export const StateContext = React.createContext<any>(null);
export const DispatchContext = React.createContext((() => {}) as any);

export const [combinedReducers, combinedState] = useCombineReducers({
  state: [SetRepoNameReducer, initialState],
  getIssuesState: [GetIssuesReducer, initialState],
});
