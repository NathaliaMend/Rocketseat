# Cores

Usamos CSS para alterar cores do nosso documento.

## Tipos

* background-color (para caixa)
* color (para textos)
* border-color (para-caixas)
* outros...

## Valores

Podemos definir os valores por

* palavra-cheva (blue, transparent)
* bexadecimal (#990011)
* funções: rgb, rgba, hsl, hsla

```css

element {
    /* Keyword values*/
    color: currentcolor; (cor atual)

    /* <named-color> values*/
    color: red;
    color: orenge;
    color: tan;
    color: rebeccapurple;

    /* <hex-color> values 0-F*/
    color: #090;  /* RED GREEN BLUE*/
    color: #009900;
    color: #090a;
    color: #009000aa;

    /* <rgb()> values*/
    color: rgb(34, 12, 64, 0.6); /* 0-255*/
    color: rgba(34, 12, 64, 0.6);
    color: rgb(34 12 64 / 0.6);
    color: rgba(34 12 64 / 0.3);
    color: rgb(43.0 12 64 / 60%);
    color: rgba(34.6 12 64 / 30%);


   /*<hsl()> values*/
   color: hsl(30, 100%, 50%, 0.6); /*Hue - Sturation - lumiance - transparent*/
   color: hsla(30, 100%, 50% / 0.6);
   color: hsl(30 100% 50% / 0.6);
   color: hsla(30 100% 50% / 0.6);
   color: hsl(30.0 100% 50% / 60%);
   color: hsla(30.2 100% 50% / 60%);

   /*Global values*/
   color: inherit;
   color: initial;
   color: unset;
}
```


## Background

- Define um fundo para o nosso elemento
- Sua área de atuação é a caixa toda
- Por padrão, é transparente

### Exemplos

- Usar cores sólidas
- Usar imagens
- Controlar
     - a posição das imagens,
     - se elas se repetem ou não
     - o tamanho delas na caixa
- Usar cor e imagem juntas
- Usar cor gradientes

```css
{
    background-color: #000;
    background-image: url(images/bg.gif);
    background-repeat: no-repeat;
    background-position: left top;
    background-size: contain; | cover; | (values);
    background-origin: border-box; | content-box;
    background-attachment: scroll; | fixed;
    background: liner-gradient (45deg red, yellow, green); | radial-gradient();

    }
    É possível colocar multiplos backgrouns dentro de um só apenas separando-os por vírgulas.
