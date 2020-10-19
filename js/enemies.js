
class Enemies {

    constructor(ctx, width, height, x, y, canvasSize, speed, imageName) {

        this.ctx = ctx

        this.enemiesWidth = {
            w: 63,
            h: 63
        }
        this.imageOfEnemy = imageName
        this.enemiesPosition = {
            x: x,
            y: y
        }
        this.enemiesSpeed = speed
        this.canvasSize = canvasSize
        this.imageInstance = undefined
        this.enemiesImage = new Image();
        this.enemiesImage.src = this.imageOfEnemy
        this.totalFramesOfEnemies = 22
        this.imageFrameNumberEnemies = 0
        this.widthOfImageEnemies = 3035
        this.heightOfImageEnemies = 160
        this.widthOfSingleImageEnemy = this.widthOfImageEnemies / this.totalFramesOfEnemies

        this.init()
    }


    init() {
        this.draw()
    }


    draw(framesCounter) {
        this.enemiesSpeed = 3
        this.imageFrameNumberEnemies = framesCounter; // suma un frame para que el perrillo se mueva
        this.imageFrameNumberEnemies = this.imageFrameNumberEnemies % this.totalFramesOfEnemies // va desplazando la imágen para dar la idea de movimiento...
        this.ctx.drawImage(this.enemiesImage,
            this.imageFrameNumberEnemies * this.widthOfSingleImageEnemy, 0, this.widthOfSingleImageEnemy,
            this.heightOfImageEnemies, this.enemiesPosition.x, this.enemiesPosition.y,
            this.enemiesWidth.w, this.enemiesWidth.h)
        this.move()

    }


    move() {
        this.enemiesPosition.x -= this.enemiesSpeed
    }
}

