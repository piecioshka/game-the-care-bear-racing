export default {
	preload() {
		this.load.image('bear1', 'images/bear1.png');
		this.load.spritesheet('tecza', 'maps/tecza.png', 40, 40);
        this.load.image('background', 'images/starfield.jpg');
		this.load.tilemap('podloze', 'maps/test.json', null, Phaser.Tilemap.TILED_JSON);
	},

	create() {
        this.physics.startSystem(Phaser.Physics.P2JS);

        this.starfield = this.add.tileSprite(0, 0, 800, 600, 'background');
        this.starfield.fixedToCamera = true;

		this.player = this.add.sprite(40, 100, 'bear1');
        this.player.anchor.setTo(0.5, 0.5);
		this.player.collideWorldBounds = true;
		this.physics.arcade.enable(this.player, true);


		this.cursors = this.input.keyboard.createCursorKeys();

		this.map = this.add.tilemap('podloze');
		this.map.addTilesetImage('tecza');
		this.map.setCollisionBetween(0, 3600, true);

		this.world = this.map.createLayer('Tile Layer 1');
		this.world.resizeWorld();

        this.camera.follow(this.player);
	},

	update () {
        this.physics.arcade.collide(this.player, this.world);

        this.player.body.velocity.x = 0;
        this.player.body.velocity.y = 0;
        this.player.body.angularVelocity = 0;

		if (this.cursors.left.isDown) {
			this.player.body.angularVelocity = -150;
		}

		if (this.cursors.right.isDown) {
			this.player.body.angularVelocity = 150;
		}

		if (this.cursors.up.isDown) {
            this.physics.arcade.velocityFromAngle(this.player.angle, 300, this.player.body.velocity);
		}

        if (!this.camera.atLimit.x) {
            this.starfield.tilePosition.x -= ((this.player.body.velocity.x) * this.time.physicsElapsed);
        }

        if (!this.camera.atLimit.y) {
            this.starfield.tilePosition.y -= ((this.player.body.velocity.y) * this.time.physicsElapsed);
        }
	}
}
