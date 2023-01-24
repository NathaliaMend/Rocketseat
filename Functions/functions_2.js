
let total = 0
const sum = function(number1, number2) {
   let total = number1 + number2
    return total
}


let number1 = 34
let number2 = 25

console.log(`o número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)
console.log(total)


let total=5

const times = function(n1, number2) {
    let total = n1 * number2
    return total
}


let number1 = 34
let number2 = 25

console.log(`o número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)
console.log(`a multiplicação é ${times(number1, number2)}`)
console.log(total)



// A MÉDIA DE DUAS PROVAS
const média = function(prova1, prova2){
    let total = (prova1 + prova2) / 2
    return total }
  let nathalia = 7.5
  let miguel = 9
  console.log(`a média das provas é ${média(nathalia, miguel)}`)


  

//  ARROW FUCTION : CALCULANDO A MEDIA DE TRÊS NUMEROS
  const media = (n1, n2, n3) => (n1 + n2 + n3) / 3
console.log(`a media dos três numeros é ${media(10, 23, 78)}`)



// FUNÇÃO É UM LIQUIDIFICADOR

function fazerSuco(fruta1, fruta2) {
    return 'suco de: ' + fruta1 + fruta2
}

const copo = fazerSuco('banana', 'maçã')

console.log(copo)