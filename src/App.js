import { useContext } from "react";
// import { AppContext } from "./redux/AppContextProvider";
import "./styles.css";
import React from "react";
import Counter from "./Count/Counter";
import { useSelector } from "react-redux";

export default function App() {
  // const { getState } = useContext(AppContext)[1];
  // const { count } = getState();
  const count = useSelector((state) => state.count);

  return (
    <div className="App">
      <h2>Counter App</h2>
      <h2>{count}</h2>
      <Counter />
    </div>
  );
}
