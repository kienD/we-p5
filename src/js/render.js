import p5 from 'p5';
import Player from './player';
import Target from './target';
import * as Colors from './colors';

export default class Render {
	constructor() {
		this.draw = this.draw.bind(this);
		this.setup = this.setup.bind(this);
		this.keyPressed = this.keyPressed.bind(this);

		this.screen = {};

		this.gravity = 10;

		this.timer = 0;

		this.image = '';
	}

	setup() {
		createCanvas(windowWidth, windowHeight);

		this.player = new Player(windowWidth / 2, windowHeight / 2);


		this.target = new Target((windowWidth / 2) - 100, 0, Colors.GRAY);

		this.target2 = new Target((windowWidth / 1.2) - 100, 0, Colors.RED);

		this.image = loadImage("https://dl.dropboxusercontent.com/content_link/jVLXXeo3MLw9ub5BVdUXzoShRD5V7DhHDNBk2VZHn56ZiNh8ZuVvHDhXCyNIre6K/file?dl=0&duc_id=cEW7nk4fV4drF8BPNz6Zq0JGEWpFdKxlftKBJqJEzF1d1y4HHOb9EJRbpbNWa8Fp&raw=1&size=2048x1536&size_mode=3");
	}

	draw() {
		// background
		background(Colors.BLUE);



		for (var x = 0; x < width; x += 300) {
			for (var y = 0; y <= height; y += 200) {
				fill('white');

				let randFactor = 0;

				if (frameCount % 60 == 0 || frameCount % 60 == 1 || frameCount % 60 == 2 || frameCount % 60 == 3 || frameCount % 60 == 4 || frameCount % 60 == 0 || frameCount % 60 == 5 || frameCount % 60 == 6 || frameCount % 60 == 7 || frameCount % 60 == 8 ) {
					randFactor = random(0);
				} else {
					randFactor = random(0,1)
				}

				ellipse(x + 150 + randFactor, y + 25+ randFactor, 100, 50);
				ellipse(x + 100 + randFactor, y + 50+ randFactor, 100, 50);
				ellipse(x + 150 + randFactor, y + 75+ randFactor, 100, 50);
				ellipse(x + 200 + randFactor, y + 55+ randFactor, 100, 50);

				y *= 1.2;
			}
		}


		if (this.player.counter >= 15 && this.player.counter < 20) {
			strokeWeight(4);
			stroke(255);

			for (var x = 0; x < width; x += 50) {
				for (var y = 0; y <= height; y += 50) {
					fill(random(255), 0, random(255));
					ellipse(x, y, 25, 25);
				}
			}
		}

		this.secret();

		// create player
		const {x: px, y: py, canJump: pCanJump, color: pcolor, jumpHeight: pjumpHeight, radius: pradius} = this.player;

		fill(pcolor);
		image(this.image, px - 75, py - 75, 150, 150);

		if (keyIsDown(32) && pCanJump) {
			this.player.jump();
		}
		else if (py <= windowHeight - this.gravity) {
			this.gravity = this.gravity * 1.1;

			this.player.y += this.gravity;

			this.player.canJump = false;
		}
		else {
			this.gravity = 10;
		}

		// target
		const {x: tx, y: ty, color: tcolor, height: theight, width: twidth, borderRadius: tborderRadius} = this.target;

		fill(tcolor);
		noStroke();
		rect(tx, ty, twidth, theight, tborderRadius);

		textSize(64);
		fill('white');
		text(this.player.counter, tx + 75, ty + 75);

		// target2
		const {x: t2x, y: t2y, color: t2color, height: t2height, width: t2width, borderRadius: t2borderRadius} = this.target2;

		fill(t2color);
		noStroke();
		rect(t2x, t2y, t2width, t2height, t2borderRadius);

		textSize(64);
		fill('white');
		// tODO; UPDATE PLAYER COUNTER TO ENEMY COUNTRE
		window.playerScore = this.player.counter;

		text(this.player.counter, t2x + 75, t2y + 75);

	}

	keyPressed() {
		if (keyCode === 32 && this.player.y >= windowHeight - 10) {
			this.player.canJump = true;
		}
	}

	touched() {
		// if (target)
	}

	secret() {
		if(keyIsDown(UP_ARROW)) {
			strokeWeight(4);
			stroke(255);

			for (var x = 0; x < width; x += 50) {
				for (var y = 0; y <= height; y += 50) {
					fill(random(255), 0, random(255));
					ellipse(x, y, 25, 25);
				}
			}
		}

		if(keyIsDown(LEFT_ARROW)) {
			strokeWeight(4);
			stroke(255);

			for (var x = 0; x < width; x += 50) {
				fill(random(255), 0, random(255));
				ellipse(x, 200, 25, 25);
			}

			// for (var y = 0; y <= height; y += 50) {
				// fill(random(255), 0, random(255));
				// ellipse(100, y, 25, 25);
			// }
		}

		if(keyIsDown(RIGHT_ARROW)) {

			strokeWeight(4);
			stroke(255);

			for (var x = 0; x < width; x += 50) {
				fill(random(255), 0, random(255));
				ellipse(x, 200, 25, 25);
			}

			for (var y = 0; y <= height; y += 50) {
				fill(random(255), 0, random(255));
				ellipse(400, y, 25, 25);
			}
		}

		if(keyIsDown(DOWN_ARROW)) {

			strokeWeight(4);
			stroke(255);

			// for (var x = 0; x < width; x += 50) {
				fill(random(255), 0, random(255));
				ellipse(300, 200, 25, 25);
			// }

			// for (var y = 0; y <= height; y += 50) {
				// fill(random(255), 0, random(255));
				// ellipse(200, y, 25, 25);
			// }
		}

		if (keyIsDown(80)) {
			for (var x = 0; x < width; x += 300) {
				for (var y = 0; y <= height; y += 300) {
					fill('white');
					ellipse(x + random(150), y + random(25), 100, 50);
					ellipse(x + random(100), y + random(50), 100, 50);
					ellipse(x + random(150), y + random(75), 100, 50);
					ellipse(x + random(200), y + random(55), 100, 50);
				}
			}
		}
	}
}
