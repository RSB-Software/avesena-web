import React from "react";
import { connect } from 'react-redux';
import { commonStyles } from "../../commonStyle";
import { withStyles } from '@mui/styles';
import { Tab, Tabs } from "react-bootstrap";
import DemoTable from "./demotable";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import JobListingCard from '../jobrelated/jobListingCard.js';
import UserListingCard from "../userrelated/userListingCard";
import PatientListingCard from "../userrelated/patientListingCard";
import NewUpdatesCard from "../notificationRelated/newUpdatesCard";
import MyMessagesCard from "../notificationRelated/myMessagesCard";

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'userdata':JSON.parse(localStorage.getItem('user'))
        }
    }
  render() {
    const { classes } = this.props;
    const { userdata } = this.state;
    var leftbar = "";
    if(userdata.roles == 'ADMIN'){
        leftbar = <UserListingCard></UserListingCard>;
    }else if(userdata.roles == 'USER'){
        leftbar = <PatientListingCard></PatientListingCard>;
    }

    return (
        <div className="jumbotron text-center thanks">
            {/* <h1 className="display-3">Dashboard</h1> */}
            <Grid>
                <Typography className={classes.pageHeadingBar}>My Dashboard</Typography>
                <Grid fullwidth="true">
                    <Grid className={classes.dashboardLeft}>
                        {leftbar}
                    </Grid>
                    <Grid className={classes.dashboardRight}>
                        <NewUpdatesCard></NewUpdatesCard>
                        {/* <JobListingCard></JobListingCard> */}
                        <MyMessagesCard></MyMessagesCard>
                    </Grid>
                </Grid>
                <div className={classes.clearBoth}></div>
                <Grid fullwidth="true" style={{display:"none"}}>
                    <Card>
                        <Tabs defaultActiveKey="episodemanager" id="uncontrolled-tab-example" className="mb-3">
                            <Tab eventKey="newepisode" title="New Episode">
                                <DemoTable />
                            </Tab>
                            <Tab eventKey="episodemanager" title="Episode Manager">
                                <DemoTable />
                            </Tab>
                            <Tab eventKey="schedulemanager" title="Schedule Manager">
                                <DemoTable />
                            </Tab>
                            <Tab eventKey="authorization" title="Authorization">
                                <DemoTable />
                            </Tab>
                            <Tab eventKey="preclaimreview" title="Pre Claim Review">
                                <DemoTable />
                            </Tab>
                            <Tab eventKey="postvisit" title="Post Visit">
                                <DemoTable />
                            </Tab>
                        </Tabs>
                        </Card>
                </Grid>
             </Grid>
        </div>
    );
  }
}
function mapState(state) {
    const { loggingIn } = state.authentication;
    return { state, loggingIn };
}
export default connect(mapState)(withStyles(commonStyles)(Dashboard));
