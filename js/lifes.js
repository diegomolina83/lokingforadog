class Lifes{
    constructor(ctx,x,y,w,h,image){
        this.ctx=ctx
        this.lifesPosition={
            x:x,
            y:y
        }
        this.lifesSize={
            w:w,
            h:h
        }
        this.lifesImages=undefined
        this.imageOfLifes=image
        this.init()
    }


    init(){
this.draw()
    }

    
    draw(){
        this.lifesImages = new Image();
        this.lifesImages.src = this.imageOfLifes
        this.ctx.drawImage(this.lifesImages,this.lifesPosition.x,this.lifesPosition.y,this.lifesSize.w,this.lifesSize.h)
    }
}