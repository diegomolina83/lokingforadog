window.onload = () => {
    document.getElementById('start-button').onclick = () => {
      startGame();
    }
    function startGame() {

        popinoGame.init('canvas')
        }
};


const popinoGame={

    name:'Looking for a dog',
    authors:'Cynthia Gorosito / Diego Molina',
    version:'1.0.0',
    license:'',
    description:'The best game of the world',
    ctx:undefined,
    player:undefined,
    background:undefined,
    enemy:undefined,
    enemies:[],
    playerSpeedX:undefined,
    playerSpeedY:undefined,
    balcony0:undefined,
    balcony1:undefined,
    balcony2:undefined,

    balconies:[
        
    ],
    fps:60,
    canvasSize:{
        w:1024,
        h:600
        //Cómo pasar los datos de la etiqueta canvas
         
    },
    init(id){
        this.setEventListeners()
        this.canvasId=id,
        this.ctx=document.getElementById(this.canvasId).getContext('2d')
        this.pushBalconies()
        this.drawBalconies()
        this.drawPlayer()
        this.drawBackground()
        this.drawDog()
        this.drawEnemies()
        setInterval(() => {
            this.drawGame()

        }, 1000/this.fps);
        
    },
    drawGame(){
        this.clearScreen()
        this.background.draw()
        this.player.draw()
        this.moveBackground()
        this.player.move()
        this.drawBalconies()
        this.dog.draw()
        this.enemy.draw()
        this.enemy2.draw()
        this.balconies.forEach(element => {
            element.draw()
        });
        // this.balconies.forEach(element => {
        //     element.fall()
        // });
        
     
                 
    },
    pushBalconies(){
        this.balcony0=new Balcony(this.ctx,30,30,57+1024,230,this.canvasSize,-0.3,'./img/window1.png')
        this.balcony1=new Balcony(this.ctx,31,31,290+1024,230,this.canvasSize,-0.3,'./img/window2.png')
        this.balcony2=new Balcony(this.ctx,32,32,626+1024,230,this.canvasSize,-0.3,'./img/window3.png')
        this.balcony3=new Balcony(this.ctx,33,33,875+1024,215,this.canvasSize,-0.3,'./img/window4.png')

        this.balconies.push(this.balcony0)
        this.balconies.push(this.balcony1)
        this.balconies.push(this.balcony2)
        this.balconies.push(this.balcony3)
        console.log("balcones",this.balconies)
    },
    drawDog(){
        this.dog=new Dog(this.ctx, 25, 25, 150, 475, this.canvasSize,'dog.png')
    },

    drawPlayer(){
        playerSpeedX= 1
        this.player= new Players(this.ctx,100,100,75,400,this.canvasSize,3,1,100,'player.png')
        
    },
    drawBackground(){
        const img = new Image();
        const backgroundSpeed = playerSpeedX*(-1)
        img.src = 'http://www.cylabeth.com/ironhack/img/background_game.jpg'
        this.background= new Background(this.ctx,0,0,this.canvasSize.w,this.canvasSize.h,backgroundSpeed,img)
    },
    drawBalconies(){

if(this.balconies[0].balconyPosition.x<0) {
    this.balconies[0].balconyPosition.x +=1024
    this.balconies[0].draw()
        this.balconies.push (this.balconies.shift())}

        

    },
    drawFallOutObjects(){

    },
    drawEnemies(){
        this.enemy= new Enemies(this.ctx,100,100,75+1024,450,this.canvasSize,1)
        this.enemy2= new Enemies(this.ctx,100,100,75+1024,480,this.canvasSize,1)

        console.log(this.enemy)
    },
    
    
    clearScreen(){
        this.ctx.clearRect(0,0,this.canvasSize.w,this.canvasSize.h)
    },
    moveBackground(direction){
        if(this.player.playersPosition.x<512-100) this.player.move(direction)
        else {(
            this.player.playersPosition.x=512-100) 
            if(direction!='right'){
            this.player.move(direction)}
            this.background.move(direction)
            this.balcony0.move(direction)
            this.balcony1.move(direction)
            this.balcony2.move(direction)
            this.balcony3.move(direction)
            this.enemy.move(direction)
            this.enemy2.move(direction)

        }
        
        
    },
    setEventListeners() {
        document.onkeydown = e => {
            e.keyCode === 37 ? this.moveBackground('left') : null
            e.keyCode === 17 ? this.moveBackground('jump'):null
            e.keyCode === 40 ? this.moveBackground('down'):null
            e.keyCode === 38 ? this.moveBackground('up'):null
            if(e.keyCode === 39) if(this.player.playersPosition.x<512-100)
             this.moveBackground('right') 
            
        }
       
        

    
}
}






























