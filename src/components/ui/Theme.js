import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const arcBlue = "#a7001e";
const arcOrange = "#FFBA60";
const arcGrey ="#777";

export default createMuiTheme({
    palette:{
        common:{
            blue: `${arcBlue}`,
            orange: `${arcOrange}`,
            grey:`${arcGrey}`,
        },
        primary:{
            main: `${arcBlue}`
        },
        secondary:{
            main: `${arcOrange}`
        }
    },
    typography:{
        tab:{
            fontFamily:"Raleway",
            textTransform: "noe",
            fontWeight: 700,
            fontSize: "1rem",
        },
        estimate:{
            fontFamily: "Pacifico",
            fontSize: "1rem",
            textTransform: "none",
            color:"white"
        },
        h2:{
            fontFamily:"Raleway",
            fontWeight: 700,
            fontSize: "2.5rem",
            color: arcBlue,
            lineHeight: 1.5,
        },
        h3:{
            fontFamily:"Pacifico",
            fontSize: "2.5rem",
            color : arcBlue,
        },
        h4:{
            fontFamily: "Raleway",
            fontSize: "1.75rem",
            color : `${arcBlue}`,
            fontWeight: 700,
        },
        h6:{
            fontFamily: "Raleway",
            color : `${arcBlue}`,
            lineHeight:1,
            fontWeight: 500,
        },
        subtitle1:{
            fontSize: "1.5rem",
            fontWeight: 300,
            color : arcGrey,
        },
        subtitle2:{
            fontSize: "1.25rem",
            fontWeight: 300,
            color : "white",
        },
        body1:{
            fontSize: "1.25rem",
            color: arcGrey,
            fontWeight: 300,
        },
        caption:{
            fontSize: "1rem",
            fontWeight: 300,
            color: arcGrey

        },
        learnButton:{
            borderColor: arcBlue,
            color: arcBlue,
            borderWidth: 2,
            textTransform: "none",
            borderRadius: 50,
            fontFamily: "Roboto",
            fontWeight: "bold",
        }
    },
    overrides: {
        MuiInputLabel:{
            root:{
                color:arcGrey,
                fontSize:"1rem",
            }
        },
        MuiInput:{
            root:{
                color:arcGrey,
                fontWeight:200,
                fontSize:"1rem"
            },
            underline: {
                "&:before":{
                    borderBottom:`2px solid ${arcGrey}`,
                },
                "&:hover:not($disabled):not($focused):not($error):before":{
                    borderBottom:`2px solid ${arcGrey}`,
                }
            }
        }
    }
});