import React from "react";
class ThankYou extends React.Component {

    goToHomePage = () => {
        this.props.history.push("/home");
      };
  render() {
    return (
        <div className="jumbotron text-center thanks">
            <h1 className="display-3">Thank You!</h1>
            <p className="lead"><strong>Please check your email</strong> for further instructions.</p>
            <hr />
            <p>
                Having trouble? <a href="/contactus">Contact us</a>
            </p>
            <p className="lead">                
                <button type="button" className="applyButton" onClick={this.goToHomePage.bind()}> Continue to homepage </button>
            </p>
        </div>
    );
  }
}
export default ThankYou;
