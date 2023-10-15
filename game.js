import main_loop from "./main_loop.js";

var config = {
	height: 600,
	width: 800,
	physics: {
        default: 'arcade',
        arcade: {debug: true}
    },
	scene: [title_screen, main_loop]
}

var game = new Phaser.Game(config);
