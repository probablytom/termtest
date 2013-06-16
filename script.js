$(document).ready(function() {
	//Auto-focus on the text entry (command line)
	$('#term').focus();
	
	$('form').submit(function() {
		//Take relevant information from the contents of the HTML elements we need.
		var input = $('#term').val();
		var currentContent = $('#content').text();
	
		if (input !== '') {
			//Update the elements which need updating.
			toAdd = process(input);
			
			//If the input was bad, process() returns an empty string. Deal with this.
			if (toAdd === '') {
				return false;
			} else {
				$('#content').append('<p>' + toAdd + '</p>');
				$('#term').val('');
			}
		}

		//Clean up; scroll to the bottom, exit the function cleanly.
		window.scrollTo(0,document.body.scrollHeight);
		return false;
	});
});

var functions = {
	'h1': h1,
	'p': p
}

function process(input) {
	//Initialise appropriate variables.
	var args = input.split(' ');
	var command = args.shift();
	var result = '';
	
	//Process input
	/*if (command == 'p') {
		result = '<p>' + input + '</p>';
	} else if (command == 'h') {
		result = '<h1>' + input + '</h1>';
	} else {
		alert('Invalid input!' + command);
	}*/
	
	//process input
	try {
		result = functions[command](args);
	} catch(TypeError) {
		result = '<p>Bad input!</p>';
	}
	
	//Return result of input (held in 'result')
	return result;
}

function h1(args) {
	return '<h1>' + args.join(' ') + '</h1>';
}

function p(args) {
	return '<p>' + args.join(' ') + '</p>';
}