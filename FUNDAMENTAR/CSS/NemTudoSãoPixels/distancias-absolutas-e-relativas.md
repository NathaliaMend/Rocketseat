# Distâncias absolutas <lenght>

São fixas e não alteram seu valor.

Unidade           Nome                Equivalência
cm             Centímetros            1cm = 96px/2.54
in             Inches (polegadas)     1in =2.54cm = 96px
px             Pixels                 1px = 1/96th of 1in /*um, noventa e seis avos de polegadas*/


* o mais comum e mais utilizado é o **px**
* não recomendado usar cm

 # Distâncias relativas

 São relativas a algum outro valor, pode ser o elemento pai, ou root, ou o tamanho da tela.

 * Benefício: Maior adaptação aos diferentes tipos de tela

 Unidade:         Relativo a:
 em              Tamanho da font do pai
 rem             Tamanho da font do elemento raiz (root/html)
 vw              1% da viewport width. (altura)
 vh              1% da viewport height. (largura)


 # Porcentagens %

* Em muitos casos é tratado da mesma maneira que as distâncias <length>
* Sempre será relativo a algum valor



# Posições

<position>
Representa um conjunto de coodernadas 2D:
- top, right, bottom, left e center

* Usado para alguns tipos de propriedades
* Não confundir com a propriedade `position`

background-pisition:  right 50px;
                      top;
                      top left;
                      bottom left;
                      center;

``

