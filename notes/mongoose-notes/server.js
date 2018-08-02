const express = require("express")
const mongoose = require("mongoose")

const PORT = 8080
const MONGODB_URI = "mongodb://localhost:27017/bounties"

const app = express()

app.use("/bounties", require("./routes/bounties"))

mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
    .then(db => console.log("connected to MongoDB")) 
    .catch(err => cosnole.log(err))
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))