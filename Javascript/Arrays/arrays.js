var carros = ['Gol', 'Palio', 'Uno']
console.log(carros)

var terceiroCarro = carros[2]

carros[2] = 'HB20X'
console.log(carros[2])
console.log(terceiroCarro)

console.log('tamanho do array: ' + carros.length)
console.log('último elemento do array: ' + carros[carros.length-1]) 

carros[3] = 'Sandero'
console.log(carros)
console.log('último elemento do array: ' + carros[carros.length-1])

carros[carros.length] = 'Fit'
console.log(carros)
console.log('último elemento do array: ' + carros[carros.length-1])

//carros[10] = 'Polo'
//console.log(carros)

carros.push('Polo')
console.log(carros)

carros.push(123)
console.log(carros)

