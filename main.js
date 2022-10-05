var lastx , lasty
var mouseEvent = ""
Color="black"
width=1
radius = 2
canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
var width=screen.width
newWidth=screen.width-70
newHeight=screen.height-300
if(width<992){
    document.getElementById("myCanvas").width=newWidth
    document.getElementById("myCanvas").height=newHeight
    document.body.style.overflow="hidden"
}
canvas.addEventListener("touchmove" , my_touchmove)
function my_mousemove(e){
    currentx=e.clientX - canvas.offsetLeft;
    currenty=e.clientY - canvas.offsetTop;

    if(mouseEvent == "mouseDown"){
        ctx.beginPath()
        ctx.strokeStyle = Color;
        ctx.lineWidth = Width;
        ctx.arc(currentx , currenty , radius , 0 , 2*Math.PI);
        ctx.stroke();
    }

    lastx=currentx
    lasty=currenty
}
canvas.addEventListener("mousedown" , my_mousedown);

function my_mousedown(e){
    color = document.getElementById("Color").value;
    width_of_line = document.getElementById("Width").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mouseDown";
}
function cleararea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}
canvas.addEventListener("mouseup" , my_mouseup);

function my_mouseup(e){
     mouseEvent = "mouseup"
}
canvas.addEventListener("mouseleave" , my_mouseleave);

function my_mouseleave(e){
     mouseEvent = "mouseleave"
}