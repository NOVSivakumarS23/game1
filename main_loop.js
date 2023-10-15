import Player from "./player.js";

export default class main_loop extends Phaser.Scene {

	load_data(){
		var d = document.cookie;
		
		return document.cookie
	}
	save_data(){
		document.cookie = "savedata=hello";
	}

	constructor(){
		super("playGame");
		this.data = this.load_data();
	}

	preload(){
		this.player = new Player(this, this.physics);
		this.player.preload();
	}
	create(){
		this.add.text(20,20, "savedata :"+this.load_data());
		this.player.create();
		this.save_data();
	}
	update(){
		this.player.update()
	}
	
}