import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import React, { Component } from 'react'
import { Input, Row } from 'react-materialize'

/**
 * The Styles for the `Form` component.
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
  formSection: {
    margin: '100px 0',
  },
  form: {
    margin: '50px 200px',
  },
  formTitle: {
    textAlign: 'center',
    fontFamily: 'Raleway, sans-serif',
    color: '#48a9a6',
  },
  formButton: {
    textAlign: 'center',
  },
  formSectionP: {
    textAlign: 'center',
  },
  formLogo: {
    height: '250px',
    width: '250px',
    marginBottom: '50px',
  },
  '@media screen and (max-width: 1000px)': {
    form: {
      margin: '50px 100px',
    },
  },
  '@media (max-width: 650px)': {
    form: {
      margin: '50px 10px',
    },
  },
})

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        name: '',
        email: '',
        message: '',
      },
    }
  }

  handleChange(event) {
    const formState = Object.assign({}, this.state.form)
    formState[event.target.name] = event.target.value
    this.setState({ form: formState })
  }

  handleSubmit() {
    this.props.onSubmit(this.state.form)
    document.getElementById('submit').innerHTML = 'Message Submitted!'
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.formSection} id="contact">
        <p className={classes.formSectionP}>
          <img src="./scott-dev-icon.png" alt="scott-cinatl-dev-logo" className={classes.formLogo} />
        </p>
        <h3 className={classes.formTitle}>CONTACT ME</h3>
        <div className={classes.form}>
          <form>
            <Row>
              <Input
                s={6}
                label="Full Name"
                type="text"
                name="name"
                value={this.state.form.name}
                onChange={this.handleChange.bind(this)}
              />
              <Input
                s={6}
                type="email"
                label="Email"
                name="email"
                value={this.state.form.email}
                onChange={this.handleChange.bind(this)}
              />
              <Input
                type="textarea"
                label="Message"
                s={12}
                name="message"
                value={this.state.form.message}
                onChange={this.handleChange.bind(this)}
              />
              <div className={classes.formButton}>
                <Button
                  className={classes.aLink}
                  variant="contained"
                  color="primary"
                  onClick={this.handleSubmit.bind(this)}
                  id="submit"
                >
                  Submit
                </Button>
              </div>
            </Row>
          </form>
        </div>
      </div>
    )
  }
}

/**
 * Renders the `Form` component.
 */
export default withStyles(styles)(Form)
