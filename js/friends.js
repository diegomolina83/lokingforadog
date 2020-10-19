class Friends  {

    constructor(ctx, width, height, x, y, canvasSize, imageName, speed){

        this.ctx = ctx
        this.friendsWidth = {
            w: width,
            h: height
        } 
        
        this.friendsPosition = {
            x: x,
            y: y
        }
        this.friendsSpeed=speed        
        this.canvasSize=canvasSize
        
        this.imageInstance = undefined
        this.friendsImage = imageName


    }

}