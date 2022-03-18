export class TNode {
  public data: any;
  public right: TNode;
  public left: TNode;

  public static parseData(input: any): TNode {
    let parent = new TNode();
    parent.data = input.value;
    if (input.left) {
      parent.left = this.parseData(input.left);
    }
    if (input.right) {
      parent.right = this.parseData(input.right);
    }
    return parent;
  }

  public static print(node: TNode, stack = []) {
    if (node) {
      stack.push(node.data);
      let newStackLeft = [...stack];
      let newStackRight = [...stack];
      this.print(node.left, newStackLeft);
      this.print(node.right, newStackRight);
      if (!node.right && !node.left) {
        console.log(newStackRight);
      }
    }
  }

  // Depth search 
  public static DFSearch(rootNode: TNode) {
  }

  // Level search = Breath first
  public static BFSearch(rootNode: TNode) {
    let visitingPath = [];
    // Check that a root node exists.
    if (rootNode === null) {
      return;
    }

    // Create our queue and push our root node into it.
    var queue = [];
    queue.push(rootNode);

    // Continue searching through as queue as long as it's not empty.
    while (queue.length > 0) {
      // Create a reference to currentNode, at the top of the queue.
      var currentNode = queue[0];

      if(!currentNode) {
          return visitingPath;
      }

      visitingPath.push(currentNode.data);

      // If currentNode has a left child node, add it to the queue.
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      // If currentNode has a right child node, add it to the queue.
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
      // Remove the currentNode from the queue.
      queue.shift();
    }
  }
}
