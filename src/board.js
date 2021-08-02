class Board {

    gameBoard = ""; 
    winnerText = "";
    boardArray = [[" "," "," "],[" "," "," "],[" "," "," "]];

    setSign(player,x,y) {
        this.boardArray[x][y] = player.getSign();
    }

    startGame(player1,palyer2) {
        this.gameBoard = "X| | \n-+-+-\nX|O| \n-+-+-\nX| |O";
    } 
    drawBoard() {
        for (var i = 0; i <this.boardArray.length; i++) {
            for (var j = 0; j < this.boardArray[i].length; j++) {
                this.gameBoard +=  this.boardArray[i][j];              
                if ( j < 2 ) this.gameBoard += "|";
            }            
            if ( i < 2 ) this.gameBoard += "\n-+-+-\n";
        }
        return this.gameBoard;
    }
  
    getWinner() {
        this.checkVertical();
        this.checkHorizontal();
        this.checkDiagonal();
        this.checkDraw();   
        return this.winnerText;
    }

    checkVertical() {
        var winner = "";
        // Player won with a vertical line
        if (this.boardArray[0][0]==this.boardArray[1][0] && this.boardArray[0][0]==this.boardArray[2][0]) {
            winner = this.boardArray[0][0];
        }
        if (this.boardArray[0][1]==this.boardArray[1][1] && this.boardArray[0][1]==this.boardArray[2][1]) {
            winner = this.boardArray[0][1];
        }
        if (this.boardArray[0][2]==this.boardArray[1][2] && this.boardArray[0][2]==this.boardArray[2][2]) {
            winner = this.boardArray[0][2];
        }   
        if (winner.length>0) {
            this.winnerText = "PLAYER "+winner+" WON!";
        }
    }

    checkHorizontal() {
        var winner = "";
        // Player won with a horizontal line        
        if  (this.boardArray[0][0]==this.boardArray[0][1] && this.boardArray[0][0]==this.boardArray[0][2]) {
            winner = this.boardArray[0][0];
        } 
        if  (this.boardArray[1][0]==this.boardArray[1][1] && this.boardArray[1][0]==this.boardArray[1][2]) {
            winner = this.boardArray[1][0];
        }  
        if  (this.boardArray[2][0]==this.boardArray[2][1] && this.boardArray[2][0]==this.boardArray[2][2]) {
            winner = this.boardArray[2][0];
        } 
        if (winner.length>0) {
            this.winnerText = "PLAYER "+winner+" WON!";
        }
    }
    checkDiagonal(){
        var winner = "";
        // Player won with a diagonal line
        if ( (this.boardArray[0][0]==this.boardArray[1][1] && this.boardArray[0][0]==this.boardArray[2][2]) 
        || (this.boardArray[0][2]==this.boardArray[1][1] && this.boardArray[0][2]==this.boardArray[2][0]) ) {
            winner = this.boardArray[1][1];
        }
        if (winner.length>0) {
            this.winnerText = "PLAYER "+winner+" WON!";
        }
    }

    checkDraw() {
        var isDraw = true;
        for (var i=0; i < this.boardArray.length; i++) {
            for (var j=0; j < this.boardArray[i].length; j++) {
                if (this.boardArray[i][j]==" "){
                    isDraw = false;
                }
            }
        } 
        if (isDraw) {
            this.winnerText = "GAME ENDS WITH A DRAW!";
        }
    }

    composeWinnerText(){
    }
} 
  module.exports = {
    Board,
  };
  