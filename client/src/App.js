import React, { Component } from 'react'
import './App.css'
import NavigationBar from './components/NavigationBar/NavigationBar'
import Jumbotron from './components/Jumbotron/Jumbotron'
import Projects from './components/Projects/Projects'
import About from './components/About/About'
import Testimonials from './components/Testimonials/Testimonials'
import Form from './components/Form/Form'
import Footer from './components/Footer/Footer'

var apiUrl
if (process.env.NODE_ENV === 'production') {
  apiUrl = '/contacts'
} else {
  apiUrl = 'http://localhost:3000'
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apiUrl: apiUrl,
      newMessageSuccess: false,
    }
  }

  handleNewMessage(params) {
    fetch(`${this.state.apiUrl}/contact`, {
      body: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
      .then(rawResponse => {
        return rawResponse.json()
      })
      .then(parsedResponse => {
        if (parsedResponse.errors) {
          this.setState({ errors: parsedResponse.errors })
        } else {
          this.setState({
            user: parsedResponse.user,
            errors: null,
            newMesssageSuccess: true,
          })
        }
      })
  }

  render() {
    return (
      <div className="site-content">
        <NavigationBar />

        <Jumbotron />

        <About />

        <Testimonials />

        <Projects />

        <Form onSubmit={this.handleNewMessage.bind(this)} />
        <Footer />
      </div>
    )
  }
}

export default App
