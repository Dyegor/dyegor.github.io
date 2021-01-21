import React from "react";
import ContactButton from "./ContactButton";
import DownloadButton from "./DownloadButton";
import Divider from "../../divider/Divider";

export default function AboutButtons() {
    return (
        <div className="port-head-cont about-buttons">
            <ContactButton
                dataFilter="consulting"
                buttonName="Contact"
                buttonHref="mailto:yegorov.dmt@gmail.com"
            />
            <Divider
                style={{width: '10px'}}
            />
            <DownloadButton
                dataFilter="all"
                buttonName="Download CV"
                buttonHref="static/Dmitriy_Yegorov_CV.pdf"
            />
        </div>
    );
}