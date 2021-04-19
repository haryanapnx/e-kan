/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import { Context } from '../initial-context'

// Use Selector alternative for connect function
export const useSelector = (cb: (arg: Storage) => void) => {
  const selector = { ...useContext<any>(Context).state };
  return cb ? cb(selector) : selector;
};

// This hook returns a reference to the dispatch function from the context.
export const useDispatch = () => useContext<any>(Context).dispatch;
