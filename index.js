// A recursive JavaScript program to
// calculate the size of the tree

/* Class containing left and right child of current
		node and key value*/
class Node {
  constructor(item) {
    this.data = item;
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
}
/* creating a binary tree and entering the nodes */
var tree = new BinaryTree();
tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);

document.write("Size of the tree is " + tree.size() + "<br>");
// document.write("tree is " + tree + "<br>");
console.log("Size of Binary Tree is : ", tree.size());
