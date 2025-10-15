class Paddle{
    constructor(x,y,width,height,speed) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width  = width;
        this.speed = speed;

    }
    show() {
        rect(this.x,this.y,this.width,this.height); 

    }
        
    moveUp() {
        if( this.y>0) {
            this.y -= this.speed;

        }
    }
          moveDown() {
          if(this.y<height-this.height) {
             this.y += this.speed;
          }

    }

}

