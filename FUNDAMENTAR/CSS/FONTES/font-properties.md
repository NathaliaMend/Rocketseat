# Trabalhando com Fontes
Tipografia transmite mensagem
     _negrito
     _tamanho
     _estilo


## Basic Font Properties

* font-family
* font-weight
* font-style
* font-size

### Font Family

* Tipo de fonte de um elemento
* Lista de fontes e ordem de prioridade
* Inclui *fallback* font (escape pra caso o caminho da font não dê certo)

```css
p {
    font-family: "Times New Roman", times, serif;
}
```
     - serif 
     (sao fontes que contém traços e prolongamentos nas extremidades"| fontes serifadas)

     - sans
     (fontes com traços mais retos | fontes sem serifa)


### Font Weight

* Peso da fonte
```css
p {
    font-weight: bold;
}
```
values: (normal | bold | bolder | lighter | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900)


### Font-style

* O Estilo da fonte
```css
span {
    font-style: italic;
}
```
values: (normal | italic | oblique)


### Font Size

* O tamanho da fonte
```css
p {
    font-size: 18px;
}
```

### Web Fonts
- Fontes do sistema x fontes da web
- Como usar fonte para web?

   * @font-face
   * @import
   * link

### Referências
https://www.w3.org/TR/css-fonts-3/
https://css-tricks.com/snippets/css/using-font-face/