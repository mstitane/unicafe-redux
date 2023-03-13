import { useState } from "react";
import { createStore } from "redux";
import counterReducer from "./reducers/CounterReducer";
import Header from "./component/Header";
import Button from "./component/Button";
import Statistics from "./component/Statistics";

const App = ({ store }) => {
  return (
    <div>
      <Header title={"Give feedback"} />
      <Button
        handleClick={() => store.dispatch({ type: "GOOD" })}
        text="good"
      />
      <Button
        handleClick={() => store.dispatch({ type: "OK" })}
        text="neutral"
      />
      <Button handleClick={() => store.dispatch({ type: "BAD" })} text="bad" />
      <Statistics state={store.getState()} />
    </div>
  );
};

export default App;
