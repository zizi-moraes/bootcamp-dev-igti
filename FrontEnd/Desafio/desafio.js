var valor = 200000.00;
var prazoAnos = 20;
var jurosAoAno = 0.08;
var prazoMeses;
var jurosAoMes;
var jurosAcumulado;
var saldoDevedor;
var amortizacao;
var juros;

prazoMeses = prazoAnos * 12;
console.log(prazoMeses);

jurosAoMes = (1 + jurosAoAno) ** (1 / 12) - 1;
console.log(jurosAoMes);

amortizacao = valor / prazoMeses;
console.log(amortizacao);

console.log('-----------------');
for (var i = 0; i <= prazoMeses; i++) {
  saldoDevedor = valor - i * amortizacao;
  //console.log('prestacao: ' + i  +  ' = ' +  saldoDevedor)
  //console.log(saldoDevedor);
}

//juros = saldoDevedor * jurosAoMes;
// saldoDevedor = valor
// for (var j = 0; j <= 0; j++) {
//   juros = saldoDevedor * jurosAoMes;
//   console.log(j);
// }

saldoDevedor = valor
for (var j = 0; j <= prazoMeses; j++) {
  //saldoDevedor = valor - j * amortizacao;
  juros = saldoDevedor * jurosAoMes;

  //console.log('prestacao: ' + i  +  ' = ' +  saldoDevedor)
  console.log(juros);
}