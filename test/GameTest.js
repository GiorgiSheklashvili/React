import Game from '../src/Game';

describe('Paths', () => {
  let game;
  beforeEach(() => {
    game = new Game();
  });

  it('User:P, Bot:R', () => {//1-R, 2-P, 3-S
    expect(game.check('P',1)).to.eq('you win');
  });
  it('User:P, Bot:P', () => {
    expect(game.check('P',2)).to.eq('you draw');
  });
  it('User:P, Bot:S', () => {
    expect(game.check('P',3)).to.eq('you lost');
  });


  it('User:R, Bot:R', () => {
    expect(game.check('R',1)).to.eq('you draw');
  });
  it('User:R, Bot:P', () => {
    expect(game.check('R',2)).to.eq('you lost');
  });
  it('User:R, Bot:S', () => {
    expect(game.check('R',3)).to.eq('you win');
  });


  it('User:S, Bot:R', () => {
    expect(game.check('S',1)).to.eq('you lost');
  });
  it('User:S, Bot:P', () => {
    expect(game.check('S',2)).to.eq('you win');
  });
  it('User:S, Bot:S', () => {
    expect(game.check('S',3)).to.eq('you draw');
  });

});
