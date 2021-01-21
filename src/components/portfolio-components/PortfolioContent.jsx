import React from "react";
import PortfolioItem from "./portfolio-item-components/PortfolioItem";

export default function PortfolioContent() {
    return (
        <div className="row my-auto">
            <PortfolioItem
                aLink="#portfolioModal4"
                imgSrc="img/portfolio/p-4.jpg"
            />
            <PortfolioItem
                aLink="#portfolioModal5"
                imgSrc="img/portfolio/p-5.jpg"
            />
            <PortfolioItem
                aLink="#portfolioModal6"
                imgSrc="img/portfolio/p-6.jpg"
            />
        </div>
    );
}