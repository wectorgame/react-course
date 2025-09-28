import { Link } from "react-router"

const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper green darken-1">
        <a href="/" className="brand-logo">
          React Food
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
