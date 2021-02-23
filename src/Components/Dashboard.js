import React, { Component } from 'react'
import About from './About';
import Contact from './Contact';
import Feature from './Feature';
import Headers from './header';
import Navigations from './navigation';
import Services from './Services';
import Team from './Team';

import JsonData from '../data/data.json';
import Gallery from './Gallery';
import TestimonialHome from './TestimonialHome';


export class Dashboard extends Component {
  
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
      <div>
        <Navigations />
        <Headers data={this.state.landingPageData.Header} />
        <Feature data={this.state.landingPageData.Features} />
        <About data={this.state.landingPageData.About} />
        
        <Team data={this.state.landingPageData.Team} />
        <Contact data={this.state.landingPageData.Contact} /> 
      </div>
    )
  }
}

export default Dashboard;
