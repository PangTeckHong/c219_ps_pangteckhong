import { useParams ,NavLink , Outlet } from "react-router-dom";
import { getModule } from "../api";

export default function Module() {
  const { dipId } = useParams();
  const module = getModule(dipId);

  return (
    <>
      <h1>{module.name} Diploma</h1>

      <ul className="session-list">
        {module?.sessions.map(session => (
          <li className="session" key={session.id}>
            <NavLink 
              className={({ isActive }) => (isActive ? "session-active" : null)}
              to={session.id}>
              <p className="session-name">{session.moduleCode} | {session.name}</p>

            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
}
