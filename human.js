class Human {

    constructor (x, y, url) {
        this.name = "gayeong park";
        this.pumpkinImage = "";
        this.pumpkinImageUrl = url;
        this.posX = x;
        this.posY = y;
        this.isEnded = false;
    }
    preload () {
        this.pumpkinImage = loadImage (this.pumpkinImage);
        console.log("humanjs",this.pumpkinImage);
    }
    setup () {

    }

  

    draw () {
        if (this.pumpkinImage !== "") {
            image(this.pumpkinImage, this.posX, this.posY);
            this.backAndForth();
        }

    }

    backAndForth () {
        // if (!this.isEnded) {
        //     this.posX++;
        // } else if (this.isEnded) {
        //     this.posX--;
        // }
        // if (this.posX == 350) {
        //     this.isEnded = true;
        // } 
        // if (this.posX == 50) {
        //     this.isEnded = false;

        // }
        if (!this.isEnded) {
            this.posY++;
        } 
        // else if (this.isEnded) {
        //     this.posY--;
        // }
        if (this.posY >= 600) {
            this.isEnded = true;
        } 
        if (this.posY == 50) {
            this.isEnded = false;
        }
        
    }
}