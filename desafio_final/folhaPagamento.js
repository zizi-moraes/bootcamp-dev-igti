
// var readline = require('readline')
// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })


// pergunta();

// function pergunta(){
//   rl.question('Escolha a opção: \n1 - Cadastrar Funcionário\n2 - Imprimir contracheque\n', function(numero){
//     numero = parseInt(numero);

//     if (numero === 1){
//       rl.question('Digite o nome e o salário bruto do funcionário\n', function(nome, salario){
//         nome = nome; 
//         salario = parseFloat(salario);
//         //console.log(descontoINSS())
//       })
//     }else if (numero === 2){
//       rl.question('Informe o indice do funcionário que você deseja imprimir o contracheque\n', function(indice){
//         indice = parseInt(indice); 
//       })
//     }else{
//       console.log('Opção inválida!')
//     }
//   })
// }

salarioBruto = 1500.00


function descontoFaixaINSS(salarioBruto) {

  if (salarioBruto>6433.57) {
    return 751.99;
  }

  let desconto = 0;

  var faixa = function(salario, min, max, perc) {

    if (salario < min){
      return 0;
    } else if (salario>=max) {
      return (max-min) * perc/100;
    } else {
      return (salario-min) * perc/100;
    }
  }

  desconto += faixa(salarioBruto, 0,       1100,    7.5)
  desconto += faixa(salarioBruto, 1101,    2203.48, 9)
  desconto += faixa(salarioBruto, 2203.49, 3305.22, 12)
  desconto += faixa(salarioBruto, 3305.23, 6433.57, 14)

  return desconto;

}


function baseIRRF(salarioBruto){
  SalarioDescontoINSS = salarioBruto - descontoFaixaINSS(salarioBruto)
  return SalarioDescontoINSS
}


function calculateDiscountIRPF(salarioBruto) {
  var baseIRPF = baseIRRF(salarioBruto)

  let discountIRPF =
    baseIRPF < 1903.98
      ? 0
      : baseIRPF < 2826.65
      ? (baseIRPF * 0.075) - 142.8
      : baseIRPF < 3751.05
      ? (baseIRPF * 0.15) - 354.8
      : baseIRPF < 4664.68
      ? (baseIRPF * 0.225) - 636.13
      : (baseIRPF * 0.275) - 869.36;

  discountIRPF = (discountIRPF);

  return discountIRPF;

}

function salarioLiquido(salarioBruto){
  desc_IRRF = calculateDiscountIRPF(salarioBruto)
  desc_INSS = descontoFaixaINSS(salarioBruto)
  salarioLiq = salarioBruto - (desc_INSS + desc_IRRF)

  return salarioLiq
}

console.log('Salario Bruto: ' + salarioBruto)
console.log('Desc INSS: ' + descontoFaixaINSS(salarioBruto));
console.log('Desc IRRF: ' + calculateDiscountIRPF(salarioBruto))
console.log('Salario Liquido: ' + salarioLiquido(salarioBruto))

//console.log('Salario Desc INSS: ' + baseIRRF(salarioBruto))

 