import { useReducer } from "react";

export default function Comptadornou() {
  //   const counter = (state) => state + 1;
  //   const [count, setCount] = useState;
  const [count, dispatch] = useReducer((state, amount) => state + amount, 0);
  //   const [state, dispatch] = useReducer(reducer, initialArg, init);
  return (
    <>
      <h1>Comptador Reduce</h1>
      <div>{count}</div>
      <button onClick={() => dispatch(+1)}> +1</button>
      <button onClick={() => dispatch(-1)}> -1</button>
    </>
  );
}
