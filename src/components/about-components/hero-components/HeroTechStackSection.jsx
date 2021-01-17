import React from "react";
import HeroTechStackItem from "./HeroTechStackItem";

export default function HeroTechStackSection() {
    const techStackItems = [
        {
            title: "JavaScript",
            iconName: "js-square"
        },
        {
            title: "React",
            iconName: "react"
        },
        {
            title: "HTML5",
            iconName: "html5"
        },
        {
            title: "CSS",
            iconName: "css3"
        },
        {
            title: "NodeJs",
            iconName: "node"
        },
        {
            title: "JAVA",
            iconName: "java"
        },
        {
            title: "Bootstrap",
            iconName: "bootstrap"
        },
        {
            title: "NPM",
            iconName: "npm"
        }
    ];

    return (
        <div className="hero-tech-stack-section">
            {techStackItems.map((item, index) => (
                <HeroTechStackItem
                    key={index}
                    skillTitle={item.title}
                    skillIcon={item.iconName}
                />
            ))}
        </div>
    );
}