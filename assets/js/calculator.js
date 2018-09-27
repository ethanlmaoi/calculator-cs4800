/* global variables*/
var holdLeft, holdRight = 0;
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
	currentOutput = formatOutput();
	evaluateOutput();
});

// evaluates output
function evaluateOutput() {
	while (!singleNumber(currentOutput)) {
		
		while (yesMultiplyDivide(currentOutput))
		{
			console.log(currentOutput);
			var leftNum = getLeftNum(currentOutput, findMultiplyDivide(currentOutput));
			console.log(leftNum);
			var rightNum = getRightNum(currentOutput, findMultiplyDivide(currentOutput));
			console.log(rightNum);
			var operation = currentOutput.charAt(findMultiplyDivide(currentOutput));
			console.log(operation);
			var result = 0;
			console.log("2");
				
			if (operation === "x")
			{
				result = getProduct(leftNum, rightNum);
				console.log("3");
			}
			else if (operation === "/")
			{
				result = getQuotient(leftNum, rightNum);
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
	currentOutput = currentOutput.replace(/  /g, " ");
}

