import { useState } from "react";
export default function Acordi() {
  const [cssClass, setCssClass] = useState("amagada");
  const [Clikat, setClikat] = useState(false);
  const desplega = () => {
    if (cssClass === "amagada" && !Clikat) {
      setCssClass("visible");
      setClikat(true);
    } else setCssClass("amagada");
  };

  return (
    <div className="Acordio">
      <div onClick={desplega}>TÍTULO I</div>
      <div className={cssClass}> PÁRRAFO i</div>
      <div onClick={desplega} className="titulo2">
        TÍTULO II
      </div>
      <div className={cssClass}> PÁRRAFO ii</div>
      <div onClick={desplega} className="titulo3">
        TÍTULO III
      </div>
      <div className={cssClass}>PÁRRAFO iii</div>
    </div>
  );
}
