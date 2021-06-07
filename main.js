show_yourself = "";
let_it_go = "";
touch_the_sky = "";
rightWristX = "";
rightWristY = "";
leftWristX = "";
leftWristY = "";
score_left_wrist = "";
song = 0;

function preload(){
    let_it_go = loadSound("let it go.mp3");
    show_yourself = loadSound("show_yourself.mp3");
    touch_the_sky = loadSound("Touch The Sky.mp3")
}
function setup(){
    canvas = createCanvas(500,350);
    canvas.position(400,200);

    video =  createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,model_loaded);
    poseNet.on("pose",got_results);
}
function draw(){
    image(video,0,0,500,350);
    if(score_left_wrist > 0.2){
        circle(leftWristX,leftWristY,30);
        fill("#7a8cf0");
        stroke("#7a8cf0");
        song = song + 1;
        play();
    if(song == 3){
       song = 0;
        play();
    }
    }
}
function model_loaded(){
    console.log("Model is loaded");
}
function got_results(results){
    if(results.length > 0){
        console.log(results);

        score_left_wrist = results[0].pose.keypoints[9].score;
        console.log("Score Left Wrist:" + score_left_wrist);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("Right_Wrist X :" + rightWristX + " Right_Wrist_Y :" + rightWristY);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("Lift_Wrist X :" + leftWristX + " Left_Wrist_Y :" + leftWristY);
    }
}
function play(){
    if(song == 0){
        show_yourself.stop();
        touch_the_sky.stop();
        let_it_go.play();
        let_it_go.setVolume(1);
        let_it_go.rate(1);
        document.getElementById("song_name").innerHTML = "Let It Go";
    }
    if(song == 1){
        touch_the_sky.stop();
        let_it_go.stop();
        show_yourself.play();
        show_yourself.setVolume(1);
        show_yourself.rate(1);
        document.getElementById("song_name").innerHTML = "Show Yourself";
    }
    if(song == 2){
        show_yourself.stop();
        let_it_go.stop();
        touch_the_sky.play();
        touch_the_sky.setVolume(1);
        touch_the_sky.rate(1);
        document.getElementById("song_name").innerHTML = "Touch The Sky";
    }
}