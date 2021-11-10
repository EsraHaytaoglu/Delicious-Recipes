
import { Link } from "react-router-dom";
import "../css/header.css"

function Header() {
  return (
    <nav className="navMenu">
      <Link to="/"><p>Recipe List</p></Link>
      <div className="dot"></div>
    </nav>
  );
}

export default Header;
