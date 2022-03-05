noseX = 0;
noseY = 0;
function setup(){
    canvas = createCanvas (300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size (300, 300);
    video.hide();

    poseNet = ml5.poseNet (video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function modelLoaded(){
    console.log('PoseNet is Initialized');
}

function gotPoses(){
    if (results.length > 0 ){
        noseX = results[0].pose.nose.x-15;
        noseY = results[0].pose.nose.y-15;
    }
}