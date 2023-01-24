   
   # Introdução
## O que significa CSS?

* Código para criar estilos no HTML
* HTML é a estrutura, e o CSS é a beleza
* Não é uma linguagem de programação;
* Cascading Style Sheet
* É uma linguagem style sheet

##  Vamos ao exemplo
Para colorir um título:
 
 html: <h1>Título da página</h1>     
 CSS: h1 { color: blue;}


   # Comentários
* Não irá afetar o seu código
* Ajuda a lembrar blocos de códigos
* Deixa dicas para leitura
* Ajuda outros a entenderem
* Nunjca esqueça de fechar um comentário

Comentárioks começam com `/*` e terminam com `*/`.


   # Anatomia

```css
h1 {
    color: blue; /*propriedade (color) e valor(blue)*/
    font-size: 60px; /*tamanho da fonte*/
    background: gray; /*cor do fundo*/
}
```

* selector
 /*pede para o robo pegar toda a informação a cima*/

* Declaration
 /*o robo aplica toda a declaração a cima*/
 
* Properties
 /*propriedades (exemplo:color)*/

* Property Value
 /*valor da propriedade (exemplo:blue)*/


   # Selector (seletores)
Conectaa um elemento HTML com o CSS

## Tipos

* Global selector `*`
* Element/Type selector `h1, h2, p, div`
* ID Selector `#box, #container`
* Class Selector `.red, .m-4`
* Attribute selector, Pseudo-class. Pseudo-element, e outros 


/* *{margin:0} = margem/distância do parágrafo*/

/* {#container }= caixa/fundo*/

# Box model
Ideia de caixas, tudo são caixas
* Você irá perceber que (quase) tudo são caixas do CSS.
* Posicionamentos, tamanhos, espaçamentos, bordas, cores.
* Caixa pode ficar ao lado uma da outra, ou acima.
* Elementos HTMl são caixas.

/*{border } significa borda, solid red} significa que a borda tem uma cor vermelha*/
/*{padding } significa preenchimento, espaço por dentro da caixa*/

