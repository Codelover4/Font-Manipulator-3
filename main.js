function setup() {
    video = createCapture(VIDEO);
    video.size(450,450);
    canvas= createCanvas(440,450);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}




function modelLoaded() {
    console.log('PoseNet Is Initilized!');
    
}
leftWristX=0;
rightWristX=0;
difference=0;
function gotPoses(results)
 {
   if(results.length > 0)
   {
    console.log(results);
    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    difference = floor(leftWristX-rightWristX);
    
   }

}

function draw() {
    background('#FF7F7F');
    textSize(difference);
 fill('white');
 text('Spell the word',200,200);
}

