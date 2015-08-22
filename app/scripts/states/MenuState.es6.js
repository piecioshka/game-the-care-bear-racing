export default {
    preload() {
        this.load.image('bear1', 'images/bear1.png');
    },

    create() {
        this.add.sprite(0, 0, 'bear1');
    }
}
