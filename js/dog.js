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
        this.dogImage = imageName
        this.imageInstance=undefined
        this.init() 

    }

    init(){
this.draw()
this.gone()
    }

    draw(){
        this.dogImage = new Image();
        this.dogImage.src = 'img/perri.png'
                
        this.ctx.drawImage(this.dogImage,this.dogPosition.x,this.dogPosition.y,49,63)
    }

    gone(){
        setInterval(() => {
            this.dogPosition.x+=10
        }, 50);
            
        
    }

}