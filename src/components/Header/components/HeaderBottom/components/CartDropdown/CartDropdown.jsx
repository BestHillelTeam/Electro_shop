import {useState, useEffect} from "react";
import Product from "../Product/Product";
import {Link} from "react-router-dom";

// Component 'CartDropdown'
function CartDropdown() {

  // States & variables
  const [prod, setProd] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const dataBase = `./db.json`;

  // Request to backend (json file)
  useEffect(() => {
    fetch(dataBase).then(res => res.json()).then(product => {
      setProd(product);
    });
  });

  // Open & close cart
  const openCart = () => setCartOpen(true);
  const closeCart = () => setCartOpen(false);

  // Render cart
  return (
    <>
      {/* Cart icon */}
      <div className="header_cart-icon" onClick={openCart}>
        <a className="dropdown-toggle" href="/">
          <i className="fa fa-shopping-cart"></i>
          <span>Your Cart</span>
          <div className="qty">{Object.values(prod).length}</div>
        </a>
      </div>

      {/* Cart dropdown */}
      <div className={cartOpen === true ? 'cart_dropdown open' : 'cart_dropdown'} >
        <h2>Your cart</h2>
        <button type="button" className="cart_close" onClick={closeCart}>
          <i className="fa-solid fa-xmark"></i>
        </button>

        {/* Render product */}
        <div className="product_block">
          {Object.values(prod).map(e => (
            <Product
              key={e.id}
              title={e.title}
              price={e.price}
              img={e.img}
            />
          ))}
        </div>

        {/* Cart total */}
        <div className="cart_total">
          <p>{Object.values(prod).length} item(s) selected</p>
          <p>Total: $0</p>
        </div>

        {/* Product buy btn(s) */}
        <div className="product_buy">

          <button type="button" className="view">
            <Link to="/">View cart</Link>
          </button>

          <button type="button" className="buy">
            <Link to="/">Buy</Link>
          </button>
        </div>

      </div>
    </>
  );
}

export default CartDropdown;