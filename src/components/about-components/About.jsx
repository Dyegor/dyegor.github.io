import React from "react";
import AboutHeader from "./AboutHeader";
import HeroSkills from "./hero-components/HeroSkills";
import SocialIcons from "../social-icons-components/SocialIcons";

export default function About() {
    return (
        <div class="about-my-auto">
            <AboutHeader />
            <SocialIcons />
            <HeroSkills />
        </div>
    );
}