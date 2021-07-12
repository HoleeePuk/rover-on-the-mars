var canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d") 
var rover_width=100
var rover_height=90
var rover_X=10
var rover_Y=10
var background_img="mars.jpg"
var rover_img="rover.png"
function add(){
   background_imgtag=new Image()
   background_imgtag.onload=uploadBackground
   background_imgtag.src=background_img
   rover_imgtag=new Image()
   rover_imgtag.onload=uploadRover
   rover_imgtag.src=rover_img 
}

function uploadBackground(){
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height)
}

function uploadRover(){
    ctx.drawImage(rover_imgtag,rover_X,rover_Y,rover_width,rover_height)
}

window.addEventListener("keydown",my_keydown)

function my_keydown(e){
var key_press=e.keyCode
console.log(key_press)
if(key_press=='38'){
    console.log("up")
    up()
}
if(key_press=='40'){
    console.log("down")
    down()
}
if(key_press=='37'){
    console.log("left")
    left()
}
if(key_press=='39'){
    console.log("right")
    right()
}
}
function up(){
    if(rover_Y>=0){
    rover_Y=rover_Y-10
    uploadBackground()
    uploadRover()
    }
}

function down(){
    if(rover_Y<=500){
    rover_Y=rover_Y+10
    uploadBackground()
    uploadRover()
    }
}

function right(){
    if(rover_X<=700){
    rover_X=rover_X+10
    uploadBackground()
    uploadRover()
    }
}

function left(){
    if(rover_X>=0){
    rover_X=rover_X-10
    uploadBackground()
    uploadRover()
    }
}
