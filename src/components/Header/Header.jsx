import './Header.scss';
import {BrowserRouter} from "react-router-dom";
import HeaderTop from "./components/HeaderTop/HeaderTop";
import HeaderBottom from "./components/HeaderBottom/HeaderBottom";

function Header() {

  return (
    <BrowserRouter>
      <header className="header">

        {/* Header top */}
        <HeaderTop/>

        {/* Header bottom */}
        <HeaderBottom />

      </header>
    </BrowserRouter>
  );
}

export default Header;