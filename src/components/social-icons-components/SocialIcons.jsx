import React from "react";
import SocialIcon from "./SocialIcon";

export default function SocialIcons() {
    const socialIconsItems = [
        {
            link: "https://www.linkedin.com/in/dmitriy-y-854a8b16a/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BwA6JBOOeQkeBWWIZQ4oB1w%3D%3D",
            iconName: "linkedin"
        },
        {
            link: "https://github.com/Dyegor",
            iconName: "github"
        },
        {
            link: "https://www.facebook.com/profile.php?id=100001211329207",
            iconName: "facebook"
        }
    ];


    return (
        <div class="social-icons">
            <ul className="list-inline list-social-icons mb-0">
                {socialIconsItems.map((item, index) => (
                    <SocialIcon
                        key={index}
                        link={item.link}
                        icon={item.iconName}
                    />
                ))}
            </ul>
        </div>
    );
}