import React from "react";
import ContactButton from "./ContactButton";
import DownloadButton from "./DownloadButton";
import Divider from "../../divider/Divider";

export default function AboutButtons() {
    return (
        <div className="about-buttons">
            <DownloadButton
                dataFilter="all"
                buttonName="Download CV"
                buttonHref="static/Dmitriy_ Yegorov_CV.pdf"
            />
            <Divider
                style={{ width: '10px' }}
            />
            <ContactButton
                dataFilter="consulting"
                buttonName="Contact"
                buttonHref="mailto:yegorov.dmt@gmail.com"
            />
        </div>
    );
}