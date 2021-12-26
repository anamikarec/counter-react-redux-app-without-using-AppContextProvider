import { createStore } from "redux";
import { incrementCounter, decrementCounter } from "./action";
import { reducer } from "./reducer";

const initialState = {
  count: 1
};

export const store = createStore(reducer, initialState);

// console.log(store.getState());

store.subscribe(() => {
  console.log(`count value is changed to : `, store.getState());
});

// const action = incrementCounter(1);
// store.dispatch(action);
// store.dispatch(action);

// store.dispatch(action);

// store.dispatch(action);

// store.dispatch(action);
