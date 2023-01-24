# Atribuindo mais estilos às fontes

https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals

### font-variant

* Variações na apresentação fonte (deixa o texto todo com letra maiúscula porém com letras pequenas)

```css
p {
    font-variant: small-caps;
}
```
https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant


### font-stretch

* alargamento ou encolhimento da fonte
* aceita palavra-chaves como: expanded, condensed, normal
* aceita porcentagens de 50% a 200%
(nem todas as fontes aceitam o font-stretch)

```css
p {
    font-stretch: expanded;
}
```
https://developer.mozilla.org/en-US/docs/Web/CSS/font-stretch


### letter-spacing

* Espaços entre caracteres | letras
```css
p {
    letter-spacing: 4px;
}
```
https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing


### Word-spacing

* Espaços entre caracteres | palavras
```css
p {
    word-spacing: 4px;
}
```
https://developer.mozilla.org/en-US/docs/Web/CSS/word-spacing


### Line-height

* Espaços entre linhas
* Pode ser com unidades ou sem unidades de medida
* Comuns: 1.5 ou 2

```css
p {
    line-height: 1.6;
}
```
https://developer.mozilla.org/en-US/docs/Web/CSS/line-height


### text-transform

* Transformação do texto
```css
p {
    text-transform: uppercase; /*capitalize | lowercase | none */
}
```
https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform


### text-decoration

* Aparência decorativa de um texto

* Line: underline | overline | line-through  
(underline é uma `linha abaixo` das palavras. overline é uma `linha a cima` das palavras. line-through é uma `linha que fica no meio` das palavras.)
    
**podemos aplicar mais de 1 valor**

* Style: wavy | dotted | double | dashed | solid
* Color: `<color>` values

```css
p {
    text-decoration: underline; /*shorthand*/
}
```
https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration


### text-align
* alinhamento de um texto

```css
p {
    text-align: center; /* (tipos de valores ->) left | right | center | justify */
}
```

https://developer.mozilla.org/en-US/docs/Web/CSS/text-align



### text-shadow

* Sombra aplicada a um texto
* Permite múltiplos valores

```css
p {
    text-shadow: 1px 1px 1px red,
                2px 2px 1px green; /* (ordem dos valores->) offset-x | offset-y | blur-radius | color */
}
```
https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow


## shorthand

* font-style, font-variant, font-weight, font-stretch, font-size, line-height, e font-family.

```css
p {
    /* -style, -variant, -weight, -stretch, -size, line-height, e -family. */
    font: italic normal bold normal 3em/1.5 Helvetica, Arial, sans-serif;
}



