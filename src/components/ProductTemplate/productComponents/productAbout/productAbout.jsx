import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./productAbout.scss";

export default function ProductAbout() {
    const [inputValue, setInputValue] = useState(1);
    const [product, setProduct] = useState();

    useEffect(() => {
        fetch("./db.json")
            .then((e) => e.json())
            .then((e) => setProduct(e));
    });

    const addNum = () => {
        setInputValue(inputValue + 1);
    };

    const decNum = () => {
        if (inputValue > 1) {
            setInputValue(inputValue - 1);
        }
    };

    return (
        <div>
            <div className="product-details">
                {product && (
                    <h2 className="product-name">{product[0].title}</h2>
                )}

                <div>
                    {product && (
                        <h3 className="product-price">${product[0].price}</h3>
                    )}
                    {product && (
                        <span className="product-available">
                            {product[0].Stock}
                        </span>
                    )}
                </div>
                {product && <p>{product[0].about}</p>}

                <div className="product-options">
                    <label>
                        Size
                        {product && (
                            <select className="input-select">
                                <option value="0">
                                    {product[0].optionsSize[0]}"
                                </option>
                                <option value="1">
                                    {product[0].optionsSize[1]}"
                                </option>
                                <option value="2">
                                    {product[0].optionsSize[2]}"
                                </option>
                            </select>
                        )}
                    </label>
                    <label>
                        Color
                        {product && (
                            <select className="input-select">
                                <option value="0">
                                    {product[0].optionsColor[0]}
                                </option>
                                <option value="1">
                                    {product[0].optionsColor[1]}
                                </option>
                                <option value="2">
                                    {product[0].optionsColor[2]}
                                </option>
                            </select>
                        )}
                    </label>
                </div>

                <div className="add-to-cart">
                    <div className="qty-label">
                        <div className="input-number">
                            <input
                                type="number"
                                min="1"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                            />
                            <span className="qty-up" onClick={addNum}>
                                +
                            </span>
                            <span className="qty-down" onClick={decNum}>
                                -
                            </span>
                        </div>
                    </div>
                    <button className="add-to-cart-btn">
                        <i className="fa fa-shopping-cart"></i> add to cart
                    </button>
                </div>

                <ul className="product-links">
                    <li>Category:</li>
                    {product && (
                        <li>
                            <a href="/">{product[0].category}</a>
                        </li>
                    )}
                </ul>

                <ul className="product-links">
                    <li>Share:</li>
                    <li>
                        <a href="https://uk-ua.facebook.com/">
                            <i className="fa fa-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/">
                            <i className="fa fa-twitter"></i>
                        </a>
                    </li>
                </ul>
            </div>
            
        </div>
        
    );
}
