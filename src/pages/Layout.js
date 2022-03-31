import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header>Exercicis React A. M JI</header>
      <div class="HolyGrail-body">
        <main class="HolyGrail-content">
          <Outlet />
        </main>
        <nav class="HolyGrail-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Comptador">Contador normal</Link>
            </li>
            <li>
              <Link to="/Gale"> Galeria ampliable</Link>
            </li>
            <li>
              <Link to="/Gale2"> Carrusel </Link>
            </li>
            <li>
              <Link to="/Acordi"> Acordeon </Link>
            </li>
            <li>
              <Link to="/Boton"> Boton/Toggle </Link>
            </li>
            <li>
              <Link to="/Vector"> Vector </Link>
            </li>
            <li>
              <Link to="/Comptadornou"> Comptador reducer</Link>
            </li>
            <li>
              <Link to="/Todolist"> To do list , versión 1.</Link>
            </li>

            <li>
              <Link to="/Counter"> Contador con redux </Link>
            </li>
            <li>
              <Link to="/Calculadora"> Calculadora</Link>
            </li>
            <li>
              <Link to="/RellotgeDigital"> Rellotge Digital</Link>
            </li>
            {/* {Llistat} */}
          </ul>
        </nav>
        <aside class="HolyGrail-ads">…</aside>
      </div>
      <footer>by Ariadna </footer>
    </>
  );
}
