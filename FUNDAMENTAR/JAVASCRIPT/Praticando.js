// 1. Declare uma variável de nome weight.
let weight;

// 2. Que tipo de dado é a variável acima?
console.log(typeof weight)

/*
      3. declare uma variável e atribua valores para cada um dos dados:
    
      * name: String
      * age: Number {integer}
      * stars: Number {float}
      * isSubscribed: Boolean
*/
   let name = 'nathalia' 
   let age = 22
   let stars = 15.6
   let isSubscribed = true 

/*
   4. A variável student abaixo é de que tipo de dados?
 string, number, number.

   4.1 atribua a ela as mesmas propriedades e valores do exercício 3.

   4.2 Mostre no console a seguinte mensagem:
    
         <name> de idade <age> pesa <weight> kg.

         Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto
        
*/
     let student ={ 
     nameuser: 'nathalia',
     age: 22,
     weight: 60
     }

     console.log('A' + nameuser + 'tem' + age + 'de idade e pesa' + weight + 'kg.')
     console.log(`A ${nameuser} tem ${age} de idade e pesa ${weight} kg.`)


     let aluno = { nome: 'Nathalia',
                   idade: 22,
                   endereço: { cidade: 'São Paulo'  },
                   peso: 60
             }
       console.log(`Nome do aluno ${aluno.endereço.cidade}`)
/*
    5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o array vazio
*/
// let students = []
/*
    6. Retribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiatr e colar o objeto, mas usar o objeto criado e inserir ele no Array)
*/
let students = [
    nathalia
]

/*
    7. Coloque no console o valor da posição zero do Array acima 
*/
console.log(students[0]) 
/*
    8. Crie um novo student e coloque na posição 1 do Array students
*/
students[1] = jonh
console.log(students)
/*
    9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou.
    
    console.log(a)
    var a = 1
*/
// Apesar da variável 'var' subir e no final do programa a resposta ser '1'. De imediado, o console vai imprimir uma respostas 'underfined' porquê quando a variavel 'var' sobe, ela levará o 'a', ficando 'var a' em cima do console.log e o '= 1' embaixo.
// ASSIM: 
/*    var a
        console.log(a)
             = 1 
*/