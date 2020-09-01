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
        this.balconies.forEach(element => {
            element.draw()
        });
        // this.balcony0.draw()
        // this.balcony1.draw()
        // this.balcony2.draw()
                 
    },
    pushBalconies(){
        this.balcony0=new Balcony(this.ctx,30,30,57+1024,240,this.canvasSize,-0.3)
        this.balcony1=new Balcony(this.ctx,31,31,290+1024,240,this.canvasSize,-0.3)
        this.balcony2=new Balcony(this.ctx,32,32,626+1024,240,this.canvasSize,-0.3)
        this.balcony3=new Balcony(this.ctx,33,33,875+1024,225,this.canvasSize,-0.3)

        this.balconies.push(this.balcony0)
        this.balconies.push(this.balcony1)
        this.balconies.push(this.balcony2)
        this.balconies.push(this.balcony3)
        console.log("balcones",this.balconies)
    },

    drawPlayer(){
        playerSpeedX= 1
        this.player= new Players(this.ctx,100,100,200,400,this.canvasSize,3,1,100,'player.png')
        
    },
    drawBackground(){
        const img = new Image();
        const backgroundSpeed = playerSpeedX*(-1)
        img.src = 'https://chupacdn.s3.amazonaws.com/catalog/product/cache/4/thumbnail/1280x/17f82f742ffe127f42dca9de82fb58b1/1/0/10-vector-game-backgrounds-16253_imgs_16253_1.jpg'
        this.background= new Background(this.ctx,0,0,this.canvasSize.w,this.canvasSize.h,backgroundSpeed,img)
    },
    drawBalconies(){
        // this.balcony=new Balcony(this.ctx,30,30,67,240,this.canvasSize,-0.3)
        // this.balcony2=new Balcony(this.ctx,30,30,67+1024,240,this.canvasSize,-0.3)
// console.log("entra")
//         for(let i=0;this.balconies.length>3;i++){
//             //console.log(`this.balcony${i}`)
//             this.balconies.shift()

//             if(this.balconies[i].balconyPosition.x<10) this.balconies.shift()
//             else this.balconies.push(eval(`this.balcony${i}`))

//         }

if(this.balconies[0].balconyPosition.x<10) {
    this.balconies[0].balconyPosition.x +=1024
    this.balconies[0].draw()
        this.balconies.push (this.balconies.shift())}

        

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






























