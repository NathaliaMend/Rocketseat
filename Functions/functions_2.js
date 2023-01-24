
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






// function scope

let subject = 'create video'

function createThink(subject){
   subject = 'study'
    return subject
}
console.log(subject)
console.log(createThink(subject)) //?????????????????????







// function hoisting (const/var)  ELEVAÇÃO

sayMyName();

function sayMyName(){
    console.log('nathalia')

}






// ARROW FUNCTION / jeito mais curto de escrever uma função

//const sayMyName = () => {}

const sayMyName = (name) => {
    console.log(name)
}

sayMyName('nath')





// callback function (callback significa "chamar de volta") / uma função que esta passando como parametro para outra função

function sayMyName(name){
    console.log('antes de executar a função callback')

    name()

    console.log('depois de executar a callback')
}

sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)








// RECEITA DE SUCO



function Suco(liquido, flocos, colocarfruta, recipiente){
    colocarfruta()
    console.log('Acrescentar 10g ' + flocos + '.')
    console.log(`Acrescentar 300ml ${liquido}`)
    recipiente()  
 }

const Morango= () => { console.log('suco de morango:') 
                      console.log('lavar morango')
                      console.log('tirar as folhinhas do morango')}

const Banana = () => { console.log('suco de banana:')
                       console.log('descasque a banana')
                      console.log('pique a banana')}

const copo = () => console.log('copo de vidro 500ml')
const vasilha = () => console.log('vasilha de plástico de 500ml')

Suco('leite', 'flocos de arroz', Morango, copo)
console.log('--------------------')
Suco('agua', 'flocos de aveia', Banana, vasilha)