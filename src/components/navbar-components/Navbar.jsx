import React from "react";
import "../../../node_modules/bootstrap/dist/js/bootstrap.min.js"
import "../../../node_modules/jquery/dist/jquery.min.js"
import Navigation from "./Navigation";
import Buttons from "../buttons/navbar-buttons/Buttons";
import NavbarCollapse from "../buttons/navbar-buttons/NavbarCollapse.jsx";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark" id="navBar">
            <div className="container-fluid">
                <NavbarCollapse />
                <Navigation />
                <Buttons />
            </div>
        </nav>
    );
}