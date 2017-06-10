webpackHotUpdate(0,{

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _p = __webpack_require__(49);

var _p2 = _interopRequireDefault(_p);

var _player2 = __webpack_require__(30);

var _player3 = _interopRequireDefault(_player2);

var _target3 = __webpack_require__(31);

var _target4 = _interopRequireDefault(_target3);

var _colors = __webpack_require__(6);

var Colors = _interopRequireWildcard(_colors);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Render = function () {
	function Render() {
		_classCallCheck(this, Render);

		this.draw = this.draw.bind(this);
		this.setup = this.setup.bind(this);
		this.keyPressed = this.keyPressed.bind(this);

		this.screen = {};

		this.gravity = 10;

		this.timer = 0;

		this.image = '';
	}

	_createClass(Render, [{
		key: 'setup',
		value: function setup() {
			createCanvas(windowWidth, windowHeight);

			this.player = new _player3.default(windowWidth / 2, windowHeight / 2);

			this.target = new _target4.default(windowWidth / 2 - 100, 0, Colors.GRAY);

			this.target2 = new _target4.default(windowWidth / 1.2 - 100, 0, Colors.RED);

			this.image = loadImage("https://dl.dropboxusercontent.com/content_link/jVLXXeo3MLw9ub5BVdUXzoShRD5V7DhHDNBk2VZHn56ZiNh8ZuVvHDhXCyNIre6K/file?dl=0&duc_id=cEW7nk4fV4drF8BPNz6Zq0JGEWpFdKxlftKBJqJEzF1d1y4HHOb9EJRbpbNWa8Fp&raw=1&size=2048x1536&size_mode=3");
		}
	}, {
		key: 'draw',
		value: function draw() {
			// background
			background(Colors.BLUE);

			for (var x = 0; x < width; x += 300) {
				for (var y = 0; y <= height; y += 200) {
					fill('white');

					var randFactor = 0;

					if (frameCount % 60 == 0 || frameCount % 60 == 1 || frameCount % 60 == 2 || frameCount % 60 == 3 || frameCount % 60 == 4 || frameCount % 60 == 0 || frameCount % 60 == 5 || frameCount % 60 == 6 || frameCount % 60 == 7 || frameCount % 60 == 8) {
						randFactor = random(0);
					} else {
						randFactor = random(0, 1);
					}

					ellipse(x + 150 + randFactor, y + 25 + randFactor, 100, 50);
					ellipse(x + 100 + randFactor, y + 50 + randFactor, 100, 50);
					ellipse(x + 150 + randFactor, y + 75 + randFactor, 100, 50);
					ellipse(x + 200 + randFactor, y + 55 + randFactor, 100, 50);

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
			var _player = this.player,
			    px = _player.x,
			    py = _player.y,
			    pCanJump = _player.canJump,
			    pcolor = _player.color,
			    pjumpHeight = _player.jumpHeight,
			    pradius = _player.radius;


			fill(pcolor);
			image(this.image, px - 75, py - 75, 150, 150);

			if (keyIsDown(32) && pCanJump) {
				this.player.jump();
			} else if (py <= windowHeight - this.gravity) {
				this.gravity = this.gravity * 1.1;

				this.player.y += this.gravity;

				this.player.canJump = false;
			} else {
				this.gravity = 10;
			}

			// target
			var _target = this.target,
			    tx = _target.x,
			    ty = _target.y,
			    tcolor = _target.color,
			    theight = _target.height,
			    twidth = _target.width,
			    tborderRadius = _target.borderRadius;


			fill(tcolor);
			noStroke();
			rect(tx, ty, twidth, theight, tborderRadius);

			textSize(64);
			fill('white');
			text(this.player.counter, tx + 75, ty + 75);

			// target2
			var _target2 = this.target2,
			    t2x = _target2.x,
			    t2y = _target2.y,
			    t2color = _target2.color,
			    t2height = _target2.height,
			    t2width = _target2.width,
			    t2borderRadius = _target2.borderRadius;


			fill(t2color);
			noStroke();
			rect(t2x, t2y, t2width, t2height, t2borderRadius);

			textSize(64);
			fill('white');
			// tODO; UPDATE PLAYER COUNTER TO ENEMY COUNTRE
			window.playerScore = this.player.counter;

			text(this.player.counter, t2x + 75, t2y + 75);
		}
	}, {
		key: 'keyPressed',
		value: function keyPressed() {
			if (keyCode === 32 && this.player.y >= windowHeight - 10) {
				this.player.canJump = true;
			}
		}
	}, {
		key: 'touched',
		value: function touched() {
			// if (target)
		}
	}, {
		key: 'secret',
		value: function secret() {
			if (keyIsDown(UP_ARROW)) {
				strokeWeight(4);
				stroke(255);

				for (var x = 0; x < width; x += 50) {
					for (var y = 0; y <= height; y += 50) {
						fill(random(255), 0, random(255));
						ellipse(x, y, 25, 25);
					}
				}
			}

			if (keyIsDown(LEFT_ARROW)) {
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

			if (keyIsDown(RIGHT_ARROW)) {

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

			if (keyIsDown(DOWN_ARROW)) {

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
	}]);

	return Render;
}();

exports.default = Render;

/***/ })

})