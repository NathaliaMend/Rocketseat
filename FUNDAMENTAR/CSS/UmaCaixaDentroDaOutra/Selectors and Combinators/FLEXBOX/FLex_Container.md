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
    height: 80vh;
}

