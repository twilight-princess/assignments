var Student = {
  name: "Darlene",
  age: 28,
  Pet: [
    {
      name: "Eddie",
      type: "cat",
      age: 6,
      speak: function() {
        console.log("meow")
      }
    },
    {
      name: "Ned",
      type: "cat",
      age: 1,
      speak: function() {
        console.log("meow")
      }
    },
    {
      name: "Mal",
      type: "pup",
      age: 1,
      speak: function() {
        console.log("bark cry bark")
      }
    }
  ],
  Friends: [
    {
      name: "Sarah",
      age: 26,
      pets: [],
      location: "Indy"
    },
    {
      name: "Irene",
      age: 28,
      location: "Indy",
      Pet: [
        {
          name: "Eddie",
          type: "cat",
          age: 6,
          speak: function() {
            console.log("meow")
          }
        },
        {
          name: "Ned",
          type: "cat",
          age: 1,
          speak: function() {
            console.log("meow")
          }
        },
        {
          name: "Mal",
          type: "pup",
          age: 1,
          speak: function() {
            console.log("bark cry bark")
          }
        }
      ],
      speak: function() {
        console.log("talk talk talk")
      }
    }
  ],
  speak: function() {
    console.log("dkfjslkjfslkjflksjfklsdjfkdsjflksdjf");
  }
}

Student.Pet[0].speak();
//Student.Friend.speak();