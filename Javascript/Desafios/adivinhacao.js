/* 
1) Gerar um número aleatório de 1 a 100;
2) Inicializar o num de tentativas com 10;
3) Pedir para o jogador escolher um número;
4) Decrementar o num de tentativas
5) Checar se o número escolhido é o correto 
6) Se tiver correta:
  - informar que acertou o número
  - encerrar o jogador
7) se tiver incorreta e ainda tem tentativas
  -   informar que o número é o incorreto e indicar se o número é maior ou menor que o ultimo digitado
  - permitir informar novo número
8) se tiver incorreta após acabar todas tentativas
  - informar que não venceu 
  - encerrar o jogo
 */

var readline = require('readline')
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})


var numeroAleatorio = Math.round(Math.random() * 100)
if (numeroAleatorio === 0){
  numeroAleatorio = 1
}

//Descobrindo o valor da variavel
console.log('aleratório: ' + numeroAleatorio);

var numTentativas = 10; 


// Função
pergunta();

function pergunta(){
  rl.question('Digite um número: ', function(numero){
    //Descobrindo o tipo da variavel e convertendo para Int.
    //console.log('numero: ' + typeof(numero));
    numero = parseInt(numero);
    numTentativas--;

    if (numero === numeroAleatorio){
      console.log('Parabéns! Você acertou!!!')
      rl.close();
    }else if (numTentativas == 0){
      console.log('Que pena! Você não descobriu o número em 10 tentativas.')
      rl.close();
    }else if (numero > numeroAleatorio){
      console.log('Número errado! Você ainda tem ' + numTentativas + 'tentativa(s).\n' +
                  '*** O número informado é maior que o sorteado.***')
      pergunta();

    }else if (numero < numeroAleatorio){
      console.log('Número errado! Você ainda tem ' + numTentativas + 'tentativa(s).\n' +
                  '*** O número informado é menor que o sorteado.***')
      pergunta();
    }
  })
}
