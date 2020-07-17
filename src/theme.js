import {createMuiTheme} from "@material-ui/core";


export const theme = createMuiTheme({
    palette: {
        text: {
            primary: '#15963e',
            secondary: '#73c78e',
            error: '#d9441e',
            info: '#3493cf'
        }
    },
    typography: {
        fontFamily: 'Roboto',
        fontSize: 15,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 600,
        useNextVariants: true,
        h1: {
            fontSize: 60,
            fontWeight: 700,
            letterSpacing: '0.01em'
        },
        h2: {
            fontSize: 50
        },
        h3: {
            fontSize: 40,
            fontWeight: 600
        },
        h4: {
            fontSize: 30
        },
        h5: {
            fontSize: 20
        },
        h6: {
            fontSize: 18
        },
        body1: {
            fontSize: 16
        },
        subtitle1: {
            fontSize: 50,
            textAlign: "center",
            width: '100%',
            height: 150,
        },
    },
    overrides: {
        MuiCssBaseline: {
            // Name of the rule
            html: {
                margin: 0,
                padding: 0
            }
        },
        MuiAccordion: {
            root: {
                margin: '10px 0px',
            }
        },
        MuiAccordionSummary: {
          root: {
              padding: '5px 35px',
              fontSize: 16,
              height: 70,
          }
        },
        MuiLink: {
            root: {
                padding: '25px 50px',
                cursor: 'pointer'
            },
            underlineHover: {
                '&:hover': {
                    transition: 1,
                    textDecoration: 'none',
                    backgroundColor: 'rgba(21, 150, 62,0.1)'
                }
            }
        },
        MuiTabs: {
            flexContainer: {
              justifyContent: 'space-between'
          }
        },
        MuiSvgIcon: {
            root: {
                width: 100,
                height: 100,
                color: '#15963e',
                '&:hover': {
                    cursor: 'pointer',
                    color: '#d9441e',
                }
            },

        },
        MuiCard: {
            root: {
                color: '#3493cf',
            },

        },
        MuiButton: {
            text: {
                padding: '0 20px'
            },
            root: {
                position: 'relative',
                width: '200px',
                height: '40px',
                border: 'none',
                fontSize: '14px',
                fontWeight: 600,
                letterSpacing: '0.05em',
                lineHeight: '17px',
                textTransform: 'uppercase',
                boxShadow: 'inherit',
                marginBottom: 15,
                padding: '0 20px 0 20px',

                '&:hover': {
                    border: 'none',
                    boxShadow: 'inherit',
                    opacity: .7
                },
                '&:disabled': {
                    border: 'none',
                    boxShadow: 'inherit'
                },
                '&.cancel': {
                    color: '#FFF',
                    backgroundColor: '#d9441e',
                },

                '&.accept': {
                    color: '#FFF',
                    backgroundColor: '#15963e',
                }
            }
        }
    }
})