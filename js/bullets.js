class Bullets  {

    //pendiente de ver si proyectiles son un método 
    
        constructor(ctx, width, height, x, y, canvasSize, imageName, speed, gravity){
    
            this.ctx = ctx
            this.bulletWidth = {
                w: width,
                h: height
            } 
            
            this.bulletPosition = {
                x: x,
                y: y
            }
            this.bulletSpeed = speed      
            this.bulletGravity = gravity  
            this.canvasSize = canvasSize
            
            this.imageInstance = undefined
            this.bulletImage = imageName
    
        }
    
    }