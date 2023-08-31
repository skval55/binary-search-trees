class Node {
  constructor(val, right = null, left = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      // If the tree is empty, set the new node as the root
      this.root = newNode;
      return this.root;
    }

    let node = this.root;
    while (node !== newNode) {
      if (newNode.val > node.val) {
        if (node.right === null) {
          node.right = newNode;
        }
        node = node.right;
      } else {
        if (node.left === null) {
          node.left = newNode;
        }
        node = node.left;
      }
    }
    return this.root;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    if (!this.root) {
      const newNode = new Node(val);
      // If the tree is empty, set the new node as the root
      this.root = newNode;
      return this.root;
    }

    function insertHelper(node) {
      const newNode = new Node(val);
      if (node.val < val && node.right === null) {
        node.right = newNode;
        return;
      }
      if (node.val > val && node.left === null) {
        node.left = newNode;
        return;
      }
      if (node.right.val < val) insertHelper(node.right);
      else insertHelper(node.left);
    }
    insertHelper(this.root);
    return this.root;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let node = this.root;
    while (node !== null) {
      if (node.val === val) return node;
      if (node.val < val) node = node.right;
      else node = node.left;
    }

    return;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, node = this.root) {
    if (node === null) return;
    if (node.val === val) {
      return node;
    }
    if (node.val < val) return this.findRecursively(val, node.right);
    else return this.findRecursively(val, node.left);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(node = this.root) {
    if (node === null) return []; // Return an empty array if the node is null

    const visitedNodes = [];
    visitedNodes.push(node.val);

    if (node.left) visitedNodes.push(...this.dfsPreOrder(node.left));
    if (node.right) visitedNodes.push(...this.dfsPreOrder(node.right));

    return visitedNodes;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(node = this.root) {
    if (node === null) return []; // Return an empty array if the node is null

    const visitedNodes = [];

    if (node.left) visitedNodes.push(...this.dfsInOrder(node.left));
    visitedNodes.push(node.val);
    if (node.right) visitedNodes.push(...this.dfsInOrder(node.right));

    return visitedNodes;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(node = this.root) {
    if (node === null) return []; // Return an empty array if the node is null

    const visitedNodes = [];

    if (node.left) visitedNodes.push(...this.dfsPostOrder(node.left));
    if (node.right) visitedNodes.push(...this.dfsPostOrder(node.right));
    visitedNodes.push(node.val);

    return visitedNodes;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let toVisitQueue = [this.root];
    const visitedNodes = [];
    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();

      console.log(current);

      visitedNodes.push(current.val);
      const children = [];
      if (current.left) children.push(current.left);
      if (current.right) children.push(current.right);
      if (children.length) {
        for (let child of children) {
          toVisitQueue.push(child);
        }
      }
    }
    return visitedNodes;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {}

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {}
}

module.exports = BinarySearchTree;
