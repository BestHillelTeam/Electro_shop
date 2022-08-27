import React from "react";
import { useState } from "react";
import Help from './Help/Help'

export default function Service() {
    const [help, setHelp] = useState(false)
    const showHelp = (bool) => {
        setHelp(bool)
    }
    return (
        <div className="col-md-3 col-xs-6">
            <div className="footer">
                <h3 className="footer-title">Service</h3>
                <ul className="footer-links">
                    <li>
                        <a href="https://tracking.novaposhta.ua/#/uk" target='blank'>Track My Order</a>
                    </li>
                    <li>
                        <a href="#" onClick={() => showHelp(true)}>Help</a>
                        {help ? <Help showHelp={showHelp}></Help> : ''}
                    </li>
                </ul>
            </div>
        </div>
    );
}
