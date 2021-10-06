'use strickt'

gCellName = {};
gElselected = '';
var empty = '😆'
var mine = '😜'

var gFlag  ;
var gMinePosition ;
var gBoard ;
    //     {minesAroundCount: 4,NUMBER
    //     isShown: true,HIDDEN
    //     isMine: false,MINE
    //     isMarked: trueMARKED
    //    }

    
    var gLevel; 
    // [
        //     { size: 4 },
        //     { mines: 2 },
        
        // ]
        var gGame;
        
        // { isOn: false },
        // { shownCount: 0 }, //count the num of discaverd cell's
        // { markedCount: 0 }, //count the num of marked cell that not include mine
        // { markedAndMineCount: 0 },// count cell's that markd and have mine in(applye game own)
        // { location: 'i' },
        
        
        
        
        console.log(gBoard,'updated gBoard')
        
        function init() {
            gBoard = createBoard()
            gMinePosition = getMinePos(4,2);
            
    console.log(gBoard, 'matrixca')
    countMineAround(gBoard, 2, 2)
    randerBoard(gBoard)
    
}
// var minePlace = getRandomint(0,3)
// console.log(minePlace)
function createBoard() {
    
    
    
    
    
    
    
    var levelDifficulty = 4
    var cell = {
        minesAroundCount: 4,
        isShown: true,
        isMine: false,
        isMarked: true,
        cellImg : '',
        i:i,
        j:j,
    }
    
    var board = [];

    for (var i = 0; i < levelDifficulty; i++) {
        board[i] = []
        
        for (var j = 0; j < levelDifficulty; j++) {

            var cell = { 
         minesAroundCount: 4,
        isShown: true,
        isMine: false,
        isMarked: true,
        cellImg : '',
        i:i,
        j:j, };
            board[i][j] = cell
            
            // if(i ===0 && j === 1){gBoard.isMine = true}
        }
    }
    
    
    
    
    
    board[1][1].isMine = true
    // if (board.isMine = true) {gBoard.cellImg === '%%'}
    
    return board;
    
    board[gMinePosition.i][gMinePosition.j] =mine



}


function randerBoard(board) {
    var strHtml = '';

    for (var i = 0; i < board.length; i++) {
        var row = board[i];
        strHtml += '<tr class= board >'
        for (var j = 0; j < row.length; j++) {
            var cell = row[j]
            strHtml += `<td pop=hey class= board-cell 
         data-i="${i}" data-j="${j}"
         onclick="cellClicked(this,${i},${j})"
         > ${cell} </td>`;
        }
        strHtml += '</tr>'

    }
    var elBoard = document.querySelector('.board');
    elBoard.innerHTML = strHtml; 

}

function countMineAround(board, rowIdx, colIdx) {
   console.log(board,'board at count mine')
    var mineSumAround = 0;
        for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {
            // console.log()
        for(var j = colIdx-1 ; j <= colIdx+ 1; j++) {
        var cell1 =board[i][j];
        // console.log(j)
        if(cell1 === gBoard[i][j].isMine){
        }
        // console.log(cell1,'cellcheck')

        }
    }
return board


}
function startGame() {



}


function cellClicked() {




}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;

}
console.log (gBoard,'11');
;


function getMinePos(level,numberOfmine) {
    var mines =  [];
    var lastMinePos = null;
    // numberOfmine = 2;
    
    while (mines.length < numberOfmine) {
        cellWithMine = {
            i:getRandomInt(0,level),
            j:getRandomInt(0,level),
     
        }
        
        if(!lastMinePos || (lastMinePos.i !== cellWithMine.i
             && lastMinePos.j !== cellWithMine.j)) {
            mines.push(cellWithMine);
            
            lastMinePos = cellWithMine;
            console.log (cellWithMine,'11')
            
        }
        console.log (cellWithMine,'mine random pos');
    }
    
    // gBoard[newMinePos.i][newMinePos.i] =  ;
    return mines
}


