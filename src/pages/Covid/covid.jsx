import React from "react";
import { Link } from "react-scroll";

import Resources from "../../components/covid/Resources";
import Response from "../../components/covid/Response";

import covid19 from "../../assets/image/Covid19.jpg";
import factsImg from "../../assets/image/facts.jpg";
import resourcesImg from "../../assets/image/resources.jpg";
import impactImg from "../../assets/image/impact.jpg";
import responseImg from "../../assets/image/response.jpg";
import facts from "../../img/COVID-Facts.jpg";
import ticker from "../../img/Covid19 Ticker.jpg";
import impact from "../../img/Impact.png";
import tag from "../../assets/image/tag.jpg";

import "./covid.css";

const covid = () => {
  return (
    <div className="covid">
      <img
        className="img-fluid mb-5"
        width="100%"
        src={covid19}
        alt="covid19"
      />
      <div className="covid-section-buttons-container">
        <Link to="facts" smooth={true} offset={-25} className="pointer">
          <img src={factsImg} alt="facts" className="img-fluid" />
        </Link>
        <Link to="resources" smooth={true} offset={-75} className="pointer">
          <img src={resourcesImg} alt="resources" className="img-fluid" />
        </Link>
        <Link to="impact" smooth={true} offset={-75} className="pointer">
          <img src={impactImg} alt="resources" className="img-fluid" />
        </Link>
        <Link to="response" smooth={true} offset={-75} className="pointer">
          <img src={responseImg} alt="response" className="img-fluid" />
        </Link>
      </div>
      <img src={tag} alt="tag" className="img-fluid" />
      <div className="ticker-container">
        <img className="ticker" src={ticker} alt="ticker" />
      </div>
      <div className="mt-5 container">
        <img name="facts" src={facts} className="img-fluid" alt="facts" />
        <Resources />
        <img name="impact" src={impact} className="img-fluid" alt="impact" />
        <Response />
      </div>
    </div>
  );
};

export default covid;
