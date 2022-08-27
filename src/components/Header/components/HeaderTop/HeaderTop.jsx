// Import useEffect & useState
import {useEffect, useState} from "react";

// Component 'HeaderTop'
function HeaderTop() {
  // States & variables
  const [course, setCourse] = useState([]);
  const bankGovUaUrl = `https://bank.gov.ua/`;
  const exchangeRates = `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json`;

  // Request to backend
  useEffect(() => {
    fetch(exchangeRates).then((res) => res.json()).then((data) => {
      setCourse(data[25]);
    });
  }, []);

  // Render headerTop
  return (
    <div className="header_top">
      <div className="container flex">

        {/* Left block */}
        <ul className="pull-left">

          {/* Phone */}
          <li>
            <a href="tel:+021-95-51-84">
              <i className="fa-solid fa-phone"></i>
              +021-95-51-84
            </a>
          </li>

          {/* Mail */}
          <li>
            <a href="mailto:email@email.com">
              <i className="fa-solid fa-envelope"></i>
              email@email.com
            </a>
          </li>

          {/* Map */}
          <li>
            <a href="https://goo.gl/maps/MUDwuaz4PKsr3A6C8" target="_blank" rel="noreferrer">
              <i className="fa-solid fa-location-dot"></i>
              1734 Stonecoal Road
            </a>
          </li>
        </ul>

        {/* Right block */}
        <ul className="pull-right">
          <li>
            <a href={bankGovUaUrl} target="_blank" rel="noreferrer">
              <i className="fa-solid fa-dollar-sign"></i>
              {course.rate} {course.cc}
            </a>
          </li>
        </ul>

      </div>
    </div>
  );
}

export default HeaderTop;