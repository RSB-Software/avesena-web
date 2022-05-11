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
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { userActions,alertActions } from '../../_actions';

class UserSignup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formObjects: [
                "firstName","lastName","userName","emailId","password","phone"
            ],
            signupFormData:{
                    firstName:"",
                    lastName: "",
                    userName:"",
                    emailId:"",
                    password:"",
                    postedBy: "Admin",
                    postedOn: new Date(),
                    active: true,
                    salutation:"Mr.",
                    roles:"USER"    
                },
            signupFormDataError:{}
        }

        this.formInputChangeHandler =this.formInputChangeHandler.bind(this);
        this.submitSignupForm = this.submitSignupForm.bind(this);
        this.submitNewUser = this.submitNewUser.bind(this);
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
            this.submitNewUser()
        }
    }   

    async submitNewUser() {
        const { signupFormData, signupFormDataError, formObjects } = this.state;

        signupFormData["id"] = Math.floor(Math.random() * 100000);
        signupFormData["userId"] = Math.floor(Math.random() * 100000);
        let data = {
            "salutation":signupFormData["salutation"],
            "firstName": signupFormData["firstName"],
            "lastName": signupFormData["lastName"],
            "emailId": signupFormData["emailId"],
            "gender":"",
            "phone": signupFormData["phone"],
            "alternatePhone":null,
            "socialSecurityNumber":null,
            "drivingLicenceNumber":null,
            "createdBy": "Admin",
            "updatedBy":"Admin",
            "middleName":"",
            "dateOfBirth": null,
            "picture":null,
            "userAuth": {
              "userName": signupFormData["userName"],
              "password": signupFormData["password"],
              "roles": signupFormData["roles"],
              "active": "true",
              "createdBy": "Admin",
              "loginAttempt":0
            }
          }
          
        
        this.props.userregister(data);

        const formObjects1 = formObjects.map((element)=>{
            signupFormData[element] = "";
            delete signupFormDataError[element];
        });
        this.setState({...this.state, signupFormData: signupFormData, signupFormDataError: signupFormDataError});

        document.getElementById("signupForm").reset();
        return false;
    }

    handleSalutChange = (event) => {
        const { signupFormData } = this.state;
        signupFormData["salutation"] = event.target.value;
        this.setState({...this.state,signupFormData:signupFormData});
    };
    handleRoleChange = (event) => {
        const { signupFormData } = this.state;
        signupFormData["roles"] = event.target.value;
        this.setState({...this.state,signupFormData:signupFormData});
    };
    render() {
        const { classes, alertMessages } = this.props;
        const { signupFormData,signupFormDataError } = this.state;

      return  (
        <div className="">
            <Grid>
                <Typography className={classes.pageHeadingBar}>Create New User</Typography>
                <Grid>
                    <form id="signupForm">
                        <Card className={classes.eachSignupCard}>
                            <Typography className={classes.eachSignupCardHeader}>Please fill in the user details</Typography>
                            {alertMessages.type?<Alert severity={alertMessages.type}>{alertMessages.message}</Alert>:""}
                            <CardContent className={classes.eachSignupCardContent}>
                                {/* <label className={classes.signupLabel}>First Name</label> */}
                                <FormControl fullWidth>
                                    <InputLabel id="salutation">Salutation</InputLabel>
                                    <Select
                                        labelId="salutation"
                                        size="small"
                                        name="salutation"
                                        defaultValue={this.state.signupFormData.salutation}
                                        label="Salutation"
                                        onChange={this.handleSalutChange}
                                    >
                                        <MenuItem value="Mr.">Mr.</MenuItem>
                                        <MenuItem value="Mrs.">Mrs.</MenuItem>
                                    </Select>
                                </FormControl>
                                <TextField 
                                    type="text" variant="outlined" fullWidth margin="dense" size="small"
                                    label="First Name" placeholder="First Name" name="firstName" onBlur={this.formInputChangeHandler}
                                    helperText={(signupFormDataError.firstName && signupFormDataError.firstName.trim()!="")?signupFormDataError.firstName:""} 
                                    error={(signupFormDataError.firstName && signupFormDataError.firstName.trim()!="")?true:false}
                                />
                                <TextField 
                                    type="text" variant="outlined" fullWidth margin="dense" size="small"
                                    label="Last Name" placeholder="Last Name" name="lastName" onBlur={this.formInputChangeHandler}
                                    helperText={(signupFormDataError.lastName && signupFormDataError.lastName.trim()!="")?signupFormDataError.lastName:""} 
                                    error={(signupFormDataError.lastName && signupFormDataError.lastName.trim()!="")?true:false}
                                />
                                <TextField 
                                    type="text" variant="outlined" fullWidth margin="dense" size="small"
                                    label="Username" placeholder="Username" name="userName" onBlur={this.formInputChangeHandler}
                                    helperText={(signupFormDataError.userName && signupFormDataError.userName.trim()!="")?signupFormDataError.userName:""} 
                                    error={(signupFormDataError.userName && signupFormDataError.userName.trim()!="")?true:false}
                                />
                                <TextField 
                                    type="email" variant="outlined" fullWidth margin="dense" size="small"
                                    label="Email Id" placeholder="Email Id" name="emailId" onBlur={this.formInputChangeHandler}
                                    helperText={(signupFormDataError.emailId && signupFormDataError.emailId.trim()!="")?signupFormDataError.emailId:""} 
                                    error={(signupFormDataError.emailId && signupFormDataError.emailId.trim()!="")?true:false}
                                />
                                <TextField 
                                    type="password" variant="outlined" fullWidth margin="dense" size="small"
                                    label="Password" placeholder="Password" name="password" onBlur={this.formInputChangeHandler}
                                    helperText={(signupFormDataError.password && signupFormDataError.password.trim()!="")?signupFormDataError.password:""} 
                                    error={(signupFormDataError.password && signupFormDataError.password.trim()!="")?true:false}
                                />
                                <TextField 
                                    type="text" variant="outlined" fullWidth margin="dense" size="small"
                                    label="Phone no." placeholder="Phone no." name="phone" onBlur={this.formInputChangeHandler}
                                    helperText={(signupFormDataError.phone && signupFormDataError.phone.trim()!="")?signupFormDataError.phone:""} 
                                    error={(signupFormDataError.phone && signupFormDataError.phone.trim()!="")?true:false}
                                />
                                <FormControl fullWidth margin="dense">
                                    <InputLabel id="userrole">Role</InputLabel>
                                    <Select
                                        labelId="userrole"
                                        size="small"
                                        name="roles"
                                        defaultValue={this.state.signupFormData.roles}
                                        label="Role"
                                        onChange={this.handleRoleChange}
                                    >
                                        <MenuItem value="USER">USER</MenuItem>
                                        <MenuItem value="ADMIN">ADMIN</MenuItem>
                                    </Select>
                                </FormControl>
                                <Button style={{marginTop:"10px", marginBottom:"10px"}} className={classes.toRight} variant="contained"
                                    onClick={this.submitSignupForm} endIcon={<SendIcon />}>
                                    Register
                                </Button>
                            </CardContent>
                        </Card>
                    </form>
                </Grid>
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
    userregister: userActions.userregister
};

export default connect(mapState,actionCreators)(withStyles(commonStyles)(UserSignup));