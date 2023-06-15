/* Segue abaixo a descrição das funções a serem desenvolvidas:
1. Função que retorna o nome do funcionário que tem o maior salário da empresa.
2. Função que retorna o nome do funcionário que tem o menor salário da empresa.
3. Função que retorna a média salarial da empresa.
4. Função que recebe um setor como parâmetro e retorna o funcionário de maior salário do setor informado.
5. Função que recebe um setor como parâmetro e retorna o funcionário de menor salário do setor informado.
6. Função que recebe um setor como parâmetro e retorna a média salarial do setor informado.
 */

//Ler arquivo
var readline = require('readline')
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var fs = require("fs");
var nomeArquivo = 'funcionarios.json';
//console.log(nomeArquivo)


fs.readFile(nomeArquivo, 'utf-8', function(err, data){
  obj = JSON.parse(data)
  func = obj.funcionarios
/*  if (err){
    console.log(err)
  }else{
     for(i=0; i<=45; i++) {
      if (func  ) 
    }
    console.log(obj.funcionarios[1].setor)
  }
  */
 




  //handleArea('Comercial')
  console.log(obj.funcionarios)
  

}); 

function handleArea(areaName){

  let setores = getSortedFromArea(obj.funcionarios, areaName)


  if(setores.length > 0){
    console.log('MIN: ' + getMin(setores))
    console.log('MAX: ' + getMax(setores))
    console.log('AVG: ' + getAvg(setores))
  }else{
    console.log('Opção inválida')
  }

}

function getSortedFromArea(data, areaName) {
  return data
      .filter(function(item){
          return item ['setor'] === areaName
      })  
      .sort(function(a, b){
          return a['salario'] - b['salario'];
      });
}

function getMin(sorted) {
  if (sorted.length > 0){
    return sorted[0].salario;
  }
  
}

function getMax(sorted) {
  return sorted[sorted.length-1].salario;
}

function getAvg(sorted) {

  let sum = 0

  for(var i=0; i<sorted.length; i++) {
    sum = sum + sorted[i].salario
  }

  return sum/sorted.length

}








let test = [9, 3, 2, 5]

test.sort(function(a, b){
  return a - b
})

console.log(test)



