window.onload = () => {

setTimeout(function(){
    let canvasVisible = document.getElementById(“canvas”).style.display = “block”
    let crawlHidden = document.getElementById(“inicio”).style.display = “none”
    let resetVisible = document.getElementById(“reset”).style.display = “block”},35000);


};



window.onload = () => {
    document.querySelector("#start-button").addEventListener("click", () => {
        audioElement.volume = 0.1;
        audioElement.play();
        
        game.init();
    })
};