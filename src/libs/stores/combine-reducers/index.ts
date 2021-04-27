/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-param-reassign */
export const combineReducers = <T>(reducers: T) => {
  const entries = Object.entries(reducers);
  return (
    state: any = {},
    action: Function
  ) => entries.reduce((_state: any, [key, reducer]: any) => {
    _state[key] = reducer(state[key], action);
    return _state;
  }, {});
};
