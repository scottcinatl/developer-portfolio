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
          <img src="./scott-cinatl-profile-picture.png" alt="scott-cinatl-profile" className={classes.profilePicture} />
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
          Before pursuing web development, I worked at an educational non-profit. While the mission was what drew me to
          work there, I also enjoyed the freedom to improve and create programs to better serve the students in the
          program. With this in mind, I turned my attention to web development and began to teach myself to code after
          work. My curiosity of programming soon turned into a passion to learn as much as I could, solve problems, and
          build web applications.
        </div>
        <div className={classes.aSkills}>
          <p>
            <span>Languages:</span> <br />
            JavaScript, HTML5, CSS3, SQL
          </p>
          <p>
            <span>Frameworks & Libraries:</span> <br />
            React.js, Redux, RxJs, React Router, Node.js, Express, Sequelize, Bootstrap
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
