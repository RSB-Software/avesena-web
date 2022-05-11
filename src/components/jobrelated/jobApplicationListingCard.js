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
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

class JobApplicationListingCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            jobApplicationList:[]
        }
    }
    async getFetchJobApplication() {
        const { jobIdInput } = this.props;
        this.setState({
            loading: true
        });
        const response = await fetch(`${config.getJobApplicationUrl+'/'+jobIdInput}`).catch(console.log);
        const jobApplicationListData = await response.json()
                                .then(result => {
                                        this.setState({
                                            loading: false,
                                            jobApplicationList: result
                                        })
                                    });
    }
    
    componentDidMount() {
        this.getFetchJobApplication();
    }
    downloadUrl(event) {   
        let file_name = event.target.parentElement.id==''?event.target.parentElement.parentElement.id:event.target.parentElement.id;   
        console.log(event.target.parentElement.id);
        fetch('http://ec2-18-217-77-204.us-east-2.compute.amazonaws.com:9191/general/downloadFile/' + file_name, {
                method: 'GET',
                headers: {
                'Content-Type': 'application/pdf',
                },
            })
            .then((response) => response.blob())
            .then((blob) => {
                // Create blob link to download
                const url = window.URL.createObjectURL(
                new Blob([blob]),
                );
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute(
                'download',
                file_name?file_name:'no file avaialbe',
                );
                document.body.appendChild(link);
                link.click();
                link.parentNode.removeChild(link);
            });

    }
  render() {
    const { classes,jobIdInput } = this.props;
    const { jobApplicationList } = this.state;

    return(
        <Card className={classes.eachDashboardCardJobApp}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Applicant Name</TableCell>
                            <TableCell align="left">EmailId</TableCell>
                            <TableCell align="left">Phone Number</TableCell>
                            <TableCell align="left">Applied On</TableCell>
                            <TableCell align="left">Resume</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            {jobApplicationList?.length > 0 && 
                                    jobApplicationList.map((ele,index) => (
                                <TableRow
                                key={"jobapp-"+jobIdInput+"-"+ele.jobId+"-"+index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">
                                    {ele.salutation?ele.salutation+'.':''} {ele.firstName} {ele.lastName}
                                </TableCell>
                                <TableCell align="left">{ele.email?ele.email:'-'}</TableCell>
                                <TableCell align="left">{ele.phoneNo?ele.phoneNo:'-'}</TableCell>
                                <TableCell align="left">{ele.appliedDate?ele.appliedDate:'-'}</TableCell>
                                <TableCell align="left">
                                    <a href='#' id={ele.resumePath?ele.resumePath:null}  onClick={this.downloadUrl.bind(this)}><FileDownloadOutlinedIcon/></a>
                                </TableCell>
                                </TableRow>
                            ))}
                            {jobApplicationList?.length == 0 && (
                                <TableRow>
                                    <TableCell align="center" colSpan="10">No Job Application</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                    </TableContainer>
       </Card>
    )
  }
}
function mapState(state) {
    const { loggingIn } = state.authentication;
    return { state, loggingIn };
}
export default connect(mapState)(withStyles(commonStyles)(JobApplicationListingCard));