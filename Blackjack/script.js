$(document).ready(function(){
console.log("jquery and js ready...")

//this creates a "deck", an array of 52 numbers
var deck = [];
for(var i=0;i<52;i++) {
  deck.push(i);
}


//this sorts the deck array into a random order, shuffling the deck.  got this function from the shortstack github
function shuffle(){
  for(var j, x, i = deck.length; i; j = Math.floor(Math.random() * i), x = deck[--i], deck[i] = deck[j], deck[j] = x);
  return deck;
}

//pops the last value of the array and returns it. aka "removes card from deck"
var getCard = function() {
  var randomCard = deck.pop();
  var cardSuit = Math.floor(randomCard/13);
  var cardVal = randomCard%13;
  if (cardSuit === 0) {
    console.log("Heart");
  } else if (cardSuit === 1) {
    console.log("Diamonds");
  } else if (cardSuit === 2) {
    console.log("Clubs");
  } else {
    console.log("Spades");
  }
  if (cardVal === 0) {
    console.log("King");
    cardVal = "K";
  } else if (cardVal === 1) {
    console.log("Ace");
    cardVal = "A";
  } else if (cardVal === 11) {
    console.log("Jack");
    cardVal = "J";
  } else if (cardVal === 12) {
    console.log("Queen");
    cardVal = "Q";
  } else {
    console.log(cardVal);
  }
  return randomCard;
}










})
