import React, { Component } from 'react'
import { Row, Input, Button } from 'react-materialize'

import './Form.css'

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
    return (
      <div className="form-section" id="contact">
        <p>
          <img src="./scott-dev-icon.png" alt="scott-cinatl-dev-logo" className="form-logo" />
        </p>
        <h3 className="form-title">CONTACT ME</h3>
        <div className="form">
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
              <div className="form-button">
                <Button waves="light" onClick={this.handleSubmit.bind(this)} id="submit">
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

export default Form
