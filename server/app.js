var express = require('express')
var bodyParser = require('body-parser')
var validator = require('express-validator')
var app = express()
var cors = require('cors')
var Contact = require('./models').Contact

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(validator())
app.use(cors())

app.get('/', (req, res) => {
  res.json({ message: 'API Example App' })
})

app.get('/contact', (req, res) => {
  Contact.findAll().then(contact => {
    res.json({ contact: contact })
  })
})

app.post('/contact', (req, res) => {
  // We setup a validation check for 'name'
  req.checkBody('name', 'Is required').notEmpty()
  req.checkBody('email', 'Is required').notEmpty()
  req.checkBody('message', 'Is required').notEmpty()

  // Now we can run our validations
  req.getValidationResult().then(validationErrors => {
    // If there are no errors, go ahead and create cat
    if (validationErrors.isEmpty()) {
      Contact.create({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
      }).then(contact => {
        res.status(201)
        res.json({ contact: contact })
      })
    } else {
      // Uh ohh,  there were validation issues.  Report them back to the user.
      res.status(400)
      res.json({ errors: { validations: validationErrors.array() } })
    }
  })
})

module.exports = app
