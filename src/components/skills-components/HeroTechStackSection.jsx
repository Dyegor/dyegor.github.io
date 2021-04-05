import React from "react";
import HeroTechStackItem from "./HeroTechStackItem";
import techStackItems from "../../data/techSkillsData";

export default function HeroTechStackSection() {
    return (
        <div className="hero-tech-stack-section">
            {techStackItems.map((item, index) => (
                <HeroTechStackItem
                    key={index}
                    skillTitle={item.title}
                    imgSrc={item.imgSrc}
                />
            ))}
        </div>
    );
}