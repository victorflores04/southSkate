import React, {useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ButtonArrow from "./ui/ButtonArrow";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';

import background from  '../assets/background.jpg';
import mobileBackground from '../assets/mobileBackground.jpg';
import phoneIcon from '../assets/phone.svg';
import emailIcon from '../assets/email.svg';

import airplane from '../assets/send.svg';

const useStyles = makeStyles(theme=>({
    background:{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize:  "cover",
        backgroundRepeat: "no-repeat",
        height: "50em",
        paddingBottom: "10em",
        [theme.breakpoints.down("md")]:{
            backgroundImage: `url(${mobileBackground})`,
        },
    },
    estimateButton:{
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 45,
        width: 150,
        backgroundColor: theme.palette.common.orange,
        fontSize: "1.3rem",
        marginRight: "5em",
        marginLeft: "2em",
        [theme.breakpoints.down("md")]:{
            marginLeft: 0,
            marginRight: 0,
        },
        "&:hover":{
            backgroundColor: theme.palette.secondary.light
        }
    },
    learnButton:{
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down("md")]:{
            marginBottom: "2em",
        },
    },
    message:{
        border:`2px solid ${theme.palette.common.grey}`,
        marginTop:"1.5em",
    },
    sendButton:{
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 40,
        width: 150,
        fontSize: "1rem",
        backgroundColor: theme.palette.common.orange,
        "&:hover":{
            backgroundColor: theme.palette.secondary.light,
        },
        [theme.breakpoints.down("sm")]:{
            height: 40,
            width: 225,
        }
    }
}));

