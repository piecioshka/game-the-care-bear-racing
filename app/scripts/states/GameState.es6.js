import RacingPlatform from '../objects/RacingPlatform.es6';
import Bear from '../objects/Bear.es6';

class GameState extends Phaser.State {

	create() {
		console.log('new Bear(this.game)')
		let center = { x: this.game.world.centerX, y: this.game.world.centerY }
		let text = new RacingPlatform(this.game, new Bear(this.game, Math.floor(Math.random() * 5) + 1));
	}

}

export default GameState;