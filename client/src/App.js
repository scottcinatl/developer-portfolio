import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import Jumbotron from './components/Jumbotron'
import Projects from './components/Projects'
import About from './components/About'
import Form from './components/Form'
import Footer from './components/Footer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apiUrl: 'http://localhost:3000',
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
        <div>
          <Header />
        </div>
        <div>
          <Jumbotron />
        </div>

        <div>
          <About />
        </div>

        <div>
          <Projects />
        </div>

        <div>
          <Form onSubmit={this.handleNewMessage.bind(this)} />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default App
