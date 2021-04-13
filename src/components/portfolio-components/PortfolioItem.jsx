import React from "react";
import PortfolioButton from "../buttons/portfolio-buttons/PortfolioButton";
import {
    makeStyles,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    Grid
} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        borderRadius: "2%",
        maxWidth: 370,
        margin: "3rem auto"
    },
    cardImg: {
        objectFit: "fill"
    },
    cardButtons: {
        padding: "1rem 1rem"
    }
});

export default function PortfolioItem(props) {
    const classes = useStyles();

    return (
        <Grid item xs={12} sm={12} md={4} spacing={3}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.cardImg}
                        component="img"
                        height="250"
                        image={props.imgSrc}
                        title={props.headerText}
                        href={props.liveLink}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.headerText}
                        </Typography>
                        <Typography variant="body2" component="h2">
                            {props.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardButtons}>
                    <PortfolioButton
                        buttonName="Live Demo"
                        buttonHref={props.liveLink}
                    />
                    <PortfolioButton
                        buttonName="GitHub"
                        buttonHref={props.gitHubLink}
                    />
                </CardActions>
            </Card>
        </Grid>
    );
}

