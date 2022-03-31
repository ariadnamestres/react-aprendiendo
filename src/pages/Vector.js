export default function Vector() {
  const numbersarray = [1, 2, 3, 4, 5];

  let numerogran = Math.max(...numbersarray);
  let numeropetit = Math.min(...numbersarray);

  const multiplicacio = numbersarray.map(function (numero) {
    return numero * 2;
  });
  let sumi = numbersarray.reduce(function (a, b) {
    return a + b;
  }, 0);

  let numero = 0;
  for (let i = 0; i < numbersarray.length; i++) {
    numero += numbersarray[i];
  }

  numbersarray.splice(2, 0, 9);

  const animals = ["elefant", "gato", "gato"];

  return (
    <div>
      <li> {numerogran} </li>
      <li> {numeropetit} </li>
      <li> {sumi} </li>
      <li> {multiplicacio}</li>
      <li> {numero}</li>
      <li> {numbersarray}</li>
    </div>
  );
}
