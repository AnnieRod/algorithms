//Clase del nodo 

class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

//Crea nuevo nodo para encabezar la lista y devolver un puntero al nuevo nodo principal

class SLL {
    constructor() {
        this.head = null;
    }
    addFront(value) {
        var nodeNew = new Node(value);
        nodeNew.next = this.head;
        this.head = nodeNew;
        return this.head;
    }

//Elimina el nodo que encabeza la lista y retorna la nueva cabeza
    deleteFront() {
        if(this.head) {
            this.head = this.head.next;
        }
        return this.head;
    }
}

