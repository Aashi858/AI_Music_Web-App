show_yourself = "";
let_it_go = "";
rightWristX = "";
rightWristY = "";
leftWristX = "";
leftWristY = "";
score_left_wrist = "";

function preload(){
    let_it_go = loadSound("let it go.mp3");
    show_yourself = loadSound("show_yourself.mp3");
}
function setup(){
    canvas = createCanvas(500,300);
    canvas.position(400,260);

    video =  createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,model_loaded);
    poseNet.on("pose",got_results);
}
function draw(){
    image(video,0,0,500,300);
    if(score_left_wrist > 0.2){
        circle(leftWristX,leftWristY,30);
        fill("#7a8cf0");
        stroke("#7a8cf0");
        show_yourself.play();
        show_yourself.setVolume(1);
        document.getElementById("song_name").innerHTML = "Show Yourself";
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