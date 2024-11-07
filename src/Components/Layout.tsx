import { NavLink } from "react-router-dom";

export default function Layout() {
  return (
    <div className="layout-container">
      <aside className="sidebar">
        <h3>Navigation</h3>
        
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
       
      </aside>

      {/* Main content */}
      <main className="content"></main>
    </div>
  );
}
