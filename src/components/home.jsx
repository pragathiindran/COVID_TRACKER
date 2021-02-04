import React, { Component } from "react";
import Graph from "./graph";
import { Helmet } from "react-helmet";
import StateTable from './stateTable';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="home">
          <Helmet>
            <title>INDIA: STATE WISE</title>
            
          </Helmet>
         
            
            <div className="col-sm">
              <StateTable />
            </div>
            
              <div align="col-sm">
                <Graph />
              </div>
            </div>
          
       
      </React.Fragment>
    );
  }
}

export default Home;