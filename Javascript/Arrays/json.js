/* JSON - Javascript Object Notation 
Segue a sintaxe do objeto Javascript */

var pessoa = {
  nome: 'Zizi',
  idade: 38,
  telefone: '(11) 4141-4141',
  temCarro: true,
  animaisEstimacao: [
    'Mary', 
    'Golly'
  ],
  pai: {
    nome: 'João',
    idade: 70
  }

}

//console.log(pessoa)
//console.log(pessoa.nome)
//console.log(pessoa.pai.nome)

//add infos:
//pessoa.animaisEstimacao.push('Gordinha');
//pessoa.nome += ' Moraes'
//console.log(pessoa)

pessoa.mae = 'Maria';

pessoa.irma = {
  nome: 'Débora',
  idade: 26
}


/*
salvarDadosPessoa(pessoa)

function salvarDadosPessoa(pessoa){
  console.log(pessoa.nome);
  console.log(pessoa.mae);
  console.log(pessoa.irma);
} */


// Converter os dados para string
console.log(JSON.stringify(pessoa));
//JSON.parse()