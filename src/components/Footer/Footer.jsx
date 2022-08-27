import React from "react";
import "./Footer.scss";
import AboutUs from "./components/AboutUs";
import Info from "./components/Info";
import Service from "./components/Service";

export default function Footer() {
    return (
        <div>
            <footer id="footer">
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <AboutUs />

                            <Info />

                            <Service />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
