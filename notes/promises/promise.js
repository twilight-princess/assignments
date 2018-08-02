// JavaScript Promise

// built-in constructors for js
const array = new Array
const obj = new Object
const bool = new Boolean
const date = new Date

// one built-in constructor is Promise
// axios uses this
// takes a callback function with two params, resolve and reject
// can be in 3 states, Fulfilled, Rejecting, Pending
    // Pending can transition into fulfilled or rejects. 
    // once fulfilled or rejected cannot change
const genericPromise = new Promise(function(resolve, reject) {

})

function wait(time) {
    return new Promise(function(resolve, reject) {
        return setTimeout(resolve, time)
    })
}

wait(2000)
    // one benefit of promises is that ".then"s can be changed together
    .then(() = console.log("Dinner is ready!"))
    .catch(err => {
        // some apis have built-in errors setup so you can just use "err" or your own message/function/w/e
        console.log(err)
    })

