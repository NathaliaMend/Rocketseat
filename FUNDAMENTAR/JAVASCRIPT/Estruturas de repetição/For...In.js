// For...In ( o for in cria um looping em cima de objetos, pegando as propriedades dos mesmos)

let person = {
    name: 'Nath',
    age: 22,
    weight: 62.5
}

for (let property in person) {
    console.log(property) //Imprimirá apenas as propriedades sem seus valores. Mas existem varias maneiras para acessar os valores das propriedades.(Exemplos a baixo v)
}
//Ex. 1.
for (let property in person) {
    console.log(property)
    console.log(person["name"]) // Para acessar o valor de uma das propriedades da variavel person, escreva a propriedade como uma string entre colchetes depois do nome da variavel como no exemplo.
}
//Ex. 2.
for (let property in person) {
    console.log(property)
    console.log(person.name) // Outra maneira para acessar o valor de uma propriedade na variavel, use "variavel.propriedade"
}
//Ex. 3.
for (let property in person) {
    console.log(property)
    console.log(person[property]) // Desta maneira o console imprimirá todas as propriedades e valores da variavel person.
}
