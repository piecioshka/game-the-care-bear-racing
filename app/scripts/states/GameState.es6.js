export default {
	preload() {
		this.load.image('bear1', 'images/bear1.png');
		this.load.spritesheet('tecza', 'maps/tecza.png', 40, 40);

		this.load.tilemap('podloze', 'maps/test.json', null, Phaser.Tilemap.TILED_JSON);
	},

	create() {
		this.player = this.add.sprite(0, 0, 'bear1');
		this.player.collideWorldBounds = true;
		this.physics.arcade.enable(this.player);

		this.cursors = this.input.keyboard.createCursorKeys();

		this.map = this.add.tilemap('podloze');
		this.map.addTilesetImage('tecza');

		this.world = this.map.createLayer('Tile Layer 1');
		this.world.resizeWorld();

		this.physics.startSystem(Phaser.Physics.ARCADE);
		this.physics.arcade.collide(this.player, this.map);
	},

	update () {
		if (this.cursors.left.isDown) {
			this.player.body.velocity.x = -150;
		}

		if (this.cursors.right.isDown) {
			this.player.body.velocity.x = 150;
		}

		if (this.cursors.up.isDown) {
			this.player.body.velocity.y = -150;
		}

		if (this.cursors.down.isDown) {
			this.player.body.velocity.y = 150;
		}
	}
}
