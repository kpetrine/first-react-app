export default function Sidebar() {
    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div className="position-sticky pt-3">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                <i className="bi bi-house-fill"></i>
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link control-add-user" aria-current="page" href="#">
                <i className="bi bi-country-add"></i>
                Add Country
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link control-add-user" aria-current="page" href="#">
                <i className="bi bi-holiday-add"></i>
                Add Holiday
              </a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }