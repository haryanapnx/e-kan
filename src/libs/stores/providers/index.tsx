/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useReducer } from "react";
import { Context, initialState } from '../initial-context'

export const Provider = ({ children, reducers, applyMiddleware }: any) => {
  const defaultState = reducers(undefined, initialState);
  if (defaultState === undefined) {
    throw new Error("reducer's should not return undefined");
  }
  const [state, dispatch] = useReducer((_state: any, _action: any) => {
    applyMiddleware(_state, _action);
    return reducers(_state, _action);
  }, defaultState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
