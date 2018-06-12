var rs = require('readline-sync')
var rooms = require("./rooms.json")
var reward = {}
var backpack = []
var rewards = {
	attack: "increase strength", 
	health: "recover a heart", 
	defense: "insrease defense", 
	gold: "why?"
}
class Character {
	constructor(name, hp = 10, ap = 10) {
	this.name = name
	this.hp = hp
	this.ap = ap 
	}
}
class Enemy extends Character {
	constructor(name, hp = 3, ap, evilLaugh) {
		super(name, hp, ap)
		this.evilLaugh = "MUAHAHAH"
		this.item = item
	}
}
class Player extends Character {
	constructor(name, hp = 10, ap = 10) {
		super(name, hp, ap)
		this.backpack = ["knife", "water"]
	}
}



var attacks = [{
	"charm": [{
		"It worked! You're charming!": [`So charming that ${Character} decides to eat you`, `So charming that ${Character} decides to let you go`],
		"Nice try.": [`${Character} laughed so hard that they fell onto you!`, `${Character} laughed SO hard that they fell and accidentally landed in such an awkward way that they died instantly`] 
	}], 
	"cry": [{
		"It actually worked...": [`I cannot believe it, but ${Character} felt bad and ran away`, `${Character} felt so bad that they cried too...In fact, they cried so much that you drowned in their tears`],
		"It didn't work": [`Your crying had absolutely no effect on ${Character}`, `${Character} laughs at your crying. As the story master here, I think he's a jerk so I kill him off and you go free. Good job, you patheticed your way out!`] 
	}],
	"kick": [{
		"It worked": `You missed, but ${Character} ran away at your threat of violence...`,
		"It didn't work": "You missed, dude..."
	}], 
	"punch": [{
		"Wow, you're brave": "It worked. You win.",
		"Wow, that's original...": `${Character} didn't even respond to your violence.`
	}]
}]
var run = ["escaped", "were caught"]
var isSuccess = true
var instruction = {
	walk: "w",
	analyze: "a",
	search: "s",
	done: "d"
}
var adventurer

function getUserName() {
	var name = rs.question('\nTo begin, please enter your name: ')
	var correct = rs.keyInYN('\nYou entered \"' + name + '\". Is this correct? ')
	if (!correct) {
		setTimeout(console.log('\nSorry. Let\'s try again.'), 3000)
		setTimeout(getUserName(), 30000)
	}
	adventurer = new Player(name, 10, 10)
}
function instructMe() {
	var instruct = setTimeout(rs.keyInYN('\nWould you like a list of instructions?\n'), 5000)
	if (instruct) {
		console.log('\nTo perform the actions, type the corresponding keys. \n')
		for (var key in instruction) {
			console.log('The \"' + instruction[key] + '\" key to ' + key + '.\n') 
		}
		setTimeout(rs.keyInPause(), 10000)
	}

}
function storyTime() {
	console.log('\nHello, adventurer! This is a quest to save the universe from the evil Emporer Zerg! You\'re not Buzz Lightyear, but you know a guy who knows a guy who met him once. Anyway, Zerg sent his minions to your city to find you. Try to escape them without dying! MUAHAHAHA! By the way, I only know this because I work for Zerg! BUAHAMAMAUAUAUAUAUAUA! Good Luck!\n')
	rs.keyInPause()
	console.log('\nYou awaken in a dark room. It smells terrible. You fumble around to find a wall. \n')
	choice()
}

function isSuccess(failPercent) {
	return (Math.floor(Math.random() * 100) > failPercent) ? true : false
}

function walk() {
	if (isSuccess()) {
		console.log('You find a light! You look around the room. You\'re in an abondoned house it seems. You keep looking around the room. In the other corner you notice something moving...')
	} else {
		adventurer.hp--
		console.log('OW! You stubben your toe! Your injury causes you to lose a heart. Now you only have ' + adventurer.hp)
	}
}	
function analyze() {
	console.log("Adventurer: " + adventurer.name + "\nHearts: " + adventurer.hp + "\nBackpack: " + adventurer.backpack)

}
function search() {

}
function done() {

}
function run() {
}
function fight() {
	if (!isSuccess()) {
		console.log('You were unsuccessful. \n')
	} else {
		console.log('=D \n')
	}
}
function choice() {
	var move = rs.question('What do you do? \n')
	if (move == "w") {
		//console.log('You walk around the room trying to find a light.')
		//walk()
		var chance = Math.random() * 10
		if (chance > rooms[i].probability) {
			console.log(rooms[i].w[0])
		} else {
			console.log(rooms[i].w[1])
		}
	} else if (move == "a") {
		console.log('You swing your arms! The air better watch out!')
		analyze() 
		if (isSuccess()) {
			console.log('Surprisingly, you managed to hit something...!') 
		}
	}	else if (move == "s") {

	}	else if (move == "d") {
			console.log('It\'s been real. Late.')
	} else {
		console.log("Please choose a valid option. \n")
		choice()
	}
}

module.export getUserName()
