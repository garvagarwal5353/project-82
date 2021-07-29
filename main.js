var canvas = document.getElementById("myCanvas");
console.log(canvas)
ctx=canvas.getContext("2d")
var color="orange"
var widthofline=1
var mousevent=""
var current_position_x=0
var current_position_y=0
var last_position_x=0
var last_position_y=0
canvas.addEventListener("mousedown",my_mousedown)
function my_mousedown(e){
mousevent="Mdown"
console.log(mousevent)
color=document.getElementById("color").value;
widthofline=document.getElementById("width").value;
radius=document.getElementById("radius").value;
} 
canvas.addEventListener("mouseleave",my_mouseleave)  
function my_mouseleave(e){
    mousevent="Mleave"
    console.log(mousevent)
}              
canvas.addEventListener("mouseup",my_mouseup)
function my_mouseup(e){
    mousevent="Mup"
    console.log(mousevent)
}
canvas.addEventListener("mousemove",my_mousemove)
function my_mousemove(e){
  current_position_x=e.clientX - canvas.offsetLeft
  current_position_y=e.clientY - canvas.offsetTop
    if (mousevent=="Mdown") {
      ctx.beginPath()
      ctx.strokeStyle=color
      ctx.lineWidth=widthofline
      ctx.radius=radius  
      ctx.moveTo(last_position_x,last_position_y)
      ctx.lineTo(current_position_x,current_position_y)
      console.log("last position of x and y = ");
      console.log("x="+last_position_x+"y="+last_position_y)
      console.log("current position of x and y = ");
      console.log("x="+current_position_x+"y="+current_position_y)
      ctx.stroke()
    }
    last_position_x=current_position_x
    last_position_y=current_position_y
}
function cleararea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}