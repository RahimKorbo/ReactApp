import React, { Component } from "react";
import Navigations from "./navigation";

export class Feature extends Component {
  render() {
    return (
      <> 
     
      <div id="features" className="text-center">
        <div className="container">
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2>Products</h2>
          </div>
          <div className="row">
            {this.props.data
              ? this.props.data.map((d,i) => (
                  <div  key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                    {" "}
                    <img src={d.img} alt="..." className="team-img" />
                    <h3>{d.title}</h3>
                    <p>{d.text}</p>
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default Feature;
