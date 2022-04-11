import { LNode } from "./list-node";

let head = LNode.parseData([1, 2, 3, 4, 5]);

console.log("original:");
LNode.print(head);

let reverseNode = (head: LNode): LNode => {
  let current = head;
  let prev = null;
  while (current !== null) {
    let temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }
  return prev;
};

console.log("reverse list:");
LNode.print(reverseNode(head));
