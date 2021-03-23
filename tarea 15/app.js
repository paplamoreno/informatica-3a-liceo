import {canvas, IMAGES as images} from './initialize.js'
import {ctx, drawObj, run, start, dT} from './initialize.js'

let bolas = []

let bola = {
    x:200,
    y:200,
    r:15,
    vX: 50,
    vY: -50,

    dibujarse:function(){
   
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 2*Math.PI, 0);
        ctx.fillStyle = "rgba(0,0,0,0.5)"
        ctx.stroke();
        ctx.fill();
    },
   
    moverse:function(){
        this.x = this.x + this.vX * dT/1000;
        this.y = this.y + this.vY * dT/1000;
    }

}

drawObj.draw =  function(){
    
    ctx.clearRect(0, 0, 400, 400);

    for (let bola of bolas){
    
        bola.dibujarse()
        bola.moverse()
    }
 
}
run()

function crearbola(click){
    let nuevaBola = Object.create(bola)
    nuevaBola.x = click.offsetX
    nuevaBola.y = click.offsetY
    let ang = 2 * Math.PI * Math.random()
    nuevaBola.vX = 400 * Math.cos(ang) * Math.random()
    nuevaBola.vY = 400 * Math.sin(ang) * Math.random()
    bolas.push(nuevaBola)
    console.log(bolas)
}
canvas.onclick = crearbola