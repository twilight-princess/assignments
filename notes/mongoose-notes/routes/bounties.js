const express = require("express")

const bountiesRouter  = express.Router()
const Bounty = require("../models/bounties.js")

bountiesRouter.route("/")
    .get((req, res) => {
        Bounty.find()
    })

module.exports = bountiesRouter