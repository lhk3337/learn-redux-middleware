import React from "react";
import { increaseAsync, decreaseAsync } from "../module/counter";
import { useDispatch, useSelector } from "react-redux";

import Counter from "../components/Counter";
const CounterContainer = () => {
  const dispatch = useDispatch();
  const disIncrease = () => dispatch(increaseAsync());
  const disdecrease = () => dispatch(decreaseAsync());

  const numbers = useSelector(({ count }) => count);

  return <Counter onIncrease={disIncrease} onDecrease={disdecrease} number={numbers} />;
};

export default CounterContainer;
