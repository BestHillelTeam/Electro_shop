import React from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav id="navigation">
            <div className="container">
                <div id="responsive-nav">
                    <ul className="main-nav nav navbar-nav"  >
                        <li className="active">
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/Categories">
                                Categories
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
