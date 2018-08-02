var rooms = require("./rooms.json")
var index = require("./index")

index.getUserName()
index.instructMe()
//index.storyTime()

for (var i =0; i < rooms.length; i++) {
  console.log(rooms[i].description)
  index.choice()
}
