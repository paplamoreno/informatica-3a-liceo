import {canvas, IMAGES as images} from './initialize.js'
import {ctx, drawObj, run, start, dT, mainInterval} from './initialize.js'
let balones = []

// console.log(images)
let Balon = {
    //PROPIEDADES
    x:400,
    y:400,
    r:10,
    vX: 200,// px por segundo
    vY: -200,
    color: "black",

    dibujarse:function(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 2*Math.PI, 0);
        ctx.fillStyle =  this.color, 
        ctx.stroke();
        ctx.fill();
    },
    moverse:function(){
        this.x = this.x + this.vX * dT/150;
        this.y = this.y + this.vY * dT/150;
    }

}

let puntaje = 0;
function mostrarPuntaje(){
    ctx.font = "30px Arial";
    ctx.fillStyle = "blue"
    ctx.fillText(`Puntaje: ${puntaje}`, 15, 50);
}
function clickenbolaerronea(){
    for (let balon of balones){
        if(clickenbolaerronea.nuevoBalon = "rgb(0,0,0")
        {
            return true;    
        }
    }
    return false;
}
function eliminarParticula(e){
    let indiceClickeado;
    puntaje = puntaje + 1;
    for(let i=0 ; i<balones.length ; i++){
        let d = Math.sqrt(Math.pow(balones[i].x - e.offsetX , 2)+ Math.pow(balones[i].y - e.offsetY , 2));
        if(d < balones[i].r ){
            if(balones[i].color == "red"){
                indiceClickeado=i;
                break;
            } else {
                clearInterval(mainInterval);
                // muestrar el mensaje de que perdio
                ctx.font = "50px Arial";
                ctx.fillStyle = "red"
                ctx.fillText(`Perdiste`, 80, 180);
            }
        }
    }
    if(!(indiceClickeado===undefined))
    balones.splice(indiceClickeado,1)
}
function algunaSeSalio(){
    for (let balon of balones){
        if(balon.x >= 400 + balon.r || balon.x <= -balon.r || 
            balon.y >= 400 + balon.r || balon.y <= -balon.r )
        {
            return true;    
        }
    }
    return false;
}

drawObj.draw =  function(){
    ctx.clearRect(0,0,400,400);
    if (puntaje >= 15){
        // detener el juego
        clearInterval(mainInterval);
        // muestre el mensaje de que ganó
        ctx.font = "50px Arial";
        ctx.fillStyle = "white"
        ctx.fillText(`GG`, 80, 180);
        
    }
    // Si alguna de las particulas se salió, y aún no tiene 10 puntos
    // pierde
    if (puntaje < 15 && algunaSeSalio() ){
        // detener el juego
        clearInterval(mainInterval);
        // muestrar el mensaje de que perdio
        ctx.font = "50px Arial";
        ctx.fillStyle = "red"
        ctx.fillText(`Perdiste`, 80, 180);
    }
    mostrarPuntaje()
    for (let balon of balones){
        // console.log(particula)
        balon.dibujarse();
        balon.moverse();
    }
}
run()

function crearParticula(){
    let nuevoBalon = Object.create(Balon)
    puntaje = puntaje + 1;
    //asignar x, y, vX y vY
    nuevoBalon.x = Math.random()*300+50
    nuevoBalon.y = Math.random()*300+50
    let ang = 2 * Math.PI * Math.random();
    nuevoBalon.vX = 10 * Math.cos(ang)
    nuevoBalon.vY = 10 * Math.sin(ang) 
    let x = Math.random() 
    if (x<0.5) nuevoBalon.color = "red"
        // añado el nuevo balón al array de balones
        balones.push(nuevoBalon);
    }

    
    
    // Al hacer click se va a ejecutar la función crear partícula
    //canvas.onclick = crearParticula
    window.setInterval(crearParticula, 900)
    canvas.onclick = eliminarParticula