// Dado um array de palavras, crie uma função que receba esse array e retorne um novo array contendo apenas as palavras que têm mais de três letras.
const palavras = ["sol", "livro", "lua", "cadeira", "mesa", "mar"]

const tresLetras = palavras.filter((elemento) => elemento.length > 3)
console.log(tresLetras)