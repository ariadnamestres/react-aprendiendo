import { useDispatch, useSelector } from "react-redux";
import {
  increaseCounter,
  decreaseCounter,
  resetCounter,
} from "./redux/actions/CounterActions";

export default function Counter() {
  const count = useSelector((store) => store.counterReducer.count);
  const dispatchCounter = useDispatch();
  return (
    <div className="CounterRedux">
      {count}
      <button
        className="botonredux"
        onClick={() => dispatchCounter(increaseCounter(1))}
      >
        Increase counter{" "}
      </button>
      <button
        className="botonredux"
        onClick={() => dispatchCounter(increaseCounter(5))}
      >
        Increase counter +5
      </button>
      <button
        className="botonredux"
        onClick={() => dispatchCounter(decreaseCounter(1))}
      >
        Decrease counter{" "}
      </button>
      <button
        className="botonredux"
        onClick={() => dispatchCounter(decreaseCounter(5))}
      >
        Decrease counter -5
      </button>
      <button
        className="botonredux"
        onClick={() => dispatchCounter(resetCounter(5))}
      >
        Reset
      </button>
    </div>
  );
}
