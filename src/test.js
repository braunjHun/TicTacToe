const { Player } = require('./player');

describe('Test Tic Tac Toe functions', () => {
  it('Create a new player X', () => {
    const name = 'Player X';
    const sign = 'X';
    const player = new Player(name, sign);
    expect(player.getName()).toBe(name);
    expect(player.getSign()).toBe(sign);
  });
});
