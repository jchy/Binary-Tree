// A recursive JavaScript program to
// calculate the size of the tree
let height = 0;
let totalSum = 0;
let preorder_res = "";
let postorder_res = "";
let inorder_res = "";
/* Class containing left and right child of current
		node and key value*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

/* Class to find size of Binary Tree */
class BinaryTree {
  constructor() {
    this.root = null;
  }
  /* computes number of nodes in tree */
  size(node = this.root) {
    if (node == null) {
      return 0;
    } else {
      return this.size(node.left) + 1 + this.size(node.right);
    }
  }
  findMinNode(node = this.root) {
    if (node === null) {
      return Number.MAX_VALUE;
    }
    let minNode = node.data;
    let leftMinNode = this.findMinNode(node.left);
    let rightMinNode = this.findMinNode(node.right);

    if (minNode > leftMinNode) {
      minNode = leftMinNode;
    }
    if (minNode > rightMinNode) {
      minNode = rightMinNode;
    }
    return minNode;
  }
  findMaxNode(node = this.root) {
    if (node === null) {
      return Number.MIN_VALUE;
    }
    let maxNode = node.data;
    let leftMaxNode = this.findMaxNode(node.left);
    let rightMaxNode = this.findMaxNode(node.right);
    if (maxNode < leftMaxNode) {
      maxNode = leftMaxNode;
    }
    if (maxNode < rightMaxNode) {
      maxNode = rightMaxNode;
    }
    return maxNode;
  }
  getNodeHeight(x, height, node = this.root) {
    if (node === null) return 0;
    if (node === x) return height;
    //check if the node is present in the left sub tree
    let level = this.getNodeHeight(x, height + 1, node.left);
    //System.out.println(level);
    if (level !== 0) return level;
    //check if the node is present in the right sub tree
    return this.getNodeHeight(x, height + 1, node.right);
  }
  getNodeDepth(node = this.root) {
    if (node === null) return -1;
    let leftSubtreeDepth = this.getNodeDepth(node.left);
    let rightSubTreeDepth = this.getNodeDepth(node.right);
    if (leftSubtreeDepth > rightSubTreeDepth) {
      return leftSubtreeDepth + 1;
    }
    return rightSubTreeDepth + 1;
  }
  sum(node = this.root) {
    if (node === null) return 0;
    totalSum += node.data;
    this.sum(node.left);
    this.sum(node.right);
    return totalSum;
  }
  // Tree Traversal Methods
  // 1 * Pre-Order Traversal
  preorderTraversal(node = this.root) {
    if (node === null) return null;
    preorder_res += node.data;
    this.preorderTraversal(node.left);
    this.preorderTraversal(node.right);
  }
  // 2 *  In-Order Traversal
  inorderTraversal(node = this.root) {
    if (node === null) return null;
    this.inorderTraversal(node.left);
    inorder_res += node.data;
    this.inorderTraversal(node.right);
  }
  // 3 * Post-Order Traversal
  postorderTraversal(node = this.root) {
    if (node === null) return null;
    this.postorderTraversal(node.left);
    this.postorderTraversal(node.right);
    postorder_res += node.data;
  }
  ifNodeExist(node = this.root, key) {
    if (node === null) return false;
    if (node.data === key) return true;
    let checkLeftSubtree = this.ifNodeExist(node.left, key);
    if (checkLeftSubtree) {
      return true;
    }
    return this.ifNodeExist(node.right, key);
  }
}
/* creating a binary tree and entering the nodes */
var tree = new BinaryTree();
tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
let x = (tree.root.left.right = new Node(5));

document.write("Size of the tree is " + tree.size() + "<br>");
// document.write("tree is " + tree + "<br>");
console.log("Size of Binary Tree is : ", tree.size());
console.log("Min Node in given Binary tree is : ", tree.findMinNode());
console.log("Max Node in given Binary tree is : ", tree.findMaxNode());
// let height = 0;
console.log(
  "Height of the node",
  x.data,
  "is :~",
  tree.getNodeHeight(x, height)
);
console.log("Sum of all node data in tree is :", tree.sum());
tree.preorderTraversal();
console.log(
  "Preorder traversal of the binary tree is :",
  preorder_res.split("").join(" ")
);
tree.inorderTraversal();
console.log(
  "Inorder Traversal of the given binary tree is :",
  inorder_res.split("").join(" ")
);
tree.postorderTraversal();
console.log(
  "Postorder Traversal of the given binary tree is :",
  postorder_res.split("").join(" ")
);
console.log("Depth of the tree: ", tree.getNodeDepth());
console.log("if", 3, "exist in binary tree : ", tree.ifNodeExist(tree, 3));
