import React from "react";
    class HealthCare extends React.Component {
    render() {
      return   <section className="healthcare-area ptb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="healthcare-content">
              <h3>Our approach is simple: We provide great care and we pay attention to your needs.</h3>
              <ul className="healthcare-list">
                <li>
                  {/* <i className="flaticon" /> */}
                  <b>10+</b> years of service
                </li>
                <li>
                  {/* <i className="flaticon" /> */}
                  <b>10,000</b> employees
                </li>
                <li>
                  {/* <i className="flaticon" /> */}
                  <b>40,000+</b> patients served weekly
                </li>
                <li>
                  {/* <i className="flaticon" /> */}
                  <b>200+</b> locations &amp; growing
                </li>
              </ul>
              <div className="healthcare-btn">
                <a href="#" className="default-btn">More About Us</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="healthcare-image">
              <img src="assets/img/healthcare-1.jpg" alt="health care" />
              <div className="image-shape-1">
                <img src="assets/img/healthcare-shape-2.png" alt="health care" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="healthcare-shape">
        <div className="shape-1">
          <img src="assets/img/healthcare-shape-1.png" alt="health care" />
        </div>
        <div className="shape-2">
          <img src="assets/img/healthcare-shape-3.png" alt="health care" />
        </div>
      </div>
    </section>;
    }
  }

  export default HealthCare;