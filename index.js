import addBinary from './src/addBinary.js'

import readline from 'readline'
import BinarySearchTree from './src/binaryTree/binarySearchTree.js'

const io = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let args = process.argv.slice(2)

console.log(addBinary(args[0], args[1]))

let test = new BinarySearchTree() 

process.exit(1)