import React from "react";
import "../../../node_modules/bootstrap/dist/js/bootstrap.min.js"
import "../../../node_modules/jquery/dist/jquery.min.js"
import PortfolioItem from "./PortfolioItem";
import {
    makeStyles,
    Grid
} from '@material-ui/core';
import portfolioData from "../../data/portfolioData";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    }
}));

export default function PortfolioContent() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3} justify="center">
                {portfolioData.map((project, index) => {
                    return (
                        <PortfolioItem
                            key={index}
                            headerText={project.headerText}
                            liveLink={project.liveLink}
                            gitHubLink={project.gitHubLink}
                            imgSrc={project.imgSrc}
                            description={project.description}
                        />
                    );
                })};
            </Grid>
        </div>
    );
}