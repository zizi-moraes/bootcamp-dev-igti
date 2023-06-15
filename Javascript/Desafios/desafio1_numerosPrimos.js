/* 
function primeNumber(num) {
  for (var divisor = 2; divisor < num; divisor++) 
    if (num % divisor == 0) return false;
    return true;
}

var determinadoNumero = 1000;

for (var i = 2; i < determinadoNumero; i++) if (primeNumber(i)) console.log(i); */


//Resolucão IGTI:
var numero = 2;
var numeroPrimo = true;

for (var i = 2; i < numero; i++){
  if (numero % i === 0){
    numeroPrimo = false;
    break;
  }
}

if (numeroPrimo){
  console.log('O número ' + numero + ' é primo')
}else{
  console.log('O número ' + numero + ' NÃO é primo')
}