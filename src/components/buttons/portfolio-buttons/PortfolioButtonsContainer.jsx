import React from "react";
import PortfolioButton from "./PortfolioButton";
import Divider from "../../divider/Divider";

export default function PortfolioButtonsContainer() {
    return (
        <div className="portfolio-buttons-container">
            <PortfolioButton 
                buttonName="Live Version"
                buttonHref="#"
            />
            <Divider
                style={{width: '40px'}}
            />
            <PortfolioButton 
                buttonName="GitHub Repo"
                buttonHref="#"
            />
        </div>
    );
}