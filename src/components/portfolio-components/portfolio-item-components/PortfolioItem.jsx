import React from "react";
import PortfolioCaption from "./PortfolioCaption";
import PortfolioImage from "./PortfolioImage";

export default function PortfolioItem(props) {
    return (
        <div className="col-sm-4 portfolio-item filter finance">
            <a className="portfolio-link" href={props.aLink} data-toggle="modal">
                <PortfolioCaption />
                <PortfolioImage imgSrc={props.imgSrc}/>
            </a>
        </div>
    );
}

