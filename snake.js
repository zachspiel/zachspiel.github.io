
  var stage = document.getElementById("stage");
  var header = document.getElementById("header");
  var newGameButton = document.getElementById("newGameButton");

  /* wire the new game button*/
  newGameButton.onclick = newGameButtonClick;

  /* Size of the game board */
  var totalRows = 19;
  var totalCols = 19;

  var stageDiv = [];

  var tileSize = 30;

  /* Define snake object */
  var snake = {
    row:13,
    col:9,
    dir:"",
    body:[],
    length:0
  };

  /* Define a food object */
  var food = {
    row:5,
    col:9
  };

  /* Define a start game flag */
  var startGameFlag = true;

  /* Define a game over flag */
  var gameOverFlag = false;

  /* Define a timer for moving the snake */
  var moveTimer = false;

  window.onkeydown = keyDownHandler;

  init();

  function init() {
    createStageDivs();
    paintStageDivs();
    renderAll();
  }


  function newGameButtonClick() {
    stopMoveTimer();
    startGameFlag = true;
    gameOverFlag = false;

    snake.row = 13;
    snake.col = 9;
    snake.dir = "";
    snake.body = [];
    snake.length = 0;

    food.row = 5;
    food.col = 9;

    paintStageDivs();
    renderAll();
  }

  function renderAll(){
    /* Render the food */
    stageDiv[food.row][food.col].style.backgroundColor = "red";

    /* Render the snake head */
    stageDiv[snake.row][snake.col].style.backgroundColor = "green";

    /* render the snake body */
    for ( var i = 0; i < snake.body.length; i++ ) {
      var segment = snake.body[i];
      stageDiv[segment.row][segment.col].style.backgroundColor = "green";
      stageDiv[segment.row][segment.col].style.border = "1px solid black";
    }

    /* Render the header */
    header.innerHTML = "SNAKE LENGTH : " + snake.length;
  }

  function moveSnake() {
    /* Clear the snake head */
    stageDiv[snake.row][snake.col].style.backgroundColor = "white";

    /* Clear the snake body */
    for (var i = 0; i < snake.body.length; i+=1) {
      var segment = snake.body[i];
      stageDiv[segment.row][segment.col].style.backgroundColor = "white";
      stageDiv[segment.row][segment.col].style.border = "none";
    }

    /* Store the heads current location into the body */
    snake.body.unshift({row:snake.row, col:snake.col});

    /* Trim the array to the snake length*/
    snake.body.length = snake.length;

    console.log(snake.body);
    /* finally... move the snake */
    switch (snake.dir) {
      case "UP":
        snake.row--;
        break;
      case "DOWN":
        snake.row++;
        break;
      case "LEFT":
        snake.col--;
        break;
      case "RIGHT":
        snake.col++;
        break;
    }
  }

  function checkCollision() {
    /* Check for border collision */
    if ( (snake.row == 0) || (snake.row == totalRows - 1) ||
      (snake.col == 0) || (snake.col == totalCols - 1)) {
      gameOver();
      return;
    }

    /* Did the snake head collide with the snake */
    for(var i =0; i < snake.body.length; i++){
      var segment = snake.body[i];
      if( (snake.row == segment.row) && (snake.col == segment.col)) {
        gameOver();
        return;
      }
    }
    /* Check for food collision */
    if ((snake.row == food.row) && (snake.col == food.col)) {
      console.log("Ate food");
      snake.length++;
      moveFood();
    }
  }

  function moveFood() {
    var goodTiles = []

    /* Loop through the board row and cols (not border ) */
    for (var row = 1; row < totalRows-1; row++) {
      for(var col = 1; col < totalCols-1; col++) {
        /* Set flags */
        var snakeHeadFlag = false;
        var snakeBodyFlag = false;

        /* Check if the snake head is in this position */
        if ((row == snake.row) && (col == snake.col)) {
          snakeHeadFlag = true;
        }

        /* Check if any segment of the snake body is in this position */
        for (var i = 0; i < snake.body.length; i++) {
          var segment = snake.body[i];
          if ((row == segment.row) && (col == segment.col)) {
            snakeBodyFlag = true;
            break;
          }
        }

        /* If this position is 'snake-free', add it as a possible food pos*/
        if (!snakeHeadFlag && !snakeBodyFlag) {
          goodTiles.push({row:row, col:col});
        }
      }
    }

    var index = getRndInteger(0, goodTiles.length);

    food.row = goodTiles[index].row;
    food.col = goodTiles[index].col;
  }

  function gameOver(){
    console.log("Game Over!");
    gameOverFlag = true;
    stopMoveTimer();
  }

  function keyDownHandler(){

    /* Set the snake.dir variable depending on what arrow key is pressed */
    switch (event.key) {
      case "ArrowUp":
        snake.dir = "UP";
        break;
      case "ArrowDown":
        snake.dir="DOWN";
        break;
      case "ArrowLeft":
        snake.dir="LEFT";
        break;
      case "ArrowRight":
        snake.dir="RIGHT";
        break;
    }

    if(startGameFlag) {
      startGameFlag = false;
      startMoveTimer();
    }
    tickMoveTimer();
  }

  function startMoveTimer(){
    stopMoveTimer();
    moveTimer = setInterval(tickMoveTimer, 200);
  }

  function stopMoveTimer(){
    if (moveTimer) {
      clearInterval(moveTimer);
      moveTimer = false;
    }
  }

  function tickMoveTimer(){
    if (!gameOverFlag) {
      moveSnake();
      checkCollision();
      renderAll();
    }
  }

  function paintStageDivs(){
    /* Set all stage divs to be black, except the border */
    for (var row = 0; row < totalRows; row++) {
      for (var col = 0; col < totalCols; col++) {
        if ( (row == 0) || (row == totalRows-1) || (col == 0) || (col == totalCols-1)) {
          stageDiv[row][col].style.backgroundColor = "black";
        }else{
          stageDiv[row][col].style.backgroundColor = "white";
          stageDiv[row][col].style.border = "none";
        }
      }
    }
  }

  function createStageDivs(){
    /* Set the stage size */
    stage.style.width = tileSize * totalCols + "px";
    stage.style.height = tileSize * totalRows + "px";

    /* Initialize stage Divs as an empty 1-dimensional array */
    stageDiv = [];

    /* Begin the loop.. */
    for (var row = 0; row < totalRows; row++) {
      /* For each row 'add' an array to stage Divs*/
      stageDiv[row] = [];
      for (var col = 0; col < totalCols; col++) {
        stageDiv[row][col] = document.createElement("div");

        stage.appendChild(stageDiv[row][col]);

        stageDiv[row][col].style.position = "absolute";
        stageDiv[row][col].style.left = (col * tileSize) + "px";
        stageDiv[row][col].style.top = (row * tileSize) + "px";

        stageDiv[row][col].style.width = tileSize + "px";
        stageDiv[row][col].style.height = tileSize + "px";

        stageDiv[row][col].style.boxSizing = "border-box";
      }
    }
  }

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
