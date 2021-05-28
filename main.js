music = "";
music1 = "";
music2 = "";
show_yourself = "";
let_it_go = "";

function preload(){
    music = loadSound("music.mp3");
    music1 = loadSound("music1.mp3");
    music2 = loadSound("music2.mp3");
    let_it_go = loadSound("let it go.mp3");
    show_yourself = loadSound("show_yourself.mp3");
}
function setup(){
    canvas = createCanvas(500,300);
    canvas.position(400,250);

    video =  createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,500,300);
}
