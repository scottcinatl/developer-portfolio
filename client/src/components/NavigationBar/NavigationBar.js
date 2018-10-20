import { withStyles } from '@material-ui/core/styles'
import React from 'react'
import { Navbar, NavItem } from 'react-materialize'

/**
 * The Styles for the `NavigationBar` component.
 */
const styles = theme => ({
  nav: {
    paddingLeft: '30px',
    fontFamily: 'Raleway, sans-serif',
    paddingRight: '30px',
  },
  '@media screen and (max-width: 800px)': {
    nav: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
})

/**
 * Renders the `NavigationBar` component.
 */
const NavigationBar = ({ classes }) => (
  <div>
    <Navbar className={classes.nav} brand="Scott Cinatl" right>
      <NavItem href="#about">ABOUT</NavItem>
      <NavItem href="#projects">PROJECTS</NavItem>
      <NavItem href="#contact">CONTACT</NavItem>
    </Navbar>
  </div>
)

/**
 * Renders the `NavigationBar` component.
 */
export default withStyles(styles)(NavigationBar)
