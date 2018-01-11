import React, { Component } from 'react'

import { Navbar, NavItem } from 'react-materialize'

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar brand="Scott Cinatl" right>
          <NavItem href="#about">ABOUT</NavItem>
          <NavItem href="#projects">PROJECTS</NavItem>
          <NavItem href="#contact">CONTACT</NavItem>
        </Navbar>
      </div>
    )
  }
}

export default Header
