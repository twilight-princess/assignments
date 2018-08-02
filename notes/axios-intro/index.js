var axios = require("axios")
var url = "https://api.vschool.io/darlene/todo/"
// get post pull delete 
function getTodo(){
    axios.get(url)
    .then(function(response){
        console.log(response.data)
    })
    .catch(function(err){
        // handle error
    })
}
function addTodo(todo){
    axios.post(url,todo)
        .then(function(response){
            console.log(response.data)
        })
        .catch(function(err){
            console.log(err)
        })
}
function getSpecTodo(id){
    axios.get(url + id)
        .then(function(response){
            console.log(response.data)
        })
        .catch(function(err){
            console.log(err)
        })
}
function deleteSpecTodo(id){
    axios.delete(url + id)
    .then(function(response){
        console.log(response.data)
    })
    .catch(function(err){
        console.log(err)
    })
}
// addTodo({
//     title: "axios stuff",
//     description: "dfkjasfdkljsdlfkjsdlkfjds"
// })
//getTodo()
//getSpecTodo('5b27e867eec94d291400b511')
deleteSpecTodo('5b27e867eec94d291400b511')