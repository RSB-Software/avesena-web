import React from "react";
import axios from "axios";
class CareerDetails extends React.Component {
  constructor(props) {
    super(props);
    this.jobId = parseInt(props.location.search.split("=")[1]);
    this.state = {
      salutation: "",
      firstName: "",
      lastName: "",
      middleName: "",
      email: "",
      phoneNo: "",
      jobId: this.jobId ? this.jobId : "",
      resumePath: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { id, value } = event.target;
    switch (id) {
      case "firstname":
        this.setState({ firstName: value });
        break;
      case "lastname":
        this.setState({ lastName: value });
        break;
      case "email":
        this.setState({ email: value });
        break;
      case "mobileNo":
        this.setState({ phoneNo: value });
        break;
      case "Salutation":
        this.setState({ salutation: value });
        break;
      default:
        break;
    }
  }
  onFileChange = (event) => {
    this.setState({ resumePath: event.target.files[0] });
  };

  handleSubmit(event) {
    event.preventDefault();
    const configHeaders = {
      "content-type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      "X-Requested-With": "XMLHttpRequest",
    };

    const FileFormData = new FormData();
    FileFormData.append("resumeFile", this.state.resumePath);
    axios
      .post(
        "http://ec2-18-217-77-204.us-east-2.compute.amazonaws.com:9191/general/uploadResume ",
        FileFormData
      )
      .then((response) => {
        console.log(response);
        const JobApplyAginstJobId = {
          jobId: this.state.jobId,
          email: this.state.email,
          salutation: this.state.salutation,
          firstName: this.state.firstName,
          middleName: this.state.middleName,
          lastName: this.state.lastName,
          resumePath: response.data,
          phoneNo: this.state.phoneNo,
        };
        let body_data = JSON.stringify(JobApplyAginstJobId);
        axios({
          url: "http://ec2-18-217-77-204.us-east-2.compute.amazonaws.com:9191/general/saveJobApplication",
          method: "post",
          data: body_data,
          headers: configHeaders,
        }).then((res) => {
          this.props.history.push("/thanks");
        });
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="container">
        <div className="CareerDetails">
          <h1 className="head1">Apply For Job</h1>
          <hr />
          <label>
            <b>Salutation</b>
          </label>
          <select
            id="Salutation"
            name="Salutation"
            onChange={this.handleChange}
          >
            <option value="">Salutation</option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
          </select>
          <label>
            <b>First Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter First Name"
            value={this.state.firstName}
            id="firstname"
            onChange={this.handleChange}
            required
          />
          <label>
            <b>Last Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter Last Name"
            value={this.state.lastName}
            id="lastname"
            onChange={this.handleChange}
            required
          />

          <label>
            <b>Email</b>
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            value={this.state.email}
            id="email"
            onChange={this.handleChange}
            required
          />

          <label>
            <b>Mobile</b>
          </label>
          <input
            type="number"
            placeholder="Enter Mobile"
            value={this.state.phoneNo}
            id="mobileNo"
            onChange={this.handleChange}
            required
          />
          <div>
            <label>
              <b>Upload Your Resume</b>
            </label>
            <input type="file" onChange={this.onFileChange} />
          </div>

          <div className="buttonDiv">
            <button type="submit" className="applyButton" value="Submit">
              {" "}
              Submit Form
            </button>
          </div>
        </div>
      </form>
    );
  }
}
export default CareerDetails;
