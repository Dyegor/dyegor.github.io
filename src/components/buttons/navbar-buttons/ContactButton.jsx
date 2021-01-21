import React from "react";
import Button from '@material-ui/core/Button';


export default function ContactButton(props) {
    return (
        <Button variant="contained" color="primary" href={props.buttonHref}>{props.buttonName}</Button>
    );
}