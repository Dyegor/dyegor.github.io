import React from "react";
import Button from '@material-ui/core/Button';


export default function LiveButton(props) {
    return (
        <div className="portfolio-button">
            <Button variant="contained" color="secondary" href={props.buttonHref}>{props.buttonName}</Button>
        </div>
    );
}