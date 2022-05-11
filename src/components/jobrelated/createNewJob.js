import React from "react";
import { connect } from 'react-redux';
import { commonStyles } from "../../commonStyle";
import { withStyles } from '@mui/styles';
import { jobActions,alertActions } from '../../_actions';
import Grid from "@mui/material/Grid";
import { Box, Typography, TextField } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import RefreshIcon from '@mui/icons-material/Refresh';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

class CreateNewJob extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formObjects: [
                "jobTitle","jobBriefDescription","jobDescription","jobKeyword","jobCategory","jobSalary","validTill",
            ],
            jobFormData:{
                    jobTitle:"",
                    jobBriefDescription: "",
                    jobDescription:"",
                    jobKeyword:"",
                    jobCategory:"",
                    jobSalary:"",
                    validTill:"",
                    postedBy: "Admin",
                    postedOn: new Date(),
                    active: true    
                },
            jobFormDataError:{}
        }

        this.formInputChangeHandler = this.formInputChangeHandler.bind(this);
        this.submitJobForm = this.submitJobForm.bind(this);
    }
    formInputChangeHandler(event){
        const { jobFormData, jobFormDataError } = this.state
        if(event.target.value.trim() == ""){ 
            jobFormDataError[event.target.name] = "This field is required";
        }else{
            delete jobFormDataError[event.target.name];
            jobFormData[event.target.name] = event.target.value;
        }
        this.setState({...this.state, jobFormData: jobFormData, jobFormDataError: jobFormDataError});
    }
    async submitJobForm(){
        const { jobFormData, jobFormDataError, formObjects } = this.state;
       
        const formObjects1 = formObjects.map((element)=>{
            if(jobFormData[element].trim()==""){
                jobFormDataError[element] = "This field is required";
                //return jobFormDataError;
            }else{
                delete jobFormDataError[element];
            }
        });
        this.setState({...this.state, jobFormDataError: jobFormDataError});

        if(Object.keys(this.state.jobFormDataError).length == 0){
            this.submitNewUpdates()
        }
        console.log(Object.keys(this.state.jobFormDataError).length);
    }   

    async submitNewUpdates() {
        const { jobFormData, jobFormDataError, formObjects } = this.state;

        //jobFormData["id"] = Math.floor(Math.random() * 100000);
        //jobFormData["jobId"] = Math.floor(Math.random() * 100000);
       
        let data = jobFormData;
        this.props.postnewjob(data);

        const formObjects1 = formObjects.map((element)=>{
            jobFormData[element] = "";
            delete jobFormDataError[element];
        });
        this.setState({...this.state, jobFormData: jobFormData, jobFormDataError: jobFormDataError});

        document.getElementById("jobForm").reset();
        return false;
    }
     
    componentDidMount() {
       
    }
  render() {
    const { classes,commonReducer, alertMessages } = this.props;
    const { jobFormData,jobFormDataError } = this.state;

    return (
        <div className="jumbotron text-center thanks">
            <Grid>
                <Typography className={classes.pageHeadingBar}>Create New Job</Typography>
                <Grid fullwidth="true">
                <Card className={classes.eachDashboardCardAutoHeight}>
                    <Typography className={classes.eachDashboardCardHeader}>Please fill in the job details</Typography>
                    <CardContent className={classes.eachDashboardCardContent}>
                        {alertMessages.type?<Alert severity={alertMessages.type}>{alertMessages.message}</Alert>:""}
                        
                        <form id="jobForm">
                            <Box style={{width:"90%", marginLeft:"5%"}}>
                                <TextField 
                                    type="text" variant="outlined" fullWidth margin="dense" size="small"
                                    label="Job Title" placeholder="Job Title" name="jobTitle" onBlur={this.formInputChangeHandler}
                                    helperText={(jobFormDataError.jobTitle && jobFormDataError.jobTitle.trim()!="")?jobFormDataError.jobTitle:""} 
                                    error={(jobFormDataError.jobTitle && jobFormDataError.jobTitle.trim()!="")?true:false}
                                />
                                <TextField 
                                    type="text" variant="outlined" fullWidth margin="dense" size="small"
                                    label="Brief Description" placeholder="Brief Description" name="jobBriefDescription" onBlur={this.formInputChangeHandler}
                                    helperText={(jobFormDataError.jobBriefDescription && jobFormDataError.jobBriefDescription.trim()!="")?jobFormDataError.jobBriefDescription:""} 
                                    error={(jobFormDataError.jobBriefDescription && jobFormDataError.jobBriefDescription.trim()!="")?true:false}
                                />
                                <TextField 
                                    type="text" variant="outlined" fullWidth margin="dense" size="small" multiline 
                                    label="Full Description" placeholder="Full Description" rows={3} name="jobDescription" onBlur={this.formInputChangeHandler}
                                    helperText={(jobFormDataError.jobDescription && jobFormDataError.jobDescription.trim()!="")?jobFormDataError.jobDescription:""} 
                                    error={(jobFormDataError.jobDescription && jobFormDataError.jobDescription.trim()!="")?true:false}
                                />
                                <TextField 
                                    type="text" variant="outlined" fullWidth margin="dense" size="small"
                                    label="Keywords (comma seperated)" placeholder="Keywords (comma seperated)" name="jobKeyword" onBlur={this.formInputChangeHandler}
                                    helperText={(jobFormDataError.jobKeyword && jobFormDataError.jobKeyword.trim()!="")?jobFormDataError.jobKeyword:""} 
                                    error={(jobFormDataError.jobKeyword && jobFormDataError.jobKeyword.trim()!="")?true:false}
                                />
                                <TextField 
                                    type="text" variant="outlined" fullWidth margin="dense" size="small"
                                    label="Category" placeholder="Category" name="jobCategory" onBlur={this.formInputChangeHandler}
                                    helperText={(jobFormDataError.jobCategory && jobFormDataError.jobCategory.trim()!="")?jobFormDataError.jobCategory:""} 
                                    error={(jobFormDataError.jobCategory && jobFormDataError.jobCategory.trim()!="")?true:false}
                                />
                                <TextField 
                                    type="number" variant="outlined" fullWidth margin="dense" size="small"
                                    label="Salary" placeholder="Salary" name="jobSalary" onBlur={this.formInputChangeHandler}
                                    helperText={(jobFormDataError.jobSalary && jobFormDataError.jobSalary.trim()!="")?jobFormDataError.jobSalary:""} 
                                    error={(jobFormDataError.jobSalary && jobFormDataError.jobSalary.trim()!="")?true:false}
                                />
                                
                                <TextField 
                                    type="date" variant="outlined" fullWidth margin="dense" size="small"
                                    label="Valid Till" placeholder="Valid Till" name="validTill" onChange={this.formInputChangeHandler} defaultValue={new Date()}
                                    helperText={(jobFormDataError.validTill && jobFormDataError.validTill.trim()!="")?jobFormDataError.validTill:""} 
                                    error={(jobFormDataError.validTill && jobFormDataError.validTill.trim()!="")?true:false}
                                />
                                <Stack style={{marginTop:"10px", marginBottom:"15px"}} direction="row" alignItems="flex-end" justifyContent="space-between" > 
                                    <Button type="reset" variant="outlined" startIcon={<RefreshIcon />}>
                                        Reset Form
                                    </Button>
                                    <Button variant="contained" endIcon={<SendIcon />} onClick={this.submitJobForm}>
                                        Submit
                                    </Button>
                                </Stack>
                            </Box>
                        </form>
                    </CardContent>
                </Card>
                </Grid>
                <div className={classes.clearBoth}></div>
             </Grid>
        </div>
    );
  }
}
function mapState(state) {
    const { loggingIn } = state.authentication;
    const { commonReducer } = state;
    const alertMessages = state.alert;
    return { state, loggingIn, commonReducer, alertMessages };
}
const actionCreators = {
    postnewjob: jobActions.postnewjob
};
export default connect(mapState,actionCreators)(withStyles(commonStyles)(CreateNewJob));