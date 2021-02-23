import React, { Component } from "react";

import { Link } from "react-router-dom";
import JsonData from '../data/data.json';
export class Navigations extends Component {

  constructor(props){
    super(props);
      this.state = {
        landingPageData: {},
      }
  }
  
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">
              Landing Page
            </a>{" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#features" className="page-scroll">
                  Products
                </a>
                {/* <Link to={{pathname:"/features"}} className="page-scroll">
                Products
            </Link> */}
              </li>
              <li>
                <a href="#about" className="page-scroll">
                  About
                </a>
              </li>
             
              
              <li>
                <a href="#team" className="page-scroll">
                  Results
                </a>
              </li>
              <li>
                <a href="#contact" className="page-scroll">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigations;
