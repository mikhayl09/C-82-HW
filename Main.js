var mouse_event = "empty";
canvas = document.getElementById("my_canvas");
ctx = canvas.getContext("2d");
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    mouse_event = "down";
    radius = document.getElementById("radius").value ;

    color = document.getElementById("color").value ;

    line_width = document.getElementById("line_width").value ;
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouse_event = "up";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouse_event = "leave";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
  console.log(e);
  var currentmouseX = e.clientX - canvas.offsetLeft;
  var currentmouseY = e.clientY - canvas.offsetTop;
  if (mouse_event == "down"){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = line_width;
    ctx.arc(currentmouseX, currentmouseY, radius, 0, 2*Math.PI);
    ctx.stroke();
  }
}
function clear_all(){
    ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
}
