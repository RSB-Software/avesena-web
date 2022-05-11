import React from "react";
    class Header extends React.Component {
    render() {
      return (
        <div>
          {/* Start Top Bar Area */}
          <div className="top-bar-area bg-color">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <ul className="top-bar-information">
                    <li>
                      <i className="fas fa-call"></i>
                      Call Us: <a href="tel:#">234 456 6789</a>
                    </li>
                    <li>
                      <i className="fas fa-address-book"> </i>
                      175 Simply dummy text of the printing
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 col-md-12">
                  <ul className="top-bar-optional">
                    <li>
                      <a href="#" target="_blank">
                        <i className="fab fa-facebook-f" ></i>
                      </a>
                      <a href="#" target="_blank">
                        <i className="fab fa-twitter" ></i>
                      </a>
                      <a href="#" target="_blank">
                        <i className="fab fa-pinterest" ></i>
                      </a>
                      <a href="#" target="_blank">
                        <i className="fab fa-instagram" ></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* End Top Bar Area */}
          {/* Start Navbar Area */}
          <div className="navbar-area">
            <div className="main-responsive-nav">
              <div className="container">
                <div className="main-responsive-menu">
                  <div className="logo">
                    <a href="/home">
                      <img src="assets/img/logo.png" alt="image" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="main-navbar">
              <div className="container">
                <nav className="navbar navbar-expand-md navbar-light">
                  <a className="navbar-brand" href="/home">
                    <img src="assets/img/logo.png" alt="image" />
                  </a>
                  <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent" style={{display: 'block'}}>
                    <ul className="navbar-nav m-auto">
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          About &nbsp;
                          <i className="fas fa-angle-down"></i>
                        </a>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              Our Mission and Values
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              Our Story
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              Our Team
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          Services &nbsp;
                          <i className="fas fa-angle-down" ></i>
                        </a>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a href="/login" className="nav-link">
                              Home Services
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="https://www.avesenahhc.com" target="_blank" className="nav-link">
                              Nursing Services
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          Locations
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="/career" className="nav-link">
                          Career Center
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          Resources &nbsp; <i className="fas fa-angle-down" ></i>
                        </a>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              Online Bill Pay
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              Billing FAQ
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              Funding Sources
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#blog-details.html" className="nav-link">
                              VendorProof
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          Contact
                        </a>
                      </li>
                    </ul>
                    <div className="others-options d-flex align-items-center">
                      <div className="option-item">
                        <a href="#" className="default-btn">Join Our Team</a>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
            <div className="others-option-for-responsive">
              <div className="container">
                <div className="dot-menu">
                  <div className="inner">
                    <div className="circle circle-one" ></div>
                    <div className="circle circle-two" ></div>
                    <div className="circle circle-three" ></div>
                  </div>
                </div>
                <div className="container">
                  <div className="option-inner">
                    <div className="others-options d-flex align-items-center">
                      <div className="option-item">
                        <a href="#" className="default-btn">Contact Us</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Navbar Area */}
        </div>
      ) ;
    }
  }

  export default Header;