import React, { Component } from 'react'
import { Button } from 'react-materialize'

import './About.css'

class About extends Component {
  render() {
    return (
      <div className="new-about-container" id="about">
        <div className="new-about-section">
          <div className="a-left">
            <div className="profile-position">
              <img src="./scott-cinatl-profile-picture.png" alt="scott-cinatl-profile" className="profile-picture" />
            </div>
            <div className="a-links">
              <a href="https://www.linkedin.com/in/scottcinatl/">
                <Button waves="light" className="alink">
                  VIEW LINKEDIN
                </Button>
              </a>
              <a href="https://github.com/scottcinatl">
                <Button waves="light" className="alink">
                  VIEW GITHUB
                </Button>
              </a>
            </div>
          </div>
          <div className="a-right">
            <h3 className="about-title">ABOUT ME</h3>
            <div className="a-description">
              Before pursuing web development, I worked at an educational non-profit. While the mission was what drew me
              to work there, I also enjoyed the freedom to improve and create programs to better serve the students in
              the program. With this in mind, I turned my attention to web development and began to teach myself to code
              after work. My curiosity of programming soon turned into a passion to learn as much as I could, solve
              problems, and build web applications.
            </div>
            <div className="a-skills">
              <p>
                <span>Languages:</span> <br />JavaScript, HTML5, CSS3, SQL
              </p>
              <p>
                <span>Frameworks & Libraries:</span> <br />React.js, Redux, RxJs, React Router, Node.js, Express, Sequelize,
                Bootstrap
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
