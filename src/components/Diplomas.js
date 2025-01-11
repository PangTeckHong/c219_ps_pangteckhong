import { Outlet, NavLink, Route, Routes } from "react-router-dom";
import { getDiplomas } from "../api";

export default function Diplomas() {
  const diplomas = getDiplomas();
  return (
    <div className="container">
      <h1>Schools</h1>

      <ul className="diplomas">
        {diplomas.map(cat => (
          <li key={cat.id}>
            <NavLink
              className={({ isActive }) =>
                isActive ? "module-active" : null
              }
              to={cat.id}
            >
              {cat.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <Routes>
        <Route index element={<h3>Select a diploma from above</h3>} />
      </Routes>
      <Outlet />
    </div>
  );
}
