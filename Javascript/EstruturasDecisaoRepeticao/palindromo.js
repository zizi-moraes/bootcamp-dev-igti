var palavra = 'arara'
var palavraInvertida = ''

// Etapas do For 
// 1 - iniciando o contador. Ele só será executado na primeira vez
// 2 - Comparação
// 3 - Incremento
/*
for(var i = 0; i < palavra.length; i++){
  palavraInvertida = palavraInvertida + palavra[i]
}
console.log(palavraInvertida)
*/


//0123456
//celular

for(var i = palavra.length-1; i >= 0; i--){
  palavraInvertida = palavraInvertida + palavra[i]
  //console.log(palavraInvertida)
}
console.log(palavraInvertida)


if(palavra === palavraInvertida){
  console.log('Sim! A palavra ' + palavra + ' é um palindromo')
}else{
  console.log('Não! A palavra '  + palavra + ' não é um palindromo')
}