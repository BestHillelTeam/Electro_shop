// Import useState
import {useState} from 'react';

// Component 'Product'
function Product(props) {

  // Props & states
  const {title, price, img} = props;
  const [priceProd, setPriceProd] = useState(price);
  const [count, setCount] = useState(1);

  // Plus count
  const plusCount = () => {
    setCount(count + 1);
    setPriceProd(priceProd + price);
  }

  // Minus count
  const minusCount = () =>  {
    if(count > 1) {
      setCount(count - 1);
      setPriceProd(priceProd - price);
    } else {
      setCount(1);
    }
  }

  // Render product
  return (
    <div className="product">

      {/* Product image */}
      <div className="product_img">
        <img src={img} alt="macbook"/>
      </div>

      {/* Product info */}
      <div className="product_info">

        {/* Product title */}
        <p>{title}</p>

        {/* Product count */}
        <div className="count_block">
          <p>
            <button type="button" onClick={minusCount}>-</button>
            <span>{count}</span>
            <button type="button" onClick={plusCount}>+</button>
          </p>
          <p className="product_price">${priceProd}</p>
        </div>
      </div>

      {/* Product delete */}
      <button className="product_delete">
        <i className="fa-solid fa-xmark"></i>
      </button>

    </div>
  );
}

export default Product;