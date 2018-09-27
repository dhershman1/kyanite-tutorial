const k = require('kyanite/dist/kyanite.js')

//Examples

k.add(1, 1) // => 2

k.add(1.5, 2.3) // => 3.8

k.add(7, -5)

//Curried Examples

const addFunction = k.add(7)

addFunction(3) // => 10

addFunction(54) // => 61