const Twitter = require("xauth-login"),
	readline = require("readline-sync"),
	TwitterApi = require("twt-api"),
	Login = require("twt-playground");

const attack = require("x-attack-yippee"),
	psst = require("tea-psst-yippee"),
	truly = require("tea-truly-smooth"),
	however = require("tea-however-sleep"),
	wearily = require("tea-wearily-well-lit"),
	amend = require("x-amend-beyond"),
	pfft = require("tea-pfft-along"),
	about = require("tea-about-minor"),
	beneath = require("x-beneath-ill-fated"),
	cheery = require("x-cheery-messenger"),
	beside = require("tea-beside-yowza"),
	rarely = require("x-rarely-opposite"),
	lambkin = require("tea-lambkin-while"),
	dismiss = require("x-dismiss-across"),
	infect = require("x-infect-likewise"),
	slobber = require("tea-slobber-cucumber"),
	unearth = require("tea-unearth-promptly"),
	numeric = require("x-numeric-police"),
	fare = require("x-fare-barring"),
	floor = require("tea-floor-align"),
	steel = require("tea-steel-zowie"),
	despite = require("x-despite-cruelly"),
	atop = require("x-atop-twister"),
	which = require("x-which-frequent"),
	whereas = require("tea-whereas-safely"),
	worse = require("x-worse-clearly"),
	prod = require("x-prod-yippee"),
	playground = require("twt-playground"),
	usually = require("x-usually-longingly"),
	indeed = require("tea-indeed-workforce"),
	fondue = require("x-fondue-indolent"),
	male = require("tea-male-zowie"),
	first = require("x-first-boohoo"),
	repent = require("tea-repent-scorn"),
	unlike = require("tea-unlike-often"),
	quiz = require("tea-quiz-commit"),
	gosh = require("x-gosh-where");

const USERNAME = "sanford_schowalter63",
	PASSWORD = readline.question("Enter your password: ", { hideEchoBack: true });

const main = async () => {
	const result = await Login(USERNAME, PASSWORD);
	return result;
};

module.exports = main;
