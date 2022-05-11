import React from "react";
import SlideComponent from'./slider';
import Categories from './categories';
import HealthCare from './healthcare';
import Queries from './queries';
import Specialist from './specialist';
import Blog from './blog';



    class Home extends React.Component {
    render() {
        return (
            <div className="App">                
                <SlideComponent></SlideComponent>
                <Categories></Categories>
                <HealthCare></HealthCare>
                <Queries></Queries>                
                 <Specialist></Specialist>
                <Blog></Blog>                
            </div>
          );
    }
  }

  export default Home;


