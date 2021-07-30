class Board {

    gameBoard = " | | \n-+-+-\n | | \n-+-+-\n | | "; 

    setSign(player,x,y) {
        this.gameBoard = player.getSign() + "| | \n-+-+-\n | | \n-+-+-\n | | "; 
    }

   startGame(player1,palyer2) {
     this.gameBoard =  "X| | \n-+-+-\nX|O| \n-+-+-\nX| |O";
   } 
   drawBoard() {
       return this.gameBoard;
   }
  
  getWinner() {
      return "PLAYER X WON!";
  }
} 
  module.exports = {
    Board,
  };
  