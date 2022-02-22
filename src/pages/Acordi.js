import { useState } from "react";
export default function Acordi() {
  //   const titol = ["Titol1", "Títol2", "Titol3"];
  //   const paragraf = ["paragraf1", "paragraf2", "paragraf3"];
  const [clickeado, setClickeado] = useState(null);

  function mostrarText(indice) {
    // alert(indice);

    setClickeado(indice);
  }

  return (
    <div>
      {/* {contenido.map((n,i) => (
          <h3>{n}</h3>
          <div></div>
        ))} */}
      <div className="Acordio">
        <h3 onClick={() => mostrarText(0)}> tito0 </h3>
        <div id="0" className={clickeado !== 0 ? " amagada" : " visible"}>
          Text amagat 0
        </div>
        <h3 onClick={() => mostrarText(1)}> tito1 </h3>
        <div id="0" className={clickeado !== 1 ? " amagada " : " visible"}>
          Text amagat 1
        </div>
        <h3> tito 2 </h3>
        <div className="Amagada"> Text amagat 2 </div>
      </div>
    </div>
  );
}
