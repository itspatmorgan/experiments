var TicTacToe = (function(){

  var turns = 0;
  var currentPlayer = 1;
  var boxes = $(".box");
  
  var board = [
    [0,0,0],
    [0,0,0], 
    [0,0,0]
  ];

  var playerInfo = {
    1: {
      mark: "X",
      score: 1
    },
    2: {
      mark: "O",
      score: -1
    }
  };

  var isGameOver = function(board) {
    checkRows(board);
    checkColumns(board);
    checkDiagonals(board);
  };

  var checkRows = function(board) {
    if ( board[0][0] + board[0][1] + board[0][2] === 3 || board[1][0] + board[1][1] + board[1][2] === 3 || board[2][0] + board[2][1] + board[2][2] === 3){
      alert("player 1 wins");
    }

    if ( board[0][0] + board[0][1] + board[0][2] === -3 || board[1][0] + board[1][1] + board[1][2] === -3 || board[2][0] + board[2][1] + board[2][2] === -3){
      alert("player 2 wins");
    }
  };

  var checkColumns = function(board) {
    if ( board[0][0] + board[1][0] + board[2][0] === 3 || board[0][1] + board[1][1] + board[2][1] === 3 || board[0][2] + board[1][2] + board[2][2] === 3){
      alert("player 1 wins");
    }

    if ( board[0][0] + board[1][0] + board[2][0] === -3 || board[0][1] + board[1][1] + board[2][1] === -3 || board[0][2] + board[1][2] + board[2][2] === -3){
      alert("player 2 wins");
    }
  };

  var checkDiagonals = function(board) {
    if ( board[0][0] + board[1][1] + board[2][2] === 3 || board[0][2] + board[1][1] + board[2][0] === 3){
      alert("player 1 wins");
    }

    if ( board[0][0] + board[1][1] + board[2][2] === -3 || board[0][2] + board[1][1] + board[2][0] === -3){
      alert("player 2 wins");
    }
  };

  var clearBoard = function() {
    boxes.removeClass("player-1 player-2");
    boxes.text("");

    if (boxes.hasClass("marked")) {
      boxes.removeClass("marked");
    }
  };

  var checkTurns = function() {
    if (turns === 9) {
      alert("The board is full. Start a new game!");
    }
  };

  var decidePlayer = function() {
    if (turns === 0 || turns % 2 === 0) {
      currentPlayer = 1;
    } else {
      currentPlayer = 2;
    }
  };

  var addScore = function($context) {
    if ($context.parent().index() === 0 ) {
      board[0][$context.index()] = playerInfo[currentPlayer].score;
    }

    if ($context.parent().index() === 1 ) {
      board[1][$context.index()] = playerInfo[currentPlayer].score;
    }

    if ($context.parent().index() === 2 ) {
      board[2][$context.index()] = playerInfo[currentPlayer].score;
    }
  };

  var selectBox = function($context) {
    decidePlayer();

    $context.text(playerInfo[currentPlayer].mark);
    $context.addClass("player-" + currentPlayer);

    addScore($context);

    turns += 1;
  };

  var isMarked = function($context) {
    if ($context.hasClass("marked")) {
      alert("This box is already taken. Please choose another.");
      return true;
    } else {
      return false;
    }
  };

  var manageGame = function($context) {

    if (!isMarked($context)) {
      selectBox($context, board);

      isGameOver(board);

      checkTurns();
    }
  };

  var resetGameData = function() {
    turns = 0;
    currentPlayer = 1;
    board = [[0,0,0],[0,0,0],[0,0,0]];
  };

  var setEvents = function() {
    boxes.on('click', function() {
      manageGame($(this));

      $(this).addClass("marked");
    });

    $("#game-restart").on('click', function() {
      resetGameData();
      clearBoard();
    });
  };

  var init = function() {
    setEvents();
  };

  return {
    init: init
  };
})();

TicTacToe.init();
