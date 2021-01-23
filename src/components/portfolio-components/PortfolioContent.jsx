import React from "react";
import PortfolioItem from "./portfolio-item-components/PortfolioItem";

export default function PortfolioContent() {
    return (
        <div className="row my-auto">
            <PortfolioItem
                headerText="Random Quote Machine"
                liveLink="https://dyegor.github.io/random-quote-machine/"
                gitHubLink="https://github.com/Dyegor/random-quote-machine"
                imgSrc="img/portfolio/p-4.jpg"
            />
            <PortfolioItem
                headerText="Url Shortener"
                liveLink="http://54.252.241.169/"
                gitHubLink="http://54.252.241.169/"
                imgSrc="img/portfolio/p-5.jpg"
            />
            <PortfolioItem
                headerText="ToDo List App"
                liveLink="#portfolioModal6"
                gitHubLink="#"
                imgSrc="img/portfolio/p-6.jpg"
            />
        </div>
    );
}