# Seletores
Conecta um elemento HTML com o CSS a fim de alterar o elemento.

## Tipos :
 * Element select /(seletor de elemento)
- Envolve todos os elementos HTML.

 * ID Selector
- Refere um elemento que tenha um atributo `Id` especificado.
- Cada valor/nome de `id` deve ser unico.

 * Class Selector
- Refere os elementos que contenham o atributo `class`.
- Podemos ter mais de um `class` com o mesmo valor/nome.

 * Attribute selctor
- Refere um elemento que tenha um atributo especifico. EX.: `<title>`

 * Pseudo-classes Selector
- Palavras chaves, exclusivas do CSS

## Multiplos
voce podera selecionar multiplos elementos a aplicar alguma regra css para todos eles.

Usamos uma separacao por virgula para isso -->
```css
h1, p, a, .Algumaclass, #AlgumId {
    color: red
}
```


  