# Combinators
Combinadores trabalham para buscar e combinar seletores a fim de aplicar uma estilizacao 

## Descendant combinator (`e um combinator)
  * Identificado por um espaco entre seletores.
  * Busca um elemento dentro do outro.
ex.:
```css
body article h2 {
    color:red;
}
```

## Child combinator
  * Identificado pelo sinal `>` entre dois seletores.
  * Seleciona somente o elemento que `e filho direto do pai. (o primeiro filho)
  * Elementos depois do filho direto serao desconsiderados.
ex.:
```css
body > ul > li {
    color : blue;
}
```

## Adjacent Sibling Combinator
  * Identificado pelo sinal `+` entre dois seletores.
  * Seleciona somente o elemento do lado direto que `e irmao direto na hierarquia. (o primeiro irmao)
ex.:
```css
h1 + p {
    color : blue;
}

button + button {
    margin-left: 32px;
}
```

## General Sibling Combinador
 * Identificado pelo sinal `~` entre dois seletores.
 * Seleciona todos os elementos irmaos. 
 ex.: ( pega todos os irmaos do h1)
 ```css
 h1 ~ p {
     color: blue;
 }
 ```

## Utilizando combinadores
* Como no exemplo abaixo, Pega todos os seletores `li` que possuem a class com nome de "red".
 ```css
ul > li [class="red"]
```
## Dica
* Seletores muito especificos tendem a causar dificuldades no reuso das regras de estilizacao dos elementos
* Muitas vezes, um simples uso de classes torna o trabalho muito mais eficientes.
