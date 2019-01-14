import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import React from 'react'

/**
 * The Styles for the `About` component.
 */
const styles = theme => ({
  aboutTitle: {
    textAlign: 'center',
    fontFamily: 'Raleway, sans-serif',
    fontWeight: 'bold',
  },
  aDescription: {
    fontSize: '1.25em',
  },
  aLinks: {
    marginTop: '50px',
  },
  alink: {
    width: '200px',
    margin: '20px 20px',
    backgroundColor: '#26a69a',
    '&:hover': {
      backgroundColor: '#26a69a',
    },
  },
  aLeft: {
    flex: 1,
    textAlign: 'center',
    marginRight: '20px',
  },
  aRight: {
    flex: 3,
  },
  aSkills: {
    fontSize: '1.25em',
    marginTop: '10px',
    '& span': {
      fontSize: '1.26em',
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
  },
  newAboutContainer: {
    margin: '50px 0px',
  },
  newAboutSection: {
    display: 'flex',
    width: '80%',
    margin: '0 auto',
    flexWrap: 'wrap',
    fontFamily: 'Raleway, sans-serif',
    color: '#48a9a6',
  },
  profilePicture: {
    width: '170px',
    height: '173px',
    borderRadius: '50%',
    border: '5px solid #48a9a6',
  },
  profilePosition: {
    paddingTop: '20px',
  },
  '@media only screen and (max-width: 900px)': {
    aLeft: {
      flex: 1,
      marginRight: '0px',
    },
    aLink: {
      margin: '10px 10px',
    },
    aLinks: {
      margin: '15px 0px',
    },
    aRight: {
      flex: 1,
    },
    newAboutSection: {
      flexDirection: 'column',
    },
    profilePosition: {
      paddingTop: '0px',
    },
  },
  '@media only screen and (max-width: 600px)': {
    profilePicture: {
      width: '170px',
      height: '173px',
      borderRadius: '50%',
      border: '5px solid #48a9a6',
    },
  },
})

/**
 * Renders the `About` component.
 */
const About = ({ classes }) => (
  <div className={classes.newAboutContainer} id="about">
    <div className={classes.newAboutSection}>
      <div className={classes.aLeft}>
        <div className={classes.profilePosition}>
          <img src="./scott-cinatl-profile-picture.jpg" alt="scott-cinatl-profile" className={classes.profilePicture} />
        </div>
        <div className={classes.aLinks}>
          <a href="https://www.linkedin.com/in/scottcinatl/">
            <Button variant="contained" color="primary" className={classes.alink}>
              VIEW LINKEDIN
            </Button>
          </a>
          <a href="https://github.com/scottcinatl">
            <Button variant="contained" color="primary" className={classes.alink}>
              VIEW GITHUB
            </Button>
          </a>
        </div>
      </div>
      <div className={classes.aRight}>
        <h3 className={classes.aboutTitle}>ABOUT ME</h3>
        <div className={classes.aDescription}>
          I am a web developer with experience working on an agile development team building responsive single page web
          applications that implement UI/UX designs that are intuitive for users on both mobile and desktop
          applications. I am driven to continually improve my skill set and utilize my creativity to solve problems that
          are set before me.
        </div>
        <div className={classes.aSkills}>
          <p>
            <span>Languages:</span> <br />
            JavaScript, TypeScript, HTML5, CSS3, SQL
          </p>
          <p>
            <span>Frameworks & Libraries:</span> <br />
            React.js, Redux, RxJs, React Router, Node.js, Express, Sequelize, Bootstrap, Naterial UI, Bulma, Storybook
          </p>
        </div>
      </div>
    </div>
  </div>
)

/**
 * Renders the `About` component.
 */
export default withStyles(styles)(About)
