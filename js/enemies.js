
class Enemies {

    constructor(ctx, width, height, x, y, canvasSize,speed,imageName){

        this.ctx = ctx

        this.enemiesWidth = {
            w: width,
            h: height
        } 
        this.imageOfEnemy=imageName
        this.enemiesPosition = {
            x: x,
            y: y
        }
        this.enemiesSpeed = speed
        this.canvasSize=canvasSize

        this.imageInstance = undefined
        this.enemiesImage = undefined
        this.init()


    }

    init(){
    this.draw()
    }

    draw(){
        this.enemiesImage = new Image();
        this.enemiesImage.src = this.imageOfEnemy
        this.enemiesSpeed=Math.floor(Math.random()*(8-5+5)+5)
                
        this.ctx.drawImage(this.enemiesImage,this.enemiesPosition.x,this.enemiesPosition.y,49,63)
    }
    move(){

        this.enemiesPosition.x-=this.enemiesSpeed
    }
}