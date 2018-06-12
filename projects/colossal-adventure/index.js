var rs = require('readline-sync')
var backpack = []
var rewards = {
	attack: increase strength, 
	health: recover a heart, 
	defense: insrease defense, 
	gold: why?
}
var animals = ["a rattle snake", "a pack of small child", "a ferral cat", "a cute puppy"]
var enemies = ["an alien", "a goblin", "a mini-zerg", "a mountain lion"]
var attacks = ["charm", "cry", "kick", "punch"]
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

function main() {

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
}


main()
