import { withStyles } from '@material-ui/core/styles'
import React from 'react'

/**
 * The Styles for the `Footer` component.
 */
const styles = theme => ({
  footer: {
    backgroundColor: '#4e5d74',
    color: 'white',
    fontFamily: 'Raleway, sans-serif',
    textAlign: 'center',
    flexShrink: 0,
    padding: '25px 0',
  },
})

/**
 * Renders the `Footer` component.
 */
const Footer = ({ classes }) => (
  <div className={classes.footer}>
    <h4>Scott Cinatl</h4>
    <p>&copy;Copyright 2018</p>
  </div>
)

/**
 * Renders the `Footer` component.
 */
export default withStyles(styles)(Footer)
