var numOfSquares = 6;
var colors = generateRandomColor(numOfSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var massageDisplay = document.querySelector("#massage");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function() {
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numOfSquares = 3;
	colors = generateRandomColor(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i =0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function() {
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numOfSquares = 6;
	colors = generateRandomColor(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i =0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});

resetButton.addEventListener("click", function() {
	// generate all new colors
	colors = generateRandomColor(numOfSquares);
	// pick a new random color from array
	pickedColor = pickColor();
	// change also in rgb
	colorDisplay.textContent = pickedColor;

	resetButton.textContent = "new colors";
	massageDisplay.textContent = "";
	// change colors og squares 
	for(var i =0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
	// add initial color to the squares
	squares[i].style.backgroundColor = colors[i];

	// add listener to the squares
	squares[i].addEventListener("click", function(){
		// grab clicked rgb square color
		var clickedColor = this.style.backgroundColor;

		if(clickedColor === pickedColor){
			massageDisplay.textContent = "Correct";
			changeColor();
			h1.style.backgroundColor = pickedColor;
			resetButton.textContent = "Play Again?";
		}
		else{
			this.style.backgroundColor = "#232323";
			massageDisplay.textContent = "Try again";
		}
	});
 }

 function changeColor(color) {
 	// loop through
 	for(var i = 0; i < squares.length; i++) {
 		squares[i].style.backgroundColor = pickedColor;
 	}
 }

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColor(num) {
	// create an array
	var arr = [];
	// create random numbers and push them in the array
	for(var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	
	// return that array
	return arr;
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb("+r+", "+g+", "+b+")";
}