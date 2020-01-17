console.log("Up and running!");

let cards = [
{
	rank: 'queen',
	suit: 'hearts',
	cardImage: 'images/queen-of-hearts.png'
},
{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: 'images/queen-of-diamonds.png'
},
{
	rank: 'king',
	suit: 'hearts',
	cardImage: 'images/king-of-hearts.png'
},
{
	rank: 'king',
	suit: 'diamonds',
	cardImage: 'images/king-of-diamonds.png'
}
];

let cardsInPlay = [];

console.log("User flipped queen")
console.log("images/queen-of-hearts.png")
console.log("hearts")
console.log("User flipped king")
console.log("images/king-of-hearts.png")
console.log("hearts")

let checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  		console.log("You found a match!");
	} else {
  		console.log("Sorry, try again.");
	}
}

let flipCard = function() {
	this.getAttribute('data-id')
	console.log("User flipped " + cards[cardId].rank)
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage)
	if (cardsInPlay.length === 2) {
	checkForMatch();
	};
}

let createBoard = function() {
	for (let i = 0; i < cards.length; i++) {
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};

createBoard();

