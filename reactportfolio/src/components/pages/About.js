import React, { Component } from 'react';
import Pdf from '../pdf/zhao.pdf';
import Projects from '../Project'

class About extends Component {

  render() {

    return (
      <div className = "App text-center">
          <Projects/>

        <a href = {Pdf} target = "_blank">ZhaoyangXia Resume</a>
      </div>
    );
  }
}

export default About;