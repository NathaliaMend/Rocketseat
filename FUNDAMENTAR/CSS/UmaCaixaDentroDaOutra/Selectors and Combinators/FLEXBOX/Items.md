# Propriedades dos itens

- flex-basis -->*Serve para mudar o tamanho do item*
- flex-grow -->*Se adapta/cresce , faz o item crescer automaticamente*
- flex-shrink -->*Faz o item encurtar ou comprimir, ficar menor dependendo do tamanho da caixa*
- flex
- order -->*ordena elementos*


## Largura e altura dos itens com flex-basis

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

    flex-basis: auto; /* em pixels tambem pode ser */
}

.box div {
    border: 1px solid;
}
.box div:nth-child(1){
    width: 250px;
    height: 400px;
}
```

## Crescimento e adaptação dos itens

# Flex-grow
- É o crescimento do item dentro do container em relação aos espaços vazios.

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
    border: 1px dashed red;

    height: 150px;
}
.box div {
    border: 1px solid;
}
.box div:nth-child(2),
.box div:nth-child(3){
    flex-grow: 1;
}
```
## Encolhimento e encaixe dos itens
# Flex-shrink
- É o encolher do item dentro do container.

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
    border: 1px dashed red;

    width: 150px;
}
.box div {
    flex-basis: 80px;
    border: 1px solid;
}
.box div:nth-child(2),
.box div:nth-child(3){
    flex-shrink: 1;
}
```

# Shorthand
## Flex
- Um atalho para os:
flex-grow || flex-shrink ||flex-basis
- Podem ter 1, 2 ou 3 valores

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
    border: 1px dashed red;

    width: 150px;
}
.box div {
    border: 1px solid;
    flex: 1 0 40px; /*flex-grow || flex-shrink ||flex-basis*/
}