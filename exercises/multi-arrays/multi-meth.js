var people = ([  
    {
      firstName: "Sarah",
      lastName: "Palin",
      age: 47
    },{
      firstName: "Frank",
      lastName: "Zappa",
      age: 12
    },{
      firstName: "Rick",
      lastName: "Sanchez",
      age: 78
    },{
      firstName: "Morty",
      lastName: "Smith",
      age: 13
    },{
      firstName: "Kyle",
      lastName: "Mooney",
      age: 27
    }
  ]);  

function sortedLast(arr) {
    arr.sort(function(a,b) {
        return a.firstName > b.firstName
    })
        .filter(function(arr) {
            return arr.age >= 18
        })
    console.log(arr)
}
function sortEighteen() {

}
function displayList(arr){

}
sortedLast(people)
displayList()