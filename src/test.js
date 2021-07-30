const { Player } = require('./player');
const { Board } = require('./board');

describe('Test Tic Tac Toe functions', () => {
  it('Create a new player X', () => {
    const name = 'Player X';
    const sign = 'X';
    const player = new Player(name, sign);
    expect(player.getName()).toBe(name);
    expect(player.getSign()).toBe(sign);
  });
  it('Create a new player O', () => {
    const name = 'Player O';
    const sign = 'O';
    const player = new Player(name, sign);
    expect(player.getName()).toBe(name);
    expect(player.getSign()).toBe(sign);
  });
  it('Draw new game board', () => {
    const board = new Board();
    expect(board.drawBoard()).toBe(" | | \n-+-+-\n | | \n-+-+-\n | | ");
  });
  it('Player X place a sign', () => {
    const board = new Board();
    const player = new Player('Player X', 'X');
    board.setSign(player,0,0);
    expect(board.drawBoard()).toBe("X| | \n-+-+-\n | | \n-+-+-\n | | ");
  });
  it('Player O place a sign', () => {
    const board = new Board();
    const player = new Player('Player O', 'O');
    board.setSign(player,0,0);
    expect(board.drawBoard()).toBe("O| | \n-+-+-\n | | \n-+-+-\n | | ");
  });  
  it('Player X won with a vertical line', () => {
    const board = new Board();
    const player1 = new Player('Player X', 'X');
    const player2 = new Player('Player O', 'O');
    board.startGame(player1,player2);
    expect(board.drawBoard()).toBe("X| | \n-+-+-\nX|O| \n-+-+-\nX| |O");
    expect(board.getWinner()).toBe("PLAYER X WON!");
  });   
});
