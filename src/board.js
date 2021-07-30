class Board {

    gameBoard = " | | \n-+-+-\n | | \n-+-+-\n | | "; 

    setSign(player,x,y) {
        this.gameBoard = player.getSign() + "| | \n-+-+-\n | | \n-+-+-\n | | "; 
    }
   drawBoard() {
       return this.gameBoard;
   }
  }
  
  module.exports = {
    Board,
  };
  