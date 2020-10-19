class Balcony {

    constructor(ctx, width, height, x, y, canvasSize, speed, image) {

        this.ctx = ctx
        this.imageInBalcony = image
        this.balconySize = {
            w: width,
            h: height
        }

        this.balconyPosition = {
            x: x,
            y: y
        }
        this.balconySpeed = speed
        this.canvasSize = canvasSize
    }


    init() {
        this.draw()
    }


    draw() {
        this.imageBalcony = new Image();
        this.imageBalcony.src = this.imageInBalcony
        this.ctx.drawImage(this.imageBalcony, this.balconyPosition.x, this.balconyPosition.y, 35, 45)
    }

    
    move(direction) {
        this.balconyPosition.x -= 4
        if (this.balconyPosition.x <= -this.balconySize.w) this.balconyPosition.x = 0
        if (direction == 'right') {
            this.balconyPosition.x += this.balconySpeed
        }
    }



}

