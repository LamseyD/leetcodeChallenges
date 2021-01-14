import addBinary from './src/addBinary.js'

import readline from 'readline'
import TreeNode from './src/binaryTree/TreeNode.js'
import avgTreeLevels from './src/avgTreeLevels.js'
import isBalanced from './src/isBalanced.js'
import calPoints from './src/baseballGame.js'
import binaryTreePath from './src/binaryTreePaths.js'

const io = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let args = process.argv.slice(2)

let root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(15)
// root.left.right = new TreeNode(7)
// root.left.left.left = new TreeNode(15)
// root.left.left.right = new TreeNode(15)
// console.log(calPoints(["5","2","C","D","+"]))
binaryTreePath(root)


process.exit(1)