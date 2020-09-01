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
    // this.fallOutObjectGravity = gravity
    this.canvasSize = canvasSize;

    this.fallOutObjectImage = undefined;
    this.objectImage=imageName
    this.init();
  }
  init() {
    // this.randomSpeed()
    this.draw();
    this.fall();
  }

  // randomSpeed(){
  //     return this.fallOutObjectSpeed=Math.floor(Math.random()*(10-1+1)+1)
  // }
  draw() {
    
    this.fallOutObjectImage = new Image();
        this.fallOutObjectImage.src = this.objectImage
                
        this.ctx.drawImage(this.fallOutObjectImage,this.fallOutObjectPosition.x,this.fallOutObjectPosition.y,this.fallOutObjectSize.w,this.fallOutObjectSize.h)
  }

  fall() {
    setInterval(() => {
      console.log("Cae el objeto");

      this.fallOutObjectPosition.y += 0.3; //this.randomSpeed()
    }, 10000);
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
