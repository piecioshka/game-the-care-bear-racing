export default {
    preload() {
        this.load.image('background', 'images/game-over.jpg');
        this.load.image('button', 'images/play.png');
    },

    create() {
        this.add.tileSprite(0, 0, 800, 600, 'background');
        this.add.button(this.world.centerX - 60, this.world.centerY + 50, 'button', this.playGame);
        let style = {
            font: "32px Arial",
            fill: "#ff0044",
        };
        this.add.text(this.world.centerX -65, this.world.centerY, 'Play AGEJN', style);
    },

    playGame() {
        this.game.state.start('GameState');
    }
}
