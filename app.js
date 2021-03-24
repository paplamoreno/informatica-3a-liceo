import {IMAGES as images} from './initialize.js'
import {ctx, drawObj, run, start, dT} from './initialize.js'
let lapiz = {
    x:0,
    y:0,
    vX: 50,
    vY: 20,
    draw:function(){
  ctx.fillStyle = "orange";
  ctx.fillRect(this.x, this.y, 20, 90)
  ctx.fillStyle="pink" 

        ctx.beginPath();
      ctx.moveTo(this.x +20, this.y);
        ctx.lineTo(this.x+10, this.y+-10);
        ctx.lineTo(this.x+0, this.y+0);
        ctx.stroke();
    },
    move:function(){
        this.x = this.x + this.vX * dT/300;
        this.y = this.y + this.vY * dT/300;
    }

}
let lapiz2 = object.create(lapiz)
lapiz2.x = 0;
lapiz2.y = 275;
lapiz2.vX = 20;
lapiz2.vY = -20;

let lapiz3 = Object.create(lapiz)
lapiz3.x = 179;
lapiz3.y = 160;
lapiz3.vX = 0;
lapiz3.vY = 0;


drawObj.draw = function(){
    ctx.clearRect(0, 0, 200, 200);
    lapiz.draw();
    lapiz2.draw();
    lapiz3.draw();
    lapiz.move();
    lapiz2.move();
    lapiz3.move();
}
run()