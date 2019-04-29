const vetor = [1, 2, 3, 2, 1, 3, 2, 1]

//const ehpar = num => num % 2 === 0
const ehimpar = num2 => num2 % 2 != 0

//const pares = vetor.filter(ehpar)
const impares = vetor.filter(ehimpar)

const somar = (acumulado, atual) => acumulado + atual
//const somatorio = pares.reduce(somar, 0)
const somatorioI = impares.reduce(somar, 0)

console.log(impares)
console.log(somatorioI)