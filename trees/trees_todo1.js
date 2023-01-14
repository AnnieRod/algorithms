//Crear un arbol BST (Arbol de busqueda binaria)

class btNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.rigth = null;
    }
}

class treeBST {
    constructor() {
        this.root = null;
    }

//Agrega un nuevo valor al arbol BST

    add(value) {
        if(this.root) {
            var newer = this.root;
            while(newer) {
                if(value > newer.value) {
                    if (newer.rigth) {
                        newer = newer.right;
                    }
                    else {
                        newer.right = new Node(value);
                        return this;
                    }
                }
                else {
                    if(newer.left) {
                        newer = newer.left;
                    }
                    else {
                        newer.left = new Node(value);
                        return this
                    }
                }
            }
        }
        this.root = new Node(value);
        return this
    }

//Buscar si hay cierto valor contenido en el arbol y retornarlo
    contains(value) {
        var runner = this.root;
        while (runner) {
            if (value == runner.value) {
                return true;
            }
            if (value < runner.value) {
                if (!runner.left) {
                    return false;
                }
                runner = runner.left;
            } else {
                if (!runner.right) {
                    return false;
                }   
                runner = runner.right;
            }
        }
        return false;
    }

//
    
}
