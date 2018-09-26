var currentOutput = "";


function updateOutput()
{
	$("#output").text(currentOutput);
}

function addOutput(arg)
{
	if (arg == "one")
	{
		currentOutput += " 1";
	}
	updateOutput();
}
			
$( "#one" ).click(function() {
	addOutput("one");
});