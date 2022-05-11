import React from "react";
    class Categories extends React.Component {
    render() {
        return (
            <section className="categories-area pt-100 pb-100">
        <div className="container">
          <div className="section-title plr-100">
            <h3>A helping hand with daily activities so you can remain independent in your own home</h3>
            <div className="bar" />
            <p>Our caregivers find meaning in serving and building relationships with those in need. Our support and field teams’ purpose is to support the work of our caregivers.</p>
          </div>
          <div className="row text-center">
            <div className="col-lg-4">
              <div className="categories-item-box hig-253">
                <div className="icon"><img src="assets/img/ICON-Ind.png" className="circle1" width={45} /></div>
                <h3>Stay Independent</h3><p>We’ll help you remain in your home.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="categories-item-box hig-253">
                <div className="icon"><img src="assets/img/time.png" className="circle1" width={45} /></div>
                <h3>Flexible Hours</h3><p>A care plan that fits your schedule and needs.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="categories-item-box hig-253">
                <div className="icon"><img src="assets/img/hand-money.png" className="circle1" width={45} /></div>
                <h3>Many Ways To Pay</h3><p>We’ll help you evaluate and understand your options.</p>
              </div>
            </div>
          </div>
          <div className="categories-shape">
            <img src="assets/img/categories-shape-2.png" alt="image" />
          </div>
        </div></section>
          );
     
    }
  }

  export default Categories;