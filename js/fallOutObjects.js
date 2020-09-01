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
            this.fallOutObjectGravity = gravity  
            this.canvasSize = canvasSize
            
            this.imageInstance = undefined
            this.fallOutObjectImage = imageName
    
        }

        randomSpeed(){
            return this.fallOutObjectSpeed=Math.floor(Math.random()*(5-1+1)+1)
        }

        fall(){
        setInterval(() => {

        this.fallOutObjectPosition.y +=this.randomSpeed()
        
    }, 1000);
    }
    
    }