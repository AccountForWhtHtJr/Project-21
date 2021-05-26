var canvas;
var block1, block2, block3, block4;
var ball, edges;
var music;

function preload() {
    // load sound here
    music = loadSound("music.mp3");
}


function setup() {
    userStartAudio();
    frameRate(60);
    rectMode(CENTER);
    canvas = createCanvas(800, 600);

    block1 = createSprite(95, 580, 200, 30);
    block1.shapeColor = "blue";

    block2 = createSprite(295, 580, 200, 30);
    block2.shapeColor = "orange";

    //create two more blocks i.e. block3 and block4 here

    block3 = createSprite(495, 580, 200, 30);
    block3.shapeColor = "red";

    block4 = createSprite(695, 580, 200, 30);
    block4.shapeColor = "green";

    ball = createSprite(random(20, 750), 100, 40, 40);
    ball.shapeColor = "white";
    
    //write code to add velocityX and velocityY
    ball.velocityX = random(-8, 8);
    ball.velocityY = random(-8, 8);

    textStyle(BOLDITALIC);
    textSize(50);
    fill(0);
    textAlign(CENTER);
}

function draw() {
    background(170);
    if (!started && frameCount < 500) {
        text("Click To Start Audio Please :/", width / 2, height / 3);
    }


    edges = createEdgeSprites();
    ball.bounceOff(edges);

    if (ball.isTouching(edges)) {
        ball.velocityX = random(-8, 8);
        ball.velocityY = random(-8, 8);
    }


    //write code to bounce off ball from the block1 
    if (block1.isTouching(ball)) {
        ball.bounceOff(block1);
        ball.shapeColor = "blue";
        if (!music.isPlaying()) music.loop();
    }



    if (block2.isTouching(ball)) {
        ball.bounceOff(block2);
        ball.shapeColor = "orange";
        //write code to set velocityX and velocityY of ball as 0
        if (music.isPlaying()) music.stop();
        //write code to stop music
    }


    //write code to bounce off ball from the block3

    if (block3.isTouching(ball)) {
        ball.bounceOff(block3);
        ball.shapeColor = "red";
    }

    //write code to bounce off ball from the block4
    if (block4.isTouching(ball)) {
        ball.bounceOff(block4);
        ball.shapeColor = "green";
    }

    drawSprites();
}

let started = false;
function mousePressed() {
    started = true;
}
