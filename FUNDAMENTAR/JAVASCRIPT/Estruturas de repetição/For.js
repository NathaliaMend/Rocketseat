// Estrutura de repetição (looping / Do ingles que significa - Dando voltas ) (loop - Laço)

// For ( Do ingles, significa - Para)
// Break (Faz parar a execucao do loop)
// Continue (Faz pular a execucao no momento e depois dá seguimento no loop)

for(let i = 0; i < 10; i++) {
    console.log (i)
}  // tres coisas importantes -> (1.variavel) no valor de zero); (2.Condicao de continuacao do lup) enquanto for verdade , ele continuara se repetindo) ; (3.Expressao FINAL que vai acontecer assim que terminar o loop) ; Console.log para chamar a variavel {}.

for( let i = 100; i > 0; i--) {
    if (i === 50) {
        break;
    }

    console.log(i)
}  // Se a variavel chamada "i" for exatamente igual a 50, quero que o loop pare.

/////////////////////////////////////////////////////////////////////////////////////////


for( let i = 10; i > 0; i--) {
    if (i === 5) {
        continue;
    }
    
    console.log(i)
} // Se a variavel chamada i for exatamente igual a 5, quero que pare, pule o 5 e continue o loop.