export default function Contact(props){
    const classes= useStyles();
    const theme= useTheme();

    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

    const [name, setName]= useState('');
    const [email, setEmail]= useState('');
    const [emailHelper, setEmailHelper]=useState('')
    const [phone, setPhone]= useState('');
    const [phoneHelper, setPhoneHelper]=useState('')
    const [message, setMessage]=useState('');
    
    const [open,setOpen]=useState(false);

    const [loading, setLoading]= useState(false);
    const [alert,setAlert]= useState({open: false, message:"",backgroundColor:""})

    const onChange= event =>{
        let valid;
        switch(event.target.id){
            case 'email':
                setEmail(event.target.value)
                valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)
                if (!valid){
                    setEmailHelper("Invalid Email")
                } else{
                    setEmailHelper("")
                }
                break;
            case 'phone':
                setPhone(event.target.value)
                valid= /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/.test(event.target.value)
                if(!valid) {
                    setPhoneHelper("Invalid Phone")
                }else{
                    setPhoneHelper("")
                }
                break;

            default:
                    break;
        }
    };
    
    const onConfirm=()=>{
        setLoading(true)
        axios.get('https://us-central1-southone.cloudfunctions.net/sendMail',{params:{
            name:name,
            email:email,
            phone:phone,
            message:message,
        }})
        .then(res=>{
            setLoading(false)
            setOpen(false)
            setName("")
            setEmail("")
            setPhone("")
            setMessage("")
            setAlert({open: true, message:"Message sent successfully!",backgroundColor:"#4BB543"})

        })
        .catch(err=>{setLoading(false); setAlert({open: true, message:"Something went wrong, please try again!",backgroundColor:"#FF3232"})});
    };

    const buttonContents=(
        <React.Fragment>
             Send Message <img src={airplane} alt="paper airplane" style={{marginLeft:"1em"}}/>
        </React.Fragment>
    )

    return(
        <Grid container direction="row">
            <Grid item container direction="column" justify="center" alignItems="center" style={{marginBottom: matchesMD?"2em":0, marginTop:matchesSM?"0.5em": matchesMD?"2em":0}} lg={5} xl={3}>
             <Grid item>
                 <Grid container direction="column">
                 <Grid item>
                    <Typography align={matchesMD?"center":undefined} variant="h2" style={{lineHeight: 1}}>Contact Us</Typography>
                    <Typography align={matchesMD?"center":undefined} variant="body1" style={{color:theme.palette.common.grey}}>We’re waiting.</Typography>
                </Grid>
                <Grid item container style={{marginTop:"1em"}}>
                    <Grid item>
                        <img src={phoneIcon} alt="phone"  style={{marginRight: "0.5em"}}/>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" style={{color:theme.palette.common.grey, fontSize: "1rem"}}><a href="tel:986695452" style={{textDecoration:"none",color:"inherit"}}>(986) 695-452</a></Typography>
                    </Grid>
                </Grid>
                <Grid item container style={{marginBottom:"1em"}}>
                    <Grid item>
                        <img src={emailIcon} alt="evenlope"  style={{marginRight: "0.5em", verticalAlign: "bottom"}}/>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" style={{color:theme.palette.common.grey, fontSize: "1rem"}}><a href="mailto:flroes.vicf@gmail.com" style={{textDecoration:"none",color:"inherit"}}>flores.vicf@gmail.com </a></Typography>
                    </Grid>
                </Grid>
                <Grid item container direction="column" style={{maxWidth:"30em"}} >
                    <Grid item style={{marginBottom:"0.3em"}}>
                        <TextField label="Name" id="name" fullWidth value={name} onChange={(event)=>setName(event.target.value)}/>
                    </Grid>
                    <Grid item style={{marginBottom:"0.3em"}}>
                        <TextField label="Email" helperText={emailHelper} error={emailHelper.length !==0}id="email" fullWidth value={email} onChange={onChange}/>
                    </Grid>
                    <Grid item style={{marginBottom:"0.3em"}}>
                        <TextField label="Phone" helperText={phoneHelper} error={phoneHelper.length !==0}  id="phone" fullWidth value={phone} onChange={onChange}/>
                    </Grid>
                </Grid>
                <Grid item style={{maxWidth:"15em"}}>
                    <TextField InputProps={{disableUnderline: true}} value={message} className={classes.message} multiline fullWidth rows={5} id="message" onChange={(event)=>setMessage(event.target.value)}/>
                </Grid>
                <Grid item container justify="center" style={{marginTop:"1em"}}>
                     <Button disabled={email.length===0 || phone.length===0 ||name.length ===0 || message.length===0 ||phoneHelper.length!==0||emailHelper.length!==0} variant="contained" className={classes.sendButton} onClick={()=>setOpen(true)}>{buttonContents}</Button>
                </Grid>
                 </Grid>
             </Grid>
            </Grid>
            <Dialog open={open} style={{zIndex:1302}} fullScreen={matchesXS} onClose={()=>setOpen(false)} PaperProps={{style:{paddingTop:matchesXS?"0.5em":"0.01em", paddingBottom:matchesXS?"0.5em":"2em",paddingLeft:matchesXS?0:matchesSM?"5em": matchesMD?"2.5em":"10em", paddingRight:matchesXS?0:matchesSM?"1em": matchesMD?"2.5em":"10em"}}}>
                <DialogContent>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography align="center" variant="h4" gutterBottom>Confirm Message</Typography>
                        </Grid>
                        <Grid item style={{marginBottom:"0.3em"}}>
                        <TextField label="Name" id="name" fullWidth value={name} onChange={(event)=>setName(event.target.value)}/>
                        </Grid>
                        <Grid item style={{marginBottom:"0.3em"}}>
                        <TextField label="Email" helperText={emailHelper} error={emailHelper.length !==0}id="email" fullWidth value={email} onChange={onChange}/>
                        </Grid>
                        <Grid item style={{marginBottom:"0.3em"}}>
                        <TextField label="Phone" helperText={phoneHelper} error={phoneHelper.length !==0}  id="phone" fullWidth value={phone} onChange={onChange}/>
                    </Grid>
                    </Grid>
                        <Grid item style={{maxWidth:matchesXS?"100%":"15em"}}>
                            <TextField InputProps={{disableUnderline: true}} value={message} className={classes.message} multiline fullWidth rows={10} id="message" onChange={(event)=>setMessage(event.target.value)}/>
                        </Grid>
                        <Grid item container direction={matchesSM?"column":"row"} style={{marginTop:"0.5em"}} alignItems="center">
                            <Grid item>
                                <Button style={{fontWeight:300}} color="primary" onClick={()=>setOpen(false)} >Cancel</Button>
                            </Grid>
                            <Grid item>
                                <Button disabled={email.length===0 || phone.length===0 ||name.length ===0 || message.length===0 ||phoneHelper.length!==0||emailHelper.length!==0} 
                                variant="contained" className={classes.sendButton} onClick={onConfirm}>{loading?<CircularProgress size= {30}/> : buttonContents}</Button>
                            </Grid>
                        </Grid>
                </DialogContent>
            </Dialog>
            <Snackbar open={alert.open} message={alert.message} 
            ContentProps={{style:{backgroundColor: alert.backgroundColor}}} 
            anchorOrigin={{vertical:"top", horizontal:"center"}} 
            onClose={()=>setAlert({...alert, open: false})} 
            autoHideDuration={4000}/>
            <Grid item container className={classes.background} direction={matchesMD?"column":"row"} alignItems="center" justify={matchesMD?"center":undefined} lg={7} xl={9}>
            <Grid item style={{marginLeft: matchesMD ? 0 : "3em", textAlign: matchesMD ? "center" : "inherit"}}>
            <Grid container direction="column">
                <Grid item>
                    <Typography align={matchesMD ? "center" : undefined} variant="h2">
                        Simple software. <br/> Revolutionary Results. 
                    </Typography>
                    <Typography  align={matchesMD ? "center" : undefined} variant="subtitle2" style={{fontSize:"1.5rem"}}>
                        Take advange of the 21st Century.
                    </Typography>
                    <Grid container justify={matchesMD ? "center" : undefined} item>
                        <Button component={Link} to="/revolution"  variant="outlined"
                          className={classes.learnButton} onClick={()=>props.setValue(2)}>
                            <span style={{marginRight: 5}} >Learn more</span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                        </Button>
                        </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid item >
            <Button component={Link} to="/estimate" 
                 variant="contained" className={classes.estimateButton}
                onClick={()=>props.setValue(5)}>
                 Free Estimate
            </Button>
        </Grid>
        </Grid>
        </Grid>
    )
}