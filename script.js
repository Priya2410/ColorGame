var colors=generateColors(6); //Array of the colors we require on the screen-generates random colors;
var squares=document.querySelectorAll(".square");//Display of the squares used to assign a color to each square
var pickedColor=pickColor();//used to pick a random color from the collection of 3/6 colors.
var picked=document.querySelector("#col");
picked.innerHTML=pickedColor;
var picked1=document.querySelector("h1");
var messageDisplay=document.querySelector("#textDisplay");
var resetButton=document.querySelector("#play");
resetButton.addEventListener("click",reset);
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");
var numSquares=6;
//Used to add 6 colors
 hard.addEventListener("click",function()
 {
    hard.classList.add("selected");
    easy.classList.remove("selected");
    colors=generateColors(6);
    pickedColor=pickColor();
    picked.innerHTML=pickedColor;
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor=colors[i];
        squares[i].style.display="inline-block";
    }
    numSquares=6;
 });
//Used to add 3 colors
easy.addEventListener("click",function()
{
    hard.classList.remove("selected");
    easy.classList.add("selected");
    colors=generateColors(3);
    pickedColor=pickColor();
    picked.innerHTML=pickedColor;
    for(var i=0;i<squares.length;i++)
    {
        if(colors[i])
        squares[i].style.backgroundColor=colors[i];
        else
        squares[i].style.display="none";
    }
    numSquares=3;
});
for(var i=0;i<squares.length;i++)
{
    //adding initial colors
    squares[i].style.backgroundColor=colors[i];
    squares[i].addEventListener("click",function()
    {
        //This is for capturing the color of the current square
        var comparedColor = this.style.backgroundColor;
        //This is used to compare
        if(comparedColor===pickedColor)
        {
        // alert("yes right!");
        for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=pickedColor;
        }
        picked1.style.backgroundColor=pickedColor;
        messageDisplay.style.display="inline";
        messageDisplay.textContent="Correct";
        // messageDisplay.classList.add("style");
        play.innerHTML="Play Again?";
        }
        else
        {
            this.style.backgroundColor="black"
            //    alert("wrong");
            messageDisplay.style.display="inline";
            messageDisplay.textContent="Try Again";
            // messageDisplay.classList.add("style");
            play.innerHTML="New Colors";
        }
    });
}
//Used to generate one color from the random colors
function pickColor()
{
    //In order to generate the random index in the array
    var index=Math.floor(Math.random()*colors.length);
    return(colors[index]);
}
function generateColors(num)
{
    var arr=[];
    for(var i=0;i<num;i++)
    {
        arr.push(randomColor());
    }
    return arr;
}
//Generating Random Colors
function randomColor()
{
    
    	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
//used to reset the colors
function reset()
{
    colors=generateColors(numSquares);
    pickedColor=pickColor();
    picked.textContent=pickedColor;
    picked1.style.backgroundColor="#7ac6ff";
    for(var i=0;i<squares.length;i++)
    {
    squares[i].style.backgroundColor=colors[i];
    }   
    messageDisplay.style.display="none"
}


