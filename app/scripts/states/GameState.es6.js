export default {
	preload() {
		this.load.image('bear1', 'images/bear1.png');

		this.load.tilemap('podloze', 'maps/test.json', null, Phaser.Tilemap.TILED_JSON);
	},

	create() {
		this.player = this.add.sprite(0, 0, 'bear1');
		this.player.collideWorldBounds = true;
		this.physics.arcade.enable(this.player);

		var map = this.add.tilemap('podloze');

		map.addTilesetImage('Plansza', 'tiles');

		this.cursors = this.input.keyboard.createCursorKeys();
	},

	update () {
		if (this.cursors.left.isDown) {
			this.player.body.velocity.x = -150;
		}

		if (this.cursors.right.isDown) {
			this.player.body.velocity.x = 150;
		}
	}
}
