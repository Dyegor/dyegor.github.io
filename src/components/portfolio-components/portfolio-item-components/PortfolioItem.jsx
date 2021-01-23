import React from "react";
import PortfolioButton from "../../buttons/portfolio-buttons/PortfolioButton";
import PortfolioCaption from "./PortfolioCaption";
import PortfolioImage from "./PortfolioImage";

export default function PortfolioItem(props) {
    return (
        <div className="col-sm-4 portfolio-item">
            <span className="portfolio-header">{props.headerText}</span>
            <a className="portfolio-link" href={props.liveLink} data-toggle="modal">
                <PortfolioCaption />
                <PortfolioImage 
                    imgSrc={props.imgSrc}
                />
            </a>
            <PortfolioButton
                buttonName="GitHub"
                buttonHref={props.gitHubLink}
            />
        </div>
    );
}

