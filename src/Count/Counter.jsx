import { useState } from "react";
import React from "react";
// import { useContext } from "react";
import { useDispatch } from "react-redux";
import {
  decrementCounter,
  incrementCounter,
  handleMultiplication,
  handleDivision,
  resetCounter
} from "../redux/action";
// import { AppContext } from "../redux/AppContextProvider";

const Counter = () => {
  const [x, setX] = useState(0);
  const dispatch = useDispatch();
  // const { dispatch } = useContext(AppContext)[1];
  const handleIncrement = () => {
    const action = incrementCounter(x);
    dispatch(action);
  };
  const handleDecrement = () => {
    const action = decrementCounter(x);
    dispatch(action);
  };
  const handleReset = () => {
    const action = resetCounter(1);
    dispatch(action);
  };
  const handleMultiply = () => {
    const action = handleMultiplication(x);
    dispatch(action);
  };
  const handleDivide = () => {
    const action = handleDivision(x);
    dispatch(action);
  };
  console.log(x);
  return (
    <div>
      <input
        type="number"
        placeholder="Enter x.."
        onChange={(e) => setX(e.target.value)}
      />
      <button onClick={handleIncrement}>INCREMENT</button>
      <button onClick={handleDecrement}>DECREMENT</button>
      <button onClick={handleMultiply}>Multiply by x</button>
      <button onClick={handleDivide}>Divide by x</button>
      <button onClick={handleReset}>RESET</button>
    </div>
  );
};

export default Counter;
