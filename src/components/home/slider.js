import React from "react";
    class SlideComponent extends React.Component {
    render() {
      return <div className="main-banner">
      <div className="main-banner-item item-two">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="main-banner-inner">
                                    <div className="main-banner-content">
                                        <h1>We’re Here to Help You Maintain Your <b>Health And Independence</b></h1>
                                        <p>Our caregivers provide quality in-home supportive services so you can remain in your home, comfortably and confidently.</p>
                                    </div>
                                    <div className="main-banner-search-form">
                                        <form>
                                            <div className="row">
                                                <div className="col-lg-5 col-md-6">
                                                    <div className="form-group">
                                                        <label><i className="fas fa-search-location" /></label>
                                                        <input type="text" className="form-control" placeholder="Search Location" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-7 col-md-6">
                                                    <div className="option-item">
                                                        <a href="#" className="default-btn">Submit</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="main-banner-image">
                                    <img src="assets/img/main-doctor.png" alt="image" />
                                    <div className="image-shape-1">
                                        <img src="assets/img/doctor-shape-1.png" alt="image" />
                                    </div>
                                    <div className="image-shape-2">
                                        <img src="assets/img/doctor-shape-2.png" alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="main-banner-shape">
                <div className="shape-1">
                    <img src="assets/img/banner-shape-1.png" alt="image" />
                </div>
                <div className="shape-2">
                    <img src="assets/img/banner-shape-2.png" alt="image" />
                </div>
            </div>
    </div>;
    }
  }

  export default SlideComponent;