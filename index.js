let scoreX = 0;
let scoreO = 0;
// set current player to X
let currentPlayer = "X";

// set gameState to false
let gamestate = false;

// select all div's with class grid-item and makes it an array
const cells = Array.from(document.querySelectorAll('.grid-item'));

// scoreboard array
let scoreboard = [];

// set gameboard to store value of each cel 
let gameboard = ["", "", "", "", "", "", "", "", ""];

// sets winning conditions for the game 
const winningConditions = [
  [cells[0], cells[1], cells[2]],
  [cells[3], cells[4], cells[5]],
  [cells[6], cells[7], cells[8]],
  [cells[0], cells[3], cells[6]],
  [cells[1], cells[4], cells[7]],
  [cells[2], cells[5], cells[8]],
  [cells[0], cells[4], cells[8]],
  [cells[2], cells[4], cells[6]]
];

// gets the inner html of an element with the desired id
function getCel(id) {
  return document.getElementById(id).innerHTML;
}

// updates gameboard based on user input
function updateGameboard(getCel) {
  gameboard = [getCel('cel1'), getCel('cel2'), getCel('cel3'), getCel('cel4'), getCel('cel5'), getCel('cel6'), getCel('cel7'), getCel('cel8'), getCel('cel9')];
}

//checks if cell is empty, if empty either enters a X or an O in the cell 
function whosTurnIsIt(e) {
  if (e.target.innerHTML === "") {
    e.target.innerHTML = currentPlayer;
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    // updates the gameboard array with every click
    updateGameboard(getCel);
    // checks gameboards value if its not empty
    const checkValue = (cell) => cell != '';
    let output = gameboard.every(checkValue);
    console.log(output);
    // checking for wins by looping through winningConditions
    winningConditions.forEach((arr, idx) => {
      console.log(idx, arr[0].innerHTML, arr[1].innerHTML, arr[2].innerHTML);
      // declaring const with arrow function, takes in arr as parameter and reads out the innerHTML of the (arr)ay targeted 
      const cellValue = x => arr[x].innerHTML;
      // checks cells for win condition, check if first item is not empty and if the three items are equal
      if (!cellValue(0) == '' && cellValue(0) === cellValue(1) && cellValue(1) === cellValue(2)) {
        // sets innerHTML for element to scoreboard
        if (cellValue(0) === 'X') {
          scoreX++;
          document.getElementById('scoreboard-item-2').innerHTML = scoreX; 
        } else {
          scoreO++;
          document.getElementById('scoreboard-item-3').innerHTML = scoreO; 
        } 
        // attempting to store the scoreboard in localstorage
        // localStorage.setItem('scoreboard', JSON.stringify(scoreboard));
        // setting timeout for alert 
        setTimeout( () => { alert(cellValue(0) + ' won!'); }, 100);
        gamestate = true;
      }
    });
    // alerts player for game tie
  if (output === true && gamestate === false) {
    setTimeout( () => { 
      alert('Game ends in tie!');
     }, 100);
  }        
  // console.log(gameboard)
 }
}

// listens to clicks from the user 
document.getElementById('test').addEventListener('click', whosTurnIsIt);

// when called, sets an emtpy string as new value
function resetGrid() {
  cells.forEach(cell => {
    cell.innerHTML = '';
  });
  // sets currentPlayer to X on button press, sets gamestate to false
  currentPlayer = 'X';
  gamestate = false;
}

// listens to click and calls resetGrid(); 
const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', () => {
  resetGrid();
});







/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// mijn troep die niet werkte maar ik nog niet weggehaald heb ookal zou dat eigenlijk wel handig zijn maar misschien heb ik er nog wat aan dus laat maar even staan hoekje
// const grid1 = document.getElementById('cel1').innerHTML;

// let cel1 = '';

/*
function changeCel1() {
  if () {
  cel1 = 'X';
  } else {
  cel1 = 'O';
  }
}
*/

// document.getElementById('cel1').addEventListener('click', changeCel1);

/*
function showWinner(winningPlayer) {
  console.log(winningPlayer + ' won!');
}
*/

/*
voor later:
function updateGameboard2(getCel) {
return gameboard.map((element, index)=>{
  console.log(getCel("cel"+(index+1)))
  return getCel("cel"+(index+1));
})
}
*/

//if (!arr[0].innerHTML == '' && arr[0].innerHTML === arr[1].innerHTML && arr[1].innerHTML === arr[2].innerHTML) {
        // console.log("You've won!");