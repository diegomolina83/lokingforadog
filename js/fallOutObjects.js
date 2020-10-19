class FallOutObjects {
  constructor(ctx, width, height, x, y, canvasSize, imageName, speed) {
    this.ctx = ctx;
    this.fallOutObjectSize = {
      w: width,
      h: height,
    };

    this.fallOutObjectPosition = {
      x: x,
      y: y,
    };
    this.fallOutObjectSpeed = speed;
    this.canvasSize = canvasSize;

    this.fallOutObjectImage = undefined;
    this.objectImage = imageName
    this.init();
  }


  init() {
    this.draw();
    this.fall();
  }


  draw() {

    this.fallOutObjectImage = new Image();
    this.fallOutObjectImage.src = this.objectImage
    this.ctx.drawImage(this.fallOutObjectImage, this.fallOutObjectPosition.x, this.fallOutObjectPosition.y, this.fallOutObjectSize.w, this.fallOutObjectSize.h)
  }


  fall() {
    setInterval(() => {
      this.fallOutObjectPosition.y += 0.3;
    }, 5000);
    if (this.fallOutObjectPosition.y > 600) this.fallOutObjectPosition.y = 240;
  }


  move(direction) {
    this.fallOutObjectPosition.x -= 4;
    if (this.fallOutObjectPosition.x <= -this.fallOutObjectSize.w)
      this.fallOutObjectPosition.x = 0;
    if (direction == "right") {
      this.fallOutObjectPosition.x += this.fallOutObjectSpeed;
    }
  }
}
