import React from "react";

import Resources from "../../components/covid/Resources";
import Response from "../../components/covid/Response";

import facts from "../../img/COVID-Facts.jpg";
import covid19 from "../../img/Covid19.jpg";
import ticker from "../../img/Covid19 Ticker.jpg";
import impact from "../../img/Impact.png";

import "./covid.css";

const covid = () => {
  return (
    <div class="covid">
      <img className="img-fluid" width="100%" src={covid19} alt />
      <div className="ticker-container">
        <img className="ticker" src={ticker} alt />
      </div>
      <div className="mt-5 container">
        <img src={facts} className="img-fluid" />
        <Resources />
        <img src={impact} className="img-fluid" />
        <Response />
      </div>
    </div>
  );
};

export default covid;
