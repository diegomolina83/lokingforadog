class Dog {
    constructor(ctx, width, height, x, y, canvasSize,imageName){
        this.ctx = ctx
        this.dogWidth = {
            w: 100,
            h: 100
        } 
        this.dogPosition = {
            x: 150,
            y: 440
        }
        this.speed=3
        this.canvasSize = canvasSize
        this.dogImage = new Image()
        this.dogImage.src = './img/running_dog.png'
        this.imageInstance = undefined
        this.totalFramesOfDog = 21
        this.imageFrameNumber = 0
        this.widthOfImage = 2897 // el ancho de la imágen TOTAL        
        this.heightOfImage = 160  // el alto de la imágen TOTAL
        this.widthOfSingleImage = this.widthOfImage / this.totalFramesOfDog// El ancho de cada imágen del sprite
    }
    draw(framesCounter) {
        
        this.imageFrameNumber = framesCounter; // suma un frame para que el perrillo se mueva
        this.imageFrameNumber = this.imageFrameNumber % this.totalFramesOfDog // va desplazando la imágen para dar la idea de movimiento...
        this.ctx.drawImage(this.dogImage,
            this.imageFrameNumber * this.widthOfSingleImage, 0, this.widthOfSingleImage,
            this.heightOfImage, this.dogPosition.x, this.dogPosition.y,
            this.dogWidth.w, this.dogWidth.h)
        this.move()
    }
    move() { 
        this.dogPosition.x += this.speed
    }
    gone(){
        setInterval(() => {
            this.dogPosition.x+=10
        }, 50);
    }
}