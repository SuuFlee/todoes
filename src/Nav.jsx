import { NavLink } from "react-router";

export function MyAppNav() {
  return (
    <nav>
      <NavLink to="/App2" end>
        First
      </NavLink>

      <NavLink to="/" end>
        Second
      </NavLink>
    </nav>
  );
}
