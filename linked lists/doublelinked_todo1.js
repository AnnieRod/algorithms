//reverse a node sequence in a double linked list

//create the node
class Node {
    constructor(data, prev = null, next = null) {
        this.data = data;
        this.prev = prev;
        this.next = next;
    }
}

//create the list with its methods to "point and reverse"
class SList {
    constructor() {
        this.head = null;
    }

    reverse() {
        let runner = this.head;
        let prevNode = null;
        while (runner) {
            let nextNode = runner.next;
            runner.next = prevNode;
            runner.prev = nextNode;
            prevNode = runner;
            runner = nextNode;
        }
        this.head = prevNode;
    }

//Dado K, retorna el valor  para el nodo k contando desde el final de la lista

    findNode(k) {
        let  runner = this.head;
        let count = 0;

        while(runner) {
            runner = runner.next;
            count++;
        }

        if (k > count) {
            return null;
        }

        runner = this.head;
        for (var i = 1; i < count - k +1; i++) {
            runner = runner.next;
        }
        return runner.data
    }   

}

//TESTING OF THE WHOLE METHOD of K's

let list = new SList();

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);

node1.next = node2;
node2.prev = node1;
node2.next = node3;
node3.prev = node2;
node3.next = node4;
node4.prev = node3;
node4.next = node5;
node5.prev = node4;

list.head = node1;

console.log(list.findNode(1)); // 5
console.log(list.findNode(2)); // 4
console.log(list.findNode(3)); // 3
console.log(list.findNode(4)); // 2
console.log(list.findNode(5)); // 1