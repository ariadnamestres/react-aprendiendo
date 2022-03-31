import { useState, useEffect } from "react";

export default function RellotgeDigital() {
  const [count, setCount] = useState(0);

  let kuki = new Date();
  let currentHours = kuki.getHours();
  let currentMinutes = kuki.getMinutes();
  let currentSeconds = kuki.getSeconds();

  const dosDigits = (valor) => {
    return ("0" + valor).slice(-2);
  };

  currentHours = dosDigits(currentHours);
  currentMinutes = dosDigits(currentMinutes);
  currentSeconds = dosDigits(currentSeconds);

  let horaActual = currentHours + ":" + currentMinutes + ":" + currentSeconds;

  useEffect(() => {
    setInterval(() => {
      setCount((n) => n + 1);
    }, 1000);
  }, []);

  return (
    <>
      <h1>DIGITAL WHATCH</h1>
      <div className="RellotgeDigital__Display">
        <h2 className="RellotgeDigital__Hora">{horaActual}</h2>
      </div>
    </>
  );
}
