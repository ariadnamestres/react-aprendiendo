import { useState } from "react";

export default function Boton() {
  const [color, setColor] = useState("red");
  const apretado = color === "blue";

  const togle = () => {
    if (color === "red") setColor("blue");
    else setColor("red");
  };

  return (
    <>
      <button style={{ background: color }} onClick={togle}>
        CANVI COLOR
      </button>
      {apretado ? <p> esta apretadito</p> : <p>No apretado</p>}
    </>
  );
}

//   color === red ? setColor("blue"):setColor("red")
