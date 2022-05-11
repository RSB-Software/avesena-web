import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { commonStyles } from "../../commonStyle";
import { withStyles } from '@mui/styles';

import { Grid } from '@mui/material';
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import { userActions,alertActions } from '../../_actions';

class UserLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formObjects: [
                "userName","password"
            ],
            signupFormData:{
                    userName:"",
                    password:""    
                },
            signupFormDataError:{}
        }

        this.formInputChangeHandler =this.formInputChangeHandler.bind(this);
        this.submitSignupForm = this.submitSignupForm.bind(this);
        this.submitLoginUser = this.submitLoginUser.bind(this);
    }

    formInputChangeHandler(event){
        const { signupFormData, signupFormDataError } = this.state
        if(event.target.value.trim() == ""){ 
            signupFormDataError[event.target.name] = "Please enter valid value";
        }else{
            delete signupFormDataError[event.target.name];
            signupFormData[event.target.name] = event.target.value;
        }
        this.setState({...this.state, signupFormData: signupFormData, signupFormDataError: signupFormDataError});
    }

    async submitSignupForm(){
        const { signupFormData, signupFormDataError, formObjects } = this.state;
       
        const formObjects1 = formObjects.map((element)=>{
            if(signupFormData[element].trim()==""){
                signupFormDataError[element] = "Please enter valid value";
                //return jobFormDataError;
            }else{
                delete signupFormDataError[element];
            }
        });
        this.setState({...this.state, signupFormDataError: signupFormDataError});

        if(Object.keys(this.state.signupFormDataError).length == 0){
            this.submitLoginUser()
        }
    }   

    async submitLoginUser() {
        const { signupFormData, signupFormDataError, formObjects } = this.state;

        signupFormData["id"] = Math.floor(Math.random() * 100000);
        signupFormData["userId"] = Math.floor(Math.random() * 100000);
        let data = {
            //"id": signupFormData["id"],
            "userName": signupFormData["userName"],
            "password": signupFormData["password"]
          }
        
        this.props.userlogin(data);

        const formObjects1 = formObjects.map((element)=>{
            signupFormData[element] = "";
            delete signupFormDataError[element];
        });
        this.setState({...this.state, signupFormData: signupFormData, signupFormDataError: signupFormDataError});

        document.getElementById("signupForm").reset();
        return false;
    }

    
    render() {
        const { classes, alertMessages } = this.props;
        const { signupFormData,signupFormDataError } = this.state;

      return  (
        <div className="">
            <Grid>
                <form id="signupForm">
                    <Card className={classes.eachLoginCard}>
                        <Typography className={classes.eachSignupCardHeader}>Login User</Typography>
                        {alertMessages.type?<Alert severity={alertMessages.type}>{alertMessages.message}</Alert>:""}
                        <CardContent className={classes.eachLoginCardContent}>
                            <TextField 
                                type="text" variant="outlined" fullWidth margin="dense" size="small"
                                label="Username" placeholder="Username" name="userName" onBlur={this.formInputChangeHandler}
                                helperText={(signupFormDataError.userName && signupFormDataError.userName.trim()!="")?signupFormDataError.userName:""} 
                                error={(signupFormDataError.userName && signupFormDataError.userName.trim()!="")?true:false}
                            />
                            <TextField 
                                type="password" variant="outlined" fullWidth margin="dense" size="small"
                                label="Password" placeholder="Password" name="password" onBlur={this.formInputChangeHandler}
                                helperText={(signupFormDataError.password && signupFormDataError.password.trim()!="")?signupFormDataError.password:""} 
                                error={(signupFormDataError.password && signupFormDataError.password.trim()!="")?true:false}
                            />
                            <Button style={{marginTop:"10px", marginBottom:"10px"}} className={classes.toRight} variant="contained"
                                onClick={this.submitSignupForm} endIcon={<LoginIcon />}>
                                Login
                            </Button>
                        </CardContent>
                    </Card>
                </form>
            </Grid>
      </div>
      );
    }
  }

function mapState(state) {
    const { alert } = state;
    const { registering } = state.registration;
    const alertMessages = state.alert;
    return { alert, registering, alertMessages };
}

const actionCreators = {
    userlogin: userActions.userlogin
};

export default connect(mapState,actionCreators)(withStyles(commonStyles)(UserLogin));