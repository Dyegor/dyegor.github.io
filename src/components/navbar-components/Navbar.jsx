import React from "react";
import NavbarImg from "./NavbarImg";
import Navigation from "./Navigation";
import Buttons from "../buttons/Buttons";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <NavbarImg />
            <Navigation />
            <Buttons />
        </nav>
    );
}