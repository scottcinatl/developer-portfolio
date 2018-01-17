import React, { Component } from 'react'

import { Button } from 'react-materialize'

class About extends Component {
  render() {
    return (
      <div className="about-section" id="about">
        <div>
          <img src="./scott-cinatl-profile-picture.png" className="profile-picture" />
        </div>
        <h3 className="about-title">ABOUT ME</h3>
        <div className="about-description">
          <div>
            Before pursuing web development, I worked at an educational non-profit. While the mission was what drew me
            to work there, I also enjoyed the freedom to improve and create programs to better serve the students in the
            program. With this in mind, I turned my attention to web development and began to teach myself to code after
            work. My curiosity of programming soon turned into a passion to learn as much as I could, solve problems,
            and build web applications.
          </div>
        </div>
        <div className="about-skills">
          <div className="about-col-left">
            <h4>Programming Languages</h4>
            <img src="./html.png" className="about-icons" />
            <img src="./CSS.png" className="about-icons" />
            <img src="./js.png" className="about-icons" />
          </div>
          <div className="about-col-right">
            <h4>Frameworks & Libraries</h4>
            <img src="./reactjs.png" className="about-icons" />
            <img src="./nodejs.png" className="about-icons" />
            <img src="./sql-icon.png" className="about-icons" />
          </div>
        </div>
        <div className="portfolio-links">
          <a href="https://www.linkedin.com/in/scottcinatl/">
            <Button waves="light" className="link">
              VIEW LINKEDIN
            </Button>
          </a>
          <a href="https://github.com/scottcinatl">
            <Button waves="light" className="link">
              VIEW GITHUB
            </Button>
          </a>
        </div>
      </div>
    )
  }
}

export default About
