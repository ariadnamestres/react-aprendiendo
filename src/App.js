import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Comptador from "./pages/Comptador";
import Gale from "./pages/Gale";
import Gale2 from "./pages/Gale2";
import Acordi from "./pages/Acordi";
import Boton from "./pages/Boton";

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
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
