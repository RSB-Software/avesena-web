import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { history } from './_helpers';
import { alertActions } from './_actions';
import Login from './components/login/login';
import Home from './components/home/home';
import Career from './components/career/career';
import CareerDetails from './components/careerDetails/careerDetails';
import ThankYou from './components/thankYou/thankYou';
import Dashboard from './components/dashboard/dashboard';
import { PrivateRoute } from './components/PrivateRoute';
import { AdminRoute } from './components/AdminRoute';
import createNewJob from './components/jobrelated/createNewJob';
import JobListingPage from './components/jobrelated/jobListingPage';
import UserListingPage from './components/userrelated/userListingPage';
import UserSignup from './components/login/userSignup';

class App extends React.Component {
  constructor(props) {
      super(props);

      history.listen((location, action) => {
        // clear alert on location change
        this.props.clearAlerts();
      });
  }
  render(){
  const { alert } = this.props;
  return (
          <Router history={history}>
          <div className="app-container">
            <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
              <Route path="/home" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/career" component={Career} />
              <Route path="/Careerdetails"   component={CareerDetails} />
              <Route path="/thanks"   component={ThankYou} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <AdminRoute path="/viewjobs" component={JobListingPage} />
              <AdminRoute path="/viewusers" component={UserListingPage} />
              <AdminRoute path="/createjob" component={createNewJob} />
              <AdminRoute path="/createuser" component={UserSignup} />
            </Switch>
          </div>
        </Router>
        );
      } 
}

function mapState(state) {
    const { alert } = state;
    return { alert };
}
const actionCreators = {
  clearAlerts: alertActions.clear
};
export default connect(mapState,actionCreators)(App);
//export default App;
