function invertTree(node) {
    let left=node.left
    node.left=node.right
    node.right=left
    invertTree(node.left)
    invertTree(node.right)
}