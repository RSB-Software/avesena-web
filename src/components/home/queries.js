import React from "react";
    class Queries extends React.Component {
    render() {
      return  <section className="queries-area ptb-100 pb-0">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="queries-image">
              <img src="assets/img/queries-2.png" alt="image" />
              <div className="queries-shape">
                <div className="shape-3">
                  <img src="assets/img/queries-shape-3.png" alt="image" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="queries-form queries-form-width">
              <div className="content">
                <h3>Request Care</h3>
              </div>
              <form>
                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <div className="form-group">
                      <label><i className="fa fa-user" /></label>
                      <input type="text" className="form-control" placeholder="Contact Name*" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="form-group">
                      <label><i className="fa fa-envelope" /></label>
                      <input type="text" className="form-control" placeholder="Contact Email*" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="form-group">
                      <label><i className="fa fa-phone" /></label>
                      <input type="text" className="form-control" placeholder="Phone Number" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="form-group">
                      <div className="nice-select" tabIndex={0}>
                        <span className="current">Select Services</span>
                        <ul className="list"><li data-value className="option selected">Select Services</li>
                          <li data-value className="option">In-Home Care</li>
                          <li data-value className="option">Home Health</li>
                          <li data-value className="option">Hospice</li>
                        </ul>
                      </div>	
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="form-group">
                      <label><i className="fa fa-calendar" /></label>
                      <input id="datetimepicker" type="text" className="form-control" placeholder="Date" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="form-group">
                      <select style={{display: 'none'}}>
                        <option value>Select Time</option>
                        <option value>9:00 am - 9:00 pm</option>
                        <option value>8:00 am - 8:00 pm</option>
                        <option value>7:00 am - 7:00 pm</option>
                        <option value>6:00 am - 6:00 pm</option>
                        <option value>5:00 am - 5:00 pm</option>
                        <option value>4:00 am - 4:00 pm</option>
                      </select><div className="nice-select" tabIndex={0}><span className="current">Select Time</span><ul className="list"><li data-value className="option selected">Select Time</li><li data-value className="option">9:00 am - 9:00 pm</li><li data-value className="option">8:00 am - 8:00 pm</li><li data-value className="option">7:00 am - 7:00 pm</li><li data-value className="option">6:00 am - 6:00 pm</li><li data-value className="option">5:00 am - 5:00 pm</li><li data-value className="option">4:00 am - 4:00 pm</li></ul></div>		
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <textarea name="message" className="form-control" placeholder="Message" defaultValue={""} />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="queries-btn">
                      <button type="submit" className="default-btn">Send Request</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section> ;
    }
  }

  export default Queries;