import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Register from "./register";
import UserSignup from "./userSignup";
import UserLogin from "./userLogin"

class Login extends React.Component {
    constructor(props) {
        super(props);
        const isLoggedIn = localStorage.getItem('userLoggedIn');
        if(isLoggedIn){
          window.location.href="/dashboard";
        }
        this.state = {
          slideClass:false
        };
    }
    handleSlideTab = () => {
      this.setState({
        slideClass: !this.state.slideClass
      })
    }
    render() {
      const { loggingIn } = this.props;
      const slideClasses = this.state.slideClass?'cont s--signup':'cont';
      return  <div className="login" id="login">
      <div className={slideClasses}>
        <div className="form sign-in">
            <UserLogin></UserLogin>    
        </div>
        
        <div className="sub-cont">
          <div className="img">
            <div className="img__text m--up">
              <h2>New here?</h2>
              <p>Sign up and discover great amount of new opportunities!</p>
            </div>
            <div className="img__text m--in">
              <h2>One of us?</h2>
              <p>If you already has an account, just sign in. We've missed you!</p>
            </div>
            {/* <div className="img__btn" onClick={this.handleSlideTab}>
              <span className="m--up">Sign Up</span>
              <span className="m--in">Sign In</span>
            </div> */}
          </div>
          {/* <Register></Register> */}
          {/* <UserSignup></UserSignup> */}
        </div>
      </div>
    </div> ;
    }
  }

function mapState(state) {
    const { loggingIn } = state.authentication;
    return { loggingIn  };
}

const actionCreators = {
};

export default connect(mapState, actionCreators)(Login);

