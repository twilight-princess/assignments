var rs = require('readline-sync')

var backpack = [10]

var rewards = {
	attack: "increase strength", 
	health: "recover a heart", 
	defense: "insrease defense", 
	gold: "why?"
}
function Character(name, hp, ap,) {
	this.name = name;
	this.hp = 10;
	this.hp = 10;
}
function Enemy extends Character() {
	this.evilLaugh = "MUAHAHAH"
}
function Player extends Character() {
	this.backpack = ["knife", "water"]
}
var attacks = [{
	"charm": [{
		"It worked! ${Character} thinks you're charming!": ["So charming that ${Character} decides to eat you", "So charming that ${Character} decides to let you go"],
		"Nice try. ${Character} just laughed": ["${Character} laughed so hard that they fell onto you!", "${Character} laughed SO hard that they fell and accidentally landed in such an awkward way that they died instantly"] 
	}], 
	"cry": [{
		"It actually worked...": ["I cannot believe it, but ${Character} felt bad and ran away", "${Character} felt so bad that they cried too...In fact, they cried so much that you drowned in their tears"]
		"It didn't work": ["Your crying had absolutely no effect on ${Character}", "${Character} laughs at your crying. As the story master here, I think he's a jerk so I kill him off and you go free. Good job, you patheticed your way out!"] 
	}],
	"kick": [], 
	"punch": []
}]
var run = ["escaped", "were caught"]
var chance = Math.floor(Math.random())
var isSuccess = true;
var HP = 10
var instruction = {
	walk: "w",
	attack: "a",
	sit: "s",
	done: "d"
}



	function getUserName() {
		var player = rs.question('To begin, please enter your name: ')
		var correct = rs.keyInYN('You entered: \"' + player + '\". Is this correact? ')
		if (!correct) {
			console.log('Sorry. Let\'s try again.')
			getUserName()
		}
	}
	
	console.log('\nHello, adventurer! This is a quest to save the universe from the evil Emporer Zerg! You\'re not Buzz Lightyear, but you know a guy who knows a guy who met him once. Anyway, Zerg sent his minions to your city to find you. Try to escape them without dying! MUAHAHAHA! By the way, I only know this because I work for Zerg! BUAHAMAMAUAUAUAUAUAUA! Good Luck!')
	
	function instructMe() {
		var instruct = rs.keyInYN('\nWould you like a list of instructions?')
		if (instruct) {
			instructMe()
	}
		console.log('\nTo perform the actions, type the corresponding keys. \n')
		console.log(instruction) 
	}
	function print() {
		console.log("Adventurer: " + player + "\nHearts: " + HP + "Backpack: " + backpack)
	}
	function walk() {
		chance *= 100
		if (chance < 50) {	
			isSuccess = false
		}
		if (!isSuccess) {
			console.log('You were unsuccessful. \n')
		} else {
			console.log('=D \n')
		}
	}	
	function run() {
	
	}
	function fight() {
		chance *= 100
		if (chance < 50) {	
			isSuccess = false
		}
		if (!isSuccess) {
			console.log('You were unsuccessful. \n')
		} else {
			console.log('=D \n')
		}

	}
	function storyTime() {
		console.log('\nYou awaken in a dark room. It smells terrible. You fumble around to find a wall. \nWhat do you do? \n')
		var move = rs.question(instruction)
		if (move == "w") {
			console.log('You walk around the room trying to find a light.')
			walk()
			if (isSuccess) {
				console.log('You find a light! You look around the room. You\'re in an abondoned house it seems. You keep looking around the room. In the other corner you notice something moving...')
			} else {
				HP--
				console.log('OW! You stubben your toe! Your injury causes you to lose a heart. Now you only have ' + HP)
			}
		} else if (move == "a") {
			console.log('You swing your arms! The air better watch out!')
			fught() 
			if (isSuccess) {
				console.log('Surprisingly, you managed to hit something...!') 
		}	
		}
		
	}

	getUserName()
	instructMe()
	storyTime()



main()
