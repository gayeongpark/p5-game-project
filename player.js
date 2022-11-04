class Player {
    constructor() {
        this.x = 185;
        this.xspeed = 0;
        this.y = 430;
        this.img;
        this.value = 0;
        this.player 
    }
    
    preload(){
        this.player = loadImage('images/main-car.png');
        this.gameover = loadImage('images/game-over.png');
    }

    draw () {
        image(this.player, this.x, this.y);

    }

    moveRight() {

            this.x += 50;

    } 

    moveLeft () {

            this.x -= 50;
    }

    
}

