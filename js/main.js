function botones(e) {
  let target = e.target;
  let cuenta = document.getElementById("cuenta");
  if(24 > cuenta.innerHTML.length)
    cuenta.innerHTML+=target.innerHTML;
}

function igual() {
  let cuenta = document.getElementById("cuenta");
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = eval(cuenta.innerHTML);
  
}

function AC() {
  let cuenta = document.getElementById("cuenta");
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "0.";
  cuenta.innerHTML="";
}
