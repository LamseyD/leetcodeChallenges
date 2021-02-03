import { backspaceCompare } from './constants/problems.js'
import { countAndSay, optimal } from './src/CountAndSay.js'
import TreeNode from './src/binaryTree/treeNode.js'
import readline from 'readline'

const io = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let args = process.argv.slice(2)

let root = new TreeNode(4)
root.left = new TreeNode(1)
root.right = new TreeNode(6)
root.left.left = new TreeNode(0)
root.left.right = new TreeNode(2)
root.left.right.right = new TreeNode(3)


// root.left.right = new TreeNode(7)
// root.left.left.left = new TreeNode(15)
// root.left.left.right = new TreeNode(15)
// console.log(calPoints(["5","2","C","D","+"]))

console.log(optimal(4))
process.exit(1)