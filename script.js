var colors=["rgb(117, 77, 176)",
            "rgb(122, 145, 230)",
            "rgb(189, 122, 230)",
            "rgb(230, 122, 122)",
            "rgb(208, 230, 122)",
            "rgb(77, 176, 92)"];
var squares=document.querySelectorAll(".square");
var pickedColor=colors[3];
var picked=document.querySelector("h1");
picked.innerHTML="The Great<br>"+pickedColor+"<br>Color Game";
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
        alert("yes right!");
        }
        else
        {
               alert("wrong");
        }
    });
}

