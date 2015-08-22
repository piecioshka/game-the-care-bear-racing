import Menu from './states/MenuState';
import GameState from './states/GameState';
import GameOverState from './states/GameOverState';

class Game extends Phaser.Game {

	constructor() {
		super(800, 800, Phaser.AUTO, 'content', null);
		this.state.add('MenuState', Menu);
        this.state.add('GameState', GameState);
        this.state.add('GameOverState', GameOverState);

		this.state.start('GameOverState');
	}

}

new Game();
