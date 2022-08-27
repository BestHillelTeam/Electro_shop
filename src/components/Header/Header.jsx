import './Header.scss';
import HeaderTop from "./components/HeaderTop/HeaderTop";
import HeaderBottom from "./components/HeaderBottom/HeaderBottom";

function Header() {

  return (
      <header className="header">

        {/* Header top */}
        <HeaderTop/>

        {/* Header bottom */}
        <HeaderBottom />

      </header>
  );
}

export default Header;