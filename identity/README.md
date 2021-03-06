# Kyanite.add()

## What does it do
  Kyanite.add() is a simple, curried adder function.It takes 2 arguments, both of which need to be numbers.

## Syntax
```js
k.add(a, b) => a + b
```

## Parameters & Return
  - a
    - number
    - the first number to add
  - b
    - number
    - the second number to add
  - Return
    - number
    - the sum of the numbers

## Examples
Examples
```js
k.add(1, 1) // => 2

k.add(1.5, 2.3) // => 3.8

k.add(7, -5) // => 2
```

Curried Examples
```js
const addFunction = k.add(7)

addFunction(3) // => 10

addFunction(54) // => 61

k.reduce(K.add, 0, [1, 2, 3]) // => 6
```
