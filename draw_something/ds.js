let canvas1 = document.getElementById("canvas1");
let ctx = canvas1.getContext("2d");
ctx.fillStyle = "white";
ctx.fillRect(0,0,400,400);
let clearbtn = document.getElementById("clearbtn");
let sendbtn = document.getElementById("sendbtn");
let img_out = document.getElementById("img");
let img = new Image();
//draw_square(0,0,400);
let mouseisdown = false;
let mx = 0,my = 0;
canvas1.addEventListener("mousedown",function(e){
    mx = e.offsetX;
    my = e.offsetY;
    mouseisdown = true;
    ctx.moveTo(mx,my);
    //console.log(mx,my);
})
canvas1.addEventListener("mousemove",function(e){
    if(mouseisdown){
        ctx.lineTo(e.offsetX,e.offsetY);
        ctx.stroke();
    }
})
window.addEventListener("mouseup",function(e){
    if(mouseisdown){
        mouseisdown = false;
    }
})
clearbtn.addEventListener("click",function(){
    ctx.beginPath();
    ctx.clearRect(0,0,400,400);
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,400,400);
    //draw_square(0,0,400);
})
sendbtn.addEventListener("click",function(){
    img.src = canvas1.toDataURL("image");
    img_out.src = img.src;
    //img = ctx.getImageData(0,0,10,10);
    //console.log(img);
})
function draw_square(x,y,w){
    ctx.moveTo(x,y);
    ctx.lineTo(x+w,y);
    ctx.lineTo(x+w,y+w);
    ctx.lineTo(x,y+w);
    ctx.lineTo(x,y);
    ctx.stroke();
}