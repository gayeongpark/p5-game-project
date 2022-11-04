let gamestarted = false;
let background = new Background();
let player = new Player();
let obstacles = [];
// let obstacle2 = new Obstacle2();
let racing;
let y1 = 0;
let y2;
let scrollSpeed = 2;
let obstacle3 = ['g6390.png', 'g5254.png', 'g5277.png', 'g5286.png', 'g5295.png', 'g5304.png', 'g5318.png', 'g5333.png', 'g5342.png', 'g5351.png', 'g5360.png', 'g5360.png', 'g5369.png', 'g5381.png', 'g5393.png', 'g5405.png', 'g5417.png' ]
// let obstacle4 = obstacle3[Math.floor(Math.random()*obstacle3.length)]
let obstacle;
let obstacleImages;
let scores = 0;
let test = 0;
let mode;


function preload() {
    background.preload();
    player.preload();    
    title = loadImage('images/start.png');
    racing = loadImage('images/car-racing.png');
    obstacleImages = [
        loadImage(`images/${obstacle3[0]}`),
        loadImage(`images/${obstacle3[1]}`),
        loadImage(`images/${obstacle3[2]}`),
        loadImage(`images/${obstacle3[3]}`),
        loadImage(`images/${obstacle3[4]}`),
        loadImage(`images/${obstacle3[5]}`),
        loadImage(`images/${obstacle3[6]}`),
        loadImage(`images/${obstacle3[7]}`),
        loadImage(`images/${obstacle3[8]}`),
        loadImage(`images/${obstacle3[9]}`),
        loadImage(`images/${obstacle3[10]}`),
        loadImage(`images/${obstacle3[11]}`),
        loadImage(`images/${obstacle3[12]}`),
        loadImage(`images/${obstacle3[13]}`),


    ]
    loseImage = loadImage('images/game-over.png');
    winImage = loadImage('images/Success.png')

}
function setup() {
    let myCanvas = createCanvas(400, 600);
    myCanvas.parent("canvas1");
     y2 = height;
     scores = 0;
     mode = 0
     for (let i = 0; i < 100; i++) {
        test += 10;
        scores[i] = test;
     }
}

function draw() {
    clear();
    background.draw();
    player.draw();
    
    if (frameCount % 150 ===0 ) {
        obstacles.push(new Obstacle2(obstacleImages[Math.floor(Math.random() * 3)]));


    }

if (frameCount % 20 === 0) {
    scores++;
    document.getElementById('score').innerText = scores

}




    obstacles.forEach((obstacle) => {
            obstacle.draw();
        })
     
   

    
    if (!gamestarted) {
        image(title, 48, 500, 300, 60);
        image(racing, 50, 30, 300, 200);
    } 
    else {
        score = scores + Math.round(getFrameRate()/30);
    }
    
    y1 -= scrollSpeed;
    y2 -= scrollSpeed;

    if (y1 < - height) {
         y1 = height
    } if (y2 < - height) {
        y2 = height;
    }

    obstacles.forEach(function(obstacle){
        
        if(obstacle.collision(player) === true) {
            console.log('collision');
            image(loseImage, 100, 100, 200, 200);
            noLoop()
        } 
    })

    if (scores === 100) {
        image(winImage, 100, 100, 200, 200);
        noLoop();
    }

}

function moveCars () {
    if (this.player.y === -50) {
        scores++;
    }
}


function mouseClicked() {
        gamestarted = true 

}

function keyPressed() {
        
    if (keyCode === LEFT_ARROW) {
        player.moveLeft();
    } else if (keyCode === RIGHT_ARROW) {
        player.moveRight();
    }

function leaveUp() {
    if(scores === scores[i])
    {
        player.sp++;
        scores++;


    }
}
}