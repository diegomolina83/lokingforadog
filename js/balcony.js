class Balcony {

    constructor(ctx, width, height, x, y, canvasSize, speed){

        this.ctx = ctx

        this.balconySize = {
            w: width,
            h: height
        } 
        
        this.balconyPosition = {
            x: x,
            y: y
        }
        this.balconySpeed = speed
        this.canvasSize=canvasSize



    }
    init(){
        this.draw()
        
    }

    draw(){
        
        this.ctx.fillStyle="red"
        this.ctx.fillRect(this.balconyPosition.x,this.balconyPosition.y,25,25)

    }
    move(direction) {
        this.balconyPosition.x -=4
        if(this.balconyPosition.x<=-this.balconySize.w) this.balconyPosition.x=0
        if(direction=='right'){
                    // this.balconyPosition.x +=this.balconySpeed
        }
        }

}