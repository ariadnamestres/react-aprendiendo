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
              <Link to="/Comptador">Contador</Link>
            </li>
            <li>
              <Link to="/Gale"> Galeria!</Link>
            </li>
            <li>
              <Link to="/Gale2"> Galeria 2 </Link>
            </li>
            <li>
              <Link to="/Acordi"> Acordeon </Link>
            </li>
            <li>
              <Link to="/Boton"> Boton </Link>
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
