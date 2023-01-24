 # Box Model

 - Fundamental para fazer layouts para a web
 - Maior fcilidade para aplicar o CSS

 ## O que é?

 Uma caixa retangular.
 Essa caixa possui propriedades de uma caixa (2D)

 - Tamanho (largura x altura)              width | height
 - Conteúdo                                content
 - Bordas                                  border
 - Preenchimento interno                   padding
 - Espaços fora da caixa                   margin

 **Cada elemento na sua página, será considerado uma caixa.**

 
 ## Box-sizing

 Como será calculado o tamanho total da caixa?

 - content-box | border-box

 ```css
 div {
    box-sizing: border-box;
 }
 ```

 ## display: block vs display: inline

 - Como as caixas se comportam em relação às outras caixas
 - Comportamento externo das caixas

 **block**                                      **inline**
 Ocupa toda a linha, colocando                  Elemento ao lado do outro.
 o próximo elemento abaixo desse.              

 Width e height são respeitados.                Width e height não funcionam.

 Padding, margin, border irão                   Somente valores horizontais de 
 funcionar normalmente.                         margin, padding e border.


exemplos
block: `<p> <div> <section>` , todos os headings `<h1><h2>...`
inline: `<a> <strong> <span> <em>`