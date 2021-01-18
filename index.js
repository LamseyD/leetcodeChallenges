import { backspaceCompare } from './constants/problems.js'
import TreeNode from './src/binaryTree/treeNode.js'
import readline from 'readline'

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
console.log(backspaceCompare('xywrrmp','xywrrmu#p'))

process.exit(1)