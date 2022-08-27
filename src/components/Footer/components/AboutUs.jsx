import React from "react";

export default function AboutUs() {
    return (
        <div className="col-md-3 col-xs-6">
            <div className="footer">
                <h3 className="footer-title">About Us</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <ul className="footer-links">
                    <li>
                        <a href="https://goo.gl/maps/MUDwuaz4PKsr3A6C8" target="_blank">
                            <i className="fa fa-map-marker"></i>1734 Stonecoal
                            Road
                        </a>
                    </li>
                    <li>
                        <a href="tel:+021-95-51-84">
                            <i className="fa fa-phone"></i>+021-95-51-84
                        </a>
                    </li>
                    <li>
                        <a href="mailto:email@email.com">
                            <i className="fa fa-envelope-o"></i>email@email.com
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
