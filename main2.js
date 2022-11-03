let gamestarted = false;
let background = new Background();
let player = new Player();
let obstacles = [];
let obstacle2 = new Obstacle2();
let racing;
let y1 = 0;
let y2;
let scrollSpeed = 2;

function preload() {
    background.preload();
    player.preload();
   
    obstacle2.preload()
    
    
    title = loadImage('./images/start.png');
    racing = loadImage('./images/car-racing.png');
}
function setup() {
    let myCanvas = createCanvas(400, 600);
    myCanvas.parent("canvas1");
     y2 = height;
     score = 0;
}
// console.log(player)
// console.log(obstacles)

// console.log(player, obstacles)
function draw() {
    clear();
    background.draw();
    player.draw();
    obstacle2.draw();
    if (frameCount % 200 ===0 ) {
        obstacles.push(obstacle2());
        // console.log(obstacles)
        obstacles.forEach((obstacle) => {
            obstacle.draw();
        })
    } 
   

    
    if (!gamestarted) {
        image (title, 48, 500, 300, 60);
        image (racing, 50, 30, 300, 200);
    } 
    else {
        score = score + Math.round(getFrameRate()/30);
    }
    
    y1 -= scrollSpeed;
    y2 -= scrollSpeed;

    if (y1 < - height) {
         y1 = height
    } if (y2 < - height) {
        y2 = height;
    }



}

// function preload() {
//     background.preload();
//     player.preload();
//     obstacles.preload()
//     title = loadImage('./images/start.png');
//     racing = loadImage('./images/car-racing.png');
// }

function mouseClicked() {
        gamestarted = true 

}

function keyPressed() {
        
    if (keyCode === LEFT_ARROW) {
        player.moveLeft();
    } else if (keyCode === RIGHT_ARROW) {
        player.moveRight();
    }
}