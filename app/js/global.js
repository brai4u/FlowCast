var device,
	playStatus,
	ipLocal,
	path,
	pathSub,
	dropVideo,
	dropSubs,
	resume,
	checkSubs,
	ext,
	fullpath,
	name,
	FileName,
	pause,
	duration,
	timerInterval,
	tiempoCrudo,
	porciento,
	chromecastjs,
	loading,
	startup,
	timerun;

var deviceStatus = false;
var background = false;
var media = null;
var firstTime = true;

// node requieres
var http = require("http"),
    fs = require('fs'),
    util = require('util'),
    srt2vtt = require('srt2vtt');

var gui = require('nw.gui');

// Get the current window
var win = gui.Window.get();

// get and set localip for video and sub servers
require('dns').lookup(require('os').hostname(), function (err, add, fam) {
        ipLocal = add;
})