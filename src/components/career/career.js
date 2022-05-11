import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
class Career extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      JobsOpening: [],
    };
  }
  jobdetails() {
    setTimeout(function () {
      window.location.reload();
    });
  }

  componentDidMount() {
    axios
      .get(
        //`http://ec2-3-142-240-130.us-east-2.compute.amazonaws.com:9191/general/getAllAvailableOpenings`
        `http://ec2-18-217-77-204.us-east-2.compute.amazonaws.com:9191/general/getAllAvailableOpenings`
      )
      .then((res) => {
        const JobsOpening = res.data;

        this.setState({ JobsOpening });
        console.log(this.stateJobsOpening);
      });
  }
  render() {
    return (
      <div className="container">
        <div className="career-container row">
          {this.state.JobsOpening.map((job) => (
            <div className="grid-item  col-lg-4  col-md-6  col-sm-6 col-xs-12">
              <div className="card">
                <Link
                  to={{
                    pathname: `/Careerdetails?id=${job.jobId}`,
                    state: this.state.JobsOpening,
                    id: job.jobId,
                  }}
                  onClick={this.jobdetails.bind()}
                >
                  <div className="container">
                    <h4>Job Title: {job.jobTitle}</h4>
                    <p>{job.jobBriefDescription}</p>
                    <p>Post: {job.jobKeyword}</p>                    
                    <p>Salary: {job.jobSalary}</p>
                    <p>Valid Till: {job.validTill}</p>
                    <button type="button" className="applyButton">
                      Apply For Job
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Career;
