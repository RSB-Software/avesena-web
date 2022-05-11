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
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

class myMessagesCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            msgList:[]
        }
    }
    async getFetchMessages() {
        this.setState({
            loading: true
        });
        const response = await fetch('http://localhost:4100/mymessages').catch(console.log);
        const msglistData = await response.json()
                                .then(result => {
                                        this.setState({
                                            loading: false,
                                            msgList: result
                                        })
                                    });
    }
    
    componentDidMount() {
        this.getFetchMessages();
    }
  render() {
    const { classes } = this.props;
    const { msgList } = this.state;

    return(
        <Card className={classes.eachDashboardCard}>
            <Typography className={classes.eachDashboardCardHeader}>My Messages</Typography>
            <CardContent className={classes.eachDashboardCardContent}>
                    {msgList.map((ele) => (
                        <Typography key={ele.msgId} align="left">
                            <Typography width="85%" className={classes.toLeft}>{ele.msgContent}</Typography>
                            <IconButton className={classes.toRight} edge="end" aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                            <Divider className={classes.clearBoth} />
                        </Typography>
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
export default connect(mapState)(withStyles(commonStyles)(myMessagesCard));