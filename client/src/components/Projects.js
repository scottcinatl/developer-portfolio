import React, { Component } from 'react'

import { Card, CardTitle } from 'react-materialize'

class Projects extends Component {
  render() {
    return (
      <div className="projects-section" id="projects">
        <div className="projects-title">
          <h3>PROJECTS</h3>
        </div>
        <div className="projects">
          <div className="project-left">
            <Card
              className="large"
              header={<CardTitle image="./portfolio-demo.gif" />}
              actions={[
                <a href="https://www.scottcinatl.com" style={{ color: '#ec6268' }}>
                  www.scottcinatl.com
                </a>,
              ]}
            >
              <a href="https://github.com/scottcinatl">
                <h5 className="project-subtitle">
                  Development Portfolio<img src="./github-icon.png" className="github-icon" />
                </h5>
              </a>
              A portfolio website I developed using reactjs, react-materialize, and my own graphic design work for the
              frontend while utilizing node.js and express for the server side of the application.
            </Card>
          </div>
          <div className="project-right">
            <Card
              className="large"
              header={<CardTitle image="./studio-demo.gif" />}
              actions={[
                <a href="https://studio5sixsix.herokuapp.com/" style={{ color: '#ec6268' }}>
                  studio5sixsix.herokuapp.com
                </a>,
              ]}
            >
              <a href="https://github.com/scottcinatl/studio5sixsix-photography-portfolio">
                <h5 className="project-subtitle">
                  Studio566 Photography<img src="./github-icon.png" className="github-icon" />
                </h5>
              </a>
              A photography portfolio website I developed for a local photographer using reactjs and CSS styling work
              for the frontend while utilizing node.js and express for the server side of the application.
            </Card>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects
