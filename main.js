noseX = 0;
noseY = 0;

function preload(){
clownnose = loadImage("clown2.png");
}

function setup(){
canvas =createCanvas(500 , 500);
canvas.position(500, 200);
video = createCapture(VIDEO);
video.hide();
pose_net = ml5.poseNet(video , modelloaded);
pose_net.on('pose', gotposes);
}

function draw(){
   image(video, 0, 0, 500, 500);
   image(clownnose, noseX, noseY, 30, 30);
   
}

function takesnapshot(){
    save('image.png');
}

function modelloaded(){
    console.log("model loaded");
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);
        console.log("the x position of the nose is :" + results[0].pose.nose.x);
        console.log("the y position of the nose is :" + results[0].pose.nose.y);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

    }
}


