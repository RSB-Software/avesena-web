import React from "react";
    class Specialist extends React.Component {
    render() {
      return  <section className="specialist-area">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <div className="specialist-inner">
              <div className="specialist-content">
                <div className="title">
                  <h3>Engaged, energized, and compassionate</h3>
                </div>
                <p>Our caregivers find meaning in serving and building relationships with those in need. Our support and field teams’ purpose is to support the work of our caregivers.</p>
                <div className="specialist-btn">
                  <a href="#" className="default-btn">Join Our Team</a>
                </div>
              </div>
              <div className="specialist-shape">
                <img src="assets/img/specialist-shape.png" alt="image" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="specialist-image" />
          </div>
        </div>
      </div>
    </section> ;
    }
  }

  export default Specialist;

  