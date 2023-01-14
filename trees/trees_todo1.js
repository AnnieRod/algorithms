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

//Devuelve el valor más pequeñeo encontrado en el arboll

    min() {
        var runner = this.root;
        var min = this.root.value;
        while(runner.left) {
            if(runner.left.value < min) {
                min = runner.left.value;
            }
            runner = runner.left;
        }
        return min;
    }

//Devuelve el valor más grande encontrado en el arbol
    
    max() {
        var runner = this.root;
        var max = this.root.value;
        while(runner.right) {
            if(runner.right.value > max) {
                max = runner.right.value;
            }
            runner = runner.right;
        }
        return max;
    }

//Retorna el numero de nodos (o valores) contenidos en el arbol

    size() {
        if(this.root === null) {
            return 0;
        }
        function sizeNumber(runner) {
            if(!runner) {
                return 0;
            }
            return 1 + sizeNumber(runner.left) + sizeNumber(runner.right);
        }
        return sizeNumber(this.root);
    }

//Retorna si e arbol esta vacio, es decir, no contiene ningun valor

    treeEmpty() {
        if(this.root) {
            return false;
        }
        return true;
    }

}
