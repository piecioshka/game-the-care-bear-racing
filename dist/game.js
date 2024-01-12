/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _statesMenuState = __webpack_require__(1);

	var _statesMenuState2 = _interopRequireDefault(_statesMenuState);

	var _statesGameState = __webpack_require__(2);

	var _statesGameState2 = _interopRequireDefault(_statesGameState);

	var _statesGameOverState = __webpack_require__(3);

	var _statesGameOverState2 = _interopRequireDefault(_statesGameOverState);

	var Game = (function (_Phaser$Game) {
	    _inherits(Game, _Phaser$Game);

	    function Game() {
	        _classCallCheck(this, Game);

	        _get(Object.getPrototypeOf(Game.prototype), 'constructor', this).call(this, 800, 400, Phaser.AUTO, 'content', null);
	        this.state.add('MenuState', _statesMenuState2['default']);
	        this.state.add('GameState', _statesGameState2['default']);
	        this.state.add('GameOverState', _statesGameOverState2['default']);

	        this.state.start('MenuState');
	    }

	    return Game;
	})(Phaser.Game);

	new Game();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MenuState = (function (_Phaser$State) {
	    _inherits(MenuState, _Phaser$State);

	    function MenuState() {
	        _classCallCheck(this, MenuState);

	        _get(Object.getPrototypeOf(MenuState.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(MenuState, [{
	        key: 'preload',
	        value: function preload() {
	            this.load.image('bg-stars', 'assets/images/starfield.jpg');
	            this.load.image('button-play', 'assets/images/buttons/play.png');
	        }
	    }, {
	        key: 'create',
	        value: function create() {
	            this.add.tileSprite(0, -100, 800, 400, 'bg-stars');
	            var style = {
	                font: '32px Arial',
	                fill: '#ff0044'
	            };
	            var text = this.add.text(400, 170, 'Play GEJM', style);
	            text.anchor.set(0.5, 0.5);

	            // Button: Start
	            var button = this.add.button(400, 250, 'button-play', this._playGame);
	            button.anchor.set(0.5, 0.5);
	        }
	    }, {
	        key: '_playGame',
	        value: function _playGame() {
	            this.game.state.start('GameState');
	        }
	    }]);

	    return MenuState;
	})(Phaser.State);

	exports['default'] = MenuState;
	module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var GameState = (function (_Phaser$State) {
	    _inherits(GameState, _Phaser$State);

	    function GameState() {
	        _classCallCheck(this, GameState);

	        _get(Object.getPrototypeOf(GameState.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(GameState, [{
	        key: 'preload',
	        value: function preload() {
	            this.load.image('bear1', 'assets/images/bear/bear1.png');
	            this.load.image('bg-stars', 'assets/images/starfield.jpg');
	            this.load.spritesheet('rainbow', 'assets/images/rainbow.png', 40, 40);
	            this.load.spritesheet('bg-main', 'assets/images/bg.png', 40, 40);
	            this.load.tilemap('ground', 'assets/maps/map-1.json', null, Phaser.Tilemap.TILED_JSON);
	            this.load.audio('music', ['assets/audio/bodenstaendig_2000_in_rock_4bit.mp3', 'assets/audio/bodenstaendig_2000_in_rock_4bit.ogg']);
	        }
	    }, {
	        key: 'create',
	        value: function create() {
	            this.physics.startSystem(Phaser.Physics.ARCADE);
	            this.music = this.sound.play('music');

	            this.starfield = this.add.tileSprite(0, 0, 2400, 2400, 'bg-stars');
	            this.starfield.fixedToCamera = true;

	            this.cursors = this.input.keyboard.createCursorKeys();

	            var map = this.add.tilemap('ground');
	            map.addTilesetImage('rainbow');
	            map.addTilesetImage('bg-main');
	            map.setCollisionBetween(0, 3600, true);
	            map.fixedToCamera = true;

	            this.world = map.createLayer('Tile Layer 1');
	            this.world.resizeWorld();

	            this.player = this.add.sprite(100, 100, 'bear1');
	            this.player.anchor.setTo(0.5, 0.5);
	            this.physics.arcade.enable(this.player, true);

	            this.physics.arcade.collide(this.player, map);
	            this.camera.follow(this.player);
	        }
	    }, {
	        key: 'update',
	        value: function update() {
	            var _this = this;

	            this.physics.arcade.collide(this.player, this.world, function (o1, o2) {
	                if (o2.x >= 42 && o2.x <= 45 && o2.y >= 1 && o2.y <= 2) {
	                    _this.music.stop();

	                    setTimeout(function () {
	                        _this.state.start('GameOverState');
	                    }, 0);
	                }
	            });

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
	                this.starfield.tilePosition.x -= this.player.body.velocity.x * this.time.physicsElapsed;
	            }

	            if (!this.camera.atLimit.y) {
	                this.starfield.tilePosition.y -= this.player.body.velocity.y * this.time.physicsElapsed;
	            }
	        }
	    }]);

	    return GameState;
	})(Phaser.State);

	exports['default'] = GameState;
	module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var GameOverState = (function (_Phaser$State) {
	    _inherits(GameOverState, _Phaser$State);

	    function GameOverState() {
	        _classCallCheck(this, GameOverState);

	        _get(Object.getPrototypeOf(GameOverState.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(GameOverState, [{
	        key: 'preload',
	        value: function preload() {
	            this.load.image('bg-game-over', 'assets/images/game-over.jpg');
	            this.load.image('button-play', 'assets/images/buttons/play.png');
	        }
	    }, {
	        key: 'create',
	        value: function create() {
	            this.add.tileSprite(0, -100, 800, 400, 'bg-game-over');
	            var style = {
	                font: '32px Arial',
	                fill: '#ff0044'
	            };
	            var text = this.add.text(400, 170, 'Play EGEJN', style);
	            text.anchor.set(0.5, 0.5);

	            // Button: Start
	            var button = this.add.button(400, 250, 'button-play', this._playGame);
	            button.anchor.set(0.5, 0.5);
	        }
	    }, {
	        key: '_playGame',
	        value: function _playGame() {
	            this.game.state.start('GameState');
	        }
	    }]);

	    return GameOverState;
	})(Phaser.State);

	exports['default'] = GameOverState;
	module.exports = exports['default'];

/***/ })
/******/ ]);