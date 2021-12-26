import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  RESET_COUNTER,
  MULTIPLY,
  DIVISION
} from "./action";

export const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER: {
      return {
        ...state,
        count: Number(state.count) + Number(action.payload)
      };
    }
    case DECREMENT_COUNTER: {
      return {
        ...state,
        count: state.count - action.payload
      };
    }
    case RESET_COUNTER: {
      return {
        ...state,
        count: 0
      };
    }
    case MULTIPLY: {
      return {
        ...state,
        count: state.count * action.payload
      };
    }
    case DIVISION: {
      return {
        ...state,
        count: Math.floor(state.count / action.payload)
      };
    }
    default: {
      return state;
    }
  }
};
