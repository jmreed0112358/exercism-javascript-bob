//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var NotImplementedException = require('./exceptions/NotImplementedException.js');
var InvalidParameterException = require('./exceptions/InvalidParameterException.js');

/* Response Constants. */
const QUESTION_RESPONSE = 'Sure';
const YELLING_RESPONSE = 'Whoa, chill out!';
const SILENCE_RESPONSE = 'Fine. Be that way!';
const allResponse = 'Whatever.';

var Bob = function() {};

Bob.prototype.hey = function(input) {
	throw new NotImplementedException();
};

Bob.prototype.isEmptyOrAllSpaces = function(sentence) {
	throw new NotImplementedException();
};

Bob.prototype.isQuestion = function(sentence) {
	throw new NotImplementedException();
};

Bob.prototype.isYelling = function(sentence) {
	throw new NotImplementedException();
};

Bob.prototype.sanitize = function(sentence) {
	throw new NotImplementedException();
};

module.exports = Bob;
