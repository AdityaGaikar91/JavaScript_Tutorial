// people 
// professor


let parent = {
    a: 10,
    b: 20,
    sum: function() {
        console.log(this.a + this.b);
    }
}

let child = {
    a: 40,
    c: 20,
    d: 30,
    mul: function() {
        console.log(this.c * this.d);
    }
}

child.__proto__ = parent