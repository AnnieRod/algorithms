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