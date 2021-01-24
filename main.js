canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

Nasa_images_Array=["h.jpg", "l.jpg", "o.jpg", "ll.jpg"];
random_number=Math.floor(Math.random()*4);


background_image=Nasa_images_Array[random_number];
rover_image="rover.png";
rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;

function ADD(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;
    rover_imgTag=new Image();
    rover_imgTag.onload=uploadRover;
    rover_imgTag.src=rover_image;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}
function uploadRover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '40'){
        down();
        console.log("down");
    }
    if(keyPressed =="39"){
        right();
        console.log("right");
    }
    
    if(keyPressed =="38"){
        up();
        console.log("up");
    }
    if(keyPressed =="37"){
        left();
        console.log("left");
    }
}
function down(){
    if(rover_y <=510){
        rover_y= rover_y+10;
        console.log("when down key is pressed X="+ rover_x+ "Y="+ rover_y);
        uploadBackground();
        uploadRover();
    }
}
function up(){
    if(rover_y >=0){
        rover_y= rover_y-10;
        console.log("when up key is pressed X="+ rover_x+ "Y="+ rover_y);
        uploadBackground();
        uploadRover();
    }
}
function left(){
    if(rover_x >=0){
        rover_x= rover_x-10;
        console.log("when left key is pressed X="+ rover_x+ "Y="+ rover_y);
        uploadBackground();
        uploadRover();
    }
}
function right(){
    if(rover_x <=700){
        rover_x= rover_x+10;
        console.log("when right key is pressed X="+ rover_x+ "Y="+ rover_y);
        uploadBackground();
        uploadRover();
    }
}