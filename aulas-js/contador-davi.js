var contador = 1;
function imprimirNumero() {
  
    console.log(contador);
    contador++;

  if (contador > 10) {
    clearInterval(intervalo); 
  }
}

const intervalo = setInterval(imprimirNumero, 1000);