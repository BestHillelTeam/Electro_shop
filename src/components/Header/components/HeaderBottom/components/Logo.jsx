// Import Link
import {Link} from "react-router-dom";

// Component 'Logo'
function Logo() {

  // Render logo
  return (
    <Link to="/" className="header_logo">
      <img src="./img/logo.png" alt="logo"/>
    </Link>
  );
}

export default Logo;