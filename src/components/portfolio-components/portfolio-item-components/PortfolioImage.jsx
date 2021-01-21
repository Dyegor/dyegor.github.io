import React from "react";

export default function PortfolioImage(props) {
    return (
        <img className="img-fluid" src={props.imgSrc} alt="portfolio-img" />
    );
}