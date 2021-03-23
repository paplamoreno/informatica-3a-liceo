let lista = document.querySelector("#parr1");
console.log(parr1);
parr1.style.backgroundColor = "white";
let btn = document.querySelector("#boton5");
function random(number) {
    return Math.floor(Math.random() * (number+1));
  }
  
  btn.onclick = function() {
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    parr1.style.backgroundColor = rndCol;
  }

  let btn2 = document.querySelector("#boton6");
  function ocultarParr1() {
    parr1.style.display = "none";
  } 
  btn2.onclick = ocultarParr1;

  let btn3 = document.querySelector("#boton7");
  function mostrarParr1() {
    parr1.style.display = "";
  } 
  btn3.onclick = mostrarParr1;