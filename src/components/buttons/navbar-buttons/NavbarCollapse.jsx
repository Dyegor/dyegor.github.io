import React from "react";
import "../../../../node_modules/bootstrap/dist/js/bootstrap.min.js"
import "../../../../node_modules/jquery/dist/jquery.min.js"

export default function NavbarCollapse() {
    return (
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
    );
}


