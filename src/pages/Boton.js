import { useState } from "react";

export default function Boton() {
  const [color, setColor] = useState("red");
  const apretado = color === "blue";

  const togle = () => {
    if (color === "red") setColor("blue");
    else setColor("red");
  };

  return (
    <div className="Lol">
      <h1> TOGGLE</h1>
      <button className="Toggle" style={{ background: color }} onClick={togle}>
        CANVI COLOR
      </button>
      {apretado ? <p> Está apretado </p> : <p>No apretado</p>}
    </div>
  );
}

//   color === red ? setColor("blue"):setColor("red")
