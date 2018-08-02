const express = require("express")
const bodyParser = require("body-parser")

const uuid = require("uuid")

const animals = [
    {_id: uuid(), name: "Tiger", type: "cat"},
    {_id: uuid(), name: "Oscar", type: "dog"},
    {_id: uuid(), name: "Titus", type: "cat"}
]

const shelters = [
    {_id: uuid(), name: "generic name for a shelter", city:"SLC",}
    {_id: uuid(), name: "generic name", city:"new york"},
    {_id: uuid(), name: "shelter", city:"LA"}
]

const PORT = 8080

const app = express()

app.use(bodyParser.json())

app.route("/animals")
    .get((req, res) => {
        res.status(200).send(animals)
    })
    .post((req, res) => {
        const newAnimal = req.body
        newAnimal._id = uuid()
        animals.push(newAnimal)
        res.status(201).send(newAnimal)
    })

    app.use(bodyParser.json())