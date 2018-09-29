/* CS4800 Assignment 1
   Original Code Writen By: Ethan Liao */


/* global variables*/
var holdLeft, holdRight, leftNum, rightNum, result = 0;
var currentOutput = "";
var operation = "";
var notClickedPrev = false;
var equalsLastInput = false;

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
			if (equalsLastInput) {
				currentOutput = "0";
			}
			else {
				currentOutput += "0";
			}
			equalsLastInput = false;
			break;	
		case "one":
			if (equalsLastInput) {
				currentOutput = "1";
			}
			else {
				currentOutput += "1";
			}
			equalsLastInput = false;
			break;
		case "two":
			if (equalsLastInput) {
				currentOutput = "2";
			}
			else {
				currentOutput += "2";
			}
			equalsLastInput = false;
			break;
		case "three":
			if (equalsLastInput) {
				currentOutput = "3";
			}
			else {
				currentOutput += "3";
			}
			equalsLastInput = false;
			break;
		case "four":
			if (equalsLastInput) {
				currentOutput = "4";
			}
			else {
				currentOutput += "4";
			}
			equalsLastInput = false;
			break;
		case "five":
			if (equalsLastInput) {
				currentOutput = "5";
			}
			else {
				currentOutput += "5";
			}
			equalsLastInput = false;
			break;
		case "six":
			if (equalsLastInput) {
				currentOutput = "6";
			}
			else {
				currentOutput += "6";
			}
			equalsLastInput = false;
			break;
		case "seven":
			if (equalsLastInput) {
				currentOutput = "7";
			}
			else {
				currentOutput += "7";
			}
			equalsLastInput = false;
			break;
		case "eight":
			if (equalsLastInput) {
				currentOutput = "8";
			}
			else {
				currentOutput += "8";
			}
			equalsLastInput = false;
			break;
		case "nine":
			if (equalsLastInput) {
				currentOutput = "9";
			}
			else {
				currentOutput += "9";
			}
			equalsLastInput = false;
			break;
		case "add":
			if (!checkValid()) {
				break;
			}
			else {
				currentOutput += " + ";
			}
			equalsLastInput = false;
			break;
		case "subtract":
			if (!checkValid()) {
				break;
			}
			else {
				currentOutput += " - ";
			}
			equalsLastInput = false;
			break;
		case "multiply":
			if (!checkValid()) {
				break;
			}
			else {
				currentOutput += " x ";
			}
			equalsLastInput = false;
			break;
		case "divide":
			if (!checkValid()) {
				break;
			}
			else {
				currentOutput += " / ";
			}
			equalsLastInput = false;
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
		equalsLastInput = true;
		currentOutput = formatOutput();
		evaluateOutput();
});

$( "#clear" ).click(function() {
		currentOutput = "";
		updateOutput();
});

// evaluates output
function evaluateOutput() {
	
	// until there is no more multiplication or division
	while (!singleNumber(currentOutput)) {
		
		// iterate currentOutput until it finds the first 'x' or '/' (higher precedence)
		while (yesMultiplyDivide(currentOutput))
		{
			// get numbers on left and right side + the operation ('x' or '/')
			leftNum = getLeftNum(currentOutput, findMultiplyDivide(currentOutput));
			rightNum = getRightNum(currentOutput, findMultiplyDivide(currentOutput));
			operation = currentOutput.charAt(findMultiplyDivide(currentOutput));
			result = 0;
			
			// replace the section with the product or quotient
			if (operation === "x")
			{
				result = getProduct(leftNum, rightNum);
			}
			else if (operation === "/")
			{
				result = getQuotient(leftNum, rightNum);
			}
			
			replaceExpression(result.toString(), leftNum.toString(), rightNum.toString(), operation);
		}
		
		// iterate currentOutput until it finds the first '+' or '-' (lower precedence)
		while (yesAddSubtract(currentOutput))
		{
			// get numbers on left and right side + the operation ('+' or '-')
			leftNum = getLeftNum(currentOutput, findAddSubtract(currentOutput));
			rightNum = getRightNum(currentOutput, findAddSubtract(currentOutput));
			operation = currentOutput.charAt(findAddSubtract(currentOutput));
			result = 0;
			
			// replace the section with the sum or difference
			if (operation === "+")
			{
				result = getSum(leftNum, rightNum);
			}
			else if (operation === "-")
			{
				result = getDifference(leftNum, rightNum);
			}
			
			replaceExpression(result.toString(), leftNum.toString(), rightNum.toString(), operation);
		}
	}
}

function singleNumber(str) {
	for (var i = 0; i < str.length; i++)
	{
		var pointer = str.charAt(i);
		if (pointer === "+" || pointer === "-" || pointer === "x" || pointer === "/")
		{
			return false;
		}
	}
	return true;
}

function yesMultiplyDivide(str) {
	for (var i = 0; i < str.length; i++)
	{
		var pointer = str.charAt(i);
		if (pointer === "x" || pointer === "/")
		{
			return true;
		}
	}
	return false;
}

function yesAddSubtract(str) {
	for (var i = 0; i < str.length; i++)
	{
		var pointer = str.charAt(i);
		if (pointer === "+" || pointer === "-")
		{
			return true;
		}
	}
	return false;
}

function findMultiplyDivide(str) {
	var place = 0;
	for (var i = 0; i < str.length; i++)
	{
		var pointer = str.charAt(i);
		if (pointer === "x" || pointer === "/")
		{
            return i;
		}
    }
    return 999; // error
}

function findAddSubtract(str) {
	var place = 0;
	for (var i = 0; i < str.length; i++)
	{
		var pointer = str.charAt(i);
		if (pointer === "+" || pointer === "-")
		{
            return i;
		}
    }
    return 999; // error
}

function getLeftNum(str, place) {
    for (var i = 2; i < str.length; i++)
    {
        if (str.charAt(place-i) === " ")
		{
			holdLeft = place-i;
			return Number(str.substring(place-i+1, place-1));
		}
    }
}

function getRightNum(str, place) {
    for (var i = 2; i < str.length; i++)
    {
        if (str.charAt(place+i) === " ")
		{
			holdRight = place+i;
			return Number(str.substring(place+2, place+i));
		}
    }
}

function getProduct(num1, num2) {
	return num1 * num2;
}

function getQuotient(num1, num2) {
	return num1 / num2;
}

function getSum(num1, num2) {
	return num1 + num2;
}

function getDifference(num1, num2) {
	return num1 - num2;
}

function replaceExpression(newStr, num1, num2, op) {
	var oldStr = num1 + " " + op + " " + num2;
	currentOutput = currentOutput.replace(oldStr, newStr);
	removeExtraSpace();
	updateOutput();
}

function formatOutput() {
	return " " + currentOutput + " ";
}

function removeExtraSpace() {
	currentOutput = currentOutput.replace(/  /g, " "); // replaces any double white space with a single white space
}

function checkValid() {
	var lastCharPos = currentOutput.length - 2; // account for extra space at the end
	if (currentOutput.charAt(lastCharPos) === "+" || currentOutput.charAt(lastCharPos) === "-" || currentOutput.charAt(lastCharPos) === "x" || currentOutput.charAt(lastCharPos) === "/")
	{
		return false;
	}
	return true;
}
