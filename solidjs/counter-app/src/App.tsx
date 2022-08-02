import { Component } from "solid-js";
import { ServiceRegistry, useService } from "solid-services";
import CounterService from "./service";

const CounterDisplay: Component = () => {
  const counterService = useService(CounterService);
  return <div>Counter: {counterService().count}</div>;
};

const AppChild: Component = () => {
  const counterService = useService(CounterService);
  const inc = () => {
    counterService().inc();
  };
  const dec = () => {
    counterService().dec();
  };
  return (
    <div>
      <button onClick={inc}>Inc</button>
      <button onClick={dec}>Dec</button>
      <CounterDisplay/>
    </div>
  );
};

const App: Component = () => {
  return (
    <ServiceRegistry>
      <AppChild />
    </ServiceRegistry>
  );
};

export default App;
