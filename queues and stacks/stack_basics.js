
//STACK IMPLEMENTATON BASED ON ARRAY (Different than the usual methods)

function arrayStack(){
    var arr = [];


//add values to the stack (push)
    
    this.push = function(value) {
        arr[arr.length] = value;
        return this;
    }

//return WITHOUT REMOVING  the top value of the stack 
    
    this.top = function() {
        tophead = arr[arr.length-1];
        return tophead;
    }

//return if the stack is empty

    this.isEmpty = function() {
        if (arr.length == 0) {
            return true;
        }
        else {
            return false
        }
    }

//remove and return the top value (pop)

    this.pop = function () {
        var element = arr[arr.length - 1];
        arr.length--;
        return element;
    }

//check if the stack contains some value

    this.contains = function(value) {
        for (var i = arr.length - 1; i >= 0; i--) {
            if (arr[i] === value) {
                return true;
            }
        } 
        return false;
    }

//return the number of stacked values

    this.size = function() {
        return arr.length;
    }

}

