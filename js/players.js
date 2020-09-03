class Players {

    constructor(ctx, width, height, x, y, canvasSize, lifes, xSpeed,ySpeed,imageName){

        this.ctx = ctx
        this.playersLifes=lifes
        this.playersSpeed={
            x:xSpeed,
            y:ySpeed        
        }
        this.playersWidth = {
            w: width,
            h: height
        } 
    
        this.playersPosition = {
            x: x,
            y: y
        }
        this.canvasSize=canvasSize
        this.playersImage = imageName
        this.imageInstance=undefined
        this.playerIsJumping=false
        this.dimension=false
        this.totalFramesOfPlayer = 25
        this.imageFrameNumber = 0
        this.widthOfImage = 2162 // el ancho de la imágen TOTAL        
        this.heightOfImage = 100  // el alto de la imágen TOTAL
        this.widthOfSingleImage = this.widthOfImage / this.totalFramesOfPlayer// El ancho de cada imágen del sprite
        


        this.init() 

    }
    init(){
        this.draw()

        
    }

    draw(framesCounter){
        
        this.playersImage = new Image();
        this.playersImage.src = 'img/character_run_right.png'
                
        this.imageFrameNumber = framesCounter; // suma un frame para que el perrillo se mueva
        this.imageFrameNumber = this.imageFrameNumber % this.totalFramesOfPlayer // va desplazando la imágen para dar la idea de movimiento...
        this.ctx.drawImage(this.playersImage,
            this.imageFrameNumber * this.widthOfSingleImage, 0, this.widthOfSingleImage,
            this.heightOfImage, this.playersPosition.x, this.playersPosition.y,
            this.playersWidth.w, this.playersWidth.h)
        
        this.move()

  
  
}

moveHappy(){
    
    this.playersPosition.x+=0.5
}

    
    move(direction){
        //movemos a player hasta la mitad del canvas


        switch (direction) {
            case 'left':
                if(this.playersPosition.x>75){
                this.playersSpeed.x-=2}
                break;
            case 'jump':
                if(this.playerIsJumping==false)
                this.playersSpeed.y -=20
                this.playerIsJumping= true
                break;
            case 'right':
                if(this.playersPosition.x<512-100)
                this.playersSpeed.x +=2  
                else this.playersSpeed.x =0
                break;
            case 'down':
                this.dimension='down'
                this.playersPosition.y+=50
                break;
            case 'up':
                if(this.playerIsJumping==false){
                this.dimension='up'
                if(this.playersPosition.y<350)
                this.playersPosition.y-=50}
                break;
        }
       

        this.playersSpeed.y += 0.2;// gravity
        this.playersPosition.x += this.playersSpeed.x;
        this.playersPosition.y += this.playersSpeed.y;
        this.playersSpeed.x *= 0.9;// friction
        this.playersSpeed.y *= 0.9;// friction

        //para mantenerlo por encima de la linea de suelo
        if ((this.playersPosition.y>470 && this.dimension=='down') || this.playersPosition.y > 440 && this.dimension!='down') {

            this.playerIsJumping= false;
            if (this.dimension=='down') this.playersPosition.y=470
            else if(this.dimension=='up' && this.playersPosition.y==470) this.playersPosition.y=440
            else  this.playersPosition.y = 440;
            this.playersSpeed.y = 0;
        
          }
         
         
         
          
     
    }

    


}



