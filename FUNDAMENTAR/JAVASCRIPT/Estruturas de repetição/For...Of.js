// For...of  (é uma declaração que criará um looping também através de alguma variável previamente colocada, podendo ser uma variável do tipo string ou não)
// For of serve tanto para strings quanto para arrays.

let name = 'Nath'

for(let char of name){// pegue um caracter (char) do (of) name (nome)  
        console.log(char)   
}


//////////////////////////////////////////////////////////////////////////////////
let names = ['Miguel', 'Jose', 'Nicole']

for (let name of names){
    console.log(name)
}// imprimirá os elementos do array um por um . (formando uma lista com esses nomes)


// De tras para frente / Jeito do Miguel:
let name = "miguel"

for(let i = name.length; i>=0; i--){
    console.log(name[i]) 
}
