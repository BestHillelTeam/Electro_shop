import React from "react";
import ProductSlider from "./productComponents/ProductSlider/ProductSlider";
import ProductMainImage from "./productComponents/ProductMainImage/ProductMainImage";
import "./ProductTemplate.scss";
import ProductAbout from "./productComponents/productAbout/productAbout";
import ProductTab from "./productComponents/productAbout/ProductTab/Product";

export default function ProductTemplate() {
    return (
        <div className="mainProductTemplate">
            <div className="productTemplate">
                <div className="mainProduct">
                    <div className="slider">
                        <ProductSlider />
                    </div>
                    <div className="main-img">
                        <ProductMainImage />
                    </div>
                    <div className="product-about">
                        <ProductAbout />
                    </div>
                </div>
            </div>
            <ProductTab />
        </div>
    );
}
