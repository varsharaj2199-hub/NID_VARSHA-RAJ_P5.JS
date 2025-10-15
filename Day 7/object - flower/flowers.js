class Flower{
    constructor(x,y,xSpeed, ySpeed,size) {
        this.x = x;
        this.y = y;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        this.size = 50;
        this.hovered = false;
        }
        drawFlower() {
            if(this.hovered==true){
                fill("red");
            } else {
                fill("white");
            }
            // ellipse(this.x, this.y,20,50);
            // ellipse(this.x, this.y,50,20);
            ellipse(this.x, this.y,this.size);
        }

        moveFlower() {
            this.x += this.xSpeed;
            this.y += this.ySpeed;
            if(this.y>height || this.y<0){
                this.ySpeed = -this.ySpeed;
            }
            
            if(this.x>width || this.x<0){
                this.xSpeed = -this.xSpeed;
            }
        }
        changeColour(mX,mY) {
            let distance = dist(mX,mY,this.x, this.y);
            if(distance<this.size/2 ){
            this.hovered =true;
            }
        }

         grow() {
        if ( this.size = 200) {
        this.size = this.size + 1};
        }
}


            
    
