

class Background {
  constructor(ctx, bgPosX, bgPosY, bgSizeW, bgSizeH, bgSpeed, backgroundImage) {

    this.ctx = ctx
    this.bgPosX = bgPosX
    this.bgPosY = bgPosY
    this.bgSizeW = bgSizeW
    this.bgSizeH = bgSizeH
    this.bgSpeed = bgSpeed
    this.backgroundImage = backgroundImage
    this.init()

  }

  
  init() {
    this.draw()
    this.move()
  }


  move(direction) {
    this.bgPosX -= 4
    if (this.bgPosX <= -this.bgSizeW) this.bgPosX = 0
    if (direction == 'right') {

      this.bgPosX += this.bgSpeed

    }
  }


  draw() {
    this.ctx.drawImage(this.backgroundImage, this.bgPosX, this.bgPosY, this.bgSizeW, this.bgSizeH)
    this.ctx.drawImage(this.backgroundImage, this.bgPosX + this.bgSizeW, this.bgPosY, this.bgSizeW, this.bgSizeH);

  }
}
