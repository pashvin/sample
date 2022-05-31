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
  public static DFSearchRecursive(rootNode: TNode, visitPath = []) {
    visitPath.push(rootNode.data);
    if (rootNode.left) this.DFSearchRecursive(rootNode.left, visitPath);
    if (rootNode.right) this.DFSearchRecursive(rootNode.right, visitPath);
  }

  public static DFSearch(rootNode: TNode) {
    let visitingPath = [];

    // Create our queue and push our root node into it.
    var stack = [rootNode];

    // Continue searching through as queue as long as it's not empty.
    while (stack.length > 0) {
      // Create a reference to currentNode, at the top of the queue.
      var currentNode = stack.pop();

      if (currentNode) {
        visitingPath.push(currentNode.data);
        stack.push(currentNode.right, currentNode.left);
      }
    }
    return visitingPath;
  }

  // Level search = Breath first
  public static BFSearch(rootNode: TNode) {
    let visitingPath = [];

    // Create our queue and push our root node into it.
    var queue = [rootNode];

    // Continue searching through as queue as long as it's not empty.
    while (queue.length > 0) {
      // Create a reference to currentNode, at the top of the queue.
      var currentNode = queue.shift();

      if (currentNode) {
        visitingPath.push(currentNode.data);
        queue.push(currentNode.left, currentNode.right);
      }
    }
    return visitingPath;
  }
}
