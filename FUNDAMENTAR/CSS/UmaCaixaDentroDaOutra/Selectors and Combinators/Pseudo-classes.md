# Pseudo-classes

`e um tipo de seletor que ira selecionar um elemento que estiver em um estado especifico.
Exemplo: `E o primeiro elemento dentro de uma caixa, ou, o elemento esta com o ponteiro do mouse em cima dele.

Pseudo-classes comecam com dois pontos seguido do nome d pseudo-class `pseudo-class-name`

## Selecionando elementos com pseudo-class
* :first-child   //significa que o primeiro filho recebe a estilizacao.
* :nth-of-type() // aqui voce escolhe o numero da posicao do elemento que quer estilizar.
* :nth-child() // aqui voce escolhe qual filho quer estilizar com o numero que corresponde a posicao dele.
* odd e even // odd `e impar e even par . e possivel estilizar linha sim , linha nao com eles -->
ex.: 
```css
ul li:nth-child(odd) {
     color: white;
}
ul li:nth-child(even) {
    color: black; 
}
```


## Ações do usuário
* :hover // muda a estilizacao quando o mouse passa em cima.
* :focus // muda a estilizacao quando o mouse clica onde há foco.

## Atributos
* :disabled // muda a estilizacao de onde estiver dessabilitado.
* :riquired // muda a estilizacao de onde tiver obrigatoriedade.

# Referência
https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes

