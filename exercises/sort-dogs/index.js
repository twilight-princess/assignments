var sortedDogOwners = ([  
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47,
        pets: ["dog", "cat"]
    }, 
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12,
        pets: ["dog"]
    }, 
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78,
        pets: ["cat", "parrot"]
    }, 
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 13,
        pets: ["cat", "parrot", "dog"]
    }, 
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27,
        pets: ["dog"]
    }
]);
function sortedDogOwners(arr) {

}
function arbitraryPractice(arr){
  var filterByAge = arr.filter(function(person){
    return person.age > 20
  })
  
  return filterByAge.reduce(function(accumulator, person){
    var hasNicknames = person.pets.every(function(pet){
      return pet.nickNames.length
    })
    var hasDog = person.pets.some(function(pet){
      returnpet.type ==="dog"
    })
    if (hasNicknames && hasDog){
      var liTags = person.pets.map(function(pet){
        return "<li>" + pet.name + "</li>"
      })
      return accumulator.concat(LiTags)
    } else {
      return accumulator
    }
  })
}


console.log(arbitraryPractice([  
  {
      firstName: "Sarah",
      lastName: "Palin",
      age: 47,
      pets: [
          {
              name: "Alfred",
              type: "dog",
              nickNames: ["Lil Alfred", "Alfy", "Alfinator"]
          },
          {
              name: "Charles",
              type: "cat",
              nickNames: ["Charley"]
          },
          {
              name: "Bark Obama",
              type: "dog",
              nickNames: ["Barack", "Mr. President"]
          },
          {
              name: "Christopher George Latore Wallace",
              type: "dog",
              nickNames: ["Notorious D.I.G.", "Diggie Smalls"]
          }

      ]
  },
  {
      firstName: "Frank",
      lastName: "Zappa",
      age: 12,
      pets: [
          {
              name: "Howard",
              type: "dog",
              nickNames: []
          },
          {
              name: "Bear",
              type: "dog",
              nickNames: []
          }
      ]
  },
  {
      firstName: "Rick",
      lastName: "Sanchez",
      age: 78,
      pets: [
          {
              name: "Bird Person",
              type: "bird",
              nickNames: ["Phoenixperson"]
          },
          {
              name: "Krombopulos Michael",
              type: "Gromflomite",
              nickNames: ["Assassin man"]
          },
          {
              name: "Squanchy",
              type: "Cat-person",
              nickNames: ["Squanch", "Smarf", "Thunder Cat"]
          }

      ]
  },
  {
      firstName: "Morty",
      lastName: "Smith",
      age: 23,
      pets: [
          {
              name: "Morty Jr.",
              type: "Gazorpazorp",
              nickNames: ["Gwendolyn Jr."]
          },
          {
              name: "Snuffels",
              type: "dog",
              nickNames: ["Snowball"]
          }

      ]
  }
]));

//should return 
// ['<li>Alfred</li>',
// '<li>Charles</li>',
// '<li>Bark Obama</li>', 
// '<li>Christopher George Latore Wallace</li>',
// '<li>Morty Jr.</li>', 
// '<li>Snuffels</li>']

module.exports = {
  sortedDogOwners: sortedDogOwners,
  arbitraryPractice: arbitraryPractice

}