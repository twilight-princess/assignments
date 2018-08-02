const express = require('express')

const bountiesRouter = express.Router()
const Bounty = require('../models/bounties.js')

bountiesRouter.route('/')
    .get((req, res) => {
        Bounty.find().exec((err, bounties) => {
            res.send(bounties)
        })
    })
    .post((req,res) => {
        console.log(req.body)
        let bounty = new Bounty(req.body)
        bounty.save((err) => {
            if (err) res.send(err)
            res.send({status: true})
        })
    })
bountiesRouter.route('/:id')
    .get((req, res) => {
        Bounty.findOne({_id: req.params.id}, (err, bounty) => {
            if (err) res.send(err)
            res.send(bounty)
        })
    })
    .put((req, res) => {
        Bounty.findOneAndUpdate({_id: req.params.id}, req.body, (err, bounty) => {
            if (err) res.send(err)
            res.send({status: true})
        })
    })
    .delete((req, res) => {
        Bounty.findOneAndRemove({_id: req.params.id}, (err) => {
            if (err) res.send(err)
            res.send({status: true})
        })
    })

module.exports = bountiesRouter