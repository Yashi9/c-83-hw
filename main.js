
var MouseEvent = "";
var last_position_of_x ,last_position_of_y;

canvas = 
document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var color = "black";
width_of_line = 2 ;


canvas.addEventListener("mousedown" , my_mousedown);

function my_mousedown(e) 
{
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    MouseEvent = "mousedown";
}
canvas.addEventListener("mouseleave" , my_mouseleave);

function my_mouseleave(e) 
{  
    MouseEvent = "mouseleave";
}

canvas.addEventListener("mouseup" , my_mouseup);

function my_mouseup(e) 
{   
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    MouseEvent = "mouseup";
}

canvas.addEventListener("mousemove" , my_mousemove);

function my_mousemove(e) 
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if(MouseEvent == "mousedown")
    {
        console.log("Current position of x and y cordinates =");
        console.log("x = "  + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = color ;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(last_position_of_x , last_position_of_y);
        ctx.lineTo(current_position_of_mouse_x , current_position_of_mouse_y);
        ctx.stroke(); 
        
    }

    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;


}
canvas.addEventListener("touchmove" , my_touchmove);

function my_touchmove(e) 
{
    MouseEvent = "mytouchmove";
    console.log("my_touchmove");
    current_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_y = e.touches[0].clientY - canvas.offsetTop;

    
        ctx.beginPath();
        ctx.strokeStyle = color ;
        ctx.lineWidth = width_of_line;
        
        console.log("Last position of x and y cordinates =");
        console.log("X = "  + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y cordinates =");
        console.log("x = "  + current_position_of_x + "y = " + current_position_of_y);
        ctx.lineTo(current_position_of_x, current_position_of_y);
        ctx.stroke();

    

    last_position_of_x = current_position_of_x;
    last_position_of_y = current_position_of_y;


}



canvas.addEventListener( "touchstart", my_touchstart);

function my_touchstart(e) 

{
    console.log("My_touchstart");
color = document.getElementById("color").value;
width_of_line = document.getElementById("width_of_line").value;
last_position_of_x= e.touches[0].clientX - canvas.offsetLeft;
last_position_of_y= e.touches[0].clientY - canvas.offsetTop;
MouseEvent="my_touchstart";
}



function clear_area()
{
    ctx.clearRect(0 , 0 , ctx.canvas.width , ctx.canvas.height );
}

