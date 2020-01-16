console.log("Up and running!");

let cards = ["queen", "queen", "king", "king"]

let cardsInPlay = [];

console.log("User flipped queen")
console.log("User flipped king")

let checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  		console.log("You found a match!");
	} else {
  		console.log("Sorry, try again.");
	}
}
let flipCard = function(cardId) {

	flipCard(0);
	flipCard(2);

	console.log("User flipped " + cards[cardId])
	cardsInPlay.push(cards[cardId]);
	if (cardsInPlay.length === 2) {
	checkForMatch();
	};
}

