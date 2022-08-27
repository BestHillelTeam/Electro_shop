// Component 'WishList'
import Product from "../Product/Product";
import {useEffect, useState} from "react";

function WishList() {

  // States & variables
  const [prod, setProd] = useState([]);
  const [wishListOpen, setWishList] = useState(false);
  const dataBase = `./db.json`;

  // Request to backend (json file)
  useEffect(() => {
    fetch(dataBase).then(res => res.json()).then(product => {
      setProd(product);
    });
  }, []);

  // Open & close wishlist
  const openWishList = () => setWishList(true);
  const closeWishList = () => setWishList(false);

  return (
    <>

      {/* WishList icon */}
      <div className="header_wishlist-icon" onClick={openWishList}>
        <a href="#">
          <i className="fa fa-heart-o"></i>
          <span>Your Wishlist</span>
          <div className="qty">1</div>
        </a>
      </div>

      {/* WishList dropdown */}
      <div className={wishListOpen === true ? 'wish-list_dropdown open' : 'wish-list_dropdown'} >
        <h2>Your Wishlist</h2>
        <button type="button" className="wish-list_close" onClick={closeWishList}>
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
      </div>
    </>
  );
}

export default WishList;