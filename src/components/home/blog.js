
import React from "react";
class Blog extends React.Component {
render() {
  return   <section className="blog-area ptb-100">
  <div className="container">
    <div className="section-title">
      <h2>Our Latest News</h2>
      <div className="bar" />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco labor.</p>
    </div>
    <div className="row">
      <div className="col-lg-4 col-md-6">
        <div className="single-blog">
          <div className="blog-image">
            <a href="#"><img src="assets/img/blog-1.jpg" alt="image" /></a>
          </div>
          <div className="blog-content">
            <h3>
              <a href="#">Lorem Ipsum is simply dummy text.</a>
            </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <a href="#" className="blog-btn">Read More +</a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="single-blog">
          <div className="blog-image">
            <a href="#"><img src="assets/img/blog-2.jpg" alt="image" /></a>
          </div>
          <div className="blog-content">
            <h3>
              <a href="#">Lorem Ipsum is simply dummy text.</a>
            </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <a href="#" className="blog-btn">Read More +</a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
        <div className="single-blog">
          <div className="blog-image">
            <a href="#"><img src="assets/img/blog-3.jpg" alt="image" /></a>
          </div>
          <div className="blog-content">
            <h3>
              <a href="#">Lorem Ipsum is simply dummy text.</a>
            </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <a href="#" className="blog-btn">Read More +</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>;
}
}

export default Blog;
