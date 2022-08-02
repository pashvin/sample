import { createSignal } from "solid-js";

class CounterServiceHelper {
  private _counter: any;
  private _setCount: any;
  public static instance = new CounterServiceHelper();

  private constructor() {
    [this._counter, this._setCount] = createSignal(0);
  }

  public get count() {
    return this._counter();
  }

  public inc() {
    this._setCount(this.count + 1);
  }

  public dec() {
    this._setCount(this.count - 1);
  }
}

const CounterService = (): CounterServiceHelper => {
  return CounterServiceHelper.instance;
};

export default CounterService;
