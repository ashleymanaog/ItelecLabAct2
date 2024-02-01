import "./styles/navbar.css";
function Navigationbar() {
  return (
    <nav class="navbar">
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a class="nav-link lamona" href="#">
              lamona
            </a>
          </li>
          <div className="right">
            <div className="navbar-item"></div>
            <li className="nav-item">
              <a class="nav-link" href="#">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                ABOUT
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                DIRECTORY
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                FAVORITES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                CAN'T DECIDE
              </a>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navigationbar;
