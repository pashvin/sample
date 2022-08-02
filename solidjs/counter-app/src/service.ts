import { Component, createSignal } from "solid-js";

const CounterService = () => {
  const [counter, setCount] = createSignal(0);
  return {
    get count() {
      return counter();
    },
    inc() {
      setCount((count) => setCount(count + 1));
    },
    dec() {
      setCount((count) => setCount(count - 1));
    },
  };
};

export default CounterService;
