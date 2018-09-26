var currentOutput = "";


function updateOutput()
{
	$("#output").text(currentOutput);
}

function addOutput(arg)
{
	switch (arg) {
		case "zero":
			currentOutput += " 1";
			break;	
		case "one":
			currentOutput += " 1";
			break;
		case "two":
			currentOutput += " 2";
			break;
		case "three":
			currentOutput += " 3";
			break;
		case "four":
			currentOutput += " 4";
			break;
		case "five":
			currentOutput += " 5";
			break;
		case "six":
			currentOutput += " 6";
			break;
		case "seven":
			currentOutput += " 7";
			break;
		case "eight":
			currentOutput += " 8";
			break;
		case "nine":
			currentOutput += " 9";
			break;
		case "add":
			currentOutput += " +";
			break;
		case "subtract":
			currentOutput += " -";
			break;
		case "multiply":
			currentOutput += " x";
			break;
		case "divide":
			currentOutput += " /";
			break;
		case "equals":
			// evaluate output
			break;
			
	}
	updateOutput();
}
			
$( "#one" ).click(function() {
	addOutput("one");
});