import { TNode } from "./tree-node";

let data = {
  value: 1,
  left : {
    value: 2,
    left : {
      value: 4
    },
    right: {
      value: 5
    }
  },
  right : {
    value : 3,
    left : {
      value: 6
    },
    right: {
      value: 7
    }
  }
}

let head = TNode.parseData(data);

console.log('Original:');
TNode.print(head);

console.log('Level search path');

console.log(TNode.BFSearch(head));


