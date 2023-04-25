/* ### Sistema de gastos familiar

    Crie um objeto que possuirá duas propriedades, ambas do tipo array:
            * receitas []
            * despesas []
    Agora crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com o saldo positivo ou negativo, seguido do valor do saldo */


let contas = {
   receitas: [
        {
                salario: 5000,
                casaALuguel: 1000,
                negocioProprio: 500
                
        }
   ],
   despesas: [
        {
                mercado: 1200,
                cursos: 50,
                carro: 600,
                IPU: 150,
                farmacia: 70,
                lazer: 1000

        }
   ]
}

function calculo (receitas, despesas) {
   for ( let contas of property) {
       

   }     
}

/////////////////////////////////////////////////////////////////////////////////


let contas = {
        receitas:[
                2000,
                1400
        ],
        despesas:[
                590,
                350.10
        ]
}

function financas (contas) {
        let despesas = contas.despesas
        let receitas = contas.receitas
        let totaldespesas = 0
        let totalreceitas = 0

        for ( let valor of despesas ) {
                totaldespesas += valor
        }
        console.log(totaldespesas)

        for ( let valor of receitas ) {
                totalreceitas += valor
        }
        console.log(totalreceitas)
        console.log(totalreceitas - totaldespesas)

        
        if (totaldespesas - totalreceitas > 0
        ) { return 'Saldo negativo'} 
        if (totaldespesas - totalreceitas < 0 ) {
                return 'Saldo positivo'
        } else { return 'Saldo zerado'}
}
//////////////////////////////////////////////////////////////////////////////////
// Do Professor:

let family = {
        incomes: [ 2500, 3200, 250.43, 360.45],
        expenses: [ 320.24, 128.45, 176.87, 1450.00]
}
function sum(array) {
        let total = 0;
       
  for(let value of array) {
        total += value
  }  
  return total
}

function calculeteBalance(family) {
        const calculeteIncomes = sum(family.incomes)
        const calculeteExpenses = sum(family.expenses)

        const total = calculeteIncomes - calculeteExpenses
        const itsOk = total >= 0

        let balanceText = "Negativo"
   if(itsOk) {
        balanceText = "Positivo"
   }
   console.log(`Seu saldo é ${balanceText}: ${total.toFixed(2)}`)
} 

calculeteBalance()
