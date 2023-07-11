// Alterando estilos 
//const element = document.querySelector('body') // peguei o elemento body

//element.style.backgroundColor = '#f9f3D2' // aqui estou atribuindo um valor/um estilo no body o qual eu coloquei o nome de element

//console.log(element.style.backgroundColor) // aqui estou pegando (para mostrar) o valor que esta atribuido no que eu criei, logo meu console imprimirá a cor que eu coloquei . 
 
const element = document.querySelector('body')
element.classList.add('active', 'green')
console.log(element.classList) // imprimi um tipo de dado (parece um array) chamado: DOMTokenList o qual traz uma lista de classes. Dentro dessa lista exite o Prototype que contém vários métodos sendo os mais usados: add() -> Adiciona uma class , remove() -> Remove uma class e toggle() -> Liga e desliga [o Do contra].

element.classList.remove('active')
console.log(element.classList)

element.classList.toggle('active') // Se a class estiver aparente no front ele tira, se nao, ele coloca 