import React from'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from  '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import ButtonArrow from './ui/ButtonArrow';
import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../assets/mobileIcon.svg';
import websitesIcon from '../assets/websiteIcon.svg';

const useStyles = makeStyles(theme => ({
    specialText:{
        fontFamily: "Pacifico",
        color: theme.palette.common.orange,
    },
    subtitle:{
        marginBottom: "1em",
    },
    icon:{
        marginLeft: "2em",
        [theme.breakpoints.down("xs")]:{
            marginLeft: 0,
        },
    },
    servicesContainer:{
        marginTop: "10em",
        [theme.breakpoints.down("sm")]:{
            padding: 25,

        },
    },
}))


export default function Services(props){
    const classes = useStyles();
    const theme = useTheme();
    const matchesMaricielo = useMediaQuery(theme.breakpoints.down("sm"))

    return(
        <Grid conatainer direction="column">
            <Grid item style={{marginLeft: matchesMaricielo? 0 : "5em", marginTop: matchesMaricielo?"1em":"2em"}}>
                <Typography align={matchesMaricielo? "center": undefined} variant="h2" gutterBottom >Services</Typography>
            </Grid>
            <Grid item >{/*----MobileBlock----*/}
                <Grid container direction= "row" justify={matchesMaricielo ? "center": "flex-end"} 
                className={classes.servicesContainer} 
                style={{marginTop: matchesMaricielo? "1em" : "5em"}}> 
                    <Grid item 
                    style={{ textAlign: matchesMaricielo ? "center" : undefined, 
                    width: matchesMaricielo? undefined: "35em"}}>
                        <Typography variant="h4">
                            iOS/Android App Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Extend Functionality. Extend Acces. Incrase Engagement.
                        </Typography>
                        <Typography variant="subtitle1">
                            Integrer your web experience or create a standalone
                            {matchesMaricielo ? null : < br />} with either mobile plataform.
                        </Typography>
                        <Button component={Link} to="/mobileapps"  variant="outlined" 
                        className={classes.learnButton} onClick={()=>{props.setValue(1); props.setSelectedIndex(2)}}>
                            <span style={{marginRight: 10}} >Learn more</span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}></ButtonArrow>
                        </Button>
                    </Grid>
                    <Grid item style={{marginRight: matchesMaricielo ? 0 : "5em"}}>
                        <img className={classes.icon} alt="mobile apps icon" src={mobileAppsIcon} width="250"/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item >{/*----CustomBlock----*/}
                <Grid container direction= "row" justify={matchesMaricielo ? "center": undefined} 
                className={classes.servicesContainer}>
                    <Grid item style={{marginLeft: matchesMaricielo ? 0 : "5em", textAlign: matchesMaricielo ? "center" : undefined}}>
                        <Typography variant="h4">
                            Custom Software Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Save Energy. Save Time. Save Money.
                        </Typography>
                        <Typography variant="subtitle1">
                            Complete digital solutions, from investigation to 
                            <span className={classes.specialText}> celebration.</span>
                        </Typography>
                        <Button component={Link} to="/customsoftware"  variant="outlined"
                         className={classes.learnButton} onClick={()=>{props.setValue(1); props.setSelectedIndex(1)}}>
                            <span style={{marginRight: 10}} >Learn more</span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}></ButtonArrow>
                        </Button>
                    </Grid>
                    <Grid item>
                        <img className={classes.icon} alt="custom software icon" src={customSoftwareIcon}/>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item >{/*----websitesBlock----*/}
                <Grid container direction= "row" justify={matchesMaricielo ? "center": "flex-end"} 
                className={classes.servicesContainer} style={{marginBottom: "10em"}}>
                    <Grid item style={{textAlign: matchesMaricielo ? "center" : undefined,
                width: matchesMaricielo? undefined: "35em"}}>
                        <Typography variant="h4">
                            Websites Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Reach More. Discover More. Sell More.
                        </Typography>
                        <Typography variant="subtitle1">
                            Optimized for Search Engines, built for speed. 
                        </Typography>
                        <Button component={Link} to="/websites" variant="outlined" 
                        className={classes.learnButton} onClick={()=>{props.setValue(1); props.setSelectedIndex(3)}}>
                            <span style={{marginRight: 10}} >Learn more</span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}></ButtonArrow>
                        </Button>
                    </Grid>
                    <Grid item 
                    style={{marginRight: matchesMaricielo ? 0 : "5em"}}>
                        <img className={classes.icon} alt="custom software icon" src={websitesIcon}
                        width="250"/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}