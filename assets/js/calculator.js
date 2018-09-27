/* global variables*/
var currentOutput = "";

/* this function displays the currentOutput (see above) onto the application output heading*/
function updateOutput()
{
	$("#output").text(currentOutput);
}

/* appends onto the currentOutput string and then calls the updateOutput function*/
function addOutput(arg)
{
	switch (arg) {
		case "zero":
			currentOutput += "0";
			break;	
		case "one":
			currentOutput += "1";
			break;
		case "two":
			currentOutput += "2";
			break;
		case "three":
			currentOutput += "3";
			break;
		case "four":
			currentOutput += "4";
			break;
		case "five":
			currentOutput += "5";
			break;
		case "six":
			currentOutput += "6";
			break;
		case "seven":
			currentOutput += "7";
			break;
		case "eight":
			currentOutput += "8";
			break;
		case "nine":
			currentOutput += "9";
			break;
		case "add":
			currentOutput += " + ";
			break;
		case "subtract":
			currentOutput += " - ";
			break;
		case "multiply":
			currentOutput += " x ";
			break;
		case "divide":
			currentOutput += " / ";
			break;
	}
	updateOutput();
}

// click functions
$( "#zero" ).click(function() {
	addOutput("zero");
});

$( "#one" ).click(function() {
	addOutput("one");
});

$( "#two" ).click(function() {
	addOutput("two");
});

$( "#three" ).click(function() {
	addOutput("three");
});

$( "#four" ).click(function() {
	addOutput("four");
});

$( "#five" ).click(function() {
	addOutput("five");
});

$( "#six" ).click(function() {
	addOutput("six");
});

$( "#seven" ).click(function() {
	addOutput("seven");
});

$( "#eight" ).click(function() {
	addOutput("eight");
});

$( "#nine" ).click(function() {
	addOutput("nine");
});

$( "#add" ).click(function() {
	addOutput("add");
});

$( "#subtract" ).click(function() {
	addOutput("subtract");
});

$( "#multiply" ).click(function() {
	addOutput("multiply");
});

$( "#divide" ).click(function() {
	addOutput("divide");
});

$( "#equals" ).click(function() {
	// evaluate output
});

// evaluates output
function evaluateOutput() {
	var newOutput = "";
	while (singleNumber(currentOutput)) {
		
		while (yesMultiplyDivide(currentOutput))
		{
			
		}
	}
	
	
}

function singleNumber(str) {
	for (int i = 0; i < str.length; i++)
	{
		var pointer = str.charAt(i);
		if (pointer == " " || pointer == "+" || pointer == "-" || pointer == "x" || pointer == "/")
		{
			return false;
		}
	}
	return true;
}

function yesMultiplyDivide(str) {
	for (int i = 0; i < str.length; i++)
	{
		var pointer = str.charAt(i);
		if (pointer == "x" || pointer == "/")
		{
			return true;
		}
	}
	return false;
}

function findMultiplyDivide(str) {
	var place = 0;
	for (int i = 0; i < str.length; i++)
	{
		var pointer = str.charAt(i);
		if (pointer == "x" || pointer == "/")
		{
			
		}
	}
}




