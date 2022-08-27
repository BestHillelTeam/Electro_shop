// Import Logo & WishList & CartDropdown
import Logo from "./components/Logo";
import WishList from "./components/WishList/WishList";
import CartDropdown from "./components/CartDropdown/CartDropdown";

// Component 'HeaderBottom'
function HeaderBottom() {
  return (
    <div className="header_bottom">
      <div className="container">
        <div className="header_row flex">

          {/* Logo */}
          <Logo/>

          <div className="header_ctn">

            {/* Wish list */}
            <div className="header_wishlist">
              <WishList/>
            </div>

            {/* Cart */}
            <div className="header_cart">
              <CartDropdown />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderBottom;