import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import  Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

import footerAdornment from "../../assets/Footer Adornment.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";



const useStyles= makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.blue,
        width: "100%",
        zIndex: 1302,
        position: "relative",
    },
    adornment:{
        width: "20.5em",
        verticalAlign:"bottom",
        [theme.breakpoints.down("md")]:{
            width: "21em",
        },
        [theme.breakpoints.down("xs")]:{
            width: "15em",
        },
    },
    mainContainer:{
        position: "absolute",
    },
    link:{
        color: "white",
        fontFamily: "Arial",
        fontSize: "0.75rem",
        fontWeight: "bold",
        textDecoration: "none",

    },
    gridItem:{
        margin: "3em"
    },
    icon:{
        height: "3em",
        width: "3em",
        [theme.breakpoints.down("xs")]:{
            height: "2.5em",
            width: "2.5em",

        }

    },
    socialContainer:{
        position: "absolute",
        marginTop: "-6em",
        right: "1.5em",
        [theme.breakpoints.down("xs")]:{
            right: "0.6em"
            
        }

    }
}))

export default function Footer(props){
    const classes = useStyles()
    return (

    <footer className={classes.footer}>
        <Hidden mdDown>
        <Grid container justify="center" className={classes.mainContainer}>
            <Grid item className={classes.gridItem}>
                <Grid container direction="column" spacing={2}>
                    <Grid item component={Link} onClick={()=>props.setValue(0)} to="/" className={classes.link}>
                        Home
                    </Grid>
                </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
                <Grid container direction="column" spacing={2}>
                    <Grid item component={Link} onClick={()=>{props.setValue(1); props.setSelectedIndex(0)}} to="/services" className={classes.link}>
                        Services
                    </Grid>
                    <Grid item component={Link} to="/customsodftware" className={classes.link}
                    onClick={()=>{props.setValue(1); props.setSelectedIndex(1)}}>
                        Custom Software Development
                    </Grid>
                    <Grid item component={Link} to="/mobileapps" className={classes.link}
                    onClick={()=>{props.setValue(1); props.setSelectedIndex(2)}}>
                        iOS/Android Apps Development
                    </Grid>
                    <Grid item component={Link} to="/websites" className={classes.link}
                    onClick={()=>{props.setValue(1); props.setSelectedIndex(3)}}>
                        Websites Development
                    </Grid>
                </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
                  <Grid container direction="column" spacing={2}>
                    <Grid item component={Link} to="/revolution" className={classes.link}
                    onClick={()=>props.setValue(2)}>
                        The revolution
                    </Grid>
                    <Grid item component={Link} to="/revolution" className={classes.link}
                    onClick={()=>props.setValue(2)}>
                        Vision
                    </Grid>
                    <Grid item component={Link} to="/revolution" className={classes.link}
                    onClick={()=>props.setValue(2)}>
                        Tecnology
                    </Grid>
                    <Grid item component={Link} to="/revolution" className={classes.link}
                    onClick={()=>props.setValue(2)}>
                        Process
                    </Grid>
                  </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
                <Grid container direction="column" spacing={2}> 
                    <Grid item component={Link} onClick={()=>props.setValue(3)} to="/about" className={classes.link}>
                        About us
                    </Grid>
                    <Grid item component={Link} onClick={()=>props.setValue(3)} to="/about" className={classes.link}>
                        History
                    </Grid>
                    <Grid item component={Link} onClick={()=>props.setValue(3)} to="/about" className={classes.link}>
                        Team
                    </Grid>
                </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
                <Grid container direction="column" spacing={2}>
                    <Grid item component={Link} onClick={()=>props.setValue(4)} to="/contact" className={classes.link}>
                        Contact Us
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        </Hidden>
        <img alt="black decorative slash" src={footerAdornment} className={classes.adornment} />
        <Grid container justify="flex-end" spacing={2} className={classes.socialContainer}>
            <Grid item component={"a"} href="http://www.facebook.com" rel="noopener noreferrer"
            target="_blank">
                <img alt="facebook logo" src={facebook} className={classes.icon} />
            </Grid>
            <Grid item component={"a"} href="http://www.twitter.com"rel="noopener noreferrer"
            target="_blank">
                <img alt="twitter logo" src={twitter} className={classes.icon} />
            </Grid>
            <Grid item component={"a"} href="http://www.instagram.com" rel="noopener noreferrer"
            target="_blank">
                <img alt="instagram logo" src={instagram} className={classes.icon} />
            </Grid>
        </Grid>
    </footer>
    );

}