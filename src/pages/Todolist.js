import { useDispatch } from "react-redux";
import { addList, resetList } from "./redux/actions/todoactions";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
export default function Todolist() {
  const dispatch = useDispatch();
  const [taski, setTaski] = useState("prueba");
  const tareaLista = useSelector((store) => store.todoReducer); // es para sacar datos del store-redux hay que importar useselector
  return (
    <>
      <h1> To do list</h1>
      <div>
        <label>nueva tarea</label>
        <input
          onChange={(e) => setTaski(e.target.value)}
          type="text"
          value={taski}
        />

        <button onClick={() => dispatch(addList(taski))}>ADD </button>
        <button onClick={() => dispatch(resetList())}>RESET</button>
        <ul>
          {tareaLista.map((x, i) => (
            <li key={i}>{x}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
