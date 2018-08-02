const database = [  
    {firstName: "Jack", lastName: "Smith", age: 2},
    {firstName: "Jill", lastName: "Johnson", age: 20},
    {firstName: "Jill", lastName: "Smith", age: 100},
    {firstName: "Jack", lastName: "White", age: 2}
];

const queryIt = (queryIt, database) => {
    return database.filter(item => {
        for(key in query) {
            if(item[key] !== query[key]) return false
        }
        return true
    })
}
console.log(queryIt({}, database))