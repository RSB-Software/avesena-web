import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions,alertActions } from '../../_actions';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            user: {
              firstName: '',
              username: '',
              password: ''
            },
            submitted: false,
            regsubmitted: false
        };

        this.handleRegisterChange = this.handleRegisterChange.bind(this);
        this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
    }

    handleRegisterChange(event) {
      const { name, value } = event.target;
      const { user } = this.state;
      this.setState({
          user: {
              ...user,
              [name]: value
          }
      });
  }

  handleRegisterSubmit(event) {
      event.preventDefault();

      this.setState({ regsubmitted: true });
      const { user } = this.state;
      if (user.firstName && user.username && user.password) {
          this.props.register(user);
      }
  }
    render() {
      const { alert } = this.props;
      const { user, regsubmitted } = this.state;

      return  (
        <div className="form sign-up">
        {alert.message &&
          <div className={`alert ${alert.type}`}>{alert.message}</div>
        }
        <h2>Time to feel like home,</h2>
        <form name="form" onSubmit={this.handleRegisterSubmit}>
                <div className={'form-group' + (regsubmitted && !user.firstName ? ' has-error' : '')}>
                    <label htmlFor="firstName">Name</label>
                    <input type="text" className="form-control" name="firstName" value={user.firstName} onChange={this.handleRegisterChange} />
                    {regsubmitted && !user.firstName &&
                        <div className="errortext">Name is required</div>
                    }
                </div> 
                <div className={'form-group' + (regsubmitted && !user.username ? ' has-error' : '')}>
                    <label htmlFor="username">Email</label>
                    <input type="email" className="form-control" name="username" value={user.username} onChange={this.handleRegisterChange} />
                    {regsubmitted && !user.username &&
                        <div className="errortext">Email is required</div>
                    }
                </div>
                <div className={'form-group' + (regsubmitted && !user.password ? ' has-error' : '')}>
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password" value={user.password} onChange={this.handleRegisterChange} />
                    {regsubmitted && !user.password &&
                        <div className="errortext">Password is required</div>
                    }
                </div> 
                <button type="submit" className="submit">Sign Up</button>  
        </form>       
      </div>
      );
    }
  }

function mapState(state) {
    const { alert } = state;
    const { registering } = state.registration;
    return { alert, registering };
}

const actionCreators = {
    register: userActions.register
};

export default connect(mapState, actionCreators)(Register);