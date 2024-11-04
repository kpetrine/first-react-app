import { Link, Outlet } from "react-router-dom";

export default function Layout() {
    return (
    <div>
        <h2>Holiday Dates</h2>
<Link to= "/">Home</Link>
<Link to="/holidays">Holidays</Link>
<Link to="/contact">Contact</Link>
<Outlet/>
</div>
    )
}