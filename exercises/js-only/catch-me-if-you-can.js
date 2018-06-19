function sum(x, y){  
    //check data types first and throw error
    if(typeof x !== "number" || typeof y !== "number") {
        throw new TypeError("inputs must be numbers")
    }
    return x + y;
}
try {
    sum("x", "y")
} catch (err) {
    console.log(err.message)
}

var user = {username: "sam", password: "123abc"}
function login(name, pass) {
    let thisUser = {username: name, password: pass}
    if (user.username !== thisUser.username || user.password !== thisUser.password) {
      throw new TypeError("incorrect username or password")
    } 
    console.log("login successful!")
}
try {
    login("sa", "123abc")
} catch(err) {
    console.log(err.message)
}