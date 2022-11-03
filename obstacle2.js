class Obstacle2 {
    constructor() {
        this.x = (Math.random()*400);
        this.xspeed = 0;
        this.y = 165
        this.img;
        this.obstacle2 
        this.obstacle3 = ['g6390.png', 'g5254.png', 'g5277.png', 'g5286.png', 'g5295.png', 'g5304.png', 'g5318.png', 'g5333.png', 'g5342.png', 'g5351.png', 'g5360.png', 'g5360.png', 'g5369.png', 'g5381.png', 'g5393.png', 'g5405.png', 'g5417.png' ]
        this.obstacle4 = this.obstacle3[Math.floor(Math.random()*this.obstacle3.length)]
    }
    
    preload(){
        this.obstacle = loadImage(`./images/${this.obstacle4}`); 
        console.log(this.obstacle);
    }

    draw () {
        this.y++;
        image(this.obstacle, this.x, this.y);


    }

   
    
}

