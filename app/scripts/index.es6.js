import Menu from './states/MenuState';
import GameState from './states/GameState';

class Game extends Phaser.Game {

	constructor() {
		super(800, 600, Phaser.AUTO, 'content', null);
		this.state.add('MenuState', Menu);
        this.state.add('GameState', GameState);
		this.state.start('MenuState');
	}

}

new Game();
