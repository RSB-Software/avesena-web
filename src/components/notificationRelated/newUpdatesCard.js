import React from "react";
import { connect } from 'react-redux';
import { commonStyles } from "../../commonStyle";
import { withStyles } from '@mui/styles';
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';

class newUpdatesCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            newsList:[]
        }
    }
    async getFetchUpdates() {
        this.setState({
            loading: true
        });
        const response = await fetch('http://localhost:4100/newsupdates').catch(console.log);
        const joblistData = await response.json()
                                .then(result => {
                                        this.setState({
                                            loading: false,
                                            newsList: result
                                        })
                                    });
    }
    
    componentDidMount() {
        this.getFetchUpdates();
    }
  render() {
    const { classes } = this.props;
    const { newsList } = this.state;

    return(
        <Card className={classes.eachDashboardCard}>
            <Typography className={classes.eachDashboardCardHeader}>News and Updates</Typography>
            <CardContent className={classes.eachDashboardCardContent}>
                    {newsList.map((ele) => (
                        <Typography key={ele.newId} align="left">{ele.newHeading}<Divider /></Typography>
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
export default connect(mapState)(withStyles(commonStyles)(newUpdatesCard));