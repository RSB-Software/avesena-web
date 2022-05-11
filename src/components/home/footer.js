import React from "react";
    class Footer extends React.Component {
    render() {
      return    <section class="footer-area bg-color pt-100 pb-70">
      <div class="container">
          <div class="row">
              <div class="col-lg-6 col-sm-6">
                  <div class="single-footer-widget">
                      <a href="/home">
                          <img src="assets/img/logo.png" alt="image" />
                      </a>
                      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>

                      <ul class="footer-social">
                          <li>
                              <a href="#" target="_blank">
                                  <i class="fab fa-facebook-f"></i>
                              </a>
                          </li>
                          <li>
                              <a href="#" target="_blank">
                                  <i class="fab fa-twitter"></i>
                              </a>
                          </li>
                          <li>
                              <a href="#" target="_blank">
                                  <i class="fab fa-pinterest"></i>
                              </a>
                          </li>
                          <li>
                              <a href="#" target="_blank">
                                  <i class="fab fa-instagram"></i>
                              </a>
                          </li>
                      </ul>
                  </div>
              </div>

              <div class="col-lg-3 col-sm-6">
                  <div class="single-footer-widget">
                      <h2>Our Services</h2>

                      <ul class="quick-links">
                          <li>
                              <a href="#">In-Home Care</a>
                          </li>
                          <li>
                              <a href="#">Home Health</a>
                          </li>
                          <li>
                              <a href="#">Hospice</a>
                          </li>

                      </ul>
                  </div>
              </div>

           

              <div class="col-lg-3 col-sm-6">
                  <div class="single-footer-widget">
                      <h2>Get In Touch</h2>

                      <ul class="footer-contact-info">

                          <li>
                              <i class="material-icons">&#xe0be;</i>
                              <span>Email</span>
                              <a href="mailto:hello@avesena.com">hello@avesena.com</a>
                          </li>
                          <li>
                              <i class='fas fa-address-book'></i>
                              <span>Address</span>
                              175 5th Ave Premium Area
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  </section>;
    }
  }

  export default Footer;