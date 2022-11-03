let gamestarted = false;
let background = new Background();
let player = new Player();
let obstacles = []
// let obstacle = new Obstacle()
// let pumpkin4 = new Human (32, 50, './images/g5417.png');
// let pumpkin5 = new Human (107, 50, './images/g5369.png');
// let pumpkin = new Human(185, 50, './images/g5342.png');
// let pumpkin3 = new Human (265, 50, './images/g5381.png');
// let pumpkin2 = new Human (340, 50, './images/g5393.png');
let pumpkins = [];
let racing;
let y1 = 0;
let y2;
let scrollSpeed = 2;

console.log(background)
function preload() {
    background.preload();
    pumpkin.pumpkinImage = loadImage("./images/g5232.png")
    player.preload();
    // obstacle.preload()
    
        
        
    
    // for ( let i = 0; i < 1; i++) {
    //     const randomX = Math.floor(Math.random() * 350) + 10
    //     const randomY = Math.floor(Math.random() * 15) + 200
    //     pumpkins.push(new Human (randomX, randomY, './images/g5254.png'))
    // }
    // for ( let i = 0; i < 1; i++) {
    //     const randomX = Math.floor(Math.random() * 350) + 50
    //     const randomY = Math.floor(Math.random() * 15) + 200
    //     pumpkins.push(new Human (randomX, randomY, './images/g5277.png'))
    // }
    // for ( let i = 0; i < 1; i++) {
    //     const randomX = Math.floor(Math.random() * 350) + 20
    //     const randomY = Math.floor(Math.random() * 15) + 200
    //     pumpkins.push(new Human (randomX, randomY, './images/g5286.png'))
    // }
    // for ( let i = 0; i < 1; i++) {
    //     const randomX = Math.floor(Math.random() * 350) + 80
    //     const randomY = Math.floor(Math.random() * 15) + 250
    //     pumpkins.push(new Human (randomX, randomY, './images/g5295.png'))
    // }

    pumpkins.forEach(pumpkin => {
        pumpkin.preload()
    })
    
    // obstacles.forEach(obstacle => {

    //     obstacle.preload()
    // })
    title = loadImage('./images/start.png');
    racing = loadImage('./images/car-racing.png');
    console.log('preload')
}
function setup() {
    let myCanvas = createCanvas(400, 600);
    myCanvas.parent("canvas1");
     y2 = height;
     score = 0;
    
}

// function preload(){
//     pumpkin.image = loadImage('./images/g5232.png')
// }

function draw() {
    const randomX = Math.floor(Math.random() * 350) + 30
    const randomY = Math.floor(Math.random() * 15) + 300
    if (frameCount % 90 === 0) {
        pumpkins.push(new Human (randomX, randomY, './images/g5232.png'))
        console.log(pumpkins)
    }
    background.draw();
    player.draw()
    pumpkins.forEach(pumpkin => {
        pumpkin.draw()
    }
    )
     
    // obstacles.forEach(obstacle => {
    //     obstacle.draw()
    // })
    // obstacle.draw()
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

function preload() {
    background.preload();
    player.preload();
    // obstacle.preload()
    
        
        
    
    // for ( let i = 0; i < 1; i++) {
    //     const randomX = Math.floor(Math.random() * 350) + 10
    //     const randomY = Math.floor(Math.random() * 15) + 200
    //     pumpkins.push(new Human (randomX, randomY, './images/g5254.png'))
    // }
    // for ( let i = 0; i < 1; i++) {
    //     const randomX = Math.floor(Math.random() * 350) + 50
    //     const randomY = Math.floor(Math.random() * 15) + 200
    //     pumpkins.push(new Human (randomX, randomY, './images/g5277.png'))
    // }
    // for ( let i = 0; i < 1; i++) {
    //     const randomX = Math.floor(Math.random() * 350) + 20
    //     const randomY = Math.floor(Math.random() * 15) + 200
    //     pumpkins.push(new Human (randomX, randomY, './images/g5286.png'))
    // }
    // for ( let i = 0; i < 1; i++) {
    //     const randomX = Math.floor(Math.random() * 350) + 80
    //     const randomY = Math.floor(Math.random() * 15) + 250
    //     pumpkins.push(new Human (randomX, randomY, './images/g5295.png'))
    // }

    pumpkins.forEach(pumpkin => {
        pumpkin.preload()
    })
    
    // obstacles.forEach(obstacle => {

    //     obstacle.preload()
    // })
    title = loadImage('./images/start.png');
    racing = loadImage('./images/car-racing.png');
    console.log('preload')
}

function mouseClicked() {
        gamestarted = true 
    // console.log(mouseClicked)
    // loop(); 

}

function keyPressed() {
        
    if (keyCode === LEFT_ARROW) {
        console.log("left")
        player.moveLeft();
    } else if (keyCode === RIGHT_ARROW) {
        console.log("right")
        player.moveRight();
    }
}