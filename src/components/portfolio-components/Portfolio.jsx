import React from "react";
import PortfolioContent from "./PortfolioContent";
import PortfolioHeader from "./PortfolioHeader";

export default function Portfolio() {
    return (
        <div className="portfolio">
            <PortfolioHeader />
            <PortfolioContent />
        </div>
    );
}