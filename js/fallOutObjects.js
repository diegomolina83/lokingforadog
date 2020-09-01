class FallOutObjects  {

    
        constructor(ctx, width, height, x, y, canvasSize, imageName, speed){
    
            this.ctx = ctx
            this.fallOutObjectWidth = {
                w: width,
                h: height
            } 
            
            this.fallOutObjectPosition = {
                x: x,
                y: y
            }
            this.fallOutObjectSpeed = speed      
            // this.fallOutObjectGravity = gravity  
            this.canvasSize = canvasSize
            
            this.imageInstance = undefined
            this.fallOutObjectImage = imageName
            this.init()
        }
        init(){
            this.randomSpeed()
            this.draw()
            this.fall()
        }

        randomSpeed(){
            return this.fallOutObjectSpeed=Math.floor(Math.random()*(5-1+1)+1)
        }
        draw(){
            console.log("Dibujando FallOutObject")
            this.ctx.fillRect(this.fallOutObjectPosition.x,this.fallOutObjectPosition.y,this.fallOutObjectWidth.w,this.fallOutObjectWidth.h)
        }

        fall(){
        setInterval(() => {
            console.log("Cae el objeto")

        this.fallOutObjectPosition.y +=this.randomSpeed()
        
    }, 1000);
    }
    
    }