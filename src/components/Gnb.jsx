import { NavLink } from "react-router-dom";

export default function Gnb() {
  return (
    <nav className="gnb">
      <div className="logo">MY PORTFOLIO</div>

      <ul className="gnb-menu">
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile">
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/portfolio">
            Portfolio
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}