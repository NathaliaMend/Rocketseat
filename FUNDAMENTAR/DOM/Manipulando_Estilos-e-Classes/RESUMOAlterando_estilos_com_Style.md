# como alterar estilos via javascript
Pega uma tag . Com o nome j atribuído, use ".style"  +  ".atributo aqui (sem aspas e tudo junto)"  "=" "'o valor desejado aqui'"
```js
const element = document.querySelector('body')
element.style.backgroundColor = '#f9f3D2'
```


## Como alterar estilos usando classlist
ClassList significa lista de classes . No caso aparecerá uma lista das classes que tem na tag escolhida 'body':
```js
const element = document.querySelector('body')
console.log(element.classList)
```
