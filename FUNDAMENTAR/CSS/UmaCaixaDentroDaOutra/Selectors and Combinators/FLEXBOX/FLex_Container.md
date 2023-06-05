# Propriedades do flex container

* Direção dos itens --> no container
* Multi linhas
* Alinhamento --> nos eixos
   - Principal
   - Cruzado
* Espaços entre os itens --> dentro da caixa

## Direção dos itens

* Flex é uma dimensão ( Horizintal ou Vertical)
* Podemos mudar a direção com `flex-direction`
* Valores:  ROW | ROW-REVERSE | COLUMN | COLUMN-REVERSE
        -->  linha; linha-reverse; coluna; coluna-reverse

```html
<div class="container">
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
</div>
```
```css
.container {
    display: flex;
    flex-direction: row-reverse;
    height: 80vh; /* Vh é uma unidade de medida cujo 1vh equivale a 16px */
}
```

## Flex-wrap

- Podemos usar multi linhas
- Cada nova linha um flex container  *conforme muda o tamanho da tela do site o flex wrap cria novas linhas de maneira flexível*

```html
<div class="box">
    <div>A </div>
    <div>B </div>
    <div>C </div>
    <div>D </div>
</div>
```
```css
.box{
    display: flex;
    flex-wrap: wrap;

    border: 1px dashed red;
}
.box div{
    border: 1px solid;

    width: 80px;
}
```


## Flex-Flow

- É um shorthand *é uma maneira curta de você escrever mais de uma propriedade com uma única propriedade no css*
- flex-direction || Flex-wrap  *Vamos juntar essas duas propriedades em uma só* 
*Com flex-flow eu posso colocar uma ou mais propriedades dentro dele*


## justify-content
-  É o Alinhamento dos elementos dentro do container,
é a Distribuição desses elementos

* Seus Valores
- flex-start
- flex-end
- center
- space-around *significa `espaço ao redor deles`*
- space-between *significa `espaço entre eles`*
- space-evenly *significa `constante/ espaço por igual entre eles`*

```html
<div class="box">
    <div>A </div>
    <div>B </div>
    <div>C </div>
    <div>D </div>
</div>
```
```css
.box {
    display: flex;
    flex-direction: column;

    justify-content: space-evenly;

    border: 1px dashed red;
    height: 150px;
}

.box div {
    border: 1px solid;
}

