
import { Link } from "react-router-dom"
export default function Footer() {
  return (
    <nav className="navbar navbar-dark bg-secondary fixed-bottom">
  <div className="container-fluid">
    <Link className="navbar-brand ms-3" to="#">© 2024 U Passwords™. All Rights Reserved.</Link>
    <button className="d-none d-sm-block navbar-toggler me-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">More Info</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 mb-3">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">Terms</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/">Legal</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">About</Link>
          </li>
        </ul>
            <h5> <Link to="https://github.com/alexquar/U-passwords" className="text-light">Check out the source code!</Link></h5>
      </div>
    </div>
  </div>
</nav>
  )
}
