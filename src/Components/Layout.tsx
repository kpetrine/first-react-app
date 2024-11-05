import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
    return (
    <div>
        <h2>Holiday Dates</h2>
<NavLink to= "/">Home</NavLink>
<NavLink to= "/holidays">Add Holidays</NavLink>
<NavLink to= "/contact">Contact</NavLink>
<Outlet/>
</div>
    )
}