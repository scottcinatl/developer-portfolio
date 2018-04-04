import React, { Component } from 'react'
import { Button } from 'react-materialize'

import PortfolioDemo from '../../images/p-demo.gif'
import StudioDemo from '../../images/studio566-demo.gif'
import MarvelDemo from '../../images/marvel-demo.gif'

import './Projects.css'

class Projects extends Component {
  render() {
    return (
      <div>
        <div className="p-wrapper-one" id="projects">
          <div className="p-container">
            <h3 className="p-title">Projects</h3>
            <div className="new-projects">
              <img src={MarvelDemo} alt="marvel-demo" className="p-image" />
              <h4 className="p-subtitle">Marvel Data Adventures</h4>
              <p className="p-caption">React | Frontend | API </p>
              <p className="p-caption">
                A web application that utilizes Marvel's API to search all Heroes and Comics that are a part of the
                Marvel Universe. The app was made by using React for the frontend and Google Firebase for hosting.
              </p>
              <a href="https://marvel-data-adventures.firebaseapp.com/" target="_blank" rel="noopener noreferrer">
                <Button waves="light" className="alink">
                  VIEW APP
                </Button>
              </a>
              <a href="https://github.com/scottcinatl/marvel-data-adventures" target="_blank" rel="noopener noreferrer">
                <Button waves="light" className="alink">
                  VIEW CODE
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div className="p-wrapper-two">
          <div className="p-container">
            <div className="new-projects">
              <img src={StudioDemo} alt="studio5sixsix-demo" className="p-image" />
              <h4 className="p-subtitle">Studio5sixsix Photography Website</h4>
              <p className="p-caption">React | Frontend | Backend </p>
              <p className="p-caption">
                A photography portfolio website I developed for a local photographer using React for the frontend and
                Node.js and Express for the server side of the application.
              </p>
              <a href="https://studio5sixsix.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <Button waves="light" className="alink">
                  VIEW APP
                </Button>
              </a>
              <a
                href="https://github.com/scottcinatl/studio5sixsix-photography-portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button waves="light" className="alink">
                  VIEW CODE
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div className="p-wrapper-three">
          <div className="p-container">
            <div className="new-projects">
              <img src={PortfolioDemo} alt="portfolio-demo" className="p-image" />
              <h4 className="p-subtitle">Developer Portfolio</h4>
              <p className="p-caption">React | Frontend | Backend </p>
              <p className="p-caption">
                A portfolio website I developed using React, React Materialize, and my own graphic design work for the
                frontend while utilizing Node.js and Express for the server side of the application.
              </p>
              <a href="http://www.scottcinatl.com" target="_blank" rel="noopener noreferrer">
                <Button waves="light" className="alink">
                  VIEW APP
                </Button>
              </a>
              <a href="https://github.com/scottcinatl/developer-portfolio" target="_blank" rel="noopener noreferrer">
                <Button waves="light" className="alink">
                  VIEW CODE
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects
