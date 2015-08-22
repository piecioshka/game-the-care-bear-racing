import GameState from './states/GameState';
import Menu from './states/MenuState';

class Game extends Phaser.Game {

	constructor() {
		super(500, 500, Phaser.AUTO, 'content', null);
		this.state.add('MenuState', Menu);
		// this.state.add('GameState', GameState);
		this.state.start('MenuState');
	}

}

new Game();
