import React from "react";

export default function SocialIcon(props) {
    return (
        <a href={props.link}>
            <li className="list-inline-item">
                <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x" />
                    <i className={"fab fa-" + props.icon + " fa-stack-1x fa-inverse"} />
                </span>
            </li>
        </a>
    );
}