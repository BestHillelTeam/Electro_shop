import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProductSlider.scss";

export default function ProductSlider() {
    const settings = {
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
    };

    

    return (
        <div className="img-slider slick-list">
            <Slider {...settings}>
                <div className="first-img">
                    <img src="./img/product01.png" alt="" />
                </div>
                <div className="second-img">
                    <img src="./img/product02.png" alt="" />
                </div>
                <div className="third-img">
                    <img src="./img/product03.png" alt="" />
                </div>
                <div className="fourth-img">
                    <img src="./img/product04.png" alt="" />
                </div>
            </Slider>
        </div>
    );
}
