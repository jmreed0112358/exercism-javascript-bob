var validator = require('validator');
var xregexp = require('xregexp');
var NotImplementedException = require('./exceptions/NotImplementedException.js');
var InvalidParameterException = require('./exceptions/InvalidParameterException.js');

/* Response Constants. */
const QUESTION_RESPONSE = 'Sure.';
const YELLING_RESPONSE = 'Whoa, chill out!';
const SILENCE_RESPONSE = 'Fine. Be that way!';
const DEFAULT_RESPONSE = 'Whatever.';
const BLACKLIST_REGEX = '\\[`~@#\\$%\\^&\\*\\\\\(\\)_\\-+=\\|\\\}\\]\\{\\[:\;\"\'<,>./\\]';

var Bob = function() {};

Bob.prototype.hey = function(input) {
	if ( typeof input !== 'string') {
		throw new InvalidParameterException('This function takes a single string.');
	}

	if ( this.isEmptyOrAllSpaces(input)) {
		return SILENCE_RESPONSE;
	} else if ( this.isYelling(input)) {
		return YELLING_RESPONSE;
	} else if ( this.isQuestion(input)) {
		return QUESTION_RESPONSE
	} else {
		return DEFAULT_RESPONSE;
	}
};

Bob.prototype.isEmptyOrAllSpaces = function(sentence) {
	var length = 0,
		i = 0;

	length = sentence.length;
	if (length == 0) {
		return true;
	}

	for ( i = 0 ; i < length ; i++ ) {
		if (sentence[i] != ' ') {
			return false;
		}
	}
	return true;
};

Bob.prototype.isQuestion = function(sentence) {
	var length = 0,
		i = 0;

	length = sentence.length;
	if (length === 0) {
		return false;
	}

	return sentence[length - 1] === '?';
};

Bob.prototype.isYelling = function(sentence) {
	var length = 0,
		i = 0,
		numAlpha = 0,
		char = '',
		unicodeword;

	length = sentence.length;
	if (length === 0) {
		return false;
	}

	unicodeword = xregexp('^\\pL+$');

	for ( i = 0 ; i < length ; i++ ) {
		char = sentence[i];
		if (unicodeword.test(char)) {
			numAlpha++;
			if (!validator.isUppercase(char)) {
				return false;
			}
		}
	}

	return numAlpha !== 0;
};

Bob.prototype.sanitize = function(sentence) {
	return validator.blacklist(validator.trim(sentence), BLACKLIST_REGEX);
};

module.exports = Bob;
