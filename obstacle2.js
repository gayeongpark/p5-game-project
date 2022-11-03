class Obstacle2 {
    constructor(image) {
        this.image = image
        this.x = (Math.random()*400);
        this.xspeed = 0;
        this.y = 165
        this.img;
        // this.obstacle

    }
    


    draw () {
        this.y++;
        image(this.image, this.x, this.y);
    } 
}



