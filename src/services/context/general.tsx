import React from 'react';
import {userContextType} from './types';

const GeneralStateContext = React.createContext<userContextType | null>(null);
const GeneralDispatchContext = React.createContext<any>(null);

const useGeneralState = () => {
  const context = React.useContext(GeneralStateContext);
  if (context === undefined) {
    throw new Error('useGeneralState must be used in a context provider');
  }
  return context;
};

const useGeneralDispatch = () => {
  const context = React.useContext(GeneralDispatchContext);
  if (context === undefined) {
    throw new Error('useGeneralDispatch must be used in a context provider');
  }
  return context;
};
export {
  useGeneralState,
  useGeneralDispatch,
  GeneralStateContext,
  GeneralDispatchContext,
};
