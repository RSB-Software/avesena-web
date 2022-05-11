import React from "react";
import { connect } from 'react-redux';
import { commonStyles } from "../../commonStyle";
import { withStyles } from '@mui/styles';
import config from '../../config.json'; 
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import JobApplicationListingCard from "./jobApplicationListingCard";

class JobListingCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            joblist:[]
        }
    }
    async getFetchJobs() {
        this.setState({
            loading: true
        });
        const response = await fetch(`${config.getJobsUrl}`).catch(console.log);
        const joblistData = await response.json()
                                .then(result => {
                                        this.setState({
                                            loading: false,
                                            joblist: result
                                        })
                                    });
    }
    
    componentDidMount() {
        this.getFetchJobs();
    }
  render() {
    const { classes } = this.props;
    const { joblist } = this.state;

    return(
        <Card className={classes.eachDashboardCardMedium}>
            <Typography className={classes.eachDashboardCardHeader}>Job Listing</Typography>
            <CardContent className={classes.eachDashboardCardContent}>
                {joblist.map((ele) => (                    
                    <Accordion key={ele.jobId}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={'jobacc-'+ele.jobId}
                            id={'jobacc-'+ele.jobId}
                            >
                            <Typography>{ele.jobTitle?ele.jobTitle:''}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                                {/* <Typography align="right">Valid Till: {ele.validTill?ele.validTill:''}</Typography>
                                <Typography align="left">{ele.jobDescription?ele.jobDescription:''}</Typography>
                                <Typography align="left">Posted By: {ele.postedBy?ele.postedBy:''}</Typography> */}
                                <JobApplicationListingCard jobIdInput={ele.jobId}></JobApplicationListingCard>
                                
                        </AccordionDetails>
                    </Accordion>
                ))}
            </CardContent>
        </Card>
    )
  }
}
function mapState(state) {
    const { loggingIn } = state.authentication;
    return { state, loggingIn };
}
export default connect(mapState)(withStyles(commonStyles)(JobListingCard));