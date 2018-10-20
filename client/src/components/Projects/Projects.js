import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import React from 'react'
import MarvelDemo from '../../images/marvel-demo.gif'
import PortfolioDemo from '../../images/p-demo.gif'
import StudioDemo from '../../images/studio566-demo.gif'

/**
 * The Styles for the `About` component.
 */
const styles = theme => ({
  aLink: {
    width: '200px',
    margin: '20px 20px',
    backgroundColor: '#26a69a',
    '&:hover': {
      backgroundColor: '#26a69a',
    },
  },
  pWrapperOne: {
    backgroundColor: '#ec6268',
    paddingBottom: '150px',
  },
  pWrapperTwo: {
    backgroundColor: '#587291',
    padding: '125px 0px',
  },
  pWrapperThree: {
    backgroundColor: '#90a8c3',
    padding: '125px 0px',
  },
  pContainer: {
    margin: '0px auto',
    width: '80%',
  },
  pTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Raleway, sans-serif',
    color: '#ffffff',
    textTransform: 'uppercase',
    padding: '50px 0px',
  },
  pSubtitle: {
    fontFamily: 'Raleway, sans-serif',
    color: '#ffffff',
    paddingTop: '25px',
    lineHeight: '5px',
  },
  pCaption: {
    fontFamily: 'Raleway, sans-serif',
    color: '#ffffff',
    fontSize: '1.25em',
  },
  newProjects: {
    width: '60%',
    textAlign: 'center',
    margin: '0 auto',
  },
  pImage: {
    maxWidth: '100%',
    height: 'auto',
    filter: 'drop-shadow(5px 5px 5px #222)',
  },
  '@media screen and (max-width: 1200px)': {
    pSubtitle: {
      lineHeight: '35px',
    },
  },
  '@media screen and (max-width: 720px)': {
    newProjects: {
      width: '100%',
    },
  },
})

/**
 * Renders the `Projects` component.
 */
const Projects = ({ classes }) => (
  <div>
    <div className={classes.pWrapperOne} id="projects">
      <div className={classes.pContainer}>
        <h3 className={classes.pTitle}>Projects</h3>
        <div className={classes.newProjects}>
          <img src={MarvelDemo} alt="marvel-demo" className={classes.pImage} />
          <h4 className={classes.pSubtitle}>Marvel Data Adventures</h4>
          <p className={classes.pCaption}>React | Frontend | API </p>
          <p className={classes.pCaption}>
            A web application that utilizes Marvel's API to search all Heroes and Comics that are a part of the Marvel
            Universe. The app was made by using React for the frontend and Google Firebase for hosting.
          </p>
          <a href="https://marvel-data-adventures.firebaseapp.com/" target="_blank" rel="noopener noreferrer">
            <Button variant="contained" color="primary" className={classes.aLink}>
              VIEW APP
            </Button>
          </a>
          <a href="https://github.com/scottcinatl/marvel-data-adventures" target="_blank" rel="noopener noreferrer">
            <Button variant="contained" color="primary" className={classes.aLink}>
              VIEW CODE
            </Button>
          </a>
        </div>
      </div>
    </div>
    <div className={classes.pWrapperTwo}>
      <div className={classes.pContainer}>
        <div className={classes.newProjects}>
          <img src={StudioDemo} alt="studio5sixsix-demo" className={classes.pImage} />
          <h4 className={classes.pSubtitle}>Studio5sixsix Photography Website</h4>
          <p className={classes.pCaption}>React | Frontend | Backend </p>
          <p className={classes.pCaption}>
            A photography portfolio website I developed for a local photographer using React for the frontend and
            Node.js and Express for the server side of the application.
          </p>
          <a href="https://studio5sixsix.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <Button variant="contained" color="primary" className={classes.aLink}>
              VIEW APP
            </Button>
          </a>
          <a
            href="https://github.com/scottcinatl/studio5sixsix-photography-portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="contained" color="primary" className={classes.aLink}>
              VIEW CODE
            </Button>
          </a>
        </div>
      </div>
    </div>
    <div className={classes.pWrapperThree}>
      <div className={classes.pContainer}>
        <div className={classes.newProjects}>
          <img src={PortfolioDemo} alt="portfolio-demo" className={classes.pImage} />
          <h4 className={classes.pSubtitle}>Developer Portfolio</h4>
          <p className={classes.pCaption}>React | Frontend | Backend </p>
          <p className={classes.pCaption}>
            A portfolio website I developed using React, React Materialize, and my own graphic design work for the
            frontend while utilizing Node.js and Express for the server side of the application.
          </p>
          <a href="http://www.scottcinatl.com" target="_blank" rel="noopener noreferrer">
            <Button variant="contained" color="primary" className={classes.aLink}>
              VIEW APP
            </Button>
          </a>
          <a href="https://github.com/scottcinatl/developer-portfolio" target="_blank" rel="noopener noreferrer">
            <Button variant="contained" color="primary" className={classes.aLink}>
              VIEW CODE
            </Button>
          </a>
        </div>
      </div>
    </div>
  </div>
)

/**
 * Renders the `Projects` component.
 */
export default withStyles(styles)(Projects)
