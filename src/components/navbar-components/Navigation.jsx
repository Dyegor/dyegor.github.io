import React from "react";
import NavLink from "./NavLink";

export default function Navigation() {
        return (
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <NavLink title="About" link="/" />
                    <NavLink title="Portfolio" link="/portfolio" />
                </ul>
            </div>
        );
}