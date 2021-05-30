show_yourself = "";
let_it_go = "";
rightWristX = "";
rightWristY = "";
leftWristX = "";
leftWristY = "";

function preload(){
    let_it_go = loadSound("let it go.mp3");
    show_yourself = loadSound("show_yourself.mp3");
}
function setup(){
    canvas = createCanvas(500,300);
    canvas.position(400,250);

    video =  createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,model_loaded);
    poseNet.on("pose",got_results);
}
function draw(){
    image(video,0,0,500,300);
}
function model_loaded(){
    console.log("Model is loaded");
}
function got_results(results){
    if(results.length > 0){
        console.log(results);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("Right_Wrist X :" + rightWristX + " Right_Wrist_Y :" + rightWristY);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("Lift_Wrist X :" + leftWristX + " Left_Wrist_Y :" + leftWristY);
    }
}