var a = 11
var b = 10
if(a > b){
  console.log('a é maior que b')
}else if(a < b){
  console.log('a é menor que a')
}else{
  console.log('a e b são iguais')
}

console.log('----')

if(a > b){
  console.log('executar somente se a > b')
}
console.log('sempre executar')

console.log('----')

//=== compara também os tipos de dados
if(a === b){  
  console.log('num iguais')
}else{
  console.log('num diferentes')
}

console.log('----')

var g = 10
var h = '10'
if (g !== h){
  console.log('g é diferente de h')
}

console.log('----')