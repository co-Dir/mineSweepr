'use strickt'

gCellName = {};
gElselected = '';
var empty = '😆'
var mine = '😜'

gBoard = []

gLevel = [
    {size: 4},
   { mines: 2},

]
gGame = [
    
        {isOn: false},
        {shownCount: 0}, //count the num of discaverd cell's
        {markedCount: 0}, //count the num of marked cell that not include mine
        {markedAndMineCount: 0},// count cell's that markd and have mine in(applye game own)
        {location: 'i'  },

    
]



function init(){
gBoard= createBoard()
console.log(gBoard, 'matrixca')

randerBoard(gBoard)

}
function createBoard() { 
    var levelDifficulty = 4             

    var board = [];
    for (var i = 0; i < levelDifficulty; i++) {
        board[i] = []
        for (var j = 0; j < levelDifficulty; j++) {
            board[i][j] = empty

    

        }
        console.log(board, 'matrixca')

    }
    board[2][1] = mine;
    board[1][1] = mine;

    return board;




}


function randerBoard(board) {
var strHtml = '';

for(var i = 0; i < board.length; i++) {
    var row = board[i];
    strHtml += '<tr class= board >'
    for (var j = 0; j < row.length;j++) {
         var cell = row[j]
         strHtml+=`<td pop=hey class= board-cell 
         data-i="${i}" data-j="${j}"
         onclick="cellClicked(this,${i},${j})"
         > ${cell} </td>`;
    }   
    strHtml+='</tr>'
        
}
    var elBoard= document.querySelector('.board');
    elBoard.innerHTML = strHtml;

}

function startGame() {



}


function cellClicked(){




}




