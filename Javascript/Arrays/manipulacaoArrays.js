var carros = ['Gol','Palio','Uno','Sandero']

/* //pop - remove o último elemento do array
var carro = carros.pop();
console.log(carro)
console.log(carros) */

/* //com ".lenght-1" pegamos o ultimo elemento sem removê-lo da lista
console.log(carros[carros.length-1])
console.log(carros)  */

/* //push - adiciona elemento no fim da lista
var x = carros.push('Ford Ka')
console.log(carros)
console.log(x) //pega o número do tam do array */

/* //shift - remove o primeiro elemento da lista, retorna ele e atualiza os indices
var a = carros.shift()
console.log(a)
console.log(carros) */

/* //unshift - insere dado no primeiro elemento da lista
var a = carros.unshift('Onix')
console.log(a) //retorna o tam do array
console.log(carros) */

/* //atualizar elemento no indice informado
carros[2] = 'Novo Carro'
console.log(carros) */

/* //delete - exclui o elemento do indice indicado - fica undefined
delete carros[2]
console.log(carros) */

/* //splice -no paramentro indico:
1 - a posicão que quero add elementos, 
2 - qtde de elementos a serem excluidos após a inclusão, 
3 - informo os elementos a serem adicionados 
carros.splice(2, 1, 'HRV', 'Creta') //adicionou 2 elementos a partir do indice 2. E removeu um elemento após a inclusão dos 2 elementos.
console.log(carros)

carros.splice(2, 1) //a partir do indice 2 quero remover 1 elemento.
console.log(carros) */

// concat - concatena um array a outro. unifica os arrays
var carrrosAntigos = ['Brasilia', 'Monza', 'Fusca']
var carrrosAntigos2 = ['Corcel', 'Opala', 'Chevette']
var todosCarros = carros.concat(carrrosAntigos, carrrosAntigos2)
console.log(todosCarros) 
console.log('------') 

// slice - pega um pedaço de um array e cria um novo
// deve indicar da onde começa e/ou finaliza o corte de indice.
var novoArray = todosCarros.slice(1)
console.log(todosCarros)
console.log(novoArray)

var novoArray2 = todosCarros.slice(2, 5)
console.log(novoArray2)