
class Enemies {

    constructor(ctx, width, height, x, y, canvasSize,speed){

        this.ctx = ctx

        this.enemiesWidth = {
            w: width,
            h: height
        } 
        
        this.enemiesPosition = {
            x: x,
            y: y
        }
        this.enemiesSpeed = speed
        this.canvasSize=canvasSize

        this.imageInstance = undefined
        // this.enemiesImage = imageName
        this.init()


    }

    init(){
    this.draw()
    }

    draw(){
        console.log("...............Dibujando enemigo")
        this.ctx.fillRect(this.enemiesPosition.x,this.enemiesPosition.y,50,50)
    }
    move(){
        
        this.enemiesPosition.x-=10
    }
}