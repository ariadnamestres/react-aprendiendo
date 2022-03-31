import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Comptador from "./pages/Comptador";
import Gale from "./pages/Gale";
import Gale2 from "./pages/Gale2";
import Acordi from "./pages/Acordi";
import Boton from "./pages/Boton";
import Vector from "./pages/Vector";
import Comptadornou from "./pages/Comptadornou";
import Todolist from "./pages/Todolist";
import Counter from "./pages/Counter";
import Calculadora from "./pages/Calculadora";
import RellotgeDigital from "./pages/RellotgeDigital";
//redux 7/03
// import counterReducer3 from "./redux/counterReducer3";

// redux
// import { useSelector } from "react-redux";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="comptador" element={<Comptador />} />
            <Route path="gale" element={<Gale />} />
            <Route path="gale2" element={<Gale2 />} />
            <Route path="Acordi" element={<Acordi />} />
            <Route path="Boton" element={<Boton />} />
            <Route path="Vector" element={<Vector />} />
            <Route path="Comptadornou" element={<Comptadornou />} />
            <Route path="Todolist" element={<Todolist />} />
            <Route path="Counter" element={<Counter />} />
            <Route path="Calculadora" element={<Calculadora />} />
            <Route path="RellotgeDigital" element={<RellotgeDigital />} />
            {/* <Route path="counterReducer3" element={<counterReducer3 />} /> */}
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
