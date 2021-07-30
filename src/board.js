class Board {

    gameBoard = " | | \n-+-+-\n | | \n-+-+-\n | | "; 

    setSign() {
        this.gameBoard = "X| | \n-+-+-\n | | \n-+-+-\n | | "; 
    }
   drawBoard(player,x,y) {
       return this.gameBoard;
   }
  }
  
  module.exports = {
    Board,
  };
  