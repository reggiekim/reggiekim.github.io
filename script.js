$(document).ready(function(){
console.log("jquery and js is ready....");


var upperLeft = $("#upper-left");
var upperMid = $("#upper-mid");
var upperRight = $("#upper-right");
var midLeft = $("#mid-left");
var midMid = $("#mid-mid");
var midRight = $("#mid-right");
var bottomLeft = $("#bottom-left");
var bottomMid = $("#bottom-mid");
var bottomRight = $("#bottom-right");

var playerTurn = 0;
var game = [[2, 3, 4], [5, 6, 7], [8, 9, 10]];

var bernie = $("<img class='pic' src='images/bernie.png'>");
var hillary = $("<img class='pic' src='images/hillary.png'>");
var trump = $("<img class='gif' src='images/trump.gif'>");
var bernieGif = $("<img class='gif' src='images/berniewins.gif'>");
var hillaryGif = $("<img class='gif' src='images/hillaryWins.gif'>");


var bernOrHill = function() {
  if ($(this).hasClass('selected')) {
    console.log("already selected!")
  } else {
    if (playerTurn%2===0) {
      $(this).addClass('selected');
      $(this).css("background-color","navy");
      $(this).append(bernie.clone());
    } else {
      $(this).addClass('selected');
      $(this).css("background-color","maroon");
      $(this).append(hillary.clone());
    }
  }
}



upperLeft.click(bernOrHill);
upperLeft.click(function() {
  if (upperLeft.hasClass('marked')) {
    console.log("already marked");
  } else {
    if (playerTurn%2===0) {
      console.log('bernie!')
      game[0][0] = 0;
    } else {
      console.log('Hillary!')
      game[0][0] = 1;
    }
    upperLeft.addClass('marked');
    playerTurn++;
    console.log(game);
    console.log("playerturn is: "+playerTurn);
    checkWinner();
  }
})


upperMid.click(bernOrHill);
upperMid.click(function() {
  if (upperMid.hasClass('marked')) {
    console.log("already marked");
  } else {
    if (playerTurn%2===0) {
      console.log('bernie!')
      game[0][1] = 0;
    } else {
      console.log('hillary!!')
      game[0][1] = 1;
    }
    upperMid.addClass('marked');
    playerTurn++;
    console.log(game);
    console.log("playerturn is: "+playerTurn);
    checkWinner();
  }
});

upperRight.click(bernOrHill);
upperRight.click(function() {
  if (upperRight.hasClass('marked')) {
    console.log("already marked");
  } else {
    if (playerTurn%2===0) {
      console.log("bernie!")
      game[0][2] = 0;
    } else {
      console.log("hillary")
      game[0][2] = 1;
    }
    upperRight.addClass('marked');
    playerTurn++;
    console.log(game);
    console.log("playerturn is: "+playerTurn);
    checkWinner();
  }
});

midLeft.click(bernOrHill);
midLeft.click(function() {
  if (midLeft.hasClass('marked')) {
    console.log("already marked");
  } else {
    if (playerTurn%2===0) {
      console.log("bernie!");
      game[1][0] = 0;
    } else {
      console.log("hillary");
      game[1][0] = 1;
    }
    midLeft.addClass('marked');
    playerTurn++;
    console.log(game);
    console.log("playerturn is: "+playerTurn);
    checkWinner();
  }
});

midMid.click(bernOrHill);
midMid.click(function() {
  if (midMid.hasClass('marked')) {
    console.log("already marked");
  } else {
    if (playerTurn%2===0) {
      console.log("bernie!");
      game[1][1] = 0;
    } else {
      console.log("hillary!");
      game[1][1] = 1;
    }
    midMid.addClass('marked');
    playerTurn++;
    console.log(game);
    console.log("playerturn is: "+playerTurn);
    checkWinner();
  }
});

midRight.click(bernOrHill);
midRight.click(function() {
  if (midRight.hasClass('marked')) {
    console.log("already marked");
  } else {
    if (playerTurn%2===0) {
      console.log("bernie!");
      game[1][2] = 0;
    } else {
      console.log("hillary");
      game[1][2] = 1;
    }
    midRight.addClass('marked');
    playerTurn++;
    console.log(game);
    console.log("playerturn is: "+playerTurn);
    checkWinner();
  }
});

bottomLeft.click(bernOrHill);
bottomLeft.click(function() {
  if (bottomLeft.hasClass('marked')) {
    console.log("already marked");
  } else {
    if (playerTurn%2===0) {
      console.log("bernie!");
      game[2][0] = 0;
    } else {
      console.log("hillary");
      game[2][0] = 1;
    }
    bottomLeft.addClass('marked');
    playerTurn++;
    console.log(game);
    console.log("playerturn is: "+playerTurn);
    checkWinner();
  }
});

bottomMid.click(bernOrHill);
bottomMid.click(function() {
  if (bottomMid.hasClass('marked')) {
    console.log("already marked");
  } else {
    if (playerTurn%2===0) {
      console.log("bernie");
      game[2][1] = 0;
    } else {
      console.log("Hillary");
      game[2][1] = 1;
    }
    bottomMid.addClass('marked');
    playerTurn++;
    console.log(game);
    console.log("playerturn is: "+playerTurn);
    checkWinner();
  }
});

bottomRight.click(bernOrHill);
bottomRight.click(function() {
  if (bottomRight.hasClass('marked')) {
    console.log("already marked");
  } else {
    if (playerTurn%2===0) {
      console.log("bernie");
      game[2][2] = 0;
    } else {
      console.log("hillary");
      game[2][2] = 1;
    }
    bottomRight.addClass('marked');
    playerTurn++;
    console.log(game);
    console.log("playerturn is: "+playerTurn);
    checkWinner();
  }
});


var checkThrees = function() {
  if (game[0][0] === game[0][1] && game[0][1] === game[0][2]) {
    console.log("across top");
    return game[0][0];
  } else if (game[1][0] === game[1][1] && game[1][1] === game[1][2]) {
    console.log("across middle");
    return game[1][0];
  } else if (game[2][0] === game[2][1] && game[2][1] === game[2][2]) {
    console.log("across bottom");
    return game[2][0];
  } else if (game[0][0] === game[1][0] && game[1][0] === game[2][0]) {
    console.log("down left");
    return game [0][0];
  } else if (game[0][1] === game[1][1] && game[1][1] === game[2][1]) {
    console.log("down middle");
    return game [0][1];
  } else if (game[0][2] === game[1][2] && game[1][2] === game[2][2]) {
    console.log("down right");
    return game[0][2];
  } else if (game[0][0] === game[1][1] && game[1][1] === game[2][2]) {
    console.log("fwd slash");
    return game[0][0];
  } else if (game[0][2] === game[1][1] && game[1][1] === game[2][0]) {
    console.log("back slash");
    return game[0][2];
  }
}

var checkWinner = function() {
  var whoWon=checkThrees()
  if (whoWon===0) {
    console.log("President Bernie!");
    $("#container").append(bernieGif);
  } else if (whoWon===1) {
    console.log("President clinton");
    $("#container").append(hillaryGif);
  } else if (playerTurn===9) {
    console.log('Trump wins :(');
    $("#container").append(trump);
  }
}


})
