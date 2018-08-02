const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bountySchema = new Schema({
// Bounty Object should have
// Firtname
    firstName: String,
// Lastname
    lastName: String,
// living (bool)
    living: Boolean,
// bounty amount
    reward: Number,
// type (sith or jedi)
    type: {
        type: String,
        required: true, 
        enum: ["jedi", "sith"]
    }
// id
})

const bountyModel = mongoose.model('Bounty', bountySchema)
module.exports = bountyModel