// manipulando elementos 
// textContent 
//const element = document.querySelector('h1')

//element.textContent += "Olá devs!" 
// serve para pegar um texto afim de manipula-lo
//console.log()

//element.innerText = "Ola devs!"
// serve para trocar o texto interno
//console.log()

//element.innerHTML = "<h1>Meu blog!!!</h1>"
// serve para mudar com intencao de usar tags de html

// Manipulando elementos
// Atributos / .setAttribute

const header = document.querySelector('header') 
// peguei a minha tag desejavel
header.setAttribute('id', 'header')
// incluí nela um id chamado header

const headerID = document.querySelector('#header')
// peguei o meu id que incluí
console.log(headerID.getAttribute('id'))
// pedi para o computador imprimir/me mostrar

//const teste = document.querySelectorAll('meta') [1] 
//console.log(teste.getAttribute('name'))
// Fiz um teste , tive a ideia de pegar a tag meta do meu HTML e imprimir o valor do meu atributo name , descobri que quando há tags iguais , tenho que pegar todas "All" e indicar a posição/o lugar da fila que a tag está , utilizando os colchetes[].

header.removeAttribute('id')
console.log(headerID.getAttribute('id'))