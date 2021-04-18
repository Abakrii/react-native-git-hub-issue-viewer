import React, {useReducer} from 'react';
import 'react-native-gesture-handler';
import {
  DispatchContext,
  StateContext,
  combinedReducers,
  combinedState,
} from './src/store/context';
import NavigationStack from './src/navigations';

declare const global: {HermesInternal: null | {}};
const App = () => {
  const [state, dispatch] =
    useReducer(combinedReducers, combinedState.state) || {};
  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <NavigationStack />
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export default App;
