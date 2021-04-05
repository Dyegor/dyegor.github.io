import React from "react";

export default function HeroTechStackItem(props) {
    return (
        <div className="tech-stack-item">
            <img alt="skill-item" className="skill-icon" src={props.imgSrc} />
            <b><div className="tech-stack-item-subtext">{props.skillTitle}</div></b>
        </div>
    );
}