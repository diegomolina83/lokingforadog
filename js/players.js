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
        this.init() 

    }
    init(){
        this.draw()

        
    }

    draw(){
     
        this.ctx.fillRect(this.playersPosition.x,this.playersPosition.y,50,50)
  
  
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
                this.playersSpeed.y -=35
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
       

        this.playersSpeed.y += 1.10;// gravity
        this.playersPosition.x += this.playersSpeed.x;
        this.playersPosition.y += this.playersSpeed.y;
        this.playersSpeed.x *= 0.9;// friction
        this.playersSpeed.y *= 0.9;// friction

        //para mantenerlo por encima de la linea de suelo
        if (this.playersPosition.y > 450) {

            this.playerIsJumping= false;
            if (this.dimension=='down') this.playersPosition.y=480
            else if(this.dimension=='up' && this.playersPosition.y==480) this.playersPosition.y=450
            else  this.playersPosition.y = 450;
            this.playersSpeed.y = 0;
        
          }
         
         
         
          
     
    }

    


}



