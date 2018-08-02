const express = require('express')
const bodyParser = require('body-parser')
const uuid = require('uuid')
const PORT = 8080

const DECK = []

const app = express()
app.use(bodyParser.json())

app.route('/deck')
  .get((req, res) => {
    res.send(DECK)
  })
  .post((req, res) => {
    let newCard = req.body
    newCard._id = uuid()
    DECK.push(newCard)
    res.send(newCard)
  })
app.route('/deck/:id/')
  .get((req, res) => {
    let foundCard = DECK.find(card => {
      return card._id === req.params.id
    })
    res.send(foundCard)
  })
  .put((req, res) => {
    const toBeEdited = DECK.find(card => card._id === req.params.id)
    for (let key in req.body) {
      toBeEdited[key] = req.body[key]
    }
    res.send(toBeEdited)
  })
  .delete((req, res) => {
    const deleteCard = DECK.find(card._id === req.params.id)
    deck.splice(DECK.indexOf(deleteCard))
    return res.send(deleteCard)
  })

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))