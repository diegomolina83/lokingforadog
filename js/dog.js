class Dog {

    constructor(ctx, width, height, x, y, canvasSize,imageName){

        this.ctx = ctx
      
        this.dogWidth = {
            w: width,
            h: height
        } 
    
        this.dogPosition = {
            x: x,
            y: y
        }
        this.canvasSize=canvasSize
        this.playersImage = imageName
        this.imageInstance=undefined
        this.init() 

    }

    init(){
this.draw()
this.gone()
    }

    draw(){
        this.ctx.fillRect(this.dogPosition.x,this.dogPosition.y,this.dogWidth.w,this.dogWidth.h)
    }

    gone(){
        setInterval(() => {
            this.dogPosition.x+=10
        }, 50);
            
        
    }

}