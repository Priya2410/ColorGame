var colors=["rgb(117, 77, 176)",
            "rgb(122, 145, 230)",
            "rgb(189, 122, 230)",
            "rgb(230, 122, 122)",
            "rgb(208, 230, 122)",
            "rgb(77, 176, 92)"];
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var picked=document.querySelector("h1 span");
picked.innerHTML=pickedColor;
var picked1=document.querySelector("h1");
var messageDisplay=document.querySelector("#textDisplay");
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
        messageDisplay.textContent="Correct";
        }
        else
        {
            this.style.backgroundColor="black"
            //    alert("wrong");
            messageDisplay.textContent="Try Again";
        }
    });
}
function pickColor(){
    //In order to generate the random index in the array
    var index=Math.floor(Math.random()*colors.length);
    return(colors[index]);

}

