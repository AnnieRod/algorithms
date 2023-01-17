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
    
    //Retorna si una lista es palindromo (se lee igual al derecho que al reves)

    isPalindrome() {
        let runner = this.head;
        let count = 0;
        let values = []

        // cuenta los nodos de una lista y guarda sus valores en un array
        while (runner) {
            values.push(runner.data);
            runner = runner.next;
            count++;
        }

        // Compara los nodos desde el principio hasta el final
        for (let i = 0; i < Math.floor(count / 2); i++) {
            if (values[i] !== values[count - i - 1]) {
                return false;
            }
        }

        return true; //retorna verdadero si es palindromo (son iguales al derecho y reves)
    }

    //Cambia los nodos de la derecha acorde a un numero dado (estos cambios son circulares)

    shiftValues(shifter) {
        let runner = this.head;
        let tail = null;
        let count = 0;

        while (runner) {
            tail = runner;
            runner = runner.next;
            count++;
        }

        // si la lista esta vacia o el shifter es 0 retorna la misma lista
        if (count === 0 || shifter === 0) {
            return;
        }

        // el cambio se vuelve circular
        shifter = shifter % count;

        // Crea una nueva cola para cambiar el lado
        let newTail = count - shifter;
        runner = this.head;
        for (let i = 1; i < newTail; i++) {
            runner = runner.next;
        }

        tail.next = this.head;
        this.head = runner.next;
        runner.next = null;
    }
}


//TESTING OF THE WHOLE METHODS

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
console.log(list.isPalindrome());
console.log(list.shiftValues(3));


//el palindrome SIN USO ADICIONAL DE LOOPS EN CASO DE POCA MEMORIA
//Usa el metodo de pointers 'rapidos' y 'lentos' :))

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class SList {
    constructor() {
        this.head = null;
    }

    isPalindrome() {
        let slow = this.head;
        let fast = this.head;
        let prev = null;
        let next = null;

        while (fast && fast.next) {
            fast = fast.next.next;
            next = slow.next;
            slow.next = prev;
            prev = slow;
            slow = next;
        }

        // if odd number of nodes
        if (fast) {
            slow = slow.next;
        }

        while (slow) {
            if (prev.data !== slow.data) {
                return false;
            }
            prev = prev.next;
            slow = slow.next;
        }
        return true;
    }
}