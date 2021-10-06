'use strickt'



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
  
}



var res= getRandomInt(1,3000)
console.log(res,'dd')




function getEmptyCell (cell) {

    var emptyCell = []
    
    for(var i = 0; i < board.length; i++) {
          for(var j = 0; j < board[0].length; j++) {
            if(board[i][j] === EMPTY) {
    
              emptyCell.push({i : i , j:j  });
    
            }
    
    
          }
    
    }
}

// location such as: {i: 2, j: 7}
function renderCell(location, value) {
    // Select the elCell and set the value
    var elCell = document.querySelector(`.cell${location.i}-${location.j}`);
    elCell.innerHTML = value;
}