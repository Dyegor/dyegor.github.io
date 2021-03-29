import React from "react";
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    contactButton: {
        ['@media (max-width:550px)']: {
            margin: "1em 0"
        }
    }
}));

export default function ContactButton(props) {
    const classes = useStyles();
    
    return (
        <Button className={classes.contactButton} variant="outlined" color="primary" href={props.buttonHref} download>{props.buttonName}</Button>
    );
}