import React from "react";
import AboutHeading from "./AboutHeading";
import AboutSubheading from "./AboutSubheading";
import AboutDescription from "./AboutDescription";
import SocialIcons from "../social-icons-components/SocialIcons";

export default function About() {
    return (
        <section className="resume-section d-column">
            <AboutHeading />
            <AboutSubheading />
            <AboutDescription />
            <SocialIcons />
        </section>
    );
}