export class LNode {
    public data: any;
    public next : LNode;

    public static parseData(input:any[]): LNode {
        let myNext = null;
        input = input.reverse();
        for(let i = 0; i < input.length; i++) {
            let current = new LNode();
            current.data = input[i];
            current.next = myNext;
            myNext = current; 
        }
        return myNext;
    }

    public static print(node: LNode,stack=[]) {
        if(!node) {
            console.log(stack);
        } else {
            stack.push(node.data);
            LNode.print(node.next,stack);
        }
    }
}