/* eslint-disable @typescript-eslint/no-explicit-any */
export const applyMiddleware = (...funcs: any[]) => (
  state: Storage,
  action: Function
) => funcs.forEach((func: <T, A>(s: T, a: A) => any) => func(state, action))