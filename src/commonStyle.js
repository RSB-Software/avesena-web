export const commonStyles = theme => ({
    container: {
      flex: 1,
      margin: theme.spacing(0, 0, 0),
      position: "absolute",
      width: "100%",
      height: "100vh",
      backgroundColor: theme.palette.text.white,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(0.5, 2.5, 3)
    },
    root: {
      flexGrow: 1,
      justifyContent: "center"
    },
    clearBoth:{
        clear:"both"
    },
    toLeft:{
        float:"left"
    },
    toRight:{
        float:"right"
    },
    logoImage:{
        padding:"15px 0 0 15px",
    },
    userHeaderBar:{
        backgroundColor:"#8F2B16",
        color:"#ffffff",
        textAlign:"center",
        padding:"10px"
    },
    userHeaderMenu:{
        backgroundColor: "#682517",
        color:"#ffffff !important"
    },
    menuItems:{
        color:"#ffffff !important",
        "& a":{
            color:"#ffffff !important",
        },
        "& a:hover":{
            backgroundColor:"#8F2B16 !important",
        },
        "& div":{
            backgroundColor:"#682517"
        }
    },
    myAcntMenuItems:{
        color:"#ffffff !important",
        float:"right",
        "& a":{
            color:"#ffffff !important",
            paddingTop:"0px",
        },
        "& a:hover":{
            backgroundColor:"#8F2B16 !important",
        },
        "& div":{
            backgroundColor:"#8F2B16",
            zIndex:"10000"
        }
    },
    menuIcoPad:{
        marginRight:"2px",
        marginBottom:"2px"
    },
    pageHeadingBar:{
        color:"#ffffff",
        backgroundColor:"#3C130B",
        padding:"5px",
        textAlign:"center"
    },
    eachDashboardCard:{
        width:"45%",
        margin:"1.5%",
        float:"left",
        height:"350px",
        overflow:"auto !important"
    },
    eachDashboardCardMedium:{
        width:"63%",
        margin:"1.5%",
        float:"left",
        height:"350px",
        overflow:"auto !important"
    },
    eachDashboardCardFull:{
        width:"97%",
        margin:"1.5%",
        float:"left",
        height:"350px",
        overflow:"auto !important"
    },
    eachDashboardCardJobApp:{
        width:"100%",
        margin:"0% 0% 1.5% 0",
        float:"left",
        overflow:"auto !important"
    },
    eachDashboardCardHeader:{
        fontSize:"18px !important",
        borderBottom:"2px solid #8F2B16",
        textAlign:"left",
        padding:"5px"
    },
    eachDashboardCardContent:{
        padding:"5px !important"
    },
    eachDashboardCardAutoHeight:{
        width:"63%",
        margin:"1.5%",
        marginLeft:"18%",
        float:"left",
        minHeight:"350px"
    },
    eachSignupCard:{
        width:"70%",
        margin:"3% auto",
        minHeight:"510px",
        overflow:"auto !important"
    },
    eachLoginCard:{
        width:"94%",
        margin:"3%",
        float:"left",
        minHeight:"470px",
        overflow:"auto !important"
    },
    eachSignupCardHeader:{
        fontSize:"18px !important",
        borderBottom:"2px solid #8F2B16",
        textAlign:"left",
        padding:"5px"
    },
    eachSignupCardContent:{
        padding:"5px !important",
        width:"94%",
        margin:"3%"
    },
    eachLoginCardContent:{
        padding:"5px !important",
        width:"80%",
        margin:"20% 0 0 9%"
    },
    signUpHalf:{
        width:"49% !important"
    },
    signupLabel:{

    },
    dashboardLeft:{
        width:"20% !important",
        float:"left !important"
    },
    dashboardRight:{
        width:"80% !important",
        float:"right !important"
    },
    eachListingPageCardFull:{
        width:"97%",
        margin:"1.5%",
        float:"left",
        minHeight:"700px",
        overflow:"auto !important"
    },
    eachListingPageCardContent:{
        padding:"5px !important",
        backgroundColor:"#eeeeee"
    },
    dashboardLeftList:{
        width:"97%",
        margin:"1.5%",
        float:"left",
        height:"700px",
        overflow:"auto !important"
    }
  });
  