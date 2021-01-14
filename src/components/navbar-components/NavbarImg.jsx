import React from "react";

export default function NavbarImg(props) {
    return (
        <span className="navbar-brand js-scroll-trigger d-none d-lg-block">
            <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={props.imgUrl} alt="navbar-img" />
        </span>
    );
}