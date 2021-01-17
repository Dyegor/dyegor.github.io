import React from "react";

export default function HeroTechStackItem(props) {
    return (
        <div class="tech-stack-item">
            <i class={"skill-icon fab fa-" + props.skillIcon + " fa-3x"}></i>
            <b><div class="tech-stack-item-subtext">{props.skillTitle}</div></b>
        </div>
    );
}