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

class UserListingCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            userList:[]
        }
    }
    async getFetchUsers() {
        this.setState({
            loading: true
        });
        const response = await fetch(`${config.getUserUrl}`).catch(console.log);
        const userlistData = await response.json()
                                .then(result => {
                                        this.setState({
                                            loading: false,
                                            userList: result
                                        })
                                    });
    }
    
    componentDidMount() {
        this.getFetchUsers();
    }
  render() {
    const { classes } = this.props;
    const { userList } = this.state;

    return(
        <Card className={classes.dashboardLeftList}>
            <Typography className={classes.eachDashboardCardHeader}>User List</Typography>
            <CardContent className={classes.eachDashboardCardContent}>
                <TableContainer component={Paper}>
                    <Table size="small" aria-label="a dense table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Employee Code</TableCell>
                            <TableCell align="left">Employee Name</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {userList.map((ele) => (
                            <TableRow
                            key={ele.userId}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                {ele.empCode?ele.empCode:''}
                            </TableCell>
                            <TableCell align="left">{ele.salutation?ele.salutation:''} {ele.firstName} {ele.lastName}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </TableContainer>
            </CardContent>
        </Card>
    )
  }
}
function mapState(state) {
    const { loggingIn } = state.authentication;
    return { state, loggingIn };
}
export default connect(mapState)(withStyles(commonStyles)(UserListingCard));