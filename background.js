class Background {
    constructor () {
        this.x = 0;
        this.y = 0
        this.width = 400;
        this.height = 600;
    }

    setup(){

    }

    preload() {
        this.img = loadImage('./images/road.png');
        // this.player = loadImage('./images/main-car.png');
        // this.obstacle =

    }

    draw () {
        clear();
        image(this.img, this.x, this.y, this.width, this.height);
        image(this.img, this.x, this.y - this.height, this.width, this.height);
        this.y++;

        if (this.y > 600) {
            this.y = 0
        }
        
    }

}








