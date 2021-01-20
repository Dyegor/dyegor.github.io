import React from "react";
import ContactButton from "./ContactButton";
import DownloadButton from "./DownloadButton";

export default function AboutButtons() {
    return (
        <div className="port-head-cont about-buttons">
            <ContactButton
                dataFilter="consulting"
                buttonName="Contact"
                buttonHref="mailto:yegorov.dmt@gmail.com"
            />
            <div class="divider" />
            <DownloadButton
                dataFilter="all"
                buttonName="Download CV"
                buttonHref="static/Dmitriy_Yegorov_CV.pdf"
            />
        </div>
    );
